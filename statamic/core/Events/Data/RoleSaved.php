<?php

namespace Statamic\Events\Data;

use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;
use Statamic\Permissions\File\Role;

class RoleSaved extends Event implements DataEvent
{
    /**
     * @var Role
     */
    public $role;

    /**
     * @var string
     */
    public $uuid;

    /**
     * @param Role $role
     */
    public function __construct(Role $role)
    {
        $this->role = $role;
        $this->uuid = $role->uuid();
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return ['uuid' => $this->uuid];
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [$this->role->yamlPath()];
    }
}
