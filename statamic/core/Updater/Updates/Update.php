<?php

namespace Statamic\Updater\Updates;

use Statamic\Updater\NullConsole;

abstract class Update
{
    /**
     * @var \Illuminate\Console\Command|NullConsole
     */
    private $console;

    /**
     * Update constructor.
     */
    public function __construct()
    {
        $this->console = new NullConsole;
    }

    /**
     * Whether the update should be run.
     *
     * @param string $newVersion
     * @param string $oldVersion
     * @return bool
     */
    abstract public function shouldUpdate($newVersion, $oldVersion = '2.0.0');

    /**
     * Perform the update
     *
     * @return mixed
     */
    abstract public function update();

    /**
     * Get or set the console command object.
     *
     * @param \Illuminate\Console\Command|null $console
     * @return \Illuminate\Console\Command|NullConsole
     */
    public function console($console = null)
    {
        if (is_null($console)) {
            return $this->console;
        }

        $this->console = $console;
    }
}
