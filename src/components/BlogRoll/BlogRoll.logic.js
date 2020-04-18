import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Post from './Post'

export const BlogRoll = (props) => {
    const { data, showAll } = props
    const { edges: posts } = data.allMarkdownRemark
    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
        >
            {posts &&
                posts.map(({ node: post }, idx) => {
                    if (showAll || idx < 4) {
                        return (
                            <Grid item xs={12} sm={6}>
                                <Post post={post} />
                            </Grid>
                        )
                    }
                })}
        </Grid>
    )
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default ({ showAll }) => (
    <StaticQuery
        query={graphql`
            query BlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "blog-post" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                                readingTime {
                                    text
                                }
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                featuredpost
                                featuredimage {
                                    childImageSharp {
                                        fluid(maxWidth: 120, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                description
                                tags
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => (
            <BlogRoll data={data} count={count} showAll={showAll} />
        )}
    />
)
