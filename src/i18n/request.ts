import { getRequestConfig } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale

	if (!locale || !routing.locales.includes(locale as string)) {
		console.warn(`Invalid locale: ${locale}`)
		locale = routing.defaultLocale
		notFound()
	}

	return {
		locale,
		messages: (await import(`../messages/${locale}.json`)).default,
	}
})
