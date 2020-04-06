import React from 'react'
import styled from 'styled-components'
import { Button, CardActionArea, Link } from 'gatsby-theme-material-ui'
import {
    StyledCard,
    PostTitleContainer,
    PostTitleTextContainer,
    PostTextContainer,
    KeepReadingLinkContainer,
    FeaturedPostIconLeft,
    FeaturedPostIconRight,
    DateText,
    DateIcon,
    KeepReadingIcon,
    StyledDivider,
    StyledCardMedia
} from './Post.styled'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import px2vw from '../../../utils/px2vw'
import Badge from '@material-ui/core/Badge'

const TypographyNunito = styled(Typography)`
    font-family: 'Nunito';
    color: white;
`

const PostTitle = styled(TypographyNunito)`
    color: yellow;
    margin-top: 10px;
`
const useStyles = makeStyles({
    media: {
        maxHeight: 140
    },
    cardContent: {
        root: {
            padding: `${px2vw(20)}`
        }
    }
})

const FeaturedTag = styled.div`
    position: absolute;
    top: 0;
    background-color: yellow;
    font-weight: bold;
    padding: 5px;
    font-size: 0.7rem;
`

const Post = ({ post }) => {
    const classes = useStyles()
    return (
        <StyledCard
            elevation={3}
            bgColor={post.frontmatter.featuredpost && '#ffede6'}
        >
            {post.frontmatter.featuredpost && (
                <FeaturedTag>FEATURED</FeaturedTag>
            )}
            {/* <CardMedia
                    className={classes.media}
                    children={
                        post.frontmatter.featuredimage ? (
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: post.frontmatter.featuredimage,
                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`
                                }}
                            />
                        ) : null
                    }
                    title="Paella dish"
                /> */}

            <CardContent>
                <Link to={post.fields.slug}>
                    <PostTitle noWrap gutterBottom variant="h5" component="h2">
                        {post.frontmatter.title}
                    </PostTitle>
                </Link>
                <TypographyNunito noWrap gutterBottom variant="subtitle1">
                    {post.frontmatter.date}
                </TypographyNunito>
                <TypographyNunito
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    rowsMax={3}
                >
                    {post.frontmatter.description}
                </TypographyNunito>
            </CardContent>
        </StyledCard>
    )
}

export default Post
