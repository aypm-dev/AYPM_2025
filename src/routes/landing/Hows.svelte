<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import UserReviewManager from './UserReviewManager.svelte';
	import { highlightNavLink } from '$lib/stores/page';

    function getAge() {
        const current_date = new Date().getTime()
        const birth_date = new Date("02-11-2004").getTime()
        return ((current_date - birth_date) / 3.15576e+10).toFixed(1)
    }

</script>

<section class="flex flex-col w-screen my-20 sm:my-32 p-12 items-center shadow-lg text-snow border-t-[3px] border-b-[6px] border-eerie-900 bg-folly overflow-x-hidden">
    <div class="container flex mx-auto justify-center">
        <div class="w-full flex flex-col md:w-2/3 items-center">
            <h1 class="text-6xl sm:text-7xl text-center"> HOW'S AYPM? </h1>

            <p class="z-10 -mt-6 text-xl text-justify">
                Hello Angel here, a {getAge()} year old Web Developer, Inspired by what the limit of human creativity is, and looking to give the world the best of myself! <br><br>

                And, more importantly, I'm also a software engineer.. well more like a Full-stack Developer.. well more like a Front End Developer, but I'm really good at it!... <br>
                What you don't belive me? Just look at your own review for my beautiful website down below!

            </p>
        </div>
    </div>

    <UserReviewManager/>

    <div class="container flex mx-auto justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:w-2/3 mt-24 gap-4 gap-y-12 sm:gap-y-32">
            <div class="w-4/5 sm:w-full z-10">
                <h1 class="-z-10 text-4xl sm:text-6xl text-center"> HOW IT ALL STARTED? </h1>

                <p class="-mt-6 text-xl text-justify"> 
                    It all started as a way to add more fields to my curriculum. You know, learning python using tutorials from Youtube and doing simple apps, but I deeply feel in love with programming after I learned how to recreate battles from one of my favorite games using the Lua programming language. <br> The best way to get into software developer is to find a platform to put your skill into action, that help me a lot ;)
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

            <div class="w-4/5 sm:w-full ml-auto z-10">
                <h1 class="-z-10 text-4xl sm:text-6xl text-center"> WHY WE GOT HERE? </h1>

                <p class="-mt-6 text-xl text-justify"> 
                    Three years later. I started programming websites for my job. At that point I got the skills to make my own portfolio that would help me show my work, and that's aypm.dev! But let's take things with time, and see more about this portfolio, me, and other projects on the About page. <br/> <br/>

                    "Mmm so where's the about page?" Well the button below would guide you ;)
                </p>

                <div class="flex mt-4 w-full justify-center whitespace-nowrap">
                    <Button on:click={()=>{highlightNavLink("/about")}} type="secondary">
                        <span class="text-folly">&#60</span>
                            Button <span class="opacity-75">on:click=&#123;highlightNav&#125;</span> 
                        <span class="text-folly">/&#62</span>
                    </Button>
                </div>
            </div>
        </div>
    </div>
</section>