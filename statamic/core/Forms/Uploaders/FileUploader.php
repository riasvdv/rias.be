<?php

namespace Statamic\Forms\Uploaders;

use Statamic\API\File;
use Statamic\API\Path;
use Statamic\Events\Data\FileUploaded;

class FileUploader extends Uploader
{
    /**
     * Upload the files and return their paths.
     *
     * @return array|string
     */
    public function upload()
    {
        $paths = $this->files->map(function ($file) {
            $destination = $this->getDestination($file);

            $this->uploadFile($file, $destination);

            return pathinfo($destination)['basename'];
        });

        return ($this->multipleFilesAllowed()) ? $paths->all() : $paths->first();
    }

    /**
     * Upload a file
     *
     * @param \Symfony\Component\HttpFoundation\File\UploadedFile $file
     * @param string $destination
     */
    private function uploadFile($file, $destination)
    {
        $stream = fopen($file->getRealPath(), 'r+');

        File::put($destination, $stream);

        fclose($stream);

        $fullPath = File::filesystem()->getAdapter()->getPathPrefix() . $destination;

        // Whoever wants to know about it can do so now.
        event(new FileUploaded($fullPath));
    }

    /**
     * @param \Symfony\Component\HttpFoundation\File\UploadedFile $file
     * @return string
     */
    private function getDestination($file)
    {
        $extension = $file->getClientOriginalExtension();
        $filename  = Path::safeFilename($file->getClientOriginalName());

        $directory = $this->config->get('destination');
        $path      = Path::tidy($directory . '/' . $filename . '.' . $extension);

        if (File::exists($path)) {
            $path = Path::appendTimestamp($path);
        }

        return $path;
    }

    /**
     * Are multiple files allowed to be uploaded?
     *
     * @return bool
     */
    protected function multipleFilesAllowed()
    {
        return $this->config->get('type') === 'files';
    }
}
