<?php

namespace Statamic\Console\Commands\Convert;

use Statamic\API\File;
use Statamic\API\YAML;
use Statamic\API\Config;
use Statamic\API\Folder;
use Statamic\API\Fieldset;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;

class ConvertEmailLoginCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'convert:email-login';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Changes the login type to email, and updates the user files accordingly.';

    /**
     * Execute the console command.
     *
     * @throws \InvalidArgumentException
     */
    public function fire()
    {
        if (Config::get('users.login_type') === 'email') {
            return $this->comment('Login type is already email.');
        }

        $files = $this->getUserFiles();

        // If any users don't have email addresses, we can't convert their account since
        // the filename needs to be their email. We'll compile a list of the accounts
        // without emails to we can show which accounts need to be addressed.
        $missing = $this->getUsersWithoutEmails($files);
        if (! $missing->isEmpty()) {
            return $this->outputMissingEmailsError($missing);
        }

        $this->info('Converting user accounts. Please wait.');

        $bar = $this->output->createProgressBar($files->count());

        // For all user files, remove the email value from the data, use it
        // as the filename for the new file, and delete the old file.
        $files->each(function ($data, $username) use ($bar) {
            if (! str_contains($username, '@')) {
                $email = $data['email'];
                unset($data['email']);
                File::disk('users')->put($email.'.yaml', YAML::dump($data));
                File::disk('users')->delete($username.'.yaml');
            }
            $bar->advance();
        });

        Config::set('users.login_type', 'email');
        Config::save();

        $bar->finish();
        $this->info("\nDone!");

        $this->outputFieldsetAdvice();
    }

    /**
     * Get the parsed user files
     *
     * @return Collection
     */
    private function getUserFiles()
    {
        return collect(Folder::disk('users')->getFilesByType('/', 'yaml'))->map(function ($path) {
            $username = substr($path, 0, -5);
            $data = YAML::parse(File::disk('users')->get($path));
            return compact('username', 'data');
        })->pluck('data', 'username');
    }

    /**
     * Get the users that don't have an email address
     *
     * @param Collection $files
     * @return Collection
     */
    private function getUsersWithoutEmails($files)
    {
        return $files->map(function ($data, $username) {
            return (array_get($data, 'email')) ? null : $username;
        })->filter();
    }

    /**
     * Output the error when there are users without emails
     *
     * @param Collection $missing
     * @return void
     */
    private function outputMissingEmailsError($missing)
    {
        $this->error('Cannot continue with conversion.');
        $this->comment('The following users do not have email addresses:');

        $missing->each(function ($username) {
            $this->line('- ' . $username);
        });
    }

    /**
     * Output some advice about updating the user fieldset
     *
     * @return void
     */
    private function outputFieldsetAdvice()
    {
        if (array_key_exists('username', Fieldset::get('user')->fields())) {
            $this->warn("\nYour user fieldset contains a username field.");
            $this->line('You should replace it with an email field.');
        }
    }
}
