<script lang="ts">
    import { fly } from 'svelte/transition'
    import UserReview from '$lib/components/UserReview.svelte';
    import Input from '$lib/components/Input.svelte'
	import { highlightNavLink } from '$lib/stores/page';


    let user_review: string = "Man, I love this Website!"

    function getAge() {
        const current_date = new Date().getTime()
        const birth_date = new Date("02-11-2004").getTime()
        return ((current_date - birth_date) / 3.15576e+10).toFixed(1)
    }


</script>

<section class="relative w-screen my-32 p-12 shadow-lg text-snow border-t-[3px] border-b-[6px] border-eerie-900 bg-folly overflow-x-hidden">
    <div class="container flex mx-auto justify-center">
        <div class="w-full flex flex-col md:w-2/3 items-center">
            <h1 class="text-6xl sm:text-7xl text-center"> HOW'S AYPM? </h1>

            <p class="z-10 -mt-6 text-xl text-justify"> 
                I am Angel, a {getAge()} year old software developer, Inspired by what the limit of human creativity is, and looking to give the world the best of myself!  <br><br> 
                And, more importandly, I'm also a software engineer.. well more like a Web Developer.. well more like a Front End Developer, but I'm really good at it!.. <br>
                What? you don't belive me? Just look at your own review for my beautiful website down bellow!
            </p>

            <div class="relative flex w-full h-fit sm:h-[27rem] mt-24 gap-8 sm:overflow-clip border-3 border-eerie-900">
                <div class="hidden sm:flex absolute top-0 w-full h-1/6 z-10 bg-gradient-to-b from-folly to-transparent"/>
                <div class="hidden sm:flex absolute top-[83.34%] w-full h-1/6 z-10 bg-gradient-to-t from-folly to-transparent"/>
                
                <ul class="hidden sm:flex flex-col h-[54rem] w-1/4 gap-4 items-start animate-infinite-scroll select-none">
                    {#each {length: 6} as _, index}
                        <UserReview emote={index % 2 == 0? "fa-star": "fa-heart"} user_name="You" text={user_review}/>
                    {/each}
                </ul>

                <div class="flex flex-col w-full md:w-[150%] justify-center">
                    <Input bind:value={user_review} maxlength={27} label="Your review:" name="review_input" autocomplete={false}/>
                    <p style="font-size: 0.50rem;" class="mt-1 text-sm text-right select-none opacity-75"> 
                        For legal reasons, this may not be a real review. My mom doesnt like lies :(                
                    </p>
                    {#key user_review == "Man, I love this Website!"} <!-- reload element (play fly animation) only when user review changes from the default value, but not when user reviews get_slot_changes -->
                        <p in:fly={{y:-5, duration:100}} class="mt-4 text-xl text-center"> 
                            {@html user_review == "Man, I love this Website!"? 'Oh, really? Thats so nice of you!! <i class="fa-solid fa-face-kiss-wink-heart"/>': 'Hey! what are you writting? I hope it\'s good... <i class="fa-solid fa-face-rolling-eyes"/>'}
                        </p>
                    {/key}
                </div>

                <div class="hidden sm:flex flex-col h-[54rem] w-1/4 gap-4 items-end animate-infinite-scroll select-none">
                    {#each {length: 6} as _, index}
                        <UserReview emote={index % 2 == 0? "fa-star": "fa-heart"} user_name="You" text={user_review}/>
                    {/each}
                </div>
            </div>

            <div class="flex sm:hidden relative h-32 overflow-clip">
                <div class="absolute top-0 w-1/6 h-full z-10 bg-gradient-to-r from-folly to-transparent"/>
                <div class="absolute left-full -translate-x-[calc(100%-2px)] w-1/6 h-full z-10 bg-gradient-to-l from-folly to-transparent"/>
                
                <ul class="flex h-[54rem] w-[34rem] gap-4 items-start animate-infinite-scroll-horizontal select-none">
                    {#each {length: 44} as _, index}
                        <UserReview emote={index % 2 == 0? "fa-star": "fa-heart"} user_name="You" text={user_review}/>
                    {/each}
                </ul>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 mt-24 gap-4 gap-y-12 sm:gap-y-32">
                <div class="w-4/5 sm:w-full">
                    <h1 class="-z-10 text-4xl sm:text-6xl text-center"> HOW IT ALL STARTED? </h1>

                    <p class="-mt-6 text-xl text-justify"> 
                        It all started as a way to add more fields to my curriculum. You know, learning python using tutorials from Youtube and doing simple apps, but I deeply feel in love with programming after I learn how to recreate battles from one of my favorite games using the Lua programming languaje. <br> When you try to be a software developer always try to find a platform to put you skill into action, that help me a lot ;).
                    </p>
                </div>

                <div class="group flex w-full h-full justify-center items-center opacity-50">
                    <svg class="w-[4.5rem] sm:w-36 h-full fill-white rotate-45 group-hover:animate-bounce" viewBox="0 0 210 512">
                        <path class="mx-auto" d="M162 15c0-8.281-6.719-15-15-15H61c-8.281 0-15 6.719-15 15v46h116zM162.05 91H46.489C21.078 129.535 0 154.914 0 211h210c0-56.297-23.164-83.61-47.95-120zM132.598 327.523a15.009 15.009 0 0 1-19.207 0l-26.395-21.996-26.394 21.996a15.004 15.004 0 0 1-19.207 0L0 293.027V361h210v-12.977l-51.004-42.5zM0 467c0 24.813 20.188 45 45 45h120c24.813 0 45-20.188 45-45v-76H0zM0 253.973l50.996 42.5 26.399-21.996c5.558-4.637 13.64-4.633 19.203 0l26.398 21.996 26.399-21.996a14.994 14.994 0 0 1 19.203 0L210 308.973V241H0zm0 0"></path>
                    </svg>
                </div>
                
                <div class="group hidden sm:flex w-96 mx-auto  h-full justify-center items-center opacity-50">
                    <svg class="w-32 h-full fill-white -rotate-45 group-hover:animate-bounce" viewBox="0 0 210 512">
                        <path class="mx-auto" d="M162 15c0-8.281-6.719-15-15-15H61c-8.281 0-15 6.719-15 15v46h116zM162.05 91H46.489C21.078 129.535 0 154.914 0 211h210c0-56.297-23.164-83.61-47.95-120zM132.598 327.523a15.009 15.009 0 0 1-19.207 0l-26.395-21.996-26.394 21.996a15.004 15.004 0 0 1-19.207 0L0 293.027V361h210v-12.977l-51.004-42.5zM0 467c0 24.813 20.188 45 45 45h120c24.813 0 45-20.188 45-45v-76H0zM0 253.973l50.996 42.5 26.399-21.996c5.558-4.637 13.64-4.633 19.203 0l26.398 21.996 26.399-21.996a14.994 14.994 0 0 1 19.203 0L210 308.973V241H0zm0 0"></path>
                    </svg>
                </div>

                <div class="w-4/5 sm:w-full ml-auto">
                    <h1 class="-z-10 text-4xl sm:text-6xl text-center"> WHY WE GOT HERE? </h1>


                <button class="underline mx-auto" on:click={()=>{
                    highlightNavLink("/about")
                }}>
                    Click me!!!
                </button>
            </div>
        </div>
    </div>
</section>

