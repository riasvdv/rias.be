<?php

namespace Statamic\Extend;

class Widget
{
    /**
     * Provides access to addon helper methods
     */
    use Extensible;

    /**
     * Provides access to methods for retrieving parameters
     */
    use HasParameters;

    /**
     * Sets default permissions
     */
    protected $defaultPermissions = [];

    /**
     * Create a new Widget instance
     */
    public function __construct()
    {
        $this->bootstrap();
        $this->init();
    }

    public function setParameters($parameters)
    {
        $this->parameters = $parameters;
    }

    public function getPermissions()
    {
        return array_merge(
            $this->defaultPermissions,
            $this->get('permissions', [])
        );
    }
}
