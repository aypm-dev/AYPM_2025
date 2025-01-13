<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import type { Project } from '$lib/types/project';
	import type { SvelteComponent } from 'svelte';

	export let title: string;
	export let subtitle: Project['subtitle'] = '';
	export let description: string;
	export let modal: typeof SvelteComponent<any> | undefined;
	export let grid_area: string;
	export let image_src: Project['image_src'] = '';
	export let show_kiwi = Math.random() > 0.5;
	export let cover_image = false;
	export let technologies: string[] = [];
	export let short: Project['short'] = false;

	let project_modal: Modal;
</script>

<Modal bind:this={project_modal}>
	<svelte:component this={modal} />
</Modal>

<article
	style="grid-area: {grid_area};"
	class:h-[26rem]={short}
	class:min-h-[16rem]={!short}
	class="relative z-0 h-full rounded-xl border-[3px] border-b-[6px] border-eerie-900 ring-2 ring-white shadow-lg bg-folly"
>
	{#if cover_image && image_src}
		<img
			class:h-48={short}
			class:h-64={!short}
			src={image_src}
			alt="{title} logo"
			class="w-full object-cover rounded-t-xl"
		/>
	{/if}

	<section class="px-2 flex flex-col items-center pt-4 pb-12">
		<h1 class="text-2xl font-bold text-center">{title.toUpperCase()}</h1>
		{#if subtitle}
			<h2 class="text-lg font-bold -mt-2 opacity-50 text-center capitalize">{subtitle}</h2>
		{/if}

		<p class="max-w-[48rem] mt-4 text-xl text-center">
			{@html description}
		</p>

		{#if image_src && !cover_image}
			<img src={image_src} alt="{title} logo" class="h-12 mt-8" />
		{/if}

		<ul class:pt-8={short} class:pt-12={!short} class="flex gap-1 flex-wrap justify-center mt-auto">
			{#each technologies as name}
				<li
					class="rounded-full bg-white/10 text-white shadow p-1 px-2 text-center font-bold text-xs"
				>
					{name}
				</li>
			{/each}
		</ul>
	</section>

	<div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-nowrap">
		<Button on:click={project_modal.openModal} type="secondary">
			<span class="text-folly">&#60</span>
			Button <span class="opacity-50">on:click=&#123;open&#125;</span>
			<span class="text-folly">/&#62</span>
		</Button>
	</div>

	{#if show_kiwi}
		<div
			class="absolute hidden sm:block -bottom-2 -z-10 left-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 -scale-x-100"
		>
			<svg class="h-8 w-8" viewBox="0 0 512 512"
				><path
					fill="#fff"
					d="m507.606 228.536-50.509-50.509a124.386 124.386 0 0 1-16.631 20.622l-2.586 2.586 48.514 48.513c5.857 5.857 15.355 5.857 21.213 0 5.857-5.857 5.857-15.355-.001-21.212zM256 465.946h-58.054l-53.571-53.571a182.442 182.442 0 0 1-31.908-4.071v8.375c0 3.979 1.581 7.794 4.394 10.606l39.119 39.119c-6.531 1.622-11.379 7.508-11.379 14.542 0 8.284 6.716 15 15 15H256c8.284 0 15-6.716 15-15s-6.716-15-15-15zM419.391 43.92c-.109-.112-.22-.223-.332-.331-37.002-36.834-96.691-36.649-133.491.172l-35.782 35.781 16.117 16.117c5.858 5.857 5.858 15.355 0 21.213-5.857 5.857-15.355 5.857-21.213 0l-37.33-37.33h-55.97C67.914 79.542 0 147.455 0 230.964 0 316.283 69.377 382.53 151.642 382.53c39.341 0 77.915-15.397 106.964-44.446L419.25 177.44c36.797-36.809 36.845-96.662.141-133.52zm-35.924 67.492c0 8.284-6.716 15-15 15s-15-6.716-15-15V95.345c0-8.284 6.716-15 15-15s15 6.716 15 15z"
				/></svg
			>
		</div>
	{/if}
</article>
