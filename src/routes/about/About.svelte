<script>
	import { fly } from 'svelte/transition';

	const years_programming = new Date().getUTCFullYear() - 2020;
</script>

<div
	class="relative w-screen mt-12 p-12 shadow-lg text-snow border-t-[3px] border-b-[6px] border-eerie-900 bg-folly"
>
	<div class="container flex mx-auto justify-center">
		<div class="flex flex-col lg:w-2/3 md:w-4/5 w-full items-center">
			<h1 class="text-6xl sm:text-7xl whitespace-nowrap text-center">ABOUT?</h1>

			<p class="-mt-6 z-10 text-xl text-justify">
				Yeah! I am a programmer that recently completed his Bachillerato in Networking. I've
				programming for {years_programming} years mostly in Scripting languages like Python, Lua, GDScript,
				and TypeScript. <br /><br />

				My first job got me into Web Apps Development B2B, improving on project managment abilities!
				And I kinda love it now!

				<svg
					width="20"
					height="20"
					viewBox="0 0 511.985 511.985"
					style="enable-background:new 0 0 512 512"
					xml:space="preserve"
					class="inline fill-white"
				>
					<g
						><path
							d="M450.439 136.751c17.403 0 31.562-14.159 31.562-31.562 0-4.896-1.114-8.68-4.113-13.963l-23.345-41.132c-1.373-2.42-4.844-2.466-6.281-.084l-24.843 41.157c-3.437 5.695-4.54 9.103-4.54 14.022-.002 17.403 14.156 31.562 31.56 31.562zM256 414.353c38.26 0 72.878-13.373 97.635-34.855h-195.27c24.757 21.482 59.376 34.855 97.635 34.855z"
						/><path
							d="M450.439 166.751c-33.945 0-61.562-27.617-61.562-61.562 0-13.051 4.256-21.903 8.855-29.524l13.795-22.855C366.518 18.654 311.942 0 255.992 0 187.615 0 123.329 26.628 74.979 74.979S0 187.614 0 255.993c0 68.378 26.628 132.663 74.979 181.014s112.636 74.979 181.014 74.979 132.663-26.628 181.014-74.979 74.979-112.636 74.979-181.014c0-35.266-7.574-70.85-21.955-103.711-10.713 9.02-24.526 14.469-39.592 14.469zm-105.078-17.689c28.475 0 51.64 23.166 51.64 51.64 0 8.284-6.716 15-15 15s-15-6.716-15-15c0-11.932-9.707-21.64-21.64-21.64s-21.64 9.708-21.64 21.64c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-28.475 23.165-51.64 51.64-51.64zm-180.329 0c28.475 0 51.64 23.166 51.64 51.64 0 8.284-6.716 15-15 15s-15-6.716-15-15c0-11.932-9.707-21.64-21.64-21.64s-21.64 9.708-21.64 21.64c0 8.284-6.716 15-15 15s-15-6.716-15-15c.001-28.475 23.166-51.64 51.64-51.64zm207.612 253.682c-31.265 26.832-72.689 41.609-116.644 41.609s-85.379-14.777-116.644-41.609c-31.921-27.394-49.5-64.01-49.5-103.103 0-8.284 6.716-15 15-15h302.287c8.284 0 15 6.716 15 15 .001 39.093-17.578 75.709-49.499 103.103z"
						/><path
							d="M133.402 349.497h245.196c4.968-8.637 8.688-17.874 10.96-27.544.878-3.739-2.004-7.312-5.845-7.312H128.287c-3.84 0-6.723 3.573-5.845 7.312 2.273 9.67 5.993 18.907 10.96 27.544z"
						/>
					</g>
				</svg>
			</p>

			<div
				in:fly|global={{ y: 20, duration: 500 + Math.random() * 300, delay: Math.random() * 300 }}
				class="absolute flex top-0 -translate-y-1/2 left-[10%] z-10 w-16 aspect-square p-2 justify-center items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			>
				<img
					src="insomnia-logo.png"
					loading="lazy"
					alt="Insomnia Logo"
					title="Insomnia Logo"
					draggable="false"
					class="opacity-75 w-1/2 h-1/2"
				/>
			</div>
			<div
				in:fly|global={{ y: 20, duration: 500 + Math.random() * 300, delay: Math.random() * 700 }}
				class="absolute flex top-full -translate-y-1/2 left-[80%] z-10 w-20 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			/>
			<div
				in:fly|global={{ y: 20, duration: 500 + Math.random() * 300, delay: Math.random() * 300 }}
				class="absolute flex top-full -translate-y-1/2 z-10 left-[calc(80%-1.25rem)] w-10 aspect-square justify-center items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			>
				<img
					src="graphql-logo.png"
					loading="lazy"
					alt="GraphQL Logo"
					title="GraphQL Logo"
					draggable="false"
					class="opacity-75 w-3/5 h-3/5"
				/>
			</div>
			<div
				in:fly|global={{ y: 20, duration: 500 + Math.random() * 500, delay: Math.random() * 800 }}
				class="absolute flex top-[calc(100%+6rem)] -translate-y-1/2 left-0 -translate-x-1/2 sm:left-[5%] sm:translate-x-0 z-10 w-32 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"
			/>
		</div>
	</div>
</div>
