import { LucideIcon } from 'lucide-react'
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

export type TNavPrimaryItem = {
	name: string
	url: string
	icon: LucideIcon
}

export type TNavPrimary = {
	navigation: TNavPrimaryItem[]
	pathname: string
}

export type TStatus = 'active' | 'inactive' | 'pending'

export type TCellType = 'text' | 'badge' | 'currency'

export type TSalesItem = Record<string, string | TStatus>

export type TTableHeader = {
	key: string
	label: string
	type: TCellType
}

export enum EStatus {
	ACTIVE = 'active',
	INACTIVE = 'inactive',
	PENDING = 'pending'
}
