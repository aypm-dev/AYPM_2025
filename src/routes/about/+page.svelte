<script lang="ts">
	import SkillsHover from './SkillsHover.svelte';
	import About from './About.svelte';
	import Projects from './Projects.svelte';
	import { onMount } from 'svelte';
</script>

<svelte:head>
	<title>&#60AYPM /&#62 About Angel Paniagua Mora</title>
</svelte:head>

<div class="relative flex flex-col w-screen pb-48 items-center text-eerie-900 overflow-x-clip">
	<About />
	<SkillsHover />
	<Projects />
</div>
