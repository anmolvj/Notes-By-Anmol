import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Parser } from 'html-to-react'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/BlogRoll/Post/PreviewCompatibleImage'
import px2vw from '../utils/px2vw'
import colors from '../colors'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.VERY_DARK_GREY};
    height: 100%;
    @media (min-width: 1280px) {
        flex-direction: row;
    }
`
const ImageContainer = styled.div`
    width: 100%;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    height: 100%;
`
const Greeting = styled.div`
    color: ${colors.ETON_BLUE};
    margin-top: 20px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    font-family: 'Nunito';
    padding: 10px;
    @media (min-width: 768px) {
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
const Starter = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;

    @media (min-width: 1024px) {
        font-size: 2rem;
    }
`
const Facts = styled.div`
    padding: 1.5rem;
    padding-left: 2rem;
    @media (min-width: 1280px) {
        padding-bottom: 0;
    }
`

export const MyStoryPageTemplate = ({
    greeting,
    content,
    headshotImg,
    contentComponent,
}) => {
    const htmlToReactParser = new Parser()

    return (
        <Container>
            <ImageContainer>
                <PreviewCompatibleImage imageInfo={headshotImg} />
            </ImageContainer>
            <TextContainer>
                <Greeting>Who is this guy ?</Greeting>
                <ContentContainer>
                    <Starter>
                        👋&nbsp;&nbsp;Hey, my name is Anmol Vijayvargiya.
                        Welcome to my&nbsp;📕&nbsp;&nbsp;notebook.
                    </Starter>
                    <Facts>{htmlToReactParser.parse(content)}</Facts>
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
        <Layout bgColor={colors.VERY_DARK_GREY}>
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
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
