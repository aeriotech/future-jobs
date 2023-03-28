<script lang="ts">
	import content from '$lib/content';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex w-full min-h-screen justify-center items-center">
	<div class="md:grid md:grid-cols-2 lg:grid-cols-3 my-16 gap-4 flex flex-col">
		{#each data.jobs as job}
			<a href="/{data.lang}/{job.tag}">
				<div
					class="p-8 w-64 h-64 text-center rounded-xl duration-200 bg-card flex flex-col justify-center items-center shadow-md cursor-pointer"
				>
					<img src={job.image} alt="" class="w-32 pb-8" />
					<h1 class="text-md">{job.title}</h1>
				</div>
			</a>
		{/each}
	</div>
</div>
