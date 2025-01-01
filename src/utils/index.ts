/**
 * Converts a full name into initials.
 *
 * @param name - The full name to be converted.
 * @returns The initials of the name in uppercase. If the input is not a valid string, returns an empty string.
 */
export function formatToInitials(name: string): string {
	if (!name || typeof name !== 'string') return ''
	return name
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase())
		.join('')
}
