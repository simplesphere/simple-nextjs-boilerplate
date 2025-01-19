import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type LucideIcon } from 'lucide-react'

interface StatCardProps {
	title: string
	value: string
	change: string
	icon: LucideIcon
}

export function CardStat({ title, value, change, icon: Icon }: StatCardProps) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-base font-medium text-slate-600">{title}</CardTitle>
				<Icon className="h-6 w-6 text-slate-400" />
			</CardHeader>
			<CardContent>
				<h2 className="text-3xl font-bold mb-1">{value}</h2>
				<p className="text-sm text-slate-500">{change}</p>
			</CardContent>
		</Card>
	)
}
