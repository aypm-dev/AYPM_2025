<script lang="ts">
	import { onMount } from 'svelte';
	import Cloud from '$lib/components/Cloud.svelte';

	const initial_clouds = 2;
	const cloud_life_time = 10000;
	const cloud_spawn_timer = 1100;

	let cloud_container: HTMLElement;
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
		}, cloud_spawn_timer);
	});

	function getRandomNumberInRange(ranges: [number, number][]) {
		let random_range_index = (ranges.length * Math.random()) | 0;

		let min = ranges[random_range_index][0];
		var max = ranges[random_range_index][1];

		return Math.random() * (max - min + 1) + min;
	}

	function addCloud() {
		const id = crypto.randomUUID();
		const scale = getRandomNumberInRange([[0.5, 2.75]]);
		const random_x = getRandomNumberInRange([
			[10, 25],
			[75, 95]
		]);
		const random_y = getRandomNumberInRange([
			[5, 25],
			[40, 45]
		]);

		clouds.push({
			id,
			position: [random_x, random_y],
			scale
		});

		clouds = clouds;

		setTimeout(() => {
			clouds = clouds.filter((cloud) => cloud.id != id);
		}, cloud_life_time);
	}
</script>

<section
	bind:this={cloud_container}
	class="absolute container -z-10 left-1/2 -translate-x-1/2 flex w-screen h-[60rem] overflow-x-hidden"
>
	<div
		class="bg-gradient-to-r from-white via-transparent to-white absolute top-0 left-0 w-full h-full"
	/>

	{#each clouds as cloud (cloud.id)}
		<Cloud position={cloud.position} scale={cloud.scale} />
	{/each}
</section>
