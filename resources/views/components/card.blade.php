@props([
    'title' => '',
    'description' => '',
    'href' => '',
    'color' => '',
    'footer' => '',
    'date' => '',
    'external' => false,
])

<div class="bg-slate-100 transition-all leading-normal p-8 rounded-md hover:-translate-y-2 shadow-xs hover:shadow-md">
    <a @if ($external) target="_blank" rel="noopener" @else wire:navigate @endif href="{{ $href }}"  class="flex flex-col h-full no-shadow block text-gray-700 no-underline mb-4 hover:text-gray-900">
        <span class="flex mb-8 items-center">
            <!-- bg-red-500 bg-orange-500 bg-yellow-500 bg-green-500 bg-teal-500 bg-blue-500 bg-indigo-500 bg-purple-500 bg-pink-500 -->
            <i class="inline-block mr-2 rounded-full bg-{{ $color }}-500 w-4 h-4"></i>
            @if ($date)
                <small class="block">{{ $date }}</small>
            @else
                <h3 class="text-lg font-bold mt-px">{{ $title }}</h3>
            @endif
        </span>
        @if ($date)
            <h3 class="text-lg font-bold mb-3">{{ $title }}</h3>
        @endif
        <div class="prose prose-lg mb-8">
            {{ $description }}
        </div>

        {{ $footer ?? '' }}
    </a>
</div>
