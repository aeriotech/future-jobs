<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<a href="/{data.lang}" class="absolute left-4 top-4 hover:underline">{data.back}</a>

<div class="flex py-16 px-8 justify-center">
	<div class="md:w-2/3 lg:w-1/2">
		<h1 class="text-2xl">{data.about}</h1>

		{#each data.aboutContent as part}
			{#if typeof part === 'object'}
				<ul>
					{#each part as line}
						<li class="ml-8 list-disc">{line}</li>
					{/each}
				</ul>
			{:else}
				<p class="mt-8">{part}</p>
			{/if}
		{/each}
	</div>
</div>
