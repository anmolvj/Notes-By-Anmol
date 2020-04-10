import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-theme-material-ui'
import { StyledCard } from './Post.styled'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Tags from '../../Tags'

const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE'
}

const TypographyNunito = styled(Typography)`
    font-family: 'Nunito';
    color: white;
`

const PostTitle = styled(TypographyNunito)`
    color: ${colors.ETON_BLUE};
    margin-top: 10px;
    font-weight: bold;
    /* font-family: 'Kaushan Script', cursive; */
    font-family: 'Merienda', cursive;
`
const DescriptionText = styled(TypographyNunito)`
    height: 3em;
    line-height: 1em;
    overflow: hidden;
`

const FeaturedTag = styled.div`
    position: absolute;
    top: 0;
    background-color: #f7b538;
    font-weight: bold;
    padding: 5px;
    font-size: 0.7rem;
`
const Post = ({ post }) => (
    <StyledCard
        elevation={3}
        bgColor={post.frontmatter.featuredpost && '#ffede6'}
    >
        {post.frontmatter.featuredpost && <FeaturedTag>FEATURED</FeaturedTag>}
        <CardContent>
            <Link to={post.fields.slug}>
                <PostTitle noWrap gutterBottom variant="h5" component="h2">
                    {post.frontmatter.title}
                </PostTitle>
            </Link>
            <TypographyNunito noWrap gutterBottom variant="subtitle1">
                {post.frontmatter.date}
            </TypographyNunito>
            <DescriptionText
                variant="body2"
                color="textSecondary"
                component="p"
            >
                {post.frontmatter.description}
            </DescriptionText>
        </CardContent>
        {post.frontmatter.tags && <Tags tags={post.frontmatter.tags} />}
    </StyledCard>
)

export default Post
