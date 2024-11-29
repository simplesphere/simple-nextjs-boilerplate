import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/assets/globals.css';
import { TChildren } from '@/types';

const satoshi = localFont({
	src: '../assets/fonts/satoshi.woff2',
	variable: '--font-satoshi',
});

export const metadata: Metadata = {
	title: 'Basic Next.js boilerplate',
	description: 'A basic Next.js boilerplate with TypeScript, Tailwind CSS, and ESLint.',
};

export default function RootLayout({ children }: Readonly<TChildren>) {
	return (
		<html lang="en">
			<body className={`${satoshi.variable} font-sans text-slate-700`}>{children}</body>
		</html>
	);
}
