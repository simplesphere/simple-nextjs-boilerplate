'use client'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { TBreadcrumbProps } from '@/types'
import { usePathname } from 'next/navigation'

export function BreadcrumbPrimary({ breadcrumbs }: TBreadcrumbProps) {
	const pathname = usePathname()

	const isActive = (href: string) => {
		return pathname === href
	}

	if (!breadcrumbs) return null

	return (
		<header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-b-slate-100 mb-4">
			<div className="flex items-center gap-2 px-4">
				<Breadcrumb>
					<BreadcrumbList>
						{breadcrumbs.map((breadcrumb, index) => (
							<BreadcrumbItem key={index} className={index === 0 ? 'hidden md:flex' : ''}>
								{isActive(breadcrumb.href) ? (
									<BreadcrumbPage className="text-[0.85rem]">{breadcrumb.label}</BreadcrumbPage>
								) : (
									<BreadcrumbLink className="text-[0.85rem]" href={breadcrumb.href}>
										{breadcrumb.label}
									</BreadcrumbLink>
								)}
								{index < breadcrumbs.length - 1 && (
									<BreadcrumbSeparator className="hidden md:block" />
								)}
							</BreadcrumbItem>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</header>
	)
}
