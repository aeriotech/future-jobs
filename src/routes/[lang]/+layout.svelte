<script lang="ts">
	import type { LayoutData } from './$types';
	import about from '$lib/assets/about.svg';

	export let data: LayoutData;
</script>

<div class="absolute right-4 top-4">
	{#each data.links as link}
		<a href={link.href} class="m-1 hover:underline" class:underline={link.active}>{link.lang}</a>
	{/each}
</div>

<slot />

<a href="/{data.lang}/about" class="fixed right-4 bottom-4">
	<img src={about} alt="About us" width="32" />
</a>
