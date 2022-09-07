/**
 * WordPress dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';

/**
 * RelatedPosts component.
 *
 * @param {Object} props Props
 */
export default function RelatedPosts( props ) {
	const { relatedPosts } = props;
	const hasRelatedPosts = relatedPosts?.length > 0;

	return (
		<div className="xwp-country-card__related-posts">
			<h3 className="xwp-country-card__related-posts__heading">
				{ hasRelatedPosts
					? sprintf(
							// translators: %d: number of related posts.
							_n(
								'There is %d related post:',
								'There are %d related posts:',
								relatedPosts.length
							),
							relatedPosts.length
					  )
					: __( 'There are no related posts.', 'xwp-country-card' ) }
			</h3>
			{ hasRelatedPosts && (
				<ul className="xwp-country-card__related-posts-list">
					{ relatedPosts.map( ( relatedPost, index ) => (
						<li key={ index } className="related-post">
							<a
								className="link"
								href={ relatedPost.link }
								data-post-id={ relatedPost.id }
							>
								<h3 className="title">{ relatedPost.title }</h3>
								<p className="excerpt">
									{ relatedPost.excerpt }
								</p>
							</a>
						</li>
					) ) }
				</ul>
			) }
		</div>
	);
}
