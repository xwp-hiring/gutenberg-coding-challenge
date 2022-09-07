/**
 * Internal dependencies
 */
import countries from '../../assets/countries.json';
import continentNames from '../../assets/continent-names.json';
import continents from '../../assets/continents.json';

/**
 * Country flag component. Renders countryName(countryCode), continentName e.g., Vietnam(VN), Asia.
 *
 * @param {string} countryCode Country Code.
 */
export default function CountryGreeting( { countryCode } ) {
	return (
		<>
			<strong>{ countries[ countryCode ] }</strong> (
			<span className="xwp-country-card__country-code">
				{ countryCode }
			</span>
			), { continentNames[ continents[ countryCode ] ] }!
		</>
	);
}
