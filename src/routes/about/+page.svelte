<script lang="ts">
    import SkillsHover from '$lib/components/SkillsHover.svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="relative flex flex-col w-screen items-center text-eerie-900 overflow-x-clip">

    <div class="flex w-full mt-32">
        <div class="relative flex flex-col h-fit w-full p-12 items-center text-snow border-t-[3px] border-b-[6px] border-eerie-900 bg-folly">
            <h1 class="text-center text-6xl"> ABOUT </h1>

            <p class="mt-4 text-xl text-center"> 
                Me, Angel!! I am a software developer, I recently completed my "Bachillerato" in Networking, and Im persuing
                a career in Web Developer, 
            </p>

            <div in:fly={{y:20, duration:500+(Math.random() * 300), delay:(Math.random() * 300)}} class="absolute flex top-0 -translate-y-1/2 left-[10%] z-10 w-16 aspect-square p-2 rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly">
                <img src="insomnia-logo.png"loading="lazy" alt="Insomnia Logo" title="Insomnia Logo" draggable="false" class="opacity-75 w-1/2 h-1/2">
            </div>
            <div in:fly={{y:20, duration:500+(Math.random() * 300), delay:(Math.random() * 500)}} class="absolute flex top-full -translate-y-1/2 left-[80%] z-10 w-20 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/>
            <div in:fly={{y:20, duration:500+(Math.random() * 300), delay:(Math.random() * 300)}} class="absolute flex top-full -translate-y-1/2 z-10 left-[calc(80%-1.25rem)] w-10 aspect-square justify-end items-top rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"> 
                <img src="graphql-logo.png"loading="lazy" alt="GraphQL Logo" title="GraphQL Logo" draggable="false" class="opacity-75 w-3/5 h-3/5 m-1">
            </div>
            <div in:fly={{y:20, duration:500+(Math.random() * 500), delay:(Math.random() * 600)}} class="absolute flex top-[calc(100%+6rem)] -translate-y-1/2 left-0 -translate-x-1/2 sm:left-[5%] sm:translate-x-0  z-10 w-32 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/>
        </div>
    </div>

    <SkillsHover/>

    <div class="relative flex w-screen h-[116rem] my-32 p-12 mb-48 justify-center text-snow border-t-[3px] border-b-[6px] border-eerie-900 bg-folly">
        <div class="container">
            <h1 class="text-center text-6xl"> PROJECTS </h1>

            <p class="mt-4 text-xl text-center"> 
                We all love projects! You love them, I love them!<br><br>
                These are the projects that I'm most proud of, 
            </p>

            <div class="absolute flex top-0 -translate-y-1/2 left-[80%] sm:left-[76%] z-10 w-12 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/>
            <div class="absolute flex top-[5rem] -translate-y-1/2 left-[-5%] sm:left-[18%] z-10 w-20 aspect-square p-2 justify-center items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly">
                <img src="git-logo.png"loading="lazy" alt="Git Logo" title="Git Logo" draggable="false" class="opacity-75 w-1/2 h-1/2">
            </div>
            <div class="absolute flex top-[calc(100%-4rem)] -translate-y-1/2 left-[21%] z-10 w-20 aspect-square justify-center items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"> 
                <i class="fa-solid fa-kiwi-bird fa-2xl fa-fw text-white opacity-75 -rotate-45"/>
            </div>
            <div class="absolute flex top-full -translate-y-1/2 left-[10%] z-10 w-12 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/> 
            <div class="absolute flex top-full -translate-y-1/2 left-[80%] z-10 w-48 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/>
            <div class="absolute flex top-full -translate-y-1/2 left-[66%] z-10 w-32 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/>
        </div>
    </div>
</div>

