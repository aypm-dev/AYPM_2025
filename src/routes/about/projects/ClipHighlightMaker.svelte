<script>
	import TwitchHighlightMakerImageManager from './TwitchHighlightMakerImageManager.svelte';
</script>

<div style="grid-template-columns: 3fr 7fr" class="grid w-full gap-4">
	<div class="hidden sm:flex flex-col h-full mt-12 items-end">
		{#each { length: 7 } as _, index}
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">CLIP-</h1>
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">MAKER</h1>
		{/each}
	</div>

	<div class="sm:hidden flex flex-col h-full mt-12 items-end">
		{#each { length: 16 } as _, index}
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">CLIP-</h1>
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">MAKER</h1>
		{/each}
	</div>

	<div class="flex flex-col items-center">
		<span class="mt-4 text-2xl font-bold"> CLIP HIGHLIGHT MAKER? </span>

		<p class="sm:mt-4 mt-7a text-xl text-justify">
			At the time
			<a
				href="https://help.twitch.tv/s/article/how-to-use-clips?language=en_US"
				target="_blank"
				rel="noreferrer"
				class="underline"
			>
				Twitch recently published
			</a>
			a feature for the clips player where you could select parts of a twitch clip and position them
			into a vertical video stuitable for Tiktoks or YT Shorts! I was overwhelmed the how limited the
			editor was, but technically worked for simpler videos
		</p>

		<!-- DONT SHOW ON MOBILE -->
		<p class="mt-2 text-xl text-justify hidden sm:block">
			One day, one of those dumb projects ideas came into my mind... Maybe I could use a video
			editing library to select areas from a video Player and export them into a vertical video like
			those Tiktoks! And if the video editor was optimized enough I could edit clips in only 5
			minutes for something that could've taken hours in a normal editor. ANDDD Welll, I was
			wrong... Kinda
		</p>
	</div>
</div>

<!-- SHOW ONLY ON MOBILE -->
<p class="mt-2 text-xl text-justify sm:hidden">
	One day, one of those dumb projects ideas came into my mind... Maybe I could use a video editing
	library to select areas from a video Player and export them into a vertical video like those
	Tiktoks! And if the video editor was optimized enough I could edit clips in only 5 minutes for
	something that could've taken hours in a normal editor. ANDDD Welll, I was wrong... Kinda
</p>

<p class="mt-4 text-xl text-justify">
	Seems like there are not matured video manipulation libraries for JS, so if I wanted to continue
	with this project I'll have to learn... pure FFMPEG!! Well, Fluent FFMPEG, but still... Definitely
	it had a step learning curve and I had to get into the world data classes in JS just to use it in
	the server, but you get rewarded with a infinitely configurable video output! <br />And after
	adding a primitive area selector for video I could render the video and return it to the client to
	display the final output! <br /><br /> Done, right? Well, maybe that's what the Twitch engineers, thought
	but you need a lot more funcionalities to make an editor like this useful...
</p>

<p class="mt-4 text-xl text-justify">
	Why not automate the rest of details you find in this kind of highlights uploaded to Tiktok, let's
	say text captions, or the social media handlers of the creators, or images!! <br />
	I knew I could autogenerate captions for the video using a speech to text AI, maybe implemente two
	diferent services to get the best of both worlds! And then use the generated captions to add text to
	the output
</p>

<div class="flex sm:flex-row flex-col mx-auto gap-3 justify-center">
	<img
		src="/captions.webp"
		alt="Looka at Caption Manager"
		class="sm:w-1/3 rounded-xl sm:rounded-r-none border-[3px] border-b-[6px] border-eerie-900 ring-2 ring-white shadow-lg my-4"
	/>
	<img
		src="/zone.webp"
		alt="Looka at Caption Manager"
		class="sm:w-1/3 rounded-xl sm:rounded-l-none border-[3px] border-b-[6px] border-eerie-900 ring-2 ring-white shadow-lg my-4"
	/>
</div>

<p class="mt-4 text-xl text-justify">
	This project really does have cool features that im super proud of, like bein hable to
	differentiate from diferent speakers, being able to apply diferent filters to zones, get an
	automatic description and title for the clips, or get the url for the source files in a Twitch
	clip just by using the url, and more!
</p>

<TwitchHighlightMakerImageManager />

<p class="mt-4 text-xl text-justify mb-24">
	For now this tool is for personal use only, hopefully I would release it in the future, or open
	source it!
</p>
