import type { Reroute } from '@sveltejs/kit';

// UNIVERSAL REROUTE TO LOWERCASE ROUTE HOOK
export const reroute: Reroute = ({ url }) => {
	return url.pathname.toLowerCase();
};
