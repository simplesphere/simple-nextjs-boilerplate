import { CardStat } from '@/components/card/card-stats'
import { TableBasic } from '@/components/table/table-basic'
import { TSalesItem, TTableHeader } from '@/types'
import { CircleDollarSign, ShoppingCart, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

const salesData: TSalesItem[] = [
	{
		id: 'TX123456',
		name: 'John Doe',
		email: 'john.doe@example.com',
		status: 'active',
		dateRegistered: '2023-12-01'
	},
	{
		id: 'TX789012',
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		status: 'pending',
		dateRegistered: '2023-12-03'
	},
	{
		id: 'TX345678',
		name: 'Bob Johnson',
		email: 'bob.johnson@example.com',
		status: 'inactive',
		dateRegistered: '2023-12-05'
	},
	{
		id: 'TX901234',
		name: 'Alice Brown',
		email: 'alice.brown@example.com',
		status: 'active',
		dateRegistered: '2023-12-07'
	},
	{
		id: 'TX567890',
		name: 'Charlie Wilson',
		email: 'charlie.wilson@example.com',
		status: 'pending',
		dateRegistered: '2023-12-09'
	}
]

export default function PageDashboard() {
	const t = useTranslations('PAGES.DASHBOARD')

	const statsData = [
		{
			title: t('STATS.TOTAL_REVENUE'),
			value: '$45,231.89',
			change: t('STATS.PERCENT_CHANGE', { percentage: '+20.8%' }),
			icon: CircleDollarSign
		},
		{
			title: t('STATS.NEW_CUSTOMERS'),
			value: '+2350',
			change: t('STATS.PERCENT_CHANGE', { percentage: '+180.1%' }),
			icon: Users
		},
		{
			title: t('STATS.TOTAL_SALES'),
			value: '+12,234',
			change: t('STATS.PERCENT_CHANGE', { percentage: '+17.3%' }),
			icon: ShoppingCart
		}
	]

	const tableHeaders: TTableHeader[] = [
		{ key: 'id', label: t('TABLE.HEADER.ID'), type: 'text' },
		{ key: 'name', label: t('TABLE.HEADER.NAME'), type: 'text' },
		{ key: 'email', label: t('TABLE.HEADER.EMAIL'), type: 'text' },
		{ key: 'status', label: t('TABLE.HEADER.STATUS'), type: 'badge' },
		{ key: 'dateRegistered', label: t('TABLE.HEADER.DATE_REGISTERED'), type: 'text' }
	]

	return (
		<main className="p-8">
			<h1 className="text-2xl font-bold mb-6">{t('TITLE')}</h1>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
				{statsData.map((stat, index) => (
					<CardStat key={index} {...stat} />
				))}
			</div>
			<TableBasic
				title={t('TABLE.TITLE', { defaultValue: 'Recent Sales' })}
				headers={tableHeaders}
				data={salesData}
			/>
		</main>
	)
}
