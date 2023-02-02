<script lang="ts">
    
    import { fly, fade } from 'svelte/transition'
    import CloudManager from '$lib/components/CloudManager.svelte'
    import UserReview from '$lib/components/UserReview.svelte';
    import Input from '$lib/components/input.svelte'
    let user_opinion: string = "Man, I love this Website!"

    let user_review: string = "Man, I love this Website!"
    let show_kiwi_text = false

    function getAge() {
      const current_date = new Date().getTime()
      const birth_date = new Date("02-11-2004").getTime()
      return ((current_date - birth_date) / 3.15576e+10).toFixed(1)
    }
</script>

<div class="absolute">
    <CloudManager/>
</div>

<div class="relative flex flex-col w-full scale-90 sm:scale-100 items-center text-eerie-900">

    <div class="relative flex w-full sm:w-[40rem] mt-12 gap-2">
        <div in:fly={{y:50, delay: 0, duration:500}} class="flex w-1/3 h-96 mt-[12rem] p-8 gap-4 justify-center items-end rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
            <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
            <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
            <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
        </div>

        <div in:fly={{y:50, delay: 200, duration:500}} class="flex flex-col w-1/3 h-96 mt-[6rem] p-8 gap-4 items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
        </div>

        <div in:fly={{y:50, delay: 400, duration:500}} class="flex w-1/3 h-96 mt-[0rem] p-8 gap-4 justify-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
            <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl bg-eerie-900"/>
            <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl bg-eerie-900"/>
            <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl bg-eerie-900"/>
        </div>

        <div 
            style="
                top: 50%;
                transform: translateY(-50%);
                clip-path: polygon(0 100%, 0 0, calc(32.8% - 0.25rem) 0, calc(32.8% - 0.25rem) 100%, calc(33.333333% + 0.25rem) 100%, calc(33.333333% + 0.25rem) 0, calc(66.66666% - 0.25rem) 0, calc(66.66666% - 0.25rem) 100%, calc(67.2% + 0.25rem) 100%, calc(67.2% + 0.25rem) 0, 100% 0, 100% 100%);
            "
            class="absolute flex top-0 my-auto w-full sm:w-[40rem] gap-2 justify-center overflow-hidden">
            <span in:fade={{delay: 900, duration: 500}} style="font-size:2.75rem; line-height: 1" class="flex w-full h-32 gap-x-1 justify-center items-center font-bold text-clip whitespace-nowrap overflow-hidden select-none">
                <span style="transform: translate(7px, 25px);" class="inline-block ">A</span>
                <span style="transform: translate(6px, 45px);" class="inline-block ">N</span>
                <span style="transform: translate(4px, 10px);" class="inline-block ">G</span>
                <span style="transform: translate(0px, 40px);" class="inline-block ">E</span>
                <span style="transform: translate(3px, 20px);" class="inline-block ">L</span>
                <span class="inline-block ">&nbsp</span>
                <span style="transform: translate(8px, -10px);" class="inline-block ">Y</span>
                <span style="transform: translate(4px, 12px);" class="inline-block ">A</span>
                <span style="transform: translate(10px, 0px);" class="inline-block ">D</span>
                <span style="transform: translate(2px, 30px);" class="inline-block ">E</span>
                <span style="transform: translate(1px, 15px);" class="inline-block ">R</span>
                <span class="inline-block ">&nbsp</span>
                <span style="transform: translate(6px, -22px);" class="inline-block ">P</span>
                <span style="transform: translate(0px, -6px);" class="inline-block ">A</span>
                <span style="transform: translate(-3px, 12px);" class="inline-block ">N</span>
                <span style="transform: translate(-3px, -5px);" class="inline-block ">I</span>
                <span style="transform: translate(-5px, 10px);" class="inline-block ">A</span>
                <span style="transform: translate(-4px, -25px);" class="inline-block ">G</span>
                <span style="transform: translate(-5px, -10px);" class="inline-block ">U</span>
                <span style="transform: translate(-7px, -30px);" class="inline-block ">A</span>
                <span class="inline-block ">&nbsp</span>
                <span style="transform: translate(-2px, -40px);" class="inline-block ">M</span>
                <span style="transform: translate(-4px, -50px);" class="inline-block ">O</span>
                <span style="transform: translate(-5px, -30px);" class="inline-block ">R</span>
                <span style="transform: translate(-7px, -40px);" class="inline-block ">A</span>
            </span>
        </div>

        <div in:fade={{delay: 1500, duration: 500}} class="absolute flex top-[10.8rem] my-auto w-8 h-8 gap-2 bg-slate-300 bg-opacity-10">
            <i class="fa-solid fa-kiwi-bird fa-2xl"></i>
        </div>

        <div in:fade={{delay: 1500, duration: 500}} class="absolute flex top-[36rem] left-[92.5%] my-auto w-8 h-8 gap-2 bg-slate-300 bg-opacity-10">
            <i class="fa-solid fa-fish fa-2xl animate-[spin_1.75s_linear_infinite]"></i>
        </div>

        <div in:fade={{delay: 1500, duration: 500}} class="absolute flex top-96 left-[calc(66.66667%+0.25rem)] w-64 h-20 my-auto mt-4 gap-2 items-center">
            <div class="w-8 h-20 p-2 gap-4 items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
            <div class="w-24 h-[4.25rem] p-2 gap-4 items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
        </div>
        
        <div in:fade={{delay: 1500, duration: 500}} class="absolute flex top-96 left-[calc(66.66667%+9.25rem)] w-64 h-20 my-auto mt-4 gap-2 items-start">
            <div class="w-8 h-[24rem] mt-2 p-2 gap-4 items-center rounded-xl rounded-tr-[128px] border-[3px] border-b-[6px] border-eerie-900 ring-4 ring-white bg-folly"/>
        </div>
    </div>

    <div in:fade={{delay: 1500, duration: 500}} class="flex w-full sm:w-[40rem] mt-4 gap-2">
        <div class="flex flex-col w-[calc(33.3333333%-0.25rem)] h-20 ml-auto mr-[16.6666667%] p-2 gap-4 items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
            <h1 class="font-bold text-center"> 
                Frontend Developer <br>   
                Software Developer     
            </h1> 
        </div>
    </div>
