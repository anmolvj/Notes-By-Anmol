import React from 'react'
import { kebabCase } from 'lodash'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-theme-material-ui'
import Layout from '../../components/Layout'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE'
}
const TagLink = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`
const StyledAvatar = styled(Avatar)`
    background-color: white;
`
const StyledChip = styled(Chip)`
    background-color: #f0ddab;
    margin-right: 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.7rem;
    &:hover {
        color: ${colors.CERULEAN_BLUE};
    }
`
const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title }
        }
    }
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
                            {group.map(tag => (
                                <li key={tag.fieldValue}>
                                    <TagLink
                                        to={`/tags/${kebabCase(
                                            tag.fieldValue
                                        )}/`}
                                    >
                                        <StyledChip
                                            label={tag.fieldValue}
                                            avatar={
                                                <StyledAvatar>
                                                    {tag.totalCount}
                                                </StyledAvatar>
                                            }
                                        />
                                    </TagLink>
                                </li>
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
