<div style="grid-template-columns: 3fr 7fr" class="grid w-full gap-4">
	<div class="hidden sm:flex flex-col w-FIT h-full mt-12 items-end">
		{#each { length: 12 } as _, index}
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">KIWI</h1>
		{/each}
	</div>

	<div class="sm:hidden flex flex-col w-FIT h-full mt-12 items-end">
		{#each { length: 27 } as _, index}
			<h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap">KIWI</h1>
		{/each}
	</div>

	<section class="flex flex-col items-center">
		<h1 class="mt-4 text-2xl font-bold">Kiwi's Twitch!!</h1>

		<p class="mt-4 text-xl text-justify">
			After seeing these two recent projects is not surprise that I watch a lot of Twitch
		</p>
		<p class="mt-1 text-xl text-justify">
			As a web developer and having that many hours in a platform, you start to notice litle anoying
			details with the Twitch interface, clutter, bugs, and unused space, and only gets worst with
			the addition of the REQUIRED extensions that are necessary to experience the true Twitch
			experience..
		</p>

		<p class="hidden sm:block text-xl text-justify">
			So I wanted to take maters into into my own hands, and designed a quick prototype of what the
			Twitch app would look like under a simple promise: <i>"What would be my perfect Twitch"</i>
		</p>
	</section>
</div>

<p class="sm:hidden text-xl text-justify">
	So I wanted to take maters into into my own hands, and designed a quick prototype of what the
	Twitch app would look like under a simple promise: <i>"What would be my perfect Twitch"</i>
</p>

<section class="flex sm:flex-row flex-col-reverse gap-6 mt-12 sm:w-3/4 mx-auto">
	<p class="mx-auto text-xl text-justify">
		To no one's suprise, that was way too abstract to base the redesing on. So as a test I started
		with removing the sidebar first, then fixing the empty space, and improving message auto
		suggestions. Little by little everything was taking shape. So I thought I could make it actually
		functional
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
	<img
		src="twitch-sidebar.webp"
		alt="Hero kiwi"
		class="mx-auto w-64 mb-2 rounded-xl border-[3px] border-b-[6px] border-eerie-900 ring-2 ring-white shadow-lg"
	/>
</section>

<img
	src="projects/assets/chat.webp"
	alt="How twitch chat looks in Kiwi's Twitch"
	class="mt-12 mx-auto rounded-xl border-[3px] border-b-[6px] border-eerie-900 ring-2 ring-white shadow-lg"
/>

<p class="sm:w-2/3 mx-auto mt-12 text-xl text-justify">
	After finding a library to connect to live chats and managed to receive the message data, I
	realized the library was not only limited to chat integrations but had access to a bunch of public
	endpoints to get all the data you wanted, and the rest is history... When I realized I've been
	working in the proyect for weeks and the app became an actual alternative to the main Twitch
	interface, I even took time to improve customization and optimize the load times, ended up with
	sub-second page loads for the stream player that required up to 22 requests for the necessary data
	(this is due to not having access to the internal GraphQL API that Twitch uses, sadly...)
</p>

<pre
	class="p-4 rounded-lg bg-eerie-800 text-eerie-500 overflow-clip text-ellipsis text-xs sm:w-3/4 mx-auto mt-4"><code
		>{`...[
    apiClient.users.getUserByName(channel),
    getStreamData(apiClient, channel),
    getUserData(apiClient),
    getChannelVideoData(apiClient, videoId),
    getChannelDataObject(channelRaw),
    getChannelVideosData(apiClient, channelRaw!),
    checkUserSubscription(apiClient, userData!, channelRaw!),
    getUsersFollowedData(apiClient, userData),
    getAdditionalStreamData(channelRaw!),
    getChannelTeam(apiClient, channelRaw!),
    getBadges(apiClient),
    getChannelBadges(apiClient, channelRaw!),
    getBitsData(apiClient),
    getTwitchEmotes(apiClient),
    getTwitchChannelEmotes(apiClient, channelRaw!),
    get7TvEmotes(),
    get7TvChannelEmotes(channelRaw!),
    getBettertvEmotes(),
    getBettertvChannelEmotes(channelRaw!),
    getFrankerfacezEmotes(),
    getFrankerfacezChannelEmotes(channelRaw!),
    getChatSettings(apiClient, channelRaw!),
]`}
</code></pre>

<p class="sm:w-2/3 mx-auto my-12 text-xl text-justify">
	I want to go back and rework the UI to publish it as a competitive open source third party app for
	Twitch in the future! (And maybe some moderation tools, people like those hahah)
</p>
