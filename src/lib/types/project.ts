import type { SvelteComponent } from 'svelte';
import type Innoceana from '../../routes/about/projects/Innoceana.svelte';

export interface Project {
	title: string;
	subtitle?: string;
	description: string;
	modal: typeof SvelteComponent<any> | typeof Innoceana;
	grid_area: string;
	image_src?: string;
	show_kiwi?: boolean;
	cover_image?: boolean;
	technologies?: string[];
	short?: boolean;
}
