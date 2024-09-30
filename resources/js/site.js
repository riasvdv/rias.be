import posthog from 'posthog-js'
import '../css/site.css';
import "./webmentions";

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function () {
        document.querySelector('#mobile-nav').classList.add('loaded');
    }, 250);
});

posthog.init('phc_Pj8t6puD56t0XmSTmiABmXEFhADd3eN1AFQf3aUaGsP',
    {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)
