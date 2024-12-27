import { useTranslations } from 'next-intl'

export default function Home() {
	const t = useTranslations('PAGES.HOMEPAGE')

	return (
		<section className="h-full py-12" id="intro">
			<div className="container">
				<h1 className="text-3xl mb-3 font-bold text-slate-800">{t('TITLE')}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non odio nunc.
					Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit et quam at
					iaculis. In vel diam vel nibh rutrum interdum eu nec tortor. Proin vel arcu viverra,
					vehicula orci nec, tincidunt justo. Mauris vel sapien et felis venenatis rhoncus id sed
					nisl.
				</p>
				<p>
					Sed quis turpis pharetra nunc pellentesque interdum. Vivamus semper quis dolor vestibulum
					suscipit. Cras non ante at nulla gravida lacinia et sed leo. Donec cursus at turpis non
					malesuada.
				</p>
			</div>
		</section>
	)
}
