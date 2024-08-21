<script lang="ts">
	import { onMount } from 'svelte';
	import Cloud from '$lib/components/Cloud.svelte';

	const initial_clouds = 3;
	let cloud_container: HTMLDivElement;
	let clouds: cloud[] = [];

	interface cloud {
		id: string;
		position: number[];
		scale: number;
	}

	onMount(() => {
		for (let i = 0; i < initial_clouds; i++) {
			addCloud();
		}

		setInterval(() => {
			addCloud();
		}, 3000);
	});

	function getRandomNumberInRange(ranges: [number, number][]) {
		let random_range_index = (ranges.length * Math.random()) | 0;

		let min = ranges[random_range_index][0];
		var max = ranges[random_range_index][1];

		return Math.random() * (max - min + 1) + min;
	}

	function addCloud() {
		const id = crypto.randomUUID();
		const scale = Math.random() * (6 - 2) + 1;
		const random_x = getRandomNumberInRange([
			[12, 28],
			[72, 88]
		]);
		const position = [random_x, getRandomNumberInRange([[10, 70]])];

		clouds = [
			...clouds,
			{
				id,
				position,
				scale
			}
		];

		setTimeout(() => {
			clouds = clouds.filter((cloud) => cloud.id != id);
		}, 20000);
	}
</script>

<div bind:this={cloud_container} class="absolute flex w-screen h-[60rem] overflow-x-hidden">
	{#each clouds as cloud (cloud.id)}
		<Cloud position={cloud.position} scale={cloud.scale} />
	{/each}
</div>
