<?php

namespace Statamic\Console\Commands\Generators\Addon;

use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Path;
use Illuminate\Console\Command;

class CommandMakeCommand extends Command
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type = 'command';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:command { name : Name of your addon }
                                         { command-name : Name of the command }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon command file.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $addon = Str::studly($this->argument('name'));
        $command = $this->argument('command-name');

        $path = addons_path() . $addon . '/Commands/' . Str::studly($command) . 'Command.php';

        if (File::exists($path)) {
            $this->error("Command file already exists at: {$path}");
            return;
        }

        $stub = File::get(__DIR__ . "/stubs/command.stub");

        $contents = str_replace(
            ['DummyAddon', 'CommandName', 'dummy_addon', 'command_name'],
            [$addon, Str::studly($command), Str::slug($addon), Str::slug($command)],
            $stub
        );

        File::put($path, $contents);

        $this->info('Your command file awaits at: '.Path::makeRelative($path));
    }
}
