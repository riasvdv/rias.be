<?php

namespace Statamic\Console\Commands\Generators\Addon;

use Statamic\API\Addon;
use Statamic\API\Str;
use Statamic\Console\Commands\AbstractCommand;

class AddonMakeCommand extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:addon
                            {name? : Name of the addon. If left blank you will be asked.}
                            {--all : Skip the interactive element and just generate everything.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon interactively.';

    /**
     * Addon types and their names
     *
     * @var array
     */
    private $types = [
        'API' => 'api',
        'Tags' => 'tags',
        'Filter' => 'filter',
        'Fieldtype' => 'fieldtype',
        'Modifier' => 'modifier',
        'Event Listener' => 'listener',
        'Service Provider' => 'provider',
        'Composer.json' => 'composer',
        'Widget' => 'widget',
        'Controller' => 'controller',
        'Tasks' => 'tasks',
        'SuggestMode' => 'suggest',
    ];

    /**
     * Whether to generate all the addon aspects
     *
     * @var boolean
     */
    private $all = false;

    /**
     * The name of the addon
     *
     * @var string
     */
    private $addon;

    /**
     * The addon's URL
     *
     * @var string
     */
    private $addon_url;

    /**
     * The vendor/developer name
     *
     * @var string
     */
    private $vendor;

    /**
     * The URL of the vendor/developer
     *
     * @var string
     */
    private $vendor_url;

    /**
     * The version of the addon
     *
     * @var string
     */
    private $version;

    /**
     * A description of the addon
     *
     * @var string
     */
    private $addon_description;

    /**
     * Whether the addon is commercial
     *
     * @var bool
     */
    private $commercial;

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->askQuestions();

        if (! $this->all = $this->option('all')) {
            $this->all = $this->confirm('Should I just generate everything for you?');
        }

        foreach ($this->getSelections() as $type) {
            $args = ['name' => Str::studly($this->addon)];

            if ($type === 'composer') {
                $args['vendor'] = $this->vendor;
            }

            $this->callSilent("make:{$type}", $args);
        }

        $this->generateMeta();

        $dir = realpath(addons_path(Str::studly($this->addon)));
        $this->checkInfo('Your addon has been created!');
        $this->line("You can find it in {$dir}");
    }

    private function getSelections()
    {
        // Do they want everything? We don't need to ask them.
        if ($this->all) {
            return array_values($this->types);
        }

        $selections = [];

        foreach ($this->types as $name => $type) {
            if ($this->confirm("{$name}?")) {
                $selections[] = $type;
            }
        }

        return $selections;
    }

    private function askQuestions()
    {
        $this->addon = ($this->argument('name'))
            ? $this->argument('name')
            : $this->ask('What is the name of your addon?');

        $this->line('Great name!');

        $this->vendor = $this->ask("What's the developer name?");
        $this->vendor_url = $this->getAnswer("What's the developer URL?");
        $this->version = $this->getAnswer("What version is your addon?", '1.0');
        $this->addon_url = $this->getAnswer("What's the URL of your addon? eg. For marketing or documentation.");
        $this->addon_description = $this->getAnswer("What does your addon do, in one sentence?", false, 'Oooh! I wish I thought of that.');
        $this->commercial = $this->confirm('Is this a commercial addon?');
    }

    private function getAnswer($question, $default = false, $response = null)
    {
        $answer = $this->ask($question, $default);

        if ($answer === false) {
            return null;
        }

        if ($response) {
            $this->line($response);
        }

        return $answer;
    }

    private function generateMeta()
    {
        $data = array_filter([
            'name' => $this->addon,
            'version' => $this->version,
            'description' => $this->addon_description,
            'url' => $this->addon_url,
            'developer' => $this->vendor,
            'developer_url' => $this->vendor_url,
            'commercial' => $this->commercial
        ]);

        Addon::create($this->addon)->makeMeta($data)->save();
    }
}
