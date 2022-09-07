/**
 * WordPress dependencies
 */
import { edit, globe } from '@wordpress/icons';
import { BlockControls, useBlockProps } from '@wordpress/block-editor';
import {
	ComboboxControl,
	Placeholder,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import countries from '../assets/countries.json';
import { getCountryDropdownOptions } from './utils';
import Preview from './preview';

/**
 * Style dependencies
 */
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { countryCode, relatedPosts } = attributes;
	const blockProps = useBlockProps();
	const [ isPreview, setPreview ] = useState( false );

	useEffect( () => setPreview( countryCode ), [ countryCode ] );

	const handleChangeCountry = () => {
		if ( isPreview ) setPreview( false );
		else if ( countryCode ) setPreview( true );
	};

	const handleChangeCountryCode = ( newCountryCode ) => {
		if ( newCountryCode && countryCode !== newCountryCode ) {
			setAttributes( {
				countryCode: newCountryCode,
				relatedPosts: [],
			} );
		}
	};

	useEffect( () => {
		async function getRelatedPosts() {
			const postId = window.location.href.match( /post=([\d]+)/ )[ 1 ];
			const response = await window.fetch(
				`/wp-json/wp/v2/posts?search=${ countries[ countryCode ] }&exclude=${ postId }`
			);

			if ( ! response.ok )
				throw new Error( `HTTP error! Status: ${ response.status }` );

			const posts = await response.json();

			setAttributes( {
				relatedPosts:
					posts?.map( ( relatedPost ) => ( {
						...relatedPost,
						title: relatedPost.title?.rendered || relatedPost.link,
						excerpt: relatedPost.excerpt?.rendered || '',
					} ) ) || [],
			} );
		}

		getRelatedPosts();
	}, [ countryCode, setAttributes ] );

	return (
		<>
			<div { ...blockProps }>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							label={ __( 'Change Country', 'xwp-country-card' ) }
							icon={ edit }
							onClick={ handleChangeCountry }
							disabled={ ! Boolean( countryCode ) }
						/>
					</ToolbarGroup>
				</BlockControls>

				<Placeholder
					icon={ globe }
					label={ __( 'XWP Country Card', 'xwp-country-card' ) }
					isColumnLayout={ true }
					instructions={ __(
						'Type in a name of a country you want to display on you site.',
						'xwp-country-card'
					) }
				>
					<ComboboxControl
						label={ __( 'Country', 'xwp-country-card' ) }
						hideLabelFromVision
						options={ getCountryDropdownOptions() }
						value={ countryCode }
						onChange={ handleChangeCountryCode }
						allowReset={ true }
					/>
				</Placeholder>
				{ isPreview && (
					<Preview
						countryCode={ countryCode }
						relatedPosts={ relatedPosts }
					/>
				) }
			</div>
		</>
	);
}
