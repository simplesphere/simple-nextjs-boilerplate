import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { EStatus, TSalesItem, TTableHeader } from '@/types'

type TTableBasicProps = {
	title: string
	headers: TTableHeader[]
	data: TSalesItem[]
}

export function TableBasic({ title, headers, data }: TTableBasicProps) {
	const renderCell = (item: TSalesItem, header: TTableHeader) => {
		const value = item[header.key]

		switch (header.type) {
			case 'badge':
				return (
					<Badge
						className={cn(
							value === EStatus.ACTIVE && 'bg-green-100 text-green-800 hover:bg-green-100',
							value === EStatus.INACTIVE && 'bg-red-100 text-red-800 hover:bg-red-100',
							value === EStatus.PENDING && 'bg-amber-100 text-amber-800 hover:bg-amber-100'
						)}
					>
						{(value as string).charAt(0).toUpperCase() + (value as string).slice(1)}
					</Badge>
				)
			default:
				return <span>{value}</span>
		}
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							{headers.map(({ key, label }) => (
								<TableHead key={key}>
									<span className="font-bold">{label}</span>
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((item, index) => (
							<TableRow key={index}>
								{headers.map((header) => (
									<TableCell key={header.key}>{renderCell(item, header)}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
