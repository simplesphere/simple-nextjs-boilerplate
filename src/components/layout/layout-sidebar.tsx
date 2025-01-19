import { AppSidebar } from '@/components/layout/sidebar/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { TChildren } from '@/types'

export default function LayoutWithDashboard({ children }: TChildren) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	)
}
