import type { Metadata } from 'next'
import { TLayoutLocale } from '@/types'
import localFont from 'next/font/local'
import '@/assets/globals.css'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

const satoshi = localFont({
	src: '../../assets/fonts/satoshi.woff2',
	variable: '--font-satoshi',
})

export const metadata: Metadata = {
	title: 'Basic Next.js boilerplate',
	description: 'A basic Next.js boilerplate with TypeScript, Tailwind CSS, and ESLint.',
}

export default async function RootLayout({ children, params }: Readonly<TLayoutLocale>) {
	const messages = await getMessages()
	const { locale } = await params

	return (
		<html lang={locale}>
			<body className={`${satoshi.variable} font-sans text-slate-600`}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
