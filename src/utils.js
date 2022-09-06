/**
 * Internal dependencies
 */
import countries from '../assets/countries.json';

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

/**
 * Retrieve the options for populating the country dropdown.
 *
 * @return {Array} The country dropdown options.
 */
export function getCountryDropdownOptions() {
	return Object.keys( countries ).map( ( code ) => ( {
		value: code,
		label: getEmojiFlag( code ) + '  ' + countries[ code ] + ' — ' + code,
	} ) );
}
