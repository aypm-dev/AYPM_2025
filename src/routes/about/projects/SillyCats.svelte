<script>
	import TwitchHighlightMakerImageManager from './TwitchHighlightMakerImageManager.svelte';
</script>

<div class="grid w-full gap-4 grid-cols-[3fr_7fr]" contenteditable="true">
	<div class="hidden sm:flex flex-col h-full mt-12 items-end">
		{#each { length: 6 } as _, index}
			<h1 class="-mt-10 text-6xl sm:text-7xl whitespace-nowrap">SILLY</h1>
			<h1 class="-mt-10 text-6xl sm:text-7xl whitespace-nowrap">CATSS</h1>
		{/each}
	</div>

	<div class="sm:hidden flex flex-col h-full mt-12 items-end">
		{#each { length: 9 } as _, index}
			<h1 class="-mt-[40px] text-6xl sm:text-7xl whitespace-nowrap">SILLY</h1>
			<h1 class="-mt-[40px] text-6xl sm:text-7xl whitespace-nowrap">CATSS</h1>
		{/each}
	</div>

	<section class="flex flex-col items-center text-justify">
		<span class="mt-4 text-2xl font-bold"> SILLY CATS? </span>

		<p class="mt-4 text-xl">
			The idea for SillyCats started with a simple goal: use everything I've learned about angular
			in a bigger project, something closer my other projects.
		</p>

		<span class="sm:block hidden">
			<p class="sm:mt-4 mt-2 text-xl">
				But it couldn't just be functional, it had to be fun weird... as a way to implement more
				complex features and learn faster. So, I designed SillyCats: A ridiculous media app mostly
				based on Twitter, as I way to improve my Angular habilites, taking them into the level of
				real production apps
			</p>
			<p class="sm:mt-2 mt-2 text-xl">Objective to built on a solid foundation</p>
		</span>
	</section>
</div>

<span class=" sm:hidden block text-justify">
	<p class="sm:mt-4 mt-2 text-xl">
		But it couldn't just be functional, it had to be fun weird... as a way to implement more complex
		features and learn faster. So, I designed SillyCats: A ridiculous social media app mostly based
		on Twitter, as I way to improve my Angular habilites, taking them into the level of real
		production apps
	</p>
	<p class="sm:mt-2 mt-2 text-xl">Objective to built on a solid foundation</p>
</span>

<section class="flex flex-col-reverse sm:grid sm:grid-cols-[2fr_4fr]">
	<img
		src="projects/assets/silly-cats-logo.svg"
		alt="Silly Cats Logo"
		class="my-auto h-32 mx-auto"
	/>
	<p class="sm:mt-4 mt-2 text-xl text-justify">
		Angular handles the frontend while Analog acts as a middleman and validator, allowing
		server-side data fetching. Pocketbase serves as both my database and auth manager, which lets me
		integrate Google and Facebook authentication via OAuth. <br /> Taking advantage of Brevo's (formerly
		know as SendingBlue) free tier for email verification since this is just a hobby project.
	</p>
</section>

<section class="flex flex-col-reverse sm:grid sm:grid-cols-[4fr_2fr]">
	<p class="sm:mt-4 mt-2 text-xl text-justify">
		Posts already support files, comments, likes, and a search feature to dive into the quirky world
		of SillyCats. Balancing performance and user security was a challenge but also a great chance to
		polish my backend and token management skills!
	</p>
	<img
		src="projects/assets/silly-cats-logo.svg"
		alt="Silly Cats Logo"
		class="my-auto h-32 mx-auto -scale-x-100"
	/>
</section>

<p class="sm:mt-6 mt-12 italic text-xl mx-auto w-3/5 sm:w-1/3">
	I'm still developing the app, but the results look promising, and I'm having so much fun working
	on it!
</p>
