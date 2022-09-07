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
import { __, sprintf } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';

/**
 * Internal dependencies
 */
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
	const postId = useSelect( 'core/editor' ).getCurrentPostId();

	const { createErrorNotice } = useDispatch( noticesStore );

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

	useEffect( () => setPreview( countryCode ), [ countryCode ] );

	useEffect( () => {
		async function getRelatedPosts() {
			try {
				const response = await apiFetch( {
					path: `/wp/v2/posts?search=${ countries[ countryCode ] }&exclude=${ postId }`,
				} );

				setAttributes( {
					relatedPosts:
						response?.map( ( relatedPost ) => ( {
							...relatedPost,
							title:
								relatedPost.title?.rendered || relatedPost.link,
							excerpt: relatedPost.excerpt?.rendered || '',
						} ) ) || [],
				} );
			} catch ( err ) {
				createErrorNotice(
					sprintf(
						// Translators: %s: Error message
						__(
							'Unable to retrieve related posts: %s',
							'xwp-country-card'
						),
						err.message
					),
					{
						type: 'snackbar',
						explicitDismiss: true,
					}
				);
			}
		}

		getRelatedPosts();
	}, [ countryCode, setAttributes, postId, createErrorNotice ] );

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
