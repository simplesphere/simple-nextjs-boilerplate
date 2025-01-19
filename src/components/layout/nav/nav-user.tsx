'use client'

import { Fragment } from 'react'
import { EllipsisVertical } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar
} from '@/components/ui/sidebar'
import { formatToInitials } from '@/utils'

type NavItem = {
	name: string
	url: string
	icon: React.ElementType
	separator?: boolean
}

export type TNavUser = {
	data: {
		user: {
			name: string
			email: string
			avatar: string
			navigation: NavItem[]
		}
	}
}

export function NavUser({ data }: TNavUser) {
	const { isMobile } = useSidebar()

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarImage src={data?.user?.avatar} alt={data?.user?.name} />
								<AvatarFallback className="rounded-lg">
									{formatToInitials(data?.user?.name)}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">{data?.user?.name}</span>
								<span className="truncate text-xs">{data?.user?.email}</span>
							</div>
							<EllipsisVertical className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? 'bottom' : 'right'}
						align="end"
						sideOffset={4}
					>
						{data.user.navigation.map((item) => (
							<Fragment key={item.name}>
								<DropdownMenuItem key={item.name} className="text-slate-600">
									{item.icon && <item.icon className="mr-2 h-4 w-4" />}
									{item.name}
								</DropdownMenuItem>
								{item.separator && <DropdownMenuSeparator />}
							</Fragment>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
