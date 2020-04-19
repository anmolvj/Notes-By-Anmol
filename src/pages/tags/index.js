import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Tag from '../../components/Tags/Tag.logic'
import Grid from '@material-ui/core/Grid'
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
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={3}
                        >
                            {group.map((tag) => (
                                <Grid item>
                                    <Tag
                                        tagspage
                                        tag={tag.fieldValue}
                                        size="medium"
                                        totalCount={tag.totalCount}
                                        uppercase
                                    />
                                </Grid>
                            ))}
                        </Grid>
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
