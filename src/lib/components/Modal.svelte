<svelte:options accessors />

<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { clickOutside } from '$lib/ioevents/click';
	import { keydownEscape } from '$lib/ioevents/keydown';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { leave } from '$lib/transitions';

	export let close_xmar = false;
	export let close_button = true;
	export let close_button_text = '';
	export let accept_button = false;
	export let accept_button_text = '';
	export let is_modal_open = false;

	const dispatch = createEventDispatcher();

	export const openModal = () => {
		is_modal_open = true;
		document.body.classList.add('modal-open');
	};

	export const closeModal = () => {
		is_modal_open = false;
		dispatch('closeModal');
		document.body.classList.remove('modal-open');
	};
</script>

{#if is_modal_open}
	<div
		out:fade|global={{ duration: 100, delay: 650 }}
		in:fade|global={{ duration: 100 }}
		class="fixed inset-0 z-30 flex justify-center items-center bg-black bg-opacity-50 transition duration-100"
	>
		<div
			use:clickOutside
			on:click-outside={closeModal}
			use:keydownEscape
			on:keydown-escape={closeModal}
			out:leave|global={{ duration: 750, delay: -350 }}
			class="relative flex flex-col w-full sm:w-[48rem] max-h-[32rem] mx-4 p-4 items-center rounded-xl ring-2 ring-white shadow-lg bg-black"
			role="dialog"
		>
			{#if close_xmar}
				<header class="flex ml-auto">
					<button
						class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
						aria-label="close"
						on:click={closeModal}
					>
						<i class="fa-solid fa-xmark" />
					</button>
				</header>
			{/if}

			<div class="custom-scroll-bar w-full h-full p-2 sm:p4 overflow-y-auto">
				<slot>
					<h1 class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">Empty Modal</h1>
					<p class="text-sm text-gray-700 dark:text-gray-400">
						Overwrite this with the slot of the component.
					</p>
				</slot>
			</div>

			<footer class="flex absolute top-full w-full px-4 -translate-y-1/2">
				<div class="flex ml-auto gap-4" out:leave|global={{ duration: 750, delay: 100 }}>
					{#if close_button}
						<Button type="secondary" on:click={closeModal} black_border>
							{close_button_text}
							{#if !close_button_text}
								<span class="text-folly">&#60</span>
								Button <span class="opacity-50">on:click=&#123;closeModal&#125;</span>
								<span class="text-folly">/&#62</span>
							{/if}
						</Button>
					{/if}

					{#if accept_button}
						<Button
							on:click={() => {
								dispatch('accept_click');
							}}
						>
							{accept_button_text}
							{#if !accept_button_text}
								<span class="text-black">&#60</span>
								Button <span class="opacity-75">on:click=&#123;closeModal&#125;</span>
								<span class="text-black">/&#62</span>
							{/if}
						</Button>
					{/if}
				</div>
			</footer>
		</div>
	</div>
{/if}
