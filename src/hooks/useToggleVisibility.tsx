import { useState } from 'react'

type UseToggleVisibility = [boolean, (e: React.MouseEvent<HTMLButtonElement>) => void]

const useToggleVisibility = (initialVisibility = false): UseToggleVisibility => {
	const [isVisible, setIsVisible] = useState<boolean>(initialVisibility)

	const toggleVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsVisible((prevVisibility) => !prevVisibility)
	}

	return [isVisible, toggleVisibility]
}

export default useToggleVisibility
