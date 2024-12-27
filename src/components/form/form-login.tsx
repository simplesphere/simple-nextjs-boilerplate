'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { LockKeyhole, AtSign, Eye, EyeOff } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import useToggleVisibility from '@/hooks/useToggleVisibility'

export default function FormLogin() {
	const t = useTranslations('COMPONENTS.FORM.LOGIN')
	const [isPasswordVisible, togglePasswordVisibility] = useToggleVisibility()
	const [isLoading, setIsLoading] = useState(false)

	const formSchema = z.object({
		email: z
			.string()
			.trim()
			.email({
				message: t('ERROR_EMAIL'),
			}),
		password: z.string().min(1, {
			message: t('ERROR_PASSWORD'),
		}),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const defaultClasses = {
		inputIconClasses: 'h-4 w-4 absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2',
		inputClasses: 'pl-10 bg-slate-50',
		inputEyeClasses: `h-4 w-4 absolute text-gray-300 right-3 top-1/2 transform -translate-y-1/2 hover:text-sky-600 flex-shrink-0`,
	}

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const formData = new FormData()
		formData.append('email', values.email)
		formData.append('password', values.password)

		try {
			setIsLoading(true)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Form {...form}>
			<div className="text-center">
				<h2 className="text-2xl font-bold text-slate-800">{t('TITLE')}</h2>
			</div>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-3.5 dark:text-slate-400"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>{t('LABEL_EMAIL')}</FormLabel>
							<FormControl>
								<div className="relative">
									<AtSign className={defaultClasses.inputIconClasses} />
									<Input
										placeholder={t('PLACEHOLDER_EMAIL')}
										{...field}
										type="email"
										className={defaultClasses.inputClasses}
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>{t('LABEL_PASSWORD')}</FormLabel>
							<FormControl>
								<div className="relative">
									<LockKeyhole className={defaultClasses.inputIconClasses} />
									<Input
										placeholder={t('PLACEHOLDER_PASSWORD')}
										{...field}
										type={isPasswordVisible ? 'text' : 'password'}
										className={defaultClasses.inputClasses}
									/>
									<Button
										onClick={(e) => {
											e.preventDefault()
											togglePasswordVisibility(e)
										}}
										variant="ghost"
										size="icon"
										className={defaultClasses.inputEyeClasses}
										type="button"
									>
										{isPasswordVisible ? <EyeOff /> : <Eye />}
									</Button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<Button type="submit" className="w-full mb-1 gap-x-2" disabled={isLoading}>
						{!isLoading ? (
							t('BUTTON_LOGIN')
						) : (
							<>
								{t('BUTTON_LOGGING_IN')}
								<Spinner />
							</>
						)}
					</Button>
					<Link
						href="/forgot-password"
						className="text-sm border-b border-b-slate-100 text-sky-600"
					>
						{t('FORGOT_PASSWORD')}?
					</Link>
				</div>
			</form>
		</Form>
	)
}
