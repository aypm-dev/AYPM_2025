<script lang="ts">
    import { fade } from 'svelte/transition'
	import { enter } from '$lib/transitions';

    function letterClick(event: MouseEvent){
        const element: HTMLButtonElement | null = event.target as HTMLButtonElement | null

        if (!element) return

        if (Math.random() > 0.5) {
            element.innerHTML = `
                <svg class="sm:w-8 sm:h-8 w-6 h-6 ml-auto mt-auto text-xl sm:text-3xl" viewBox="0 0 512 512">
                    <path d="M437.006 74.979C388.656 26.628 324.37 0 255.992 0S123.329 26.628 74.979 74.979 0 187.615 0 255.993s26.628 132.663 74.979 181.014 112.636 74.979 181.014 74.979 132.663-26.628 181.014-74.979 74.979-112.636 74.979-181.014c-.001-68.379-26.629-132.664-74.98-181.014zm-134.59 113.527h63.326c8.284 0 15 6.716 15 15s-6.716 15-15 15h-63.326c-8.284 0-15-6.716-15-15s6.716-15 15-15zm-156.157 0h63.326c8.284 0 15 6.716 15 15s-6.716 15-15 15h-63.326c-8.284 0-15-6.716-15-15s6.716-15 15-15zm231.752 150.733H133.99c-8.284 0-15-6.716-15-15s6.716-15 15-15h244.021c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/>
                </svg>
            `
            return
        }

        element.innerHTML = `
            <svg class="sm:w-8 sm:h-8 w-6 h-6 ml-auto mt-auto text-xl sm:text-3xl" viewBox="0 0 512 512">
                <path d="M346.164 196.698c-17.471 0-31.684 14.213-31.684 31.684 0 17.47 14.213 31.684 31.684 31.684s31.684-14.213 31.684-31.684-14.213-31.684-31.684-31.684zM187.476 238.426c0-11.932-9.707-21.64-21.64-21.64s-21.64 9.708-21.64 21.64 9.707 21.639 21.64 21.639 21.64-9.707 21.64-21.639z"/>
                <path d="M437.006 74.979C388.656 26.628 324.37 0 255.992 0S123.329 26.628 74.979 74.979 0 187.614 0 255.993c0 68.378 26.628 132.663 74.979 181.014s112.636 74.979 181.014 74.979 132.663-26.628 181.014-74.979 74.979-112.636 74.979-181.014-26.629-132.664-74.98-181.014zm-160.85 54.132c5.995-33.576 38.176-56.017 71.769-50.022 8.155 1.456 13.586 9.248 12.13 17.403s-9.247 13.584-17.403 12.13c-17.29-3.087-33.874 8.47-36.962 25.763-1.297 7.263-7.62 12.366-14.749 12.366-.876 0-1.762-.077-2.654-.236-8.157-1.457-13.588-9.248-12.131-17.404zm-167.807 33.131c-8.17-1.374-13.68-9.11-12.306-17.279.297-1.768 3.319-17.519 17.744-26.036 12.956-7.65 27.656-5.056 37.703-1.529 38.718 13.585 53.685 22.039 54.303 22.393 7.192 4.11 9.691 13.273 5.581 20.465-2.769 4.845-7.83 7.561-13.037 7.561-2.523 0-5.08-.637-7.429-1.979-.083-.046-13.795-7.656-49.351-20.132-5.629-1.975-10.189-2.319-12.518-.946-2.39 1.411-3.407 5.142-3.413 5.177-1.372 8.168-9.106 13.682-17.277 12.305zm5.848 76.184c0-28.474 23.165-51.64 51.64-51.64s51.64 23.166 51.64 51.64-23.165 51.639-51.64 51.639-51.64-23.165-51.64-51.639zM358.75 370.285h-205.5c-8.284 0-15-6.716-15-15s6.716-15 15-15h205.5c8.284 0 15 6.716 15 15s-6.716 15-15 15zm-12.586-80.22c-34.013 0-61.684-27.671-61.684-61.684s27.671-61.684 61.684-61.684 61.684 27.671 61.684 61.684-27.671 61.684-61.684 61.684z"/>
            </svg>
        `
    }


