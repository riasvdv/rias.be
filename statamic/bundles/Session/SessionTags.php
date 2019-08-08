<?php

namespace Statamic\Addons\Session;

use Statamic\Extend\Tags;

class SessionTags extends Tags
{

    /**
     * Fetch a key from the session or pass the request off class methods
     *
     * @param  string  $method    Tag part
     * @param  array   $arguments Unused
     * @return return  mixed|void
     */
    public function __call($method, $arguments)
    {
        $get = $this->get('get', array_get($arguments, 0, $this->tag_method));

        if (! method_exists($this, $get)) {
            return session()->get($get, $this->get('default'));
        }
    }

    /**
     * Tag pair that provides direct access to the session() object
     *
     * @return mixed
     */
    public function index()
    {
        return $this->returnableSession();
    }

    /**
     * Dump the contents of the session for debugging
     *
     * @return void
     */
    public function dump()
    {
        dump(session()->all());
    }

    /**
     * Put data in the session
     *
     * @return mixed
     */
    public function set()
    {
        foreach($this->parameters as $key => $value) {
            session()->put($key, $value);
        }

        return $this->returnableSession();
    }

    /**
     * Put flash data in the session
     *
     * @return mixed
     */
    public function flash()
    {
        foreach($this->parameters as $key => $value) {
            session()->flash($key, $value);
        }

        return $this->returnableSession();
    }

    /**
     * Flush the session
     *
     * @return void
     */
    public function flush()
    {
        session()->flush();
    }

    /**
     * Remove some data from the session
     *
     * @return mixed
     */
    public function forget()
    {
        foreach($this->getList(['key', 'keys'], []) as $key) {
            session()->forget($key);
        }

        return $this->returnableSession();
    }

    /**
     * Return nothing if not a tag pair, otherwise return the optionally
     * aliased session data
     *
     * @return mixed
     */
    protected function returnableSession()
    {
        if (! $this->isPair) return;

        if ($as = $this->get('as')) {
            return [$as => session()->all()];
        }

        return session()->all();
    }
}
