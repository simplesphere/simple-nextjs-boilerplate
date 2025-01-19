import type { Metadata } from 'next'
import { TLayoutLocale } from '@/types'
import localFont from 'next/font/local'
import '@/assets/globals.css'
import { getMessages, getTranslations } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

const satoshi = localFont({
	src: '../../assets/fonts/satoshi.woff2',
	variable: '--font-satoshi'
})

export async function generateMetadata({ params }: Readonly<TLayoutLocale>): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'PAGES.HOMEPAGE' })

	return {
		title: t('TITLE'),
		description: t('DESCRIPTION')
	}
}

export default async function RootLayout({ children, params }: Readonly<TLayoutLocale>) {
	const messages = await getMessages()
	const { locale } = await params

	return (
		<html lang={locale}>
			<body className={`${satoshi.variable} font-sans`}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
