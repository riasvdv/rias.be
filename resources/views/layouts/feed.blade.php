<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <id>https://www.rias.be/feed</id>
    <link href="https://www.rias.be/feed" rel="self"></link>
    <title><![CDATA[Rias.be]]></title>
    @foreach (statamic_tag('collection:blog', ['limit' => 1]) as $entry)
    <updated>{{ $entry->date()->format('c') }}</updated>
    @endforeach
    @foreach (statamic_tag('collection:blog') as $entry)
    <entry>
        <title><![CDATA[{{ $entry->value('title') }}]]></title>
        <link rel="alternate" href="https://www.rias.be{{ $entry->url() }}" />
        <id>https://www.rias.be{{ $entry->url() }}</id>
        <author>
            <name> <![CDATA[Rias Van der Veken]]></name>
        </author>
        <?php $header = collect($entry->augmentedValue('contents')->value())->firstWhere('type', 'header') ?>
        @if ($header)
            <summary type="html">
                <![CDATA[{!! $header['header'] !!}]]>
            </summary>
        @endif
        <updated>{{ $entry->date()->format('c') }}</updated>
    </entry>
    @endforeach
</feed>
