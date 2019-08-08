<?php

namespace Statamic\Events\Data;

use Statamic\API\File;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;
use Statamic\Forms\Submission;

class SubmissionSaved extends Event implements DataEvent
{
    /**
     * @var Submission
     */
    public $submission;

    /**
     * @param Submission $submission
     */
    public function __construct(Submission $submission)
    {
        $this->submission = $submission;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->submission->data();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        $pathPrefix = File::disk('storage')->filesystem()->getAdapter()->getPathPrefix();

        return [$pathPrefix . $this->submission->getPath()];
    }
}
