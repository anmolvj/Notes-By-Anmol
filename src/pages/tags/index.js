import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Tag from '../../components/Tags/Tag.logic'

const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
    <Layout>
        <section className="section">
            <Helmet title={`Tags | ${title}`} />
            <div className="container content">
                <div className="columns">
                    <div
                        className="column is-10 is-offset-1"
                        style={{ marginBottom: '6rem' }}
                    >
                        <h1 className="title is-size-2 is-bold-light">Tags</h1>
                        <ul className="taglist">
                            {group.map((tag) => (
                                <Tag
                                    tag={tag.fieldValue}
                                    size="medium"
                                    totalCount={tag.totalCount}
                                    uppercase
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
    query TagsQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
