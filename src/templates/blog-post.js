import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Paper from '@material-ui/core/Paper'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Tags from '../components/Tags'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const BookCoverContainer = styled(Paper)`
    width: 70%;
    margin: auto;
    @media (min-width: 768px) {
        width: 50%;
    }
    @media (min-width: 1024px) {
        width: 35%;
    }
    @media (min-width: 1440px) {
        width: 30%;
    }
`

const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
`
const TitleHeader = styled.div`
    font-size: 2rem;
    font-weight: bold;
`
const TitleSubHeader = styled.div``

const TextContainer = styled.div`
    padding: 10px;
    margin-top: 30px;
`
const Description = styled.div`
    padding-bottom: 20px;
    font-weight: bold;
`
export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    author,
    helmet,
    featuredimage,
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <TitleContainer>
                            <TitleHeader>{title}</TitleHeader>
                            {author && (
                                <TitleSubHeader>by {author}</TitleSubHeader>
                            )}
                        </TitleContainer>

                        <BookCoverContainer elevation={15}>
                            <PreviewCompatibleImage imageInfo={featuredimage} />
                        </BookCoverContainer>
                        <TextContainer>
                            <Description>{description}</Description>

                            <PostContent content={content} />
                            {tags && tags.length ? (
                                <div style={{ marginTop: `4rem` }}>
                                    <h4>Tags</h4>
                                    {<Tags tags={tags} size="medium" />}
                                </div>
                            ) : null}
                        </TextContainer>
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
    helmet: PropTypes.object,
    featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        .isRequired,
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
                featuredimage={post.frontmatter.featuredimage}
            />
        </Layout>
    )
}

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
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
`
