import { Layers } from 'lucide-react'

export function Logo() {
	return (
		<div className="flex items-center space-x-2 transition-all duration-300 ease-in-out group-data-[collapsible=icon]:justify-center text-white">
			<Layers className="h-5 w-5" />
			<span className="group-data-[collapsible=icon]:hidden">Simple</span>
		</div>
	)
}
