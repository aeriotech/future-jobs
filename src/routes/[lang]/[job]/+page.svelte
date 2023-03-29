<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const job = data.job;
</script>

<div class="flex p-16 justify-center">
	<div class="">
		<h1 class="text-2xl">{job.title}</h1>

		{#if job.salary}
			<h2 class="text-xl font-bold">{data.static.salary}: {job.salary} €</h2>
		{/if}

		{#each job.sections as section}
			<h2 class="text-xl font-bold mt-6 mb-2">{section.title}</h2>
			{#if typeof section.content === 'object'}
				<ul class="ml-8 list-disc">
					{#each section.content as item}
						<li>{item}</li>
					{/each}
				</ul>
			{:else}
				<span>{section.content}</span>
			{/if}
		{/each}
	</div>
</div>
