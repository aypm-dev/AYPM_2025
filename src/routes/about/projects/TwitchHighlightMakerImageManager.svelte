<script>
	import { fly } from 'svelte/transition';

	let imageUrl = 'https://aypm.dev/sillycat.jpeg';
	let imageResolution = { width: 0, height: 0 };
</script>

<div
	class="h-fit p-2 px-5 twitch-higlight-maker-fonts w-full sm:w-2/3 mx-auto mt-6 py-5 border border-[#27272A] rounded-md"
>
	<!--[-->
	<section>
		<h1 class="text-3xl font-medium mb-2">Image Manager</h1>

		<form>
			<div class="relative flex flex-col gap-1.5 mt-4">
				<label
					data-melt-label=""
					data-label-root=""
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
					>Image Name:</label
				>
				<div class="relative w-full h-fit">
					<input
						class="border-[#27272A] bg-black ring-offset-black placeholder:text-gray-300/75 focus-visible:ring-[#D4D4D8] flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						required
						name="imageName"
					/>
				</div>
			</div>

			<div class="relative flex flex-col gap-1.5 mt-4">
				<label
					data-melt-label=""
					data-label-root=""
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
					>Image URL:</label
				>
				<div class="relative w-full h-fit">
					<input
						bind:value={imageUrl}
						class="border-[#27272A] bg-black ring-offset-black placeholder:text-gray-300/75 focus-visible:ring-[#D4D4D8] flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						required
						name="imageUrl"
						type="url"
						placeholder="imgur.com/a/..."
					/>
				</div>
			</div>

			<div
				class:checker-bg={imageUrl}
				class="relative w-full aspect-square border-[#27272A] border mt-4 transition-[background-position] duration-10000 svelte-h79mtq"
			>
				{#if !imageUrl}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="48"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-image-off absolute text-[#27272A] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
						><line x1="2" x2="22" y1="2" y2="22" /><path
							d="M10.41 10.41a2 2 0 1 1-2.83-2.83"
						/><line x1="13.5" x2="6" y1="13.5" y2="21" /><line
							x1="18"
							x2="21"
							y1="12"
							y2="15"
						/><path
							d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
						/><path d="M21 15V5a2 2 0 0 0-2-2H9" /></svg
					>
				{:else}
					{#key imageUrl}
						<img
							bind:naturalHeight={imageResolution.height}
							bind:naturalWidth={imageResolution.width}
							in:fly|globbal={{ duration: 100, y: -10 }}
							src={imageUrl}
							alt="iamge"
							class="max-w-full max-h-full object-cover absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
						/>

						<span
							class="absolute whitespace-nowrap left-full top-full -translate-y-full font-outline-black-2 dark:font-white-black-2 -translate-x-full p-2 text-white"
						>
							{imageResolution.width}x{imageResolution.height}
						</span>
					{/key}
				{/if}
			</div>
			<label class="capitalize select-none">
				<button
					data-state=""
					type="button"
					role="checkbox"
					aria-checked="true"
					aria-required="false"
					data-melt-checkbox=""
					data-checkbox-root=""
					disabled
					class="border-white ring-offset-black focus-visible:ring-[#D4D4D8] data-[state=checked]:bg-white data-[state=checked]:text-black peer box-content h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 mt-2"
				>
					<div
						class="flex h-4 w-4 items-center justify-center text-current"
						data-checkbox-indicator=""
						data-state="unchecked"
					/>
				</button>
				<span
					class="text-sm font-medium leading-none ml-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>Use Image Resolution</span
				></label
			>

			<button
				type="submit"
				tabindex="0"
				class="ring-offset-black focus-visible:ring-[#D4D4D8] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black enable:hover:bg-white/90 h-10 px-4 py-2 mt-4 w-full"
				data-button-root=""
				disabled
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide-icon lucide lucide-image-plus mr-2 text-"
					><path d="M16 5h6" /><path d="M19 2v6" /><path
						d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"
					/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /><circle
						cx="9"
						cy="9"
						r="2"
					/></svg
				>
				Add image
			</button>
		</form>
		<div class="flex flex-col gap-4 mt-4" />
	</section>
	<!--]-->
</div>

<style>
	.twitch-higlight-maker-fonts {
		font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}

	.checker-bg {
		background-image: linear-gradient(45deg, #80808010 25%, transparent 25%),
			linear-gradient(-45deg, #80808010 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, #80808010 75%),
			linear-gradient(-45deg, transparent 75%, #80808010 75%);
		background-size: 20px 20px;
		background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
	}
</style>
