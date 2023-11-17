import { writable } from "svelte/store";

export const page = writable()
export const page_name = writable("loading...")
export const page_changed = writable(false) 
export const link_menu = writable(false)
export const highlight_nav_link = writable<highlighted_nav_link>(null)

type highlighted_nav_link = null | "/" | "/about" | "/contact" 

link_menu.subscribe(value=>{
    if (value === false) {
        highlight_nav_link.set(null)
    }
})

page_changed.subscribe(()=>{
    highlight_nav_link.set(null)
})

export function highlightNavLink(page: highlighted_nav_link){
    highlight_nav_link.set(page)
    link_menu.set(true)
}
