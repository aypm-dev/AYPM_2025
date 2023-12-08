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
            Watching other's amazing 3D renders created a desire deep inside of me to get something cool out there! 
            Next thing in the morning in my game engine search I found <a href="godotengine.org/">Godot</a>, and how the kids say these days, it was love a first sigth! (do kids even say that? mmh..)<br><br>
        </p>
            
        <p class="hidden sm:block text-xl text-justify">
            Anyways, after the classic first project to learn the engine it was time for the good stuff. What about a 30 day project ;)
        </p>

    </div>
</div>

<p class="sm:w-2/3 mx-auto mt-12 text-xl text-justify"> 
    That's what Heroes Can Be Selfish is, a game I started, programmed, and published in only a month out of that inspiration!. This includes the code base, all artwork, game page, publicity, testing, and trailers!
</p>

<HeroGame/>

<p class="sm:w-2/3 mx-auto mt-12 mb-24 text-xl text-justify"> 
    In every story the heroes are the embodyment of the selfless persona looking for the well-being of the people, saving them from mosters and returning back treasures from generations past... <br><br>
    But what if the hero of this tale could take advantage of his heritage from a family of brave breed kiwis? And when no one in town suppects, their loose coins could be stolen out of their pockets by our kiwi... a broke and kleptomaniac kiwi addicted to purchasing useless items on Amezon to fill his home ;0
</p>




