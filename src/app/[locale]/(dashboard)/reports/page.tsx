import { BreadcrumbPrimary } from '@/components/layout/breadcrumb'
import { useTranslations } from 'next-intl'

export default function PageReports() {
	const t = useTranslations('PAGES.REPORTS')
	const breadcrumbs = [{ label: t('BREADCRUMB.TITLE'), href: '/reports' }]

	return (
		<>
			<BreadcrumbPrimary breadcrumbs={breadcrumbs} />
			<main className="p-8">
				<h1 className="text-2xl font-bold mb-6">{t('TITLE')}</h1>
			</main>
		</>
	)
}
