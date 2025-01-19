import { BreadcrumbPrimary } from '@/components/layout/breadcrumb'
import { useTranslations } from 'next-intl'

export default function PageAnalytics() {
	const t = useTranslations('PAGES.ANALYTICS')
	const breadcrumbs = [{ label: t('BREADCRUMB.TITLE'), href: '/analytics' }]

	return (
		<>
			<BreadcrumbPrimary breadcrumbs={breadcrumbs} />
			<main className="p-8">
				<h1 className="text-2xl font-bold mb-6">{t('TITLE')}</h1>
			</main>
		</>
	)
}
