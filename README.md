
<h1 align="center"> < PORTFOLIO /> </h1>

Better known as < AYPM />, my portfolio is a web page created to represent me as a developer and my abilities as a programmer. Development is done, any other projects made in this year would be mentioned in future versions of my portfolio, this is a page where I can practice some CSS and HTML and make cool things!

Builded with [`Svelte`](https://svelte.dev/), and [`TailwindCSS`](https://tailwindui.com/). I think is a great way to show others with I've been up to and how I represent myself in the websites.

<h2 align="center"> Promise </h2>

<span align="justify">
I wanted to make an awesome website as my portfolio to challenge myself to be creative and have the ability to impress everyone that sees it.

Obviously, < AYPM /> is not a website up to the standars of the """top 10""" best (crazy) portfolios for Front-end developement, but newer versions of the portfolio are going to be better than the last!
</span>


<h2 align="center"> Structure </h2>

<span align="justify">
< AYPM /> is, for the most part, a single-page application (SPA) with custom routing due to the small scope of the app, the app doesnt have any reasonable use of SSR and doesnt load any data on pageLoad. The current route is defined by what the HashURI is, for example the route /#about ""redirects"" to the about page, you can find most of the logic for the custom routing in routes/+page.svelte where the app dynamically imports the pages based on the hash and a simple pages object. In case theres no page for that route, the landing page is rendered, but there's also a 404 page on any other route that is not "/" with the hashes. Most of the components that are only used but one route are inside the route's folder with the respective +page.svelte. <br>
The app uses Supabase for a form in the contact page and server side validation where it sends the email with a basic email library to my personal email account. 
</span>

<h2 align="center"> Comming soon.. </h2>

<span align="justify">
The next version of < AYPM /> for 2024 will be include a few of my previous projects and all the newer ones made in 2024. It is going to include design aspects from 90s websites like gifs and HTML elements with 3D elements like and avatar to implement a custom chat bot with a 3D avatar of myself.
</span>
    

## Hosting the app

Well after all this is a personal website, but if there's someone that can make use of any part of the app, or just want to experiment, feel free to host it locally. 

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
