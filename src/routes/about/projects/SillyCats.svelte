<script>
	import TwitchHighlightMakerImageManager from './TwitchHighlightMakerImageManager.svelte';
</script>

<div style="grid-template-columns: 3fr 7fr" class="grid w-full gap-4">
	<div class="hidden sm:flex flex-col h-full mt-12 items-end">
		{#each { length: 7 } as _, index}
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">SILLY</h1>
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">CATSS</h1>
		{/each}
	</div>

	<div class="sm:hidden flex flex-col h-full mt-12 items-end">
		{#each { length: 16 } as _, index}
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">SILLY</h1>
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">CATSS</h1>
		{/each}
	</div>

	<div class="flex flex-col items-center">
		<span class="mt-4 text-2xl font-bold"> SILLY CATS? </span>

		<p class="sm:mt-4 mt-7a text-xl text-justify">In construction...</p>
	</div>
</div>
