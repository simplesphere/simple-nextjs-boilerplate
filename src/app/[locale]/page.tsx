import { BreadcrumbPrimary } from '@/components/layout/breadcrumb'
import { AppSidebar } from '@/components/layout/sidebar/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function LayoutDashboard() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<BreadcrumbPrimary />
				<div className="flex flex-col min-h-screen gap-4 p-4">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="aspect-video rounded-xl bg-slate-200" />
						<div className="aspect-video rounded-xl bg-slate-200" />
						<div className="aspect-video rounded-xl bg-slate-200" />
					</div>
					<div className="flex-1 rounded-xl bg-slate-200" />
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
