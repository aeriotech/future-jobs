<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="absolute right-4 top-4">
	{#each data.links as link}
		<a href={link.href} class="m-1" class:underline={link.active}>{link.lang}</a>
	{/each}
</div>

<slot />
