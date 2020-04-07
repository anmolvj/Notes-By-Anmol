import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-theme-material-ui'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Chip from '@material-ui/core/Chip'
const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE'
}
const StyledChip = styled(Chip)`
    background-color: #f0ddab;
    margin-right: 10px;
    font-weight: bold;
    text-transform: lowercase;
    font-size: 0.7rem;
    &:hover {
        color: ${colors.CERULEAN_BLUE};
    }
`
const TagLink = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`
export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    author,
    helmet
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}{' '}
                            {author && <i className="subtitle">by {author}</i>}
                        </h1>
                        <p>{description}</p>
                        <PostContent content={content} />
                        {tags && tags.length ? (
                            <div style={{ marginTop: `4rem` }}>
                                <h4>Tags</h4>
                                <ul className="taglist">
                                    {tags.map(tag => (
                                        <li key={tag + `tag`}>
                                            <TagLink
                                                to={`/tags/${kebabCase(tag)}/`}
                                            >
                                                <StyledChip label={tag} />
                                            </TagLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    helmet: PropTypes.object
}

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                author={post.frontmatter.author}
            />
        </Layout>
    )
}

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object
    })
}

export default BlogPost

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                author
                description
                tags
            }
        }
    }
`
