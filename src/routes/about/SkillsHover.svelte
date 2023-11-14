<script lang="ts">
	import { fly } from "svelte/transition";

    const touch = matchMedia('(hover: none)').matches;
    let background_container: HTMLDivElement
    let background_2: HTMLDivElement

    function mouseHoverHandler (event: MouseEvent) {
        const target_rect: DOMRect = background_container.getBoundingClientRect()

        const mouse_x_position = event.clientX - target_rect.left
        const x_percent = Math.ceil((mouse_x_position / target_rect.width) * 100)

        background_2.style.clipPath
        background_2.animate({
            "clipPath": `polygon(0 0, ${x_percent}% 0, ${x_percent}% 100%, 0% 100%)`
        }, { delay: 0, duration: 500, fill: "forwards" })
    }

    function touchMoveHandler (event: TouchEvent) {
        const target_rect: DOMRect = background_container.getBoundingClientRect()

        const mouse_x_position = event.touches[0].pageX - target_rect.left
        const x_percent = Math.ceil((mouse_x_position / target_rect.width) * 100)

        background_2.style.clipPath
        background_2.animate({
            "clipPath": `polygon(0 0, ${x_percent}% 0, ${x_percent}% 100%, 0% 100%)`
        }, { delay: 0, duration: 500, fill: "forwards" })
    }

    function mouseLeaveHandler ( event: MouseEvent ) {
        const target_rect: DOMRect = background_container.getBoundingClientRect()

        const mouse_x_position = event.clientX - target_rect.left
        const x_percent = Math.round(mouse_x_position / target_rect.width) * 100

        
        background_2.animate({
            "clipPath": `polygon(0 0, ${x_percent}% 0, ${x_percent}% 100%, 0% 100%)`
        }, { delay: 100, duration: 200, fill: "forwards", easing: "cubic-bezier(.55,.01,.45,1.01)" })
    }
</script>

<div class="relative container mt-24">
    <h1 in:fly={{y:20, duration:500+(Math.random() * 200)}} class="absolute -top-8 left-1/2 z-20 text-center text-2xl font-bold italic -translate-x-1/2"> OUR PARTNERS :) </h1>
    <div in:fly={{y:20, duration:500+(Math.random() * 300), delay:(Math.random() * 200)}} bind:this={background_container} on:touchmove={touchMoveHandler} on:mousemove={mouseHoverHandler} on:mouseleave={mouseLeaveHandler} class="relative flex w-5/6 sm:w-1/2 h-full mx-auto rounded-xl shadow-lg select-none bg-red-500">
        <div class="grid grid-cols-4 gap-4 w-full p-4 bg-white rounded-xl border-[3px] border-b-[6px] border-eerie-900">
            <div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center shrink-0">
                <img style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)" src="react-logo.png"loading="lazy" alt="REACT Logo" draggable="false" class="pointer-events-none">
            </div>
            <div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center">
                <img style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(90%)" src="css-logo.png" loading="lazy" alt="CSS Logo" draggable="false" class="h-full pointer-events-none">
            </div>
            <div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center ">
                <img style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(90%)" src="javascript-logo.png" loading="lazy" alt="JAVASCRIPT Logo" draggable="false" class="rounded-xl pointer-events-none">
            </div>
            <div class="absolute top-[calc(100%+0.5rem)] select-none">
                <span class="text-sm">
                    {touch? "Hey! Slide up here": "Hey! Hover up here"} <i class="fa-solid fa-turn-up mr-2"/>
                </span>
            </div>
            <div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center">
                <img style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(80%)" src="svelte-logo.png" loading="lazy" alt="SVELTE Logo" draggable="false" class="h-full pointer-events-none">
            </div>
        </div>
        <div bind:this={background_2} style="clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);" class="absolute grid grid-cols-4 gap-4 w-full p-4 overflow-hidden bg-folly rounded-xl border-[3px] border-b-[6px] border-eerie-900">
            <div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center shrink-0">
                <img style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)" src="react-logo.png"loading="lazy" alt="REACT Logo" draggable="false" class="pointer-events-none">
            </div>
            <div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center shrink-0">
                <img style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)" src="tailwind-logo.png" loading="lazy" alt="TAILWIND Logo" draggable="false" class="h-full pointer-events-none">
            </div>
            <div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center">
                <img style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)" src="typescript-logo.png" loading="lazy" alt="TYPESCRIPT Logo" draggable="false" class="rounded-xl pointer-events-none">
            </div>
            <div class="flex w-2/3 aspect-square mx-auto my-auto justify-center items-center shrink-0">
                <img style="filter: drop-shadow(0 0.35rem 0.2px black) saturate(110%)" src="sveltekit-logo.png" loading="lazy" alt="HTML Logo" draggable="false" class="pointer-events-none">
            </div>
        </div>

    </div>
</div>

