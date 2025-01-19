'use server'

import { createClient } from '@/utils/supabase/server'
import { loginSchema } from '@/validations/form-login'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
	const supabase = await createClient()

	const result = loginSchema.safeParse({
		email: formData.get('email'),
		password: formData.get('password')
	})

	if (!result.success) {
		return { success: false, error: result.error.flatten() }
	}

	const { email, password } = result.data

	const { error: loginError } = await supabase.auth.signInWithPassword({
		email,
		password
	})

	if (loginError) {
		return { success: false, error: loginError.message }
	}

	revalidatePath('/')
	redirect('/')
}
