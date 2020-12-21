<!-- border-red-500 border-orange-500 border-yellow-500 border-green-500 border-teal-500 border-blue-500 border-indigo-500 border-purple-500 border-pink-500 -->
<div class="mb-12 leading-normal border-l-4 border-{{ optional($entry->augmentedValue('color')->value())['label'] }}-500 pl-4">
    <a href="{{ $entry->augmentedValue('url') }}" class="no-shadow block text-gray-700 no-underline mb-4 hover:text-gray-900">
        <h3 class="inline-block text-2xl font-bold mb-1">{{ $entry->augmentedValue('title') }}</h3>
        <small class="block">{{ $entry->augmentedValue('date') }}</small>
        @foreach ($entry->augmentedValue('contents') as $content)
            @if($content['type'] === 'header')
                <div class="prose prose-xl">
                    <p>{!! modify($content['header'])->striptags() !!}</p>
                </div>
            @endif
        @endforeach
    </a>
</div>
