<script lang="ts">
	import { onMount } from "svelte";
	import ConveryorBelt from "./ConveryorBelt.svelte";

    const animation_duration = 12
    let bottle: HTMLDivElement
    let converyor_belt: ConveryorBelt

    onMount(()=>{
        bottle.addEventListener("animationstart", animationLooped)
        bottle.addEventListener("animationiteration", animationLooped)
    })

    function animationLooped(){
        setTimeout(()=>{
            converyor_belt.circle_velocity.set(0)
        }, (animation_duration * 0.25) * 1000)

        setTimeout(()=>{
            converyor_belt.circle_velocity.set(0.01)
        }, (animation_duration * 0.575) * 1000)
    }

</script>

<section class="mt-12 container flex flex-col w-screen mx-auto items-center overflow-x-clip gap-2">
    <div class="w-20 h-32 rounded-xl pt-2 border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
        <div class="flex gap">
            <div class="flex w-4 h-4 mx-auto rounded-full border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg"/>
            <div class="flex w-4 h-4 mx-auto rounded-full border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg"/>
            <div class="flex w-4 h-4 mx-auto rounded-full border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg"/>
        </div>

        <div class="flex w-12 h-12 mx-auto mt-4 rounded-full border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg overflow-clip">
            <svg class="-translate-x-1 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 512 512"><path d="m507.606 228.536-50.509-50.509a124.386 124.386 0 0 1-16.631 20.622l-2.586 2.586 48.514 48.513c5.857 5.857 15.355 5.857 21.213 0 5.857-5.857 5.857-15.355-.001-21.212zM256 465.946h-58.054l-53.571-53.571a182.442 182.442 0 0 1-31.908-4.071v8.375c0 3.979 1.581 7.794 4.394 10.606l39.119 39.119c-6.531 1.622-11.379 7.508-11.379 14.542 0 8.284 6.716 15 15 15H256c8.284 0 15-6.716 15-15s-6.716-15-15-15zM419.391 43.92c-.109-.112-.22-.223-.332-.331-37.002-36.834-96.691-36.649-133.491.172l-35.782 35.781 16.117 16.117c5.858 5.857 5.858 15.355 0 21.213-5.857 5.857-15.355 5.857-21.213 0l-37.33-37.33h-55.97C67.914 79.542 0 147.455 0 230.964 0 316.283 69.377 382.53 151.642 382.53c39.341 0 77.915-15.397 106.964-44.446L419.25 177.44c36.797-36.809 36.845-96.662.141-133.52zm-35.924 67.492c0 8.284-6.716 15-15 15s-15-6.716-15-15V95.345c0-8.284 6.716-15 15-15s15 6.716 15 15z"/></svg>
        </div>
    </div>
    <div class="w-28 h-12 rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
    <div class="relative wave h-24 overflow-y-clip">
        <div bind:this={bottle} class="absolute w-12 h-32 -translate-x-1/2 soda rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/>
    </div>

    <div class="relative flex flex-col gap-2 pt-80 z-20">
        <div class="absolute flex w-fit -translate-x-1/2 top-0 move_bottle origin-bottom">
            <svg class="w-32 h-full" viewBox="0 0 210 512">
                <path d="M162 15c0-8.281-6.719-15-15-15H61c-8.281 0-15 6.719-15 15v46h116zM162.05 91H46.489C21.078 129.535 0 154.914 0 211h210c0-56.297-23.164-83.61-47.95-120zM132.598 327.523a15.009 15.009 0 0 1-19.207 0l-26.395-21.996-26.394 21.996a15.004 15.004 0 0 1-19.207 0L0 293.027V361h210v-12.977l-51.004-42.5zM0 467c0 24.813 20.188 45 45 45h120c24.813 0 45-20.188 45-45v-76H0zM0 253.973l50.996 42.5 26.399-21.996c5.558-4.637 13.64-4.633 19.203 0l26.398 21.996 26.399-21.996a14.994 14.994 0 0 1 19.203 0L210 308.973V241H0zm0 0"></path>
            </svg>
        </div>

        <ConveryorBelt bind:this={converyor_belt}/>
    </div>
</section>

<style>
    .wave {
        animation: wave 0.5s infinite;
    }

    .move_bottle {
        animation: move_bottle 12s infinite;
    }

    .soda {
        animation: soda 12s infinite forwards;
    }

    @keyframes move_bottle{
        0% {
            opacity: 0;
            left: 0%;
        }
        10% {
            opacity: 1;
        }
        40% {
            left: 50%;
        }
        60% {
            left: 50%;
        }
        90% {
            opacity: 1;
            top: 0%;
        }
        100% {
            opacity: 0;
            left: 100%;
        }
    }

    @keyframes soda{
        0% {
            height: 0rem;
            opacity: 0;
        }
        40% {
            height: 0rem;
            opacity: 0;
        }
        45% {
            opacity: 1;
            top: 0rem;
            height: 6rem;
        }
        55% {
            top: 0rem;
            height: 6rem;
        }
        60% {
            top: calc(6rem + 2px);
            height: 0rem;
        }
        100% {
            top: calc(6rem + 2px);
        }
    }

    @keyframes wave {
        from {
            transform: translateX(5px);
        }
        60% {
            transform: translateX(-5px);
        }
        to {
            transform: translateX(5px);
        }
    }
    
</style>