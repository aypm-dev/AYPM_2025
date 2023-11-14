<script>
    import HeroGame from './HeroGame.svelte';

</script>

<div style="grid-template-columns: 3fr 7fr" class="grid w-full gap-4">
    <div class="flex flex-col w-FIT h-full mt-12 items-end">
        {#each {length: 12} as _, index}
            <h1 class="-mt-[39.5px] sm:-mt-10 text-6xl sm:text-7xl whitespace-nowrap"> HCBS? </h1>
        {/each}
    </div>

    <div class="flex flex-col items-center">
        <span class="mt-4 text-2xl font-bold"> HEROES CAN BE SELFISH? </span>

        <p class="mt-4 text-xl text-justify"> 
            Don't you get this burst of motivation wanting to create something in the middle of the night? Well, the same happened to me...
        </p>
        <p class="hidden sm:block text-xl text-justify">
            Watching other's amazing 3D renders created a desire in deep inside of me to get something cool out there! 
            Next thing in the morning in my game engine search I found <a href="godotengine.org/">Godot</a>, and how the kids say these days, it was love a first sigth! (do kids even say that? mmh..)<br><br>
        </p>
            
        <p class="hidden sm:block text-xl text-justify">
            Anyways, after the classic first project to learn the engine it was time for the good stuff. What about a 30 day project ;)
        </p>

    </div>
</div>


<p class="sm:hidden text-xl text-justify">
    Something unique made by AYPM, something I can be proud. A project I can show any one to understand me immediately. Well... maybe I didnt got it first time, but at least I've ideas for the next generations. And thats why I'm going to make a new one each year! So.. <br><br>
</p>

<p class="sm:w-2/3 mx-auto mt-12 text-xl text-justify"> 
    Well this is what Heroes Can Be Selfish is, a game I started, programmed, and published in only a month. This includes all artwork, game page, publicity, testing, and trailers!
</p>

<HeroGame/>

<p class="sm:w-2/3 mx-auto mt-12 mb-24 text-xl text-justify"> 
    Promise: Imagine a world where a floating island creates soda that is stored in an ocean, and that soda goes to the entire process of production runned by kiwis. Thats the theming of this portfolio. 
</p>




