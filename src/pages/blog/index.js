import React from 'react'
import styled from 'styled-components'
import { GiSpellBook } from 'react-icons/gi'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const BlogPageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    margin: 20px auto;
    font-weight: bold;
`

const BookIcon = styled(GiSpellBook)`
    font-size: 7rem;
`
export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                {/* <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/blog-index.jpg')`
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-1"
                        style={{
                            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                            backgroundColor: '#f40',
                            color: 'white',
                            padding: '1rem'
                        }}
                    >
                        Latest Posts
                    </h1>
                </div> */}
                <BlogPageHeader>
                    <BookIcon />
                    All Posts
                </BlogPageHeader>
                <section className="section">
                    <div className="container">
                        <BlogRoll />
                    </div>
                </section>
            </Layout>
        )
    }
}
