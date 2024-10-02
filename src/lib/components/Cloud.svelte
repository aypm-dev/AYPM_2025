<script lang="ts">
	import { fade } from 'svelte/transition';

	export let scale = 8;
	export let position: number[] = [12, 40];

	function load(node: HTMLElement) {
		node.style.left = `${position[0]}%`;
		node.style.top = `${position[1]}%`;
		node.style.transform = `scale(${scale * 100}%, ${scale * 100}%) translate(-35%, 50%)`;

		let end_position = position[0] < 50 ? position[0] + 10 : position[0] - 10;
		node.animate(
			{
				left: end_position + '%'
			},
			{ delay: 200, duration: 20000, fill: 'forwards', easing: 'cubic-bezier(0, 0, 0.2, 1)' }
		);
	}
</script>

<div
	use:load
	transition:fade={{ duration: 750 }}
	class="-translate-x-1/2 -translate-y-1/2 absolute -z-10 opacity-10 sm:opacity-25 w-16 h-16"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 512 400"
		class="w-full h-full sm:scale-[1.25]"
	>
		<g
			><path
				d="M489.762 179.73c-13.403-17.777-32.164-31.25-53.121-38.203-.618-37.054-12.2-71.105-32.77-96.172C379.527 15.684 344.297 0 301.988 0c-31.64 0-56.98 7.816-77.48 23.89-18.645 14.63-30.219 33.895-38.27 50.024a74.632 74.632 0 0 0-32.43-7.414c-40.847 0-74.167 33.035-74.945 73.941C32.253 154.11 0 197.171 0 246.355c0 60.84 49.168 110.333 109.605 110.333H402.38c60.445 0 109.621-49.493 109.621-110.333 0-24.285-7.691-47.324-22.238-66.625zm0 0"
				opacity="1"
				data-original="#000000"
				class=""
			/>
		</g>
	</svg>
</div>
