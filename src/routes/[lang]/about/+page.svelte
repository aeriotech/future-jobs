<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<a href="/{data.lang}" class="absolute left-4 top-4 hover:underline">{data.back}</a>

<div class="flex py-16 px-8 justify-center">
	<div class="md:w-2/3 lg:w-1/2">
		<h1 class="text-2xl">{data.about}</h1>

		{#each data.aboutContent as part}
			{#if part.type === 'list'}
				<ul>
					{#each part.content as line}
						<li class="ml-8 list-disc">{line}</li>
					{/each}
				</ul>
			{:else if part.type === 'text'}
				<p class="mt-8">{part.content}</p>
			{:else if part.type === 'images'}
				<div class="flex items-center flex-col 2xl:flex-row 2xl:w-1/2 gap-2 mt-8">
					{#each part.content as img}
						<img src={img} alt="img" />
					{/each}
				</div>
			{/if}
		{/each}

		<div class="flex justify-center mt-8">
			<img src={data.euImg} alt="eu_img" width="150" />
		</div>
	</div>
</div>
