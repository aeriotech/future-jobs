<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="absolute right-4 top-4">
	<a href="/en" class:underline={data.lang === 'en'}>en</a>
	<a href="/sl" class:underline={data.lang === 'sl'}>sl</a>
</div>

<slot />
