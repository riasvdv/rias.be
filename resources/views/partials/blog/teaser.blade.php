<!-- bg-red-500 bg-orange-500 bg-yellow-500 bg-green-500 bg-teal-500 bg-blue-500 bg-indigo-500 bg-purple-500 bg-pink-500 -->
<div class="group bg-gray-100 transition-all leading-normal p-8 rounded-md hover:-translate-y-2 hover:shadow-md">
    <a href="{{ $entry['url'] }}" class="flex flex-col h-full no-shadow block text-gray-700 no-underline mb-4 hover:text-gray-900">
        <span class="flex mb-8 items-center">
            <i class="inline-block mr-2 rounded-full bg-{{ $entry['color']['label'] ?? '' }}-500 w-4 h-4"></i>
            <small class="block">{{ $entry['date'] }}</small>
        </span>
        <h3 class="text-lg font-bold mt-px mb-8">{{ $entry['title'] }}</h3>
        @if($header = collect($entry['contents'])->where('type', 'header')->first())
            <div class="prose prose-lg mb-8">
                <p>{!! \Statamic\Statamic::modify(\Illuminate\Support\Str::limit(\Statamic\Statamic::modify($header['header'])->striptags(), 150))->smartypants() !!}</p>
            </div>
        @endif

        <span class="flex items-center transition-all group-hover:gap-4 mt-auto">
            <span class="mr-2">Continue reading</span>
            <span class="w-4 h-4 inline-block">{!! \Statamic\Statamic::tag('svg')->params(['src' => '/assets/svg/long-arrow-right.svg']) !!}</span>
        </span>
    </a>
</div>
