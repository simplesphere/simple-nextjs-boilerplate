import LayoutWithDashboard from '@/components/layout/layout-sidebar'
import { TChildren } from '@/types'

export default function LayoutDashboard({ children }: TChildren) {
	return <LayoutWithDashboard>{children}</LayoutWithDashboard>
}
