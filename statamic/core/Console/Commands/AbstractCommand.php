<?php

namespace Statamic\Console\Commands;

use Illuminate\Console\Command;
use Statamic\Console\EnhancesCommands;

abstract class AbstractCommand extends Command
{
    use EnhancesCommands;
}
