<?php

namespace Statamic\Events\Data;

use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;
use Statamic\Permissions\File\UserGroup;

class UserGroupDeleted extends Event implements DataEvent
{
    /**
     * @var UserGroup
     */
    public $userGroup;

    /**
     * @var string
     */
    public $id;

    /**
     * @param UserGroup $userGroup
     */
    public function __construct(UserGroup $userGroup)
    {
        $this->userGroup = $userGroup;
        $this->id = $userGroup->id();
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return ['id' => $this->id];
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [$this->userGroup->yamlPath()];
    }
}
