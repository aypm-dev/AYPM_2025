<script lang="ts">
	import { page_name, page_changed, highlight_nav_link } from '$lib/stores/page';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let link_menu = false;

	$: if (link_menu && window) {
		window.addEventListener('scroll', scrollCloseMenu);
	}

	function scrollCloseMenu() {
		if ($page_changed) {
			$page_changed = false;
			return;
		}

		if (window) {
			window.removeEventListener('scroll', scrollCloseMenu);
			setTimeout(() => {
				link_menu = false;
			}, 100);
		}
	}
</script>

<div
	in:fly|global={{ duration: 100, delay: 100, y: -10 }}
	class="w-full h-[3px] bg-folly rounded-full"
/>

<nav in:fly|global={{ duration: 100, delay: 200, y: -10 }} class="flex gap-x-4">
	<div class="flex 1/2 gap-x-4 justify-center font-bold">
		<a
			href="/"
			class:animate-bounce={$highlight_nav_link === '/'}
			class:underline={$highlight_nav_link === '/'}
			class="flex {$page.url.pathname === '/'
				? 'animate-jump-and-bounce text-folly cursor-default'
				: 'hover:opacity-50'}"
		>
			<span>Home</span>
			{#if $highlight_nav_link === '/'}
				<svg
					width="18"
					height="25"
					viewBox="0 0 512 512"
					style="enable-background:new 0 0 512 512"
					xml:space="preserve"
					class="absolute -top-2 left-1/2 -translate-x-1/2 fill-white"
					><g
						><path
							d="M30 155.779H15c-8.284 0-15 6.716-15 15v240c0 8.284 6.716 15 15 15h15c16.569 0 30-13.431 30-30v-210c0-16.568-13.431-30-30-30zM467 155.779H321.211l-47.52-47.505c-27.129-27.144-70.137-29.487-100.078-5.61L90 169.56v232.601c43.198 15.379 88.462 23.619 135 23.619h60c24.814 0 45-20.186 45-45a44.65 44.65 0 0 0-3.164-16.582c19.102-5.2 33.164-22.705 33.164-43.418a44.65 44.65 0 0 0-3.164-16.582c19.102-5.2 33.164-22.705 33.164-43.418a44.63 44.63 0 0 0-2.578-15H467c24.814 0 45-20.186 45-45s-20.186-45.001-45-45.001z"
						/>
					</g>
				</svg>
			{/if}
		</a>
		<a
			href="/about"
			class:animate-bounce={$highlight_nav_link === '/about'}
			class:underline={$highlight_nav_link === '/about'}
			class="relative flex {$page.url.pathname === '/about'
				? 'animate-jump-and-bounce text-folly cursor-default'
				: 'hover:opacity-50'}"
		>
			<span>About</span>
			{#if $highlight_nav_link === '/about'}
				<svg
					width="25"
					height="25"
					viewBox="0 0 512 512"
					class="absolute rotate-180 -top-6 left-1/2 -translate-x-1/2 fill-white"
				>
					<g
						><path
							d="M333 186c-20.434 0-37 16.566-37 37v-23c0-20.434-16.566-37-37-37s-37 16.566-37 37v-23c0-20.434-16.566-37-37-37s-37 16.566-37 37V37c0-20.434-16.566-37-37-37S74 16.566 74 37v304c0 8.285-6.715 15-15 15s-15-6.715-15-15v-74.078l-20.77 18.633C8.25 300.535 0 320.453 0 341.64c0 16.886 5.254 33.027 15.188 46.68l38.699 53.163C62.328 453.078 75.93 460 90.27 460H100v37c0 8.285 6.715 15 15 15h200c8.285 0 15-6.715 15-15v-39.078c23.063-6.547 40-27.793 40-52.922V223c0-20.434-16.566-37-37-37zm0 0"
						/>
					</g>
				</svg>
			{/if}
		</a>
		<a
			href="/contact"
			class:animate-bounce={$highlight_nav_link === '/contact'}
			class:underline={$highlight_nav_link === '/contact'}
			class="flex {$page.url.pathname === '/contact'
				? 'animate-jump-and-bounce text-folly cursor-default'
				: 'hover:opacity-50'}"
		>
			<span>Contact</span>
			{#if $highlight_nav_link === '/contact'}
				<svg
					width="25"
					height="25"
					viewBox="0 0 512 512"
					class="absolute rotate-180 -top-6 left-1/2 -translate-x-1/2 fill-white"
				>
					<g
						><path
							d="M333 186c-20.434 0-37 16.566-37 37v-23c0-20.434-16.566-37-37-37s-37 16.566-37 37v-23c0-20.434-16.566-37-37-37s-37 16.566-37 37V37c0-20.434-16.566-37-37-37S74 16.566 74 37v304c0 8.285-6.715 15-15 15s-15-6.715-15-15v-74.078l-20.77 18.633C8.25 300.535 0 320.453 0 341.64c0 16.886 5.254 33.027 15.188 46.68l38.699 53.163C62.328 453.078 75.93 460 90.27 460H100v37c0 8.285 6.715 15 15 15h200c8.285 0 15-6.715 15-15v-39.078c23.063-6.547 40-27.793 40-52.922V223c0-20.434-16.566-37-37-37zm0 0"
						/>
					</g>
				</svg>
			{/if}
		</a>
	</div>

	<div class="flex ml-auto gap-x-4">
		<a target="_blank" rel="noreferrer" href="https://github.com/aypm-dev" class="group flex">
			<img
				src="github-logo.png"
				alt="Github"
				class="w-6 aspect-square group-hover:animate-jump-and-bounce"
			/>
		</a>
		<a
			target="_blank"
			rel="noreferrer"
			href="https://www.linkedin.com/in/paniaguaangel/"
			class="group flex"
		>
			<img
				src="linkedin-logo.png"
				alt="Github"
				class="w-6 aspect-square group-hover:animate-jump-and-bounce"
			/>
		</a>
	</div>
</nav>
