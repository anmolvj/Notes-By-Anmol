import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE'
}
const StyledAvatar = styled(Avatar)`
    background-color: ${colors.ETON_BLUE};
    color: white;
    display: inline-block;
    width: 2rem;
    height: 2rem;
`
const StyledCard = styled(Card)`
    padding: 1rem;
`
class TagRoute extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const postLinks = posts.map(post => (
            <StyledCard raised key={post.node.fields.slug}>
                <Link to={post.node.fields.slug}>
                    <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
                </Link>
            </StyledCard>
        ))
        const tag = this.props.pageContext.tag
        const title = this.props.data.site.siteMetadata.title
        const totalCount = this.props.data.allMarkdownRemark.totalCount
        const tagHeader = `${(<StyledAvatar>{totalCount}</StyledAvatar>)} post${
            totalCount === 1 ? '' : 's'
        } tagged with “${tag}”`

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
                                    <StyledAvatar>{totalCount}</StyledAvatar>{' '}
                                    post(s) tagged with {tag}
                                </h3>
                                <ul className="taglist">{postLinks}</ul>
                                <Button variant="outlined">
                                    <Link to="/tags/">Browse all tags</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
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
                    }
                }
            }
        }
    }
`
