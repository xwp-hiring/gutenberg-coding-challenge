/**
 * Internal dependencies
 */
import Preview from './preview';

export default function Save( { attributes } ) {
	return (
		<div>
			<Preview { ...attributes } />
		</div>
	);
}
