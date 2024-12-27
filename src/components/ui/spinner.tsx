import { Loader } from 'lucide-react'

export function Spinner({ className = '', ...props }: React.ComponentProps<typeof Loader>) {
	return <Loader size={20} className={`animate-spin ${className}`} {...props} />
}
