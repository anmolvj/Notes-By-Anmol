import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Parser } from 'html-to-react'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/BlogRoll/Post/PreviewCompatibleImage'
import px2vw from '../utils/px2vw'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
        flex-direction: row;
    }
`
const ImageContainer = styled.div``

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Greeting = styled.div`
    margin-top: 20px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    font-family: 'Nunito';
    padding: 10px;
    @media (min-width: 1024px) {
        font-size: 3rem;
    }
`
const ContentContainer = styled.div`
    padding: 10px;
    margin: 30px auto;
    font-size: 1rem;
    @media (min-width: 768px) {
        width: ${px2vw(768, 1024)};
    }
    @media (min-width: 1024px) {
        width: 100%;
        font-size: 1.25rem;
    }
`
export const MyStoryPageTemplate = ({
    greeting,
    content,
    headshotImg,
    contentComponent,
}) => {
    const PageContent = contentComponent || Content
    const htmlToReactParser = new Parser()

    return (
        <Container>
            <ImageContainer>
                <PreviewCompatibleImage imageInfo={headshotImg} />
            </ImageContainer>
            <TextContainer>
                <Greeting>{greeting}</Greeting>
                <ContentContainer>
                    {/* <PageContent content={content} /> */}
                    {htmlToReactParser.parse(content)}
                </ContentContainer>
            </TextContainer>
        </Container>
    )
}

MyStoryPageTemplate.propTypes = {
    greeting: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    headshotImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const MyStoryPage = ({ data }) => {
    const { markdownRemark: frontmatter } = data
    return (
        <Layout>
            <MyStoryPageTemplate
                contentComponent={HTMLContent}
                greeting={frontmatter.frontmatter.greeting}
                headshotImg={frontmatter.frontmatter.headshotImg}
                content={frontmatter.html}
            />
        </Layout>
    )
}

MyStoryPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default MyStoryPage

export const myStoryPageQuery = graphql`
    query MyStoryPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                greeting
                headshotImg {
                    childImageSharp {
                        fluid(maxWidth: 700, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
