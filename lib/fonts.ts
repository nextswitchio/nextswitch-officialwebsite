import { Montserrat, Playfair_Display } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    variable: '--font-playfair',
    display: 'swap',
});
