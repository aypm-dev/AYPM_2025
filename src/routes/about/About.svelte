<script>
	import { fly } from 'svelte/transition';
</script>

<div class="relative w-screen mt-12 p-12 shadow-lg text-snow border-t-[3px] border-b-[6px] border-eerie-900 bg-folly">
    <div class="container flex mx-auto justify-center">
        <div class="w-full flex flex-col md:w-2/3 items-center">
            <h1 class="text-6xl sm:text-7xl whitespace-nowrap text-center"> ABOUT? </h1>

            <p class="-mt-6 z-10 text-xl text-justify"> 
                Yeah! I am a programmer that recently completed his Bachillerato in Networking. I've programming for 4 years mostly in Scripting languages like Python, Lua, GDScript, and TypeScript. My first job got me into Web Apps Development B2B, improving on project managment abilities!<br>

                I love getting better at drawing, and body building to hopefully become a big guy 
                <i class={`fa-solid fa-fw fa-face-grin-beam-sweat`}/>
            </p>

            <div in:fly={{y:20, duration:500+(Math.random() * 300), delay:(Math.random() * 300)}} class="absolute flex top-0 -translate-y-1/2 left-[10%] z-10 w-16 aspect-square p-2 justify-center items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly">
                <img src="insomnia-logo.png"loading="lazy" alt="Insomnia Logo" title="Insomnia Logo" draggable="false" class="opacity-75 w-1/2 h-1/2">
            </div>
            <div in:fly={{y:20, duration:500+(Math.random() * 300), delay:(Math.random() * 700)}} class="absolute flex top-full -translate-y-1/2 left-[80%] z-10 w-20 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/>
            <div in:fly={{y:20, duration:500+(Math.random() * 300), delay:(Math.random() * 300)}} class="absolute flex top-full -translate-y-1/2 z-10 left-[calc(80%-1.25rem)] w-10 aspect-square justify-center items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"> 
                <img src="graphql-logo.png"loading="lazy" alt="GraphQL Logo" title="GraphQL Logo" draggable="false" class="opacity-75 w-3/5 h-3/5">
            </div>
            <div in:fly={{y:20, duration:500+(Math.random() * 500), delay:(Math.random() * 800)}} class="absolute flex top-[calc(100%+6rem)] -translate-y-1/2 left-0 -translate-x-1/2 sm:left-[5%] sm:translate-x-0  z-10 w-32 aspect-square rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-folly"/>
        </div>
    </div>
</div>