import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Tag from '../components/Tags/Tag.logic'
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

const TextContainer = styled.div`
    padding: 10px;
    margin-top: 30px;
`
const Description = styled.div`
    padding-bottom: 20px;
    font-weight: bold;
`
const TypographyNunito = styled(Typography)`
    font-family: 'Nunito';
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
    readingTime,
    date,
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
                                <TypographyNunito
                                    variant="subtitle-1"
                                    display="block"
                                >
                                    by {author}
                                </TypographyNunito>
                            )}

                            <TypographyNunito
                                noWrap
                                variant="overline"
                                color="textSecondary"
                                display="block"
                            >
                                {readingTime} | {date}
                            </TypographyNunito>
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
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        {tags.map((tag) => (
                                            <Grid item>
                                                <Tag
                                                    tagspage
                                                    tag={tag}
                                                    size="medium"
                                                    uppercase
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
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
    readingTime: PropTypes.string,
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
                    <Helmet titleTemplate="%s | Book Summary">
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
                readingTime={post.fields.readingTime.text}
                date={post.frontmatter.date}
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
            fields {
                slug
                readingTime {
                    text
                }
            }
        }
    }
`
