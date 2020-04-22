import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Button, Link } from 'gatsby-theme-material-ui'
import styled from 'styled-components'
import { IoMdArrowRoundForward } from 'react-icons/io'
import TaggedWith from '../components/Tags/TaggedWith.logic'
import ExpansionPanel from '../components/ExpansionPanel'

const StyledBrowseAllTagsButton = styled(Button)`
    font-weight: bold;
    color: #1a1a1a;
    font-size: 1rem;
    font-family: Nunito;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`

const TagRoute = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
        <ExpansionPanel
            url={post.node.fields.slug}
            title={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
            featuredimage={post.node.frontmatter.featuredimage}
        />
    ))
    const tag = pageContext.tag
    const title = data.site.siteMetadata.title
    const totalCount = data.allMarkdownRemark.totalCount

    return (
        <Layout>
            <section className="section">
                <Helmet title={`${tag} | ${title}`} />
                <div className="container content">
                    <div className="columns">
                        <div
                            className="column is-10 is-offset-1"
                            style={{ marginBottom: '6rem' }}
                        >
                            <h3 className="title is-size-4 is-bold-light">
                                <TaggedWith count={totalCount} tag={tag} />
                            </h3>
                            <ul className="taglist">{postLinks}</ul>
                            <Link to="/tags/">
                                <StyledBrowseAllTagsButton
                                    variant="text"
                                    endIcon={<IoMdArrowRoundForward />}
                                    size="large"
                                    disableFocusRipple
                                    disableRipple
                                >
                                    Browse all tags
                                </StyledBrowseAllTagsButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default TagRoute

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        featuredimage {
                            childImageSharp {
                                fluid(maxWidth: 768, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
