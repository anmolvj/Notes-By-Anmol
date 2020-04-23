import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
const MainContainer = styled.div`
    flex: 1 0 auto;
    background-color: ${(props) => (props.bgColor ? props.bgColor : 'inherit')};
`

const DefaultFont = styled.div`
    font-family: 'Nunito';
`
const TemplateWrapper = ({ children, bgColor }) => {
    const { title, description } = useSiteMetadata()
    return (
        <BodyContainer>
            <Helmet
                meta={[
                    {
                        name: 'keywords',
                        content:
                            'anmol, vijayvargiya, notes, books, pwa, blog, summary',
                    },
                ]}
            >
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="theme-color" content="#fff" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />

                {/* KAUSHAN SCRIPT is not getting correct font version loaded using our font loading plugin */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <MainContainer bgColor={bgColor}>
                <Navbar />
                <DefaultFont>{children}</DefaultFont>
            </MainContainer>
        </BodyContainer>
    )
}

export default TemplateWrapper
