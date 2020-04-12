import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
const MainContainer = styled.div`
    flex: 1 0 auto;
`

const DefaultFont = styled.div`
    font-family: 'Nunito';
`
const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <BodyContainer>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="theme-color" content="#fff" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
            </Helmet>
            <MainContainer>
                <Navbar />
                <DefaultFont>{children}</DefaultFont>
            </MainContainer>

            <Footer />
        </BodyContainer>
    )
}

export default TemplateWrapper