</script>

<section class="flex flex-col w-fit h-[42rem] mt-12 relative mx-auto">
    <ul class="grid grid-cols-3 w-full sm:w-[40rem] gap-2">
        <h1
            in:fade={{delay: 1750, duration: 500}}
            style="clip-path: polygon(0 100%, 0 0, calc(32.8% - 0.25rem) 0, calc(32.8% - 0.25rem) 100%, calc(33.333333% + 0.25rem) 100%, calc(33.333333% + 0.25rem) 0, calc(66.66666% - 0.25rem) 0, calc(66.66666% - 0.25rem) 100%, calc(67.2% + 0.25rem) 100%, calc(67.2% + 0.25rem) 0, 99.5% 0, 99.5% 100%);"
            class="group/aypm_letters absolute flex top-1/2 -translate-y-[75%] w-full h-44 z-[1] sm:gap-x-1 hover:gap-x-[0.125rem] justify-center items-center text-[1.85rem] hover:text-[1.5rem] sm:text-[2.95rem] sm:hover:text-[2.99rem] select-none font-bold"
        >
            <button on:click={letterClick} class="translate-x-[10px] translate-y-[50px] group-hover/aypm_letters:translate-y-[48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-75">A</button>
            <button on:click={letterClick} class="translate-x-[9px] translate-y-[65px] group-hover/aypm_letters:translate-y-[48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">N</button>
            <button on:click={letterClick} class="translate-x-[4px] translate-y-[40px] group-hover/aypm_letters:translate-y-[48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">G</button>
            <button on:click={letterClick} class="translate-x-[0px] translate-y-[60px] group-hover/aypm_letters:translate-y-[48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">E</button>
            <button on:click={letterClick} class="translate-x-[3px] translate-y-[40px] group-hover/aypm_letters:translate-y-[48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">L</button> &nbsp
            <button on:click={letterClick} class="translate-x-[8px] translate-y-[-5px] group-hover/aypm_letters:translate-y-[48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-100">Y</button>
            <button on:click={letterClick} class="translate-x-[4px] translate-y-[12px] group-hover/aypm_letters:translate-y-[48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">A</button>
            <button on:click={letterClick} class="translate-x-[15px] translate-y-[0px] group-hover/aypm_letters:translate-y-0 group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-75">D</button>
            <button on:click={letterClick} class="translate-x-[2px] translate-y-[30px] group-hover/aypm_letters:translate-y-0 group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">E</button>
            <button on:click={letterClick} class="translate-x-[1px] translate-y-[15px] group-hover/aypm_letters:translate-y-0 group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-75">R</button> &nbsp
            <button on:click={letterClick} class="translate-x-[6px] translate-y-[-22px] group-hover/aypm_letters:translate-y-0 group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-100">P</button>
            <button on:click={letterClick} class="translate-x-[0px] translate-y-[-6px] group-hover/aypm_letters:translate-y-0 group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">A</button>
            <button on:click={letterClick} class="translate-x-[-3px] translate-y-[12px] group-hover/aypm_letters:translate-y-0 group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-75">N</button>
            <button on:click={letterClick} class="translate-x-[-3px] translate-y-[-5px] group-hover/aypm_letters:translate-y-0 group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">I</button>
            <button on:click={letterClick} class="translate-x-[-5px] translate-y-[-10px] group-hover/aypm_letters:translate-y-0 group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">A</button>
            <button on:click={letterClick} class="translate-x-[-4px] translate-y-[-25px] group-hover/aypm_letters:translate-y-[-48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">G</button>
            <button on:click={letterClick} class="translate-x-[-5px] translate-y-[-10px] group-hover/aypm_letters:translate-y-[-48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-75">U</button>
            <button on:click={letterClick} class="translate-x-[-7px] translate-y-[-30px] group-hover/aypm_letters:translate-y-[-48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">A</button> &nbsp
            <button on:click={letterClick} class="translate-x-[-8px] translate-y-[-60px] group-hover/aypm_letters:translate-y-[-48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-75">M</button>
            <button on:click={letterClick} class="translate-x-[-6px] translate-y-[-70px] group-hover/aypm_letters:translate-y-[-48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">O</button>
            <button on:click={letterClick} class="translate-x-[-8px] translate-y-[-50px] group-hover/aypm_letters:translate-y-[-48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55]">R</button>
            <button on:click={letterClick} class="translate-x-[-10px] translate-y-[-65px] group-hover/aypm_letters:translate-y-[-48px] group-hover/aypm_letters:translate-x-0 transition-transform ease-[0.68,-0.55,0.27,1.55] delay-75 group-hover/aypm_letters:delay-[400ms]">A</button>
        </h1>

        <li in:enter={{duration:2000}} class="flex flex-col h-80 sm:h-96 mt-[12rem] p-1 sm:p-2 justify-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
            <svg in:enter={{delay: 10, duration:1900}} class="animate-random-jumps -mt-8 sm:-mt-11 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 512 512"><path d="m507.606 228.536-50.509-50.509a124.386 124.386 0 0 1-16.631 20.622l-2.586 2.586 48.514 48.513c5.857 5.857 15.355 5.857 21.213 0 5.857-5.857 5.857-15.355-.001-21.212zM256 465.946h-58.054l-53.571-53.571a182.442 182.442 0 0 1-31.908-4.071v8.375c0 3.979 1.581 7.794 4.394 10.606l39.119 39.119c-6.531 1.622-11.379 7.508-11.379 14.542 0 8.284 6.716 15 15 15H256c8.284 0 15-6.716 15-15s-6.716-15-15-15zM419.391 43.92c-.109-.112-.22-.223-.332-.331-37.002-36.834-96.691-36.649-133.491.172l-35.782 35.781 16.117 16.117c5.858 5.857 5.858 15.355 0 21.213-5.857 5.857-15.355 5.857-21.213 0l-37.33-37.33h-55.97C67.914 79.542 0 147.455 0 230.964 0 316.283 69.377 382.53 151.642 382.53c39.341 0 77.915-15.397 106.964-44.446L419.25 177.44c36.797-36.809 36.845-96.662.141-133.52zm-35.924 67.492c0 8.284-6.716 15-15 15s-15-6.716-15-15V95.345c0-8.284 6.716-15 15-15s15 6.716 15 15z"/></svg>
            <div class="flex w-full p-1 mt-auto gap-2 sm:p-4 sm:gap-6">
                <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
                <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
                <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
            </div>
        </li>

        <li in:enter={{delay: 200, duration:2000}} class="flex flex-col h-80 sm:h-96 mt-[6rem] p-2 gap-4 justify-end items-start text-xl sm:text-3xl  rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white select-none">
            KIWICOLA™
        </li>

        <li in:enter={{delay: 400, duration:2000}} class="flex flex-col h-80 sm:h-96 mt-[0rem] pt-4 p-1 sm:pt-2 sm:p2 rounded-xl rounded-tr-[48px] sm:rounded-t-[48px] border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
            <div class="flex w-full p-1 gap-2 sm:p-4 sm:gap-6">
                <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl bg-eerie-900"/>
                <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl bg-eerie-900"/>
                <div class="w-1/3 h-16 rounded-t-[48px] rounded-b-xl bg-eerie-900"/>
            </div>
            <svg class="sm:w-8 sm:h-8 w-6 h-6 ml-auto mt-auto text-xl sm:text-3xl" viewBox="0 0 512 512"><path d="M166.624 289.645c-11.932 0-21.639 9.708-21.639 21.64s9.708 21.639 21.639 21.639c11.932 0 21.64-9.708 21.64-21.639 0-11.933-9.708-21.64-21.64-21.64zM346.952 289.645c-11.933 0-21.64 9.708-21.64 21.64s9.707 21.639 21.64 21.639 21.64-9.708 21.64-21.639c0-11.933-9.707-21.64-21.64-21.64z"/><path d="M437.006 74.979C388.656 26.628 324.37 0 255.992 0S123.329 26.628 74.979 74.979C26.629 123.329.001 187.615.001 255.993S26.629 388.656 74.98 437.007s112.635 74.979 181.013 74.979 132.663-26.628 181.014-74.979 74.979-112.636 74.979-181.014c-.001-68.379-26.629-132.664-74.98-181.014zM166.624 362.923c-28.474 0-51.639-23.165-51.639-51.639s23.165-51.64 51.639-51.64 51.64 23.166 51.64 51.64-23.166 51.639-51.64 51.639zm180.328 0c-28.475 0-51.64-23.165-51.64-51.639s23.165-51.64 51.64-51.64 51.64 23.166 51.64 51.64-23.165 51.639-51.64 51.639zm46.107-146.704a14.96 14.96 0 0 1-5.651 1.111c-5.92 0-11.528-3.527-13.897-9.348-20.104-49.382-66.311-81.29-117.716-81.29-51.406 0-97.611 31.908-117.715 81.29-3.123 7.673-11.875 11.362-19.549 8.237-7.673-3.124-11.361-11.875-8.237-19.548 24.726-60.735 81.838-99.979 145.501-99.979s120.775 39.244 145.501 99.979c3.123 7.672-.564 16.425-8.237 19.548z"/></svg>
        </li>
    </ul>

    <div in:fade={{delay: 2000, duration: 500}} class="absolute flex left-[calc(66.666667%-0.25rem)] -translate-x-full w-16 h-[5rem] p-2 justify-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white">
        <div class="flex w-9 rounded-t-[48px] rounded-b-xl border-[3px] border-b-[6px] items-end border-eerie-900 shadow-lg overflow-clip">
            <svg in:enter={{delay: 10, duration:1900}} class="-translate-x-3 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 512 512"><path d="m507.606 228.536-50.509-50.509a124.386 124.386 0 0 1-16.631 20.622l-2.586 2.586 48.514 48.513c5.857 5.857 15.355 5.857 21.213 0 5.857-5.857 5.857-15.355-.001-21.212zM256 465.946h-58.054l-53.571-53.571a182.442 182.442 0 0 1-31.908-4.071v8.375c0 3.979 1.581 7.794 4.394 10.606l39.119 39.119c-6.531 1.622-11.379 7.508-11.379 14.542 0 8.284 6.716 15 15 15H256c8.284 0 15-6.716 15-15s-6.716-15-15-15zM419.391 43.92c-.109-.112-.22-.223-.332-.331-37.002-36.834-96.691-36.649-133.491.172l-35.782 35.781 16.117 16.117c5.858 5.857 5.858 15.355 0 21.213-5.857 5.857-15.355 5.857-21.213 0l-37.33-37.33h-55.97C67.914 79.542 0 147.455 0 230.964 0 316.283 69.377 382.53 151.642 382.53c39.341 0 77.915-15.397 106.964-44.446L419.25 177.44c36.797-36.809 36.845-96.662.141-133.52zm-35.924 67.492c0 8.284-6.716 15-15 15s-15-6.716-15-15V95.345c0-8.284 6.716-15 15-15s15 6.716 15 15z"/></svg>
        </div>
    </div>

    <div in:fade={{delay: 3000, duration: 500}} class="absolute flex top-[28rem] sm:top-[36rem] left-[80%] sm:left-[90%] h-8">
        <div class="flex w-16 sm:w-20 justify-end animate-[spin_3s_linear_infinite]">
            <svg class="rotate-[150deg] flex sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 512 512">
                <g><path d="M469.32 184.481c-34.002-8.963-65.204-26.922-90.217-51.935-25.076-25.076-43.06-56.367-52.007-90.491-.091-.35-.091-.35-2.743-12.537l-.255-1.171c-41.593 15.733-76.483 37.551-104.123 65.191-30.92 30.92-54.735 71.306-70.786 120.037-11.911 36.163-17.566 71.283-20.24 97.566L14.305 319c-.056.004-.11.015-.166.02-.306.025-.609.066-.911.109-.202.028-.405.052-.603.089-.246.045-.489.106-.732.164-.248.058-.496.112-.739.182-.18.052-.354.118-.532.176-.291.096-.583.19-.864.303-.137.055-.27.122-.405.181-.307.134-.614.267-.909.42-.144.074-.281.162-.423.241-.273.153-.547.303-.808.472-.198.127-.385.27-.576.407-.193.138-.39.269-.576.415-.243.191-.473.4-.705.607-.123.11-.251.212-.37.326-.239.227-.462.472-.687.716-.103.112-.211.218-.31.332-.196.227-.377.468-.56.708-.117.152-.238.3-.349.457-.142.202-.271.414-.403.624-.137.217-.277.431-.403.655-.096.17-.181.348-.271.523-.143.279-.284.559-.41.847-.021.049-.049.094-.07.144-.048.115-.081.231-.126.346-.119.3-.233.601-.332.909-.062.191-.113.382-.167.574-.076.275-.15.55-.211.829a14.59 14.59 0 0 0-.132.712c-.039.236-.078.471-.106.71a15.62 15.62 0 0 0-.072.859c-.012.197-.025.393-.029.591-.007.325.003.648.017.97.005.123-.002.244.007.368.004.055.015.108.019.164.023.285.061.568.1.849.029.212.055.425.093.633.042.229.095.454.147.68.059.257.117.514.189.765.051.177.111.351.168.526.094.287.189.573.299.851.06.153.129.302.194.453.123.284.249.567.389.84.08.158.168.311.254.466.14.252.281.502.435.745.111.177.231.348.35.52.143.206.287.411.439.61.148.193.303.379.461.565.141.166.283.331.431.49a15.514 15.514 0 0 0 1.61 1.499c.173.139.349.272.528.403.195.143.392.284.596.418.224.148.454.286.686.423.171.1.341.202.517.296.304.163.616.309.931.451.096.043.185.096.282.137l.243.103.045.019 108.223 45.803L164.597 502.9c.023.054.052.105.075.159.072.162.15.321.227.481a14.638 14.638 0 0 0 .61 1.139c.2.337.411.664.633.979.023.032.043.066.066.098.272.38.562.744.864 1.092l.062.067a15.146 15.146 0 0 0 1.909 1.815c.063.05.123.103.186.152.343.264.695.515 1.058.747.103.066.211.125.316.189a15.353 15.353 0 0 0 1.262.688c.25.121.504.232.759.339.147.061.29.127.44.184.384.146.774.274 1.169.388.134.038.27.07.405.105.326.084.655.158.985.22.115.021.228.044.344.063.797.131 1.607.205 2.424.205.626 0 1.255-.055 1.884-.135.35-.044.7-.089 1.041-.157.089-.018.176-.045.265-.065.399-.087.794-.184 1.18-.302.101-.031.2-.071.3-.104.37-.122.735-.252 1.093-.402.037-.015.075-.025.113-.041.108-.046.207-.104.313-.153.295-.135.588-.273.872-.426.187-.1.366-.207.547-.313.221-.131.44-.263.653-.405a15.777 15.777 0 0 0 1.744-1.349 15.766 15.766 0 0 0 1.002-.987c.142-.154.278-.313.413-.473.163-.192.324-.384.476-.584.149-.194.287-.394.427-.596.122-.178.246-.354.361-.536.151-.24.29-.488.428-.738.087-.158.177-.313.258-.473.139-.275.263-.558.386-.841.065-.151.134-.3.194-.453.109-.279.203-.565.296-.851.057-.175.117-.347.168-.524.071-.25.127-.505.185-.76.052-.228.107-.454.148-.685.036-.203.061-.41.089-.617.04-.288.079-.575.102-.864.004-.048.013-.094.017-.142l7.913-115.408c26.235-2.709 61.253-8.4 97.283-20.316 48.526-16.048 88.757-39.813 119.579-70.636 27.485-27.485 49.211-62.14 64.923-103.424-7.114-1.952-13.043-3.582-13.724-3.769z" fill="#000000" data-original="#000000" class=""></path><path d="M511.61 21.366C511.431 9.586 502.063.218 490.281.039c-16.729-.257-61.168.438-112.671 12.269a439.635 439.635 0 0 0-24.911 6.489 34419.096 34419.096 0 0 0 3.471 15.943c7.62 28.864 22.878 55.356 44.13 76.609 21.277 21.276 47.806 36.547 76.721 44.159.134.036.157.042 15.58 4.281a439.01 439.01 0 0 0 6.74-25.751c11.831-51.503 12.522-95.953 12.269-112.672zm-66.842 67.008c-.351.351-.719.68-1.1.989-.38.31-.778.6-1.179.879-.41.27-.829.52-1.269.75-.431.23-.869.44-1.319.63-.45.18-.919.351-1.379.49-.47.14-.949.27-1.43.36-.479.1-.969.17-1.459.22-.479.05-.978.08-1.469.08-.491 0-.989-.03-1.478-.08-.48-.05-.97-.12-1.449-.22-.48-.091-.959-.221-1.429-.36-.461-.14-.93-.311-1.38-.49a15.8 15.8 0 0 1-2.588-1.38c-.41-.28-.799-.57-1.179-.879-.38-.311-.75-.64-1.099-.989a15.098 15.098 0 0 1-4.388-10.593c0-.49.021-.989.071-1.479.05-.49.13-.969.22-1.449.101-.479.22-.959.36-1.429.149-.47.31-.929.5-1.379.189-.45.399-.899.62-1.329.229-.43.489-.859.76-1.259.27-.41.56-.81.869-1.189.31-.38.649-.74.989-1.089.35-.35.72-.68 1.099-.989.38-.31.769-.6 1.179-.879.41-.27.829-.52 1.259-.749.431-.229.88-.439 1.329-.62.45-.189.919-.359 1.38-.5.47-.14.948-.26 1.429-.359a14.512 14.512 0 0 1 4.396-.221c.49.051.979.12 1.459.221.48.1.96.22 1.43.359.46.141.929.311 1.379.5.45.181.889.391 1.319.62.439.23.858.48 1.269.749.4.28.799.57 1.179.879.381.311.75.641 1.1.989a15.103 15.103 0 0 1 4.387 10.603 15.105 15.105 0 0 1-4.388 10.592z" fill="#000000" data-original="#000000" class=""></path></g>
            </svg>
        </div>
    </div>
    
    <div in:fade={{delay: 2000, duration: 500}} class="absolute flex top-80 sm:top-96 left-[calc(66.66667%+0.25rem)] mt-4 gap-2">
        <div class="w-8 h-20 p-2 rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
        <div class="w-8 sm:w-24 h-16 p-2 gap-4 mt-2 rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white"/>
        <div class="w-8 h-[24rem] mt-2 p-2 rounded-xl shadow-lg rounded-tr-[128px] border-[3px] border-b-[6px] border-eerie-900 ring-4 ring-white bg-folly"/>
    </div>

    <div class="relative mt-4 ">
        <div in:fade={{delay: 2250, duration: 500}} class="absolute p-2 left-[66.666667%] -translate-x-1/2 -translate-y-1/2 gap-4 w-fit h-fit items-center rounded-xl border-[3px] border-b-[6px] border-eerie-900 shadow-lg bg-white ring-4 ring-white sm:ring-transparent">
            <h1 class="text-center"> 
                Frontend Developer<br>
                Software Developer
            </h1> 
        </div>
    </div>
</section>

