import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { BlogRollContainer } from './BlogRoll.styled'
import Post from './Post'

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        let showAll = false
        if (typeof window !== undefined) {
            showAll = window.location.href.split('/').pop() === 'blog'
            console.log('href = ', window.location.href.split('/').pop())
        }
        return (
            <BlogRollContainer>
                {posts &&
                    posts.map(({ node: post }, idx) => {
                        if (showAll || idx < 4) {
                            return <Post post={post} />
                        }
                    })}
            </BlogRollContainer>
        )
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
}

export default () => (
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
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
)
