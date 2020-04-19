import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-theme-material-ui'
import Card from '@material-ui/core/Card'
import { StyledCard } from './Post.styled'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Tags from '../../Tags'

const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE',
}

const TypographyNunito = styled(Typography)`
    font-family: 'Nunito';
    color: white;
`

const PostTitle = styled(TypographyNunito)`
    color: ${colors.ETON_BLUE};
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: bold;
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
    right: 1rem;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`
const StyledGridContainer = styled(Grid)`
    background-color: inherit;
    padding-top: 1.2rem;
    padding-left: 1rem;
    padding-bottom: 1.2rem;
`
const NoteCard = styled(Card)`
    /* position: relative needed for featured 
    post tag to have correct fixed positioning */
    position: relative;
    background-color: #1a1a1a;
`

const NoteCardTitle = ({ link, title }) => (
    <Link to={link}>
        <PostTitle noWrap>{title}</PostTitle>
    </Link>
)

const NoteReadTime = ({ readTime }) => (
    <TypographyNunito noWrap gutterBottom variant="overline">
        {readTime}
    </TypographyNunito>
)

const NoteDescription = ({ desc }) => (
    <DescriptionText variant="subtitle2" color="textSecondary" component="p">
        {desc}
    </DescriptionText>
)

const Post = ({ post }) => (
    <NoteCard>
        {post.frontmatter.featuredpost && <FeaturedTag>FEATURED</FeaturedTag>}
        <StyledGridContainer
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <Grid item xs={10}>
                <NoteCardTitle
                    link={post.fields.slug}
                    title={post.frontmatter.title}
                />
            </Grid>
            <Grid item xs={10}>
                <NoteReadTime readTime={post.fields.readingTime.text} />
            </Grid>
            <Grid item xs={11}>
                <NoteDescription desc={post.frontmatter.description} />
            </Grid>
            <Grid item xs={10}>
                {/* Tags */}
            </Grid>
        </StyledGridContainer>
    </NoteCard>
)

// const Post = ({ post }) => (
//     <StyledCard
//         elevation={3}
//         bgColor={post.frontmatter.featuredpost && '#ffede6'}
//     >
//         {post.frontmatter.featuredpost && <FeaturedTag>FEATURED</FeaturedTag>}
//         <CardContent>
//             <Link to={post.fields.slug}>
//                 <PostTitle noWrap gutterBottom variant="h6">
//                     post.frontmatter.title
//                 </PostTitle>
//             </Link>
//             <TypographyNunito noWrap gutterBottom variant="overline">
//                 post.fields.readingTime.text
//             </TypographyNunito>
//             <TypographyNunito
//                 noWrap
//                 gutterBottom
//                 variant="subtitle1"
//             ></TypographyNunito>
//             <DescriptionText
//                 variant="body2"
//                 color="textSecondary"
//                 component="p"
//             >
//                 {post.frontmatter.description}
//             </DescriptionText>
//         </CardContent>
//         {post.frontmatter.tags && <Tags tags={post.frontmatter.tags} />}
//     </NoteCard>
// )

export default Post
