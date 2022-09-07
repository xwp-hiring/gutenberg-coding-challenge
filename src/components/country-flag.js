/**
 * Internal dependencies
 */
import { getEmojiFlag } from '../utils';

/**
 * Country flag component
 *
 * @param {string} countryCode Country Code.
 */
export default function CountryFlag( { countryCode } ) {
	const flag = getEmojiFlag( countryCode );
	return (
		<div className="xwp-country-card__media" data-emoji-flag={ flag }>
			<div className="xwp-country-card-flag">{ flag }</div>
		</div>
	);
}
