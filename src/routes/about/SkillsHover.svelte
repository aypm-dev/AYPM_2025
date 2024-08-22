<script lang="ts">
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';

	const touch = browser && matchMedia('(hover: none)').matches;
	let background_container: HTMLDivElement;
	let background_2: HTMLDivElement;

	function mouseHoverHandler(event: MouseEvent) {
		const target_rect: DOMRect = background_container.getBoundingClientRect();

		const mouse_x_position = event.clientX - target_rect.left;
		const x_percent = Math.ceil((mouse_x_position / target_rect.width) * 100);

		background_2.style.clipPath;
		background_2.animate(
			{
				clipPath: `polygon(0 0, ${x_percent}% 0, ${x_percent}% 100%, 0% 100%)`
			},
			{ delay: 0, duration: 500, fill: 'forwards' }
		);
	}

	function touchMoveHandler(event: TouchEvent) {
		const target_rect: DOMRect = background_container.getBoundingClientRect();

		const mouse_x_position = event.touches[0].pageX - target_rect.left;
		const x_percent = Math.ceil((mouse_x_position / target_rect.width) * 100);

		background_2.style.clipPath;
		background_2.animate(
			{
				clipPath: `polygon(0 0, ${x_percent}% 0, ${x_percent}% 100%, 0% 100%)`
			},
			{ delay: 0, duration: 500, fill: 'forwards' }
		);
	}

	function mouseLeaveHandler(event: MouseEvent) {
		const target_rect: DOMRect = background_container.getBoundingClientRect();

		const mouse_x_position = event.clientX - target_rect.left;
		const x_percent = Math.round(mouse_x_position / target_rect.width) * 100;

		background_2.animate(
			{
				clipPath: `polygon(0 0, ${x_percent}% 0, ${x_percent}% 100%, 0% 100%)`
			},
			{ delay: 100, duration: 200, fill: 'forwards', easing: 'cubic-bezier(.55,.01,.45,1.01)' }
		);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative container mt-24">
	<h1
		in:fly|global={{ y: 20, duration: 500 + Math.random() * 200 }}
		class="absolute -top-8 left-1/2 z-20 text-center text-2xl font-bold italic -translate-x-1/2"
	>
		OUR PARTNERS :)
	</h1>

	<div
		in:fly|global={{ y: 20, duration: 500 + Math.random() * 300, delay: Math.random() * 200 }}
		bind:this={background_container}
		on:touchmove={touchMoveHandler}
		on:mousemove={mouseHoverHandler}
		on:mouseleave={mouseLeaveHandler}
		class="relative flex w-5/6 sm:w-2/5 h-full mx-auto rounded-xl shadow-lg select-none bg-red-500"
	>
		<div
			class="grid grid-cols-4 gap-4 w-full p-4 bg-white rounded-xl border-[3px] border-b-[6px] border-eerie-900"
		>
			<div class="flex w-[60%] aspect-square mx-auto my-auto justify-center items-center shrink-0">
				<img
					style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)"
					src="sqlite-logo.png"
					loading="lazy"
					alt="SQLITE Logo"
					draggable="false"
					class="pointer-events-none"
				/>
			</div>
			<div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center">
				<img
					style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(90%)"
					src="css-logo.png"
					loading="lazy"
					alt="CSS Logo"
					draggable="false"
					class="h-full pointer-events-none"
				/>
			</div>
			<div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center">
				<img
					style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(90%)"
					src="javascript-logo.png"
					loading="lazy"
					alt="JAVASCRIPT Logo"
					draggable="false"
					class="rounded-xl pointer-events-none"
				/>
			</div>
			<div class="absolute top-[calc(100%+0.5rem)] select-none">
				<span class="text-sm">
					{touch ? 'Hey! Slide up here' : 'Hey! Hover up here'}
					<svg
						width="15"
						height="15"
						viewBox="0 0 682.667 682.667"
						style="enable-background:new 0 0 512 512"
						xml:space="preserve"
						class="inline -mt-1"
					>
						<g>
							<defs
								><clipPath id="a" clipPathUnits="userSpaceOnUse"
									><path d="M0 512h512V0H0Z" /></clipPath
								>
							</defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
								><path
									d="M0 0a25.638 25.638 0 0 0-26.675-10.431l-23.343 5.162v-112.899c0-8.284-6.715-15-15-15h-63.722c-8.284 0-15 6.716-15 15V-5.269l-23.343-5.162C-177.308-12.694-187.778-8.598-193.758 0a25.64 25.64 0 0 0-.495 28.637l73.401 113.742c5.278 8.179 14.239 13.061 23.973 13.061a28.42 28.42 0 0 0 23.973-13.061L.495 28.637A25.638 25.638 0 0 0 0 0m84.14 192.156c-48.352 48.351-112.639 74.98-181.019 74.98-68.38 0-132.667-26.629-181.019-74.98-48.352-48.352-74.981-112.64-74.981-181.02 0-68.38 26.629-132.667 74.981-181.019 48.352-48.352 112.639-74.981 181.019-74.981 68.38 0 132.667 26.629 181.019 74.981 48.352 48.352 74.981 112.639 74.981 181.019 0 68.38-26.629 132.668-74.981 181.02"
									style="fill-opacity:1;fill-rule:nonzero;stroke:none"
									transform="translate(352.879 244.864)"
								/>
							</g>
						</g>
					</svg>
				</span>
			</div>
			<div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center">
				<img
					style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(80%)"
					src="svelte-logo.png"
					loading="lazy"
					alt="SVELTE Logo"
					draggable="false"
					class="h-full pointer-events-none"
				/>
			</div>
		</div>
		<div
			bind:this={background_2}
			style="clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);"
			class="absolute grid grid-cols-4 gap-4 w-full p-4 overflow-hidden bg-folly rounded-xl border-[3px] border-b-[6px] border-eerie-900"
		>
			<div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center shrink-0">
				<img
					style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)"
					src="graphql-logo-color.png"
					loading="lazy"
					alt="GRAPHQL Logo"
					draggable="false"
					class="pointer-events-none"
				/>
			</div>
			<div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center shrink-0">
				<img
					style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)"
					src="tailwind-logo.png"
					loading="lazy"
					alt="TAILWIND Logo"
					draggable="false"
					class="h-full pointer-events-none"
				/>
			</div>
			<div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center">
				<img
					style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)"
					src="typescript-logo.png"
					loading="lazy"
					alt="TYPESCRIPT Logo"
					draggable="false"
					class="rounded-xl pointer-events-none"
				/>
			</div>
			<div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center shrink-0">
				<img
					style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)"
					src="sveltekit-logo.png"
					loading="lazy"
					alt="HTML Logo"
					draggable="false"
					class="pointer-events-none"
				/>
			</div>
		</div>
	</div>
</div>
