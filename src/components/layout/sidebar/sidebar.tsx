'use client'

import {
	BadgeCheck,
	Bell,
	CreditCard,
	FileText,
	HomeIcon,
	LogOut,
	PieChart,
	Sparkles
} from 'lucide-react'

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail
} from '@/components/ui/sidebar'
import { NavUser } from '@/components/layout/nav/nav-user'
import { NavPrimary } from '@/components/layout/nav/nav-primary'
import { Logo } from '@/components/layout/logo'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarData = {
	user: {
		name: 'John Doe',
		email: 'johndoe@johndoe.com',
		avatar: '/avatar.png',
		navigation: [
			{
				name: 'UPGRADE_TO_PRO',
				url: '#',
				icon: Sparkles,
				separator: true
			},
			{
				name: 'ACCOUNT',
				url: '#',
				icon: BadgeCheck
			},
			{
				name: 'BILLING',
				url: '#',
				icon: CreditCard
			},
			{
				name: 'NOTIFICATIONS',
				url: '#',
				icon: Bell,
				separator: true
			},
			{
				name: 'LOGOUT',
				url: '#',
				icon: LogOut
			}
		]
	},
	navigation: [
		{
			name: 'HOME',
			url: '/',
			icon: HomeIcon
		},
		{
			name: 'REPORTS',
			url: '/reports',
			icon: FileText
		},
		{
			name: 'ANALYTICS',
			url: '/analytics',
			icon: PieChart
		}
	]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const t = useTranslations('COMPONENTS.SIDEBAR')
	const pathname = usePathname()

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="p-4">
				<Link href="/">
					<Logo />
				</Link>
			</SidebarHeader>
			<SidebarContent>
				<NavPrimary
					pathname={pathname}
					navigation={sidebarData.navigation.map((item) => ({
						...item,
						name: t(`NAVIGATION.${item.name}`)
					}))}
				/>
			</SidebarContent>
			<SidebarFooter>
				<NavUser
					data={{
						user: {
							...sidebarData.user,
							navigation: sidebarData.user.navigation.map((item) => ({
								...item,
								name: t(`USER.${item.name}`)
							}))
						}
					}}
				/>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
