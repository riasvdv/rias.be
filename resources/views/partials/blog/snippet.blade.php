<p class="mb-4 leading-normal">
    <a href="{{ $entry->augmentedValue('url') }}" class="text-grey-darker no-underline mb-4 no-shadow flex items-center">
        <!-- bg-red-500 bg-orange-500 bg-yellow-500 bg-green-500 bg-teal-500 bg-blue-500 bg-indigo-500 bg-purple-500 bg-pink-500 -->
        <span class="w-2 h-2 rounded-full bg-{{ optional($entry->augmentedValue('color')->value())['label'] }}-500 block mr-2"></span>
        <span class="shadow-orange-lighter hover:shadow-orange-lighter">{{ $entry->augmentedValue('title') }}</span>
    </a>
</p>
