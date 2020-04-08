import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import TaggedWith from '../components/Tags/TaggedWith.logic'
import ExpansionPanel from '../components/ExpansionPanel'

const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE'
}

const StyledBrowseAllTagsButton = styled(Button)`
    color: ${colors.ETON_BLUE};
    font-weight: bold;
`

const TagRoute = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
        <ExpansionPanel
            url={post.node.fields.slug}
            title={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
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
                            <StyledBrowseAllTagsButton variant="text">
                                <Link to="/tags/">Browse all tags</Link>
                            </StyledBrowseAllTagsButton>
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
                    }
                }
            }
        }
    }
`
