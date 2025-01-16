<script lang="ts">
	import Project from './Project.svelte';
	import Pipe from './Pipe.svelte';
	import { fly } from 'svelte/transition';

	import ClipHighlightMaker from './projects/ClipHighlightMaker.svelte';
	import KiwisTwitch from './projects/KiwisTwitch.svelte';
	import Innoceana from './projects/Innoceana.svelte';
	import Portfolio from './projects/Portfolio.svelte';
	import HCBS from './projects/HCBS.svelte';
	import AyaCrm from './projects/AyaCrm.svelte';
	import type { Project as ProjectType } from '$lib/types/project';
	import SillyCats from './projects/SillyCats.svelte';

	const projects: ProjectType[] = [
		{
			title: 'SillyCats',
			subtitle: 'A Twitter Clone Cats',
			description: 'A fast and minimalist social media for being a goof!',
			grid_area: 'z',
			image_src: 'projects/silly-cats.png',
			cover_image: true,
			modal: SillyCats,
			short: true,
			technologies: [
				'ANGULAR 18',
				'ANALOG',
				'POCKETBASE',
				'NODEJS',
				'PRIMENG',
				'TAILWINDCSS',
				'LUCIDE'
			]
		},
		{
			title: 'CLIP HIGHLIGHT MAKER',
			description:
				'Can a custom video editor specialized in converting horizontal videos to vertical be better than ',
			grid_area: 'a',
			image_src: 'projects/clip-highlight-maker.png',
			cover_image: true,
			modal: ClipHighlightMaker,
			technologies: [
				'FFMPEG',
				'SVELTEKIT',
				'NODEJS',
				'SHADCN-SVELTE',
				'PUPPETEER',
				'TAILWINDCSS',
				'LUCIDE'
			]
		},
		{
			title: "KIWI'S Twitch",
			description:
				'What if I make a light Third party Twitch Player? Instant load times, customization, stability and much more ;)',
			grid_area: 'b',
			image_src: 'projects/kiwis-twitch.png',
			cover_image: true,
			modal: KiwisTwitch,
			technologies: [
				'TWURPLE',
				'TWITCH API',
				'TWITCH OAUTH',
				'SVELTEKIT',
				'NODEJS',
				'TAILWINDCSS',
				'FONTAWESOME'
			]
		},
		{
			title: 'Heroes can be selfish',
			subtitle: 'Where heroes might take advantage of their status',
			description:
				'Leyends say heroes are courageous and compassionate, but what <i>if they become selfish</i> here? Let me talk about a little game about a this kiwi.',
			grid_area: 'c',
			image_src: 'projects/hcbs.png',
			modal: HCBS,
			technologies: ['GODOT', 'ASEPRITE', 'ITCH.IO', 'HTML5']
		},
		{
			title: 'NETCOM BASE CRM',
			description: 'First official projects at my first official job... Quite the journey!',
			grid_area: 'd',
			modal: AyaCrm,
			image_src: 'projects/logo_netcom.svg',
			technologies: [
				'DIRECTUS-JS',
				'GRAPHQL',
				'GRAPGQL-REQUEST',
				'NODEJS',
				'SVELTEKIT',
				'FELTE FORMS',
				'ZOD',
				'MAILERSEND',
				'TAILWINDCSS',
				'FONTAWESOME'
			]
		},
		{
			title: 'INNOCEANA RESERVATION',
			description:
				'First webpage! I sure learned a lot..<br> Helping this organization to manage reservations!!',
			grid_area: 'e',
			image_src: 'projects/innoceana.png',
			cover_image: true,
			modal: Innoceana,
			technologies: [
				'SQLITE',
				'HONO',
				'SVELTE',
				'GOOGLE DRIVE API',
				'FIREBASE AUTH',
				'API.APITEMPLATE'
			]
		},

		{
			title: 'PORTFOLIO',
			description:
				"You are looking at it.. Here's more details! Because there could be more portfolios in the future ;)",
			grid_area: 'f',
			show_kiwi: false,
			image_src: 'projects/portfolio.png',
			cover_image: true,
			modal: Portfolio,
			technologies: ['SVELTEKIT', 'NODEMAILER', 'VERCEL', 'NODEJS']
		}
	];
</script>

<div
	class="relative w-screen h-fit mt-24 mb-48 p-12 shadow-lg text-snow border-t-[3px] border-b-[6px] border-eerie-900 bg-folly"
