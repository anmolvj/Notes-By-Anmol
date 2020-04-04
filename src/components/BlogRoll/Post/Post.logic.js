import React from 'react'
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

const useStyles = makeStyles({
    media: {
        height: 140
    }
})

const Post = ({ post }) => {
    const classes = useStyles()
    return (
        <StyledCard
            elevation={3}
            bgColor={post.frontmatter.featuredpost && '#ffede6'}
        >
            <CardActionArea disableRipple>
                {/* <CardMedia
                    className={classes.media}
                    image={
                        post.frontmatter.featuredimage ||
                        '/static/images/cards/contemplative-reptile.jpg'
                    }
                    title="Contemplative Reptile"
                /> */}
                {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }}
                    />
                ) : null}
                <CardContent>
                    <Typography noWrap gutterBottom variant="h5" component="h2">
                        {post.frontmatter.title}
                    </Typography>

                    <Typography noWrap gutterBottom variant="subtitle1">
                        {post.frontmatter.date}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        rowsMax={3}
                    >
                        {post.frontmatter.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={post.fields.slug}>
                    <Button
                        size="small"
                        color="primary"
                        startIcon={<KeepReadingIcon />}
                    >
                        Keep Reading →
                    </Button>
                </Link>
            </CardActions>
        </StyledCard>
    )
}

export default Post
