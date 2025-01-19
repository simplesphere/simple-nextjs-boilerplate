import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { TNavPrimary } from '@/types'

export function NavPrimary({ navigation, pathname }: TNavPrimary) {
	return (
		<SidebarGroup>
			<SidebarMenu>
				{navigation.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton asChild isActive={item.url === pathname} tooltip={item.name}>
							<Link href={item.url}>
								<item.icon />
								<span>{item.name}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