>
	<div
		class="bg-gradient-to-r from-black/10 sm:from-black/20 to-transparent absolute top-0 h-full w-1/3 left-0"
	/>
	<div
		class="bg-gradient-to-l from-black/10 sm:from-black/20 to-transparent absolute top-0 h-full w-1/3 left-2/3"
	/>

	<div class="container flex mx-auto justify-center">
		<div class="flex flex-col lg:w-2/3 md:w-4/5 w-full md: items-center">
			<h1 class="text-6xl md:text-7xl whitespace-nowrap text-center">PROJECTS?</h1>

			<p class="-mt-6 text-xl text-justify md:text-center">
				We all love a good project! You love them, I love them<br /><br />
				These are the projects that I'm most proud of that I've been working over the past few years.
			</p>

			<div
				class="project-grid grid grid-cols-1 md:grid-cols-2 min-h-[80rem] md:min-h-[64rem] mx-auto mt-12 lg:gap-16 md:gap-10 gap-8"
			>
				{#each projects as project}
					<Project {...project} />
				{/each}
			</div>

			<div
				in:fly|global={{ y: 20, duration: 500 + Math.random() * 300, delay: Math.random() * 500 }}
				class="absolute flex justify-center items-center sm:-top-20 -top-10 -translate-y-1/2 left-[80%] md:left-[76%] z-10 w-12 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			>
				<svg class="w-6 h-6 -rotate-[30deg] fill-white" viewBox="0 0 512 512"
					><path
						d="m507.606 228.536-50.509-50.509a124.386 124.386 0 0 1-16.631 20.622l-2.586 2.586 48.514 48.513c5.857 5.857 15.355 5.857 21.213 0 5.857-5.857 5.857-15.355-.001-21.212zM256 465.946h-58.054l-53.571-53.571a182.442 182.442 0 0 1-31.908-4.071v8.375c0 3.979 1.581 7.794 4.394 10.606l39.119 39.119c-6.531 1.622-11.379 7.508-11.379 14.542 0 8.284 6.716 15 15 15H256c8.284 0 15-6.716 15-15s-6.716-15-15-15zM419.391 43.92c-.109-.112-.22-.223-.332-.331-37.002-36.834-96.691-36.649-133.491.172l-35.782 35.781 16.117 16.117c5.858 5.857 5.858 15.355 0 21.213-5.857 5.857-15.355 5.857-21.213 0l-37.33-37.33h-55.97C67.914 79.542 0 147.455 0 230.964 0 316.283 69.377 382.53 151.642 382.53c39.341 0 77.915-15.397 106.964-44.446L419.25 177.44c36.797-36.809 36.845-96.662.141-133.52zm-35.924 67.492c0 8.284-6.716 15-15 15s-15-6.716-15-15V95.345c0-8.284 6.716-15 15-15s15 6.716 15 15z"
					/></svg
				>
				<span class="text-xl font-bold"> ? </span>
			</div>

			<div
				in:fly|global={{ y: 20, duration: 500 + Math.random() * 300, delay: Math.random() * 600 }}
				class="absolute flex top-[3rem] -translate-y-1/2 left-[-4%] md:left-[18%] z-10 w-20 aspect-square p-2 justify-center items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			>
				<img
					src="technologies/git-logo.png"
					loading="lazy"
					alt="Git Logo"
					title="Git Logo"
					draggable="false"
					class="opacity-75 w-1/2 h-1/2"
				/>
			</div>

			<div
				class="absolute flex top-[calc(100%-4rem)] -translate-y-1/2 left-[21%] z-10 w-20 aspect-square justify-center items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			>
				<img
					src="technologies/vscode-logo.png"
					loading="lazy"
					alt="Git Logo"
					title="Visual Studio Code Logo"
					draggable="false"
					class="opacity-75 w-1/2 h-1/2"
				/>
			</div>
			<div
				class="absolute flex top-full -translate-y-1/2 left-[10%] z-10 w-12 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			/>
			<div
				class="absolute flex top-full -translate-y-1/2 left-[80%] z-10 w-20 sm:w-32 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			/>

			<Pipe />
		</div>
	</div>
</div>

<style>
	@media (min-width: 768px) {
		.project-grid {
			grid-template-areas:
				'z z'
				'a b'
				'a b'
				'c c'
				'd f'
				'e f';
		}
	}

	@media (max-width: 768px) {
		.project-grid {
			grid-template-areas:
				'z'
				'a'
				'b'
				'c'
				'c'
				'd'
				'e'
				'f'
				'f';
		}
	}
</style>
