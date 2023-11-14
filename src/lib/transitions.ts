export function enter(node: HTMLElement | SVGSVGElement, { duration, delay }: { duration: number, delay?: number}) {
    node.style.transform =  `translateY(16rem);`

    return {
        duration,
        delay: delay ?? 0,
        css: (t: number) => {
            const c4 = (2 * Math.PI) / 3;
            const eased = Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1

            return `
                transform: translateY(${(1 - eased) * 16}rem);
                opacity: ${(eased*1.5) - 0.25};
            `
        }
    };
}

export function leave(node: HTMLElement | SVGSVGElement, { duration, delay, multiplier }: { duration: number, delay?: number, multiplier?: number}) {
    return {
        duration,
        delay: delay ?? 0,
        css: (t: number) => {
            const c4 = (2 * Math.PI) / 3;
            const eased = Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1

            return `
                transform: translateY(${(1 - eased) * (multiplier ?? 16)}rem);
                opacity: ${(eased*1.5) - 0.25};
            `
        }
    };
}