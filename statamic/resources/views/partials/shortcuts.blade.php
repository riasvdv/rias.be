<modal :show.sync="showShortcuts">
	<template slot="header">{{ t('keyboard_shortcuts') }}</template>
	<template slot="body">

		<div class="shortcut-pair">
			<span class="shortcut-key">
				<span class="shortcut">shift</span><span class="shortcut-joiner">+</span><span class="shortcut">?</span>
			</span>
			<span class="shortcut-value">{{ t('show_keyboard_shortcuts') }}</span>
		</div>

		<div class="shortcut-pair">
			<span class="shortcut-key">
				<span class="shortcut">/</span> <span class="shortcut-joiner">or</span>
				<span class="shortcut">ctrl</span><span class="shortcut-joiner">+</span><span class="shortcut">f</span>
			</span>
			<span class="shortcut-value">{{ t('search') }}</span>
		</div>

		<div class="shortcut-pair">
			<span class="shortcut-key">
				<span class="shortcut">cmd</span><span class="shortcut-joiner">+</span><span class="shortcut">s</span>
			</span>
			<span class="shortcut-value">{{ t('publish_content') }}</span>
		</div>

		<div class="shortcut-pair">
			<span class="shortcut-key">
				<span class="shortcut">Esc</span>
			</span>
			<span class="shortcut-value">{{ t('close_this_window') }}</span>
		</div>

	</template>
</modal>
