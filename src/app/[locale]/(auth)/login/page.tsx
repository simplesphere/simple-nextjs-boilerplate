import Image from 'next/image'
import FormLogin from '@/components/form/form-login'

export default function LoginPage() {
	return (
		<div className="grid min-h-screen w-full lg:grid-cols-2">
			<div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<FormLogin />
				</div>
			</div>
			<div className="hidden lg:block relative">
				<Image
					src="/bg-placeholder.webp"
					alt="Login background"
					fill
					sizes="50vw"
					priority
					className="object-cover"
				/>
			</div>
		</div>
	)
}