</div>

<div class="relative flex w-screen h-[116rem] my-32 p-12 mb-48 justify-center text-snow border-t-[3px] border-b-[6px] border-eerie-900 bg-folly">
    <div class="container">
        <h1 class="text-center text-3xl"> HOW'S ANGEL? </h1>

        <p class="mt-4 text-xl text-center"> 
            I am Angel, a {getAge()} year old software developer, Inspired by what the limit of human creativity is, and looking to give the world the best of myself!   
        </p>

        <p class="mt-4 text-xl text-center"> 
            And, more importandly, I'm also a software engineer.. well more like a Web Developer.. well more like a Front End Developer, but I'm really good at it!.. <br>
            What? you don't belive me? Just look at your own review for my beautiful website down bellow!
        </p>

        <div class="relative flex w-full h-[27rem] mt-32 gap-8 overflow-clip border-3 border-eerie-900">
            <div class="absolute top-0 w-full h-1/6 z-10 bg-gradient-to-b from-folly to-transparent"/>
            <div class="absolute top-[83.34%] w-full h-1/6 z-10 bg-gradient-to-t from-folly to-transparent"/>
            
            <ul class="flex flex-col h-[54rem] w-1/4 gap-4 items-start animate-infinite-scroll select-none">
                {#each {length: 6} as _, index}
                    <UserReview emote={index % 2 == 0? "fa-star": "fa-heart"} user_name="You" text={user_review}/>
                {/each}
            </ul>

            <div class="flex flex-col w-2/4 justify-center">
                <Input bind:value={user_review} label="Your review:" name="review_input" autocomplete={false}/>
                <p style="font-size: 0.50rem;" class="mt-1 text-sm text-right select-none opacity-75"> 
                    For legal reasons, this may not be a real review. My mom doesnt like lies :(                
                </p>
                {#key user_review == "Man, I love this Website!"} <!-- reload element (play fly animation) only when user review changes from the default value, but not when user reviews get_slot_changes -->
                    <p in:fly={{y:-5, duration:100}} class="mt-4 text-xl text-center"> 
                        {@html user_review == "Man, I love this Website!"? 'Oh, really? Thats so nice of you!! <i class="fa-solid fa-face-kiss-wink-heart"/>': 'Hey! what are you writting? I hope it\'s good... <i class="fa-solid fa-face-rolling-eyes"/>'}
                    </p>
                {/key}
            </div>

            <div class="flex flex-col h-[54rem] w-1/4 gap-4 items-end animate-infinite-scroll select-none">
                {#each {length: 6} as _, index}
                    <UserReview emote={index % 2 == 0? "fa-star": "fa-heart"} user_name="You" text={user_review}/>
                {/each}
            </div>
        </div>

                </label>
                <p class:hidden={user_opinion == "Man, I love this Website!"} class="mt-4 text-xl text-center"> 
                    Hey, what are you writting? I hope its good... <i class="fa-solid fa-face-rolling-eyes"/>
                </p>
            </div>

            <div class="flex flex-col h-[54rem] w-1/3 gap-4 items-end animate-infinite-scroll">
                {#each Array(6) as _}
                    <div class="flex flex-nowrap flex-shrink-0 w-[22rem] h-32 p-4 gap-4 items-center rounded-xl border-[3px] border-b-[6px] text-eerie-900 border-eerie-900 shadow-lg bg-white">
                        <i class="fa-solid fa-heart fa-2xl"/>
                        <div class="flex flex-col items-start overflow-clip">
                            <h1 class="text-3xl"> YOU: </h1>
                            <p class="flex text-xl whitespace-nowrap items-center"> 
                                <i class:hidden={user_opinion} class="fa-solid fa-face-angry mr-2"/> {user_opinion? user_opinion: "I hate empty strings"}
                </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>


</div>

