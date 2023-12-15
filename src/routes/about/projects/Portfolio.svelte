<script>
    import kiwi from "$lib/images/kiwi.gif"
	import { fly } from "svelte/transition";

</script>

<div style="grid-template-columns: 1fr 2fr" class="grid w-full gap-4">
    <div class="flex flex-col w-full h-full mt-12 items-end">
        {#each {length: 12} as _, index}
            <h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap"> {index % 2 === 0? "PORT?": "FOLIO"} </h1>
        {/each}
    </div>

    <div class="flex flex-col items-center">
        <span class="mt-4 text-2xl font-bold"> 2023 PORTFOLIO? </span>

        <p class="mt-4 text-xl text-justify"> 
            This portfolio comes wanting to differentiate myself from thousands of programmers<br><br>
        </p>
        <p class="hidden sm:block text-xl text-justify">
            Something unique, that I can be proud of. Maybe not the best out there, but A project I can show any one to understand me immediately. Well... maybe I didnt got it first time, but at least I've ideas for the next generations. And thats why I'm going to make a new each year! <br>
        </p>
            
        <h3 class="mt-auto hidden sm:block text-3xl text-center">
            WELCOME TO THE FIRST EDITION OF, well... AYMP PORTFOLIOS
        </h3>

    </div>
</div>


<p class="sm:hidden text-xl text-justify">
    Something unique made by AYPM, something I can be proud. A project I can show any one to understand me immediately. Well... maybe I didnt got it first time, but at least I've ideas for the next generations. And thats why I'm going to make a new one each year! So.. <br><br>
</p>

<h3 class="sm:hidden text-3xl text-center">
    WELCOME TO THE FIRST EDITION OF, well... AYMP PORTFOLIOS
</h3>

<div class="flex w-full mt-12 items-center justify-center">
    <img class="h-32 rounded-xl border-[3px] border-b-[6px] border-eerie-900 ring-2 ring-white shadow-lg" src={kiwi} alt="innoceana page"/>
</div>

<p class="sm:w-2/3 mx-auto mt-12 mb-24 text-xl text-justify"> 
    Promise: Imagine a world where a floating island creates soda that is stored in an ocean, and that soda goes to the entire process of production runned by kiwis. Thats the theming of this portfolio. 
</p>




