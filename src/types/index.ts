import { ReactNode } from 'react'

export type TChildren = {
	readonly children: ReactNode
}

export type TLayoutLocale = TChildren & {
	readonly params: { readonly locale: string }
}

export type TBreadcrumbItem = {
	href: string
	label: string
}

export type TBreadcrumbProps = {
	breadcrumbs?: TBreadcrumbItem[]
}
