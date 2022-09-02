/**
 * Retrieve emoji flag based on country code
 *
 * @param {string} countryCode Country Code
 * @return {string} The given content with some characters escaped.
 */
export function getEmojiFlag( countryCode ) {
	return String.fromCodePoint(
		...countryCode
			.toUpperCase()
			.split( '' )
			.map( ( char ) => 127397 + char.charCodeAt() )
	);
}
