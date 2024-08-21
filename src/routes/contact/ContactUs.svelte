<script lang="ts">
	import Packaging from './Packaging.svelte';
	import ConveryorBelt from './ConveryorBelt.svelte';
	import ContactForm from './ContactForm.svelte';
	import ObjectsFalling from './ObjectsFalling.svelte';
	import { onMount } from 'svelte';

	let contact_form_conveyor_belt: ConveryorBelt;

	onMount(() => {
		contact_form_conveyor_belt.circle_velocity.set(0);
	});
</script>

<section class="relative mb-16 sm:mb-64 overflow-x-clip">
	<div
		class="relative w-80 sm:w-2/3 h-[40rem] sm:min-h-[24rem] sm:h-96 mt-12 px-6 py-8 sm:p-12 rounded-r-xl shadow-lg text-snow border-l-0 border-[3px] border-b-[6px] border-eerie-900 bg-folly ring-4 ring-white"
	>
		<div class="sm:w-2/3 sm:max-w-[32rem] sm:ml-auto mr-48">
			<h1 class="text-6xl sm:text-7xl text-center">CONTACT US?</h1>

			<p class="-mt-6 z-10 text-xl text-justify">
				Hey! Want to reach out to me?<br class="hidden sm:block" />
				I am more than happy to talk about any projects you may have in mind. For now something short,
				and talk in more detail later ;)<br /><br class="hidden sm:block" />
			</p>

			<span class="hidden sm:block text-xl font-bold"> angelpaniagua2004@gmail.com </span>

			<div class="hidden sm:flex flex-col sm:flex-row mt-4 gap-4">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/AngelCode-dev"
					class="group flex"
				>
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
						alt="Linkedin"
						class="w-6 aspect-square group-hover:animate-jump-and-bounce"
					/>
				</a>
			</div>
		</div>

		<div
			class="absolute left-full top-full -translate-x-full -translate-y-full flex w-12 h-12 fill-white"
		>
			<span class="text-xl font-bold animate-bounce"> ! </span>
			<svg style="scale: -1 1;" class="sm:w-8 sm:h-8 w-6 h-6 animate-bounce" viewBox="0 0 512 512"
				><path
					d="m507.606 228.536-50.509-50.509a124.386 124.386 0 0 1-16.631 20.622l-2.586 2.586 48.514 48.513c5.857 5.857 15.355 5.857 21.213 0 5.857-5.857 5.857-15.355-.001-21.212zM256 465.946h-58.054l-53.571-53.571a182.442 182.442 0 0 1-31.908-4.071v8.375c0 3.979 1.581 7.794 4.394 10.606l39.119 39.119c-6.531 1.622-11.379 7.508-11.379 14.542 0 8.284 6.716 15 15 15H256c8.284 0 15-6.716 15-15s-6.716-15-15-15zM419.391 43.92c-.109-.112-.22-.223-.332-.331-37.002-36.834-96.691-36.649-133.491.172l-35.782 35.781 16.117 16.117c5.858 5.857 5.858 15.355 0 21.213-5.857 5.857-15.355 5.857-21.213 0l-37.33-37.33h-55.97C67.914 79.542 0 147.455 0 230.964 0 316.283 69.377 382.53 151.642 382.53c39.341 0 77.915-15.397 106.964-44.446L419.25 177.44c36.797-36.809 36.845-96.662.141-133.52zm-35.924 67.492c0 8.284-6.716 15-15 15s-15-6.716-15-15V95.345c0-8.284 6.716-15 15-15s15 6.716 15 15z"
				/></svg
			>
		</div>
	</div>

	<div class="w-full absolute top-80 sm:top-32">
		<ContactForm
			on:set_conveyor_belt={(event) => {
				contact_form_conveyor_belt.circle_velocity.set(event.detail);
			}}
		/>

		<div class="flex mt-[33rem] sm:mt-[25rem] justify-center">
			<ConveryorBelt
				bind:this={contact_form_conveyor_belt}
				conveyor_belt_w={1800}
				amount_of_circles={28}
			/>
		</div>
	</div>

	<div
		class="sm:hidden flex flex-col w-80 h-fit ml-auto mt-80 px-6 py-8 items-end rounded-l-xl shadow-lg text-snow border-r-0 border-[3px] border-b-[6px] border-eerie-900 bg-folly"
	>
		<span class="text-xl font-bold"> angelpaniagua2004@gmail.com </span>

		<div class="flex mt-4 gap-4">
			<span class="text-xl font-bold"> ;) </span>

			<a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/AngelCode-dev"
				class="group flex"
			>
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
					alt="Linkedin"
					class="w-6 aspect-square group-hover:animate-jump-and-bounce"
				/>
			</a>
		</div>
	</div>
</section>
