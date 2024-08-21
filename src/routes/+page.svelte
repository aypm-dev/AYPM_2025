<script lang="ts">
	import CloudManager from './landing/CloudManager.svelte';
	import Factory from './landing/Factory.svelte';
	import Hows from './landing/Hows.svelte';

	let found_kiwi = false;

	function handdleFoundKiwi() {
		found_kiwi = !found_kiwi;
		if (found_kiwi) {
			setTimeout(() => {
				found_kiwi = false;
			}, 6000);
		}
	}
</script>

<svelte:head>
	<title>&#60AYPM /&#62 Frontend Developer Portfolio</title>
</svelte:head>

<CloudManager />
<Factory />
<Hows />

<div class="flex flex-col mx-auto items-center gap-y-8 mb-32">
	<button on:click={handdleFoundKiwi} class="hover:scale-110">
		<svg
			class:animate-spin-forwards={found_kiwi}
			class:hover:animate-none={!found_kiwi}
			class="w-12 h-12"
			viewBox="0 0 512 512"
			><path
				d="m507.606 228.536-50.509-50.509a124.386 124.386 0 0 1-16.631 20.622l-2.586 2.586 48.514 48.513c5.857 5.857 15.355 5.857 21.213 0 5.857-5.857 5.857-15.355-.001-21.212zM256 465.946h-58.054l-53.571-53.571a182.442 182.442 0 0 1-31.908-4.071v8.375c0 3.979 1.581 7.794 4.394 10.606l39.119 39.119c-6.531 1.622-11.379 7.508-11.379 14.542 0 8.284 6.716 15 15 15H256c8.284 0 15-6.716 15-15s-6.716-15-15-15zM419.391 43.92c-.109-.112-.22-.223-.332-.331-37.002-36.834-96.691-36.649-133.491.172l-35.782 35.781 16.117 16.117c5.858 5.857 5.858 15.355 0 21.213-5.857 5.857-15.355 5.857-21.213 0l-37.33-37.33h-55.97C67.914 79.542 0 147.455 0 230.964 0 316.283 69.377 382.53 151.642 382.53c39.341 0 77.915-15.397 106.964-44.446L419.25 177.44c36.797-36.809 36.845-96.662.141-133.52zm-35.924 67.492c0 8.284-6.716 15-15 15s-15-6.716-15-15V95.345c0-8.284 6.716-15 15-15s15 6.716 15 15z"
			/></svg
		>
	</button>
	<h1
		class:opacity-0={!found_kiwi}
		class="text-center text-3xl text-black transition-all select-none ease-in"
	>
		Oh, there he was! Thank you for finding him!
	</h1>
</div>
