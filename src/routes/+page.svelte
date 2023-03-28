<script lang="ts">
	import computerVisionEngineer from '$lib/assets/computer-vision-engineer.png';

	const content = [
		{
			title: 'Computer Vision Engineer',
			image: computerVisionEngineer,
		},
	];

	const jobs = [
		'Computer Vision Engineer',
		'Penetration Tester',
		'Malware Analyst',
		'Security Administrator',
		'Prompt Engineer',
		'Artificial Intelligence Analyst',
		'Enterprise Architect',
		'DevOps Engineer',
		'Digital Transformation Specialist',
	];
</script>

<div
	class="flex w-full min-h-screen justify-center items-center bg-background text-white font-mono"
>
	<div class="md:grid md:grid-cols-2 lg:grid-cols-3 my-16 gap-4 flex flex-col">
		{#each jobs as job}
			<div
				class="p-8 w-64 h-64 text-center rounded-xl duration-200 bg-card flex flex-col justify-center items-center shadow-md cursor-pointer"
			>
				<img src={computerVisionEngineer} alt="" class="w-32 pb-8" />
				<h1 class="text-md">{job}</h1>
			</div>
		{/each}
	</div>
</div>
