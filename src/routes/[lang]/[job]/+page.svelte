<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<a href="/{data.lang}" class="absolute left-4 top-4 hover:underline">{data.static.back}</a>

<div class="flex py-16 px-8 justify-center">
	<div class="md:w-2/3 lg:w-1/2">
		<h1 class="text-2xl">{data.job.title}</h1>

		{#each data.job.sections as section}
			<h2 class="text-xl font-bold mt-6 mb-2">{section.title}</h2>
			{#if typeof section.content === 'object'}
				<ul class="ml-8 list-disc">
					{#each section.content as item}
						<li>{item}</li>
					{/each}
				</ul>
			{:else}
				<p>{section.content}</p>
			{/if}
		{/each}
	</div>
</div>
