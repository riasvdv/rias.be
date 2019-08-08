<?php

namespace Statamic\Console\Commands\Generators\Theme;

use Statamic\API\File;
use Statamic\API\Folder;
use Statamic\API\Config;
use Illuminate\Console\Command;
use Stringy\StaticStringy as Stringy;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class ThemeMakeCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'make:theme';

    /**
     * The title of the theme
     *
     * @var string
     */
    protected $title;

    /**
     * The name of the theme
     *
     * @var string
     */
    protected $theme_name;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new theme with all required files and folders';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $this->title = $this->argument('title');

        $this->theme_name = Stringy::slugify($this->title);

        if ( ! $this->folder()->exists($this->theme_name)) {
            // Make theme folder
            $this->folder()->make($this->theme_name);
        } else {
            // ask them to enter it again.
            if ($this->confirm("A theme named {$this->title} already exists. Do you want to overwrite it?", true))  {
                $this->folder()->delete($this->theme_name);
            } else {
                return $this->comment("Probably a good idea. I guess we're done here!");
            }
        }

        // Make the folder structure inside it
        foreach ($this->getStructure() as $folder) {
            $this->folder()->make($this->theme_name . $folder);
        }

        foreach ($this->getThemeFiles() as $file => $stub) {
            $this->file()->put($this->makeFilename($file), $stub);
        }

        $this->createSiteHelpers();

        $this->comment($this->title . ' is ready and waiting for you.');

        $this->applyThemeSetting();
    }

    protected function makeFilename($file)
    {
        return $this->theme_name . str_replace('{name}', $this->theme_name, $file);
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments()
    {
        return array(
            array('title', InputArgument::REQUIRED, 'The name of the theme'),
        );
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return array(
            array('title', null, InputOption::VALUE_REQUIRED, 'Name of the theme', null)
        );
    }

    protected function getStructure()
    {
        return [
            '/settings',
            '/css',
            '/img',
            '/js',
            '/layouts',
            '/partials',
            '/sass',
            '/templates'
        ];
    }

    protected function getThemeFiles()
    {
        return [
            '/layouts/default.html'   => $this->getStub('layout'),
            '/templates/default.html' => $this->getStub('template'),
            '/templates/home.html'    => $this->getStub('template'),
            '/package.json'           => $this->getStub('package.json'),
            '/gulpfile.js'            => $this->getStub('gulpfile.js', ['ThemeName', $this->theme_name]),
            '/.gitignore'             => $this->getStub('gitignore'),
            '/meta.yaml'              => $this->getStub('meta', ['ThemeName', $this->title]),
            '/settings/theme.yaml'    => null,
            '/settings/macros.yaml'   => null,
            '/css/{name}.css'         => null,
            '/sass/{name}.scss'       => null,
            '/js/{name}.js'           => null
        ];
    }

    protected function getStub($name, $replace = null)
    {
        $stub = file_get_contents(__DIR__ ."/stubs/{$name}.stub");

        if ($replace) {
            $stub = str_replace(array_get($replace, 0), array_get($replace, 1), $stub);
        }

        return $stub;
    }

    protected function applyThemeSetting()
    {
        if ($this->confirm('Would you like to set this as the active theme?', true)) {
            Config::set('theming.theme', $this->theme_name);
            Config::save();
            $this->comment('Theme configured!');
        } else {
            $this->comment("Okay, we won't adjust anything.");
        }
    }

    private function file()
    {
        return File::disk('themes');
    }

    private function folder()
    {
        return Folder::disk('themes');
    }

    private function createSiteHelpers()
    {
        $this->callSilent('make:tags-helper', ['--create-only' => true]);
        $this->callSilent('make:modifiers-helper', ['--create-only' => true]);
        $this->callSilent('make:filters-helper', ['--create-only' => true]);
    }
}
