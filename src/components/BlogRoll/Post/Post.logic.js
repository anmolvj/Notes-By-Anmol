import React from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import { Button, CardActionArea, Link } from 'gatsby-theme-material-ui'
import Chip from '@material-ui/core/Chip'
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

const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE'
}

const TagLink = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`
const TypographyNunito = styled(Typography)`
    font-family: 'Nunito';
    color: white;
`
const StyledChip = styled(Chip)`
    background-color: #f0ddab;
    margin-right: 10px;
    font-weight: bold;
    text-transform: lowercase;
    font-size: 0.7rem;
    &:hover {
        color: ${colors.CERULEAN_BLUE};
    }
`
const StyledChipContainer = styled.div`
    margin-top: 1.25rem;
    padding: 1rem;
`

const PostTitle = styled(TypographyNunito)`
    color: ${colors.ETON_BLUE};
    margin-top: 10px;
    font-weight: bold;
`
const DescriptionText = styled(TypographyNunito)`
    height: 3em;
    line-height: 1em;
    overflow: hidden;
`
const useStyles = makeStyles({
    media: {
        maxHeight: 140
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
                <DescriptionText
                    variant="body2"
                    color="textSecondary"
                    component="p"
                >
                    {post.frontmatter.description}
                </DescriptionText>
            </CardContent>
            <StyledChipContainer>
                {post.frontmatter.tags &&
                    post.frontmatter.tags.map(tag => (
                        <TagLink to={`/tags/${kebabCase(tag)}/`}>
                            <StyledChip size="small" label={tag} />
                        </TagLink>
                    ))}
            </StyledChipContainer>
        </StyledCard>
    )
}

export default Post
