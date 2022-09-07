/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import CountryFlag from './components/country-flag';
import RelatedPosts from './components/related-post';
import CountryGreeting from './components/country-greeting';

export default function Preview( { countryCode, relatedPosts } ) {
	if ( ! countryCode ) return null;

	return (
		<div className="xwp-country-card">
			<CountryFlag countryCode={ countryCode } />
			<h3 className="xwp-country-card__heading">
				{ __( 'Hello from', 'xwp-country-card' ) }{ ' ' }
				<CountryGreeting countryCode={ countryCode } />
			</h3>

			<RelatedPosts relatedPosts={ relatedPosts } />
		</div>
	);
}
