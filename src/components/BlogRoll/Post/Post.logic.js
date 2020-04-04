import React from 'react'
import { Link } from 'gatsby'
import {
    PostContainer,
    PostTitleContainer,
    PostTitleTextContainer,
    PostTextContainer,
    KeepReadingLinkContainer,
    FeaturedPostIconLeft,
    FeaturedPostIconRight,
    DateText,
    DateIcon,
    KeepReadingIcon,
    StyledDivider
} from './Post.styled'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Post = ({ post }) => {
    return (
        <PostContainer
            elevation={3}
            bgColor={post.frontmatter.featuredpost && '#ffede6'}
        >
            {/* {post.frontmatter.featuredimage ? (
        <PreviewCompatibleImage
          imageInfo={{
            image: post.frontmatter.featuredimage,
            alt: `featured image thumbnail for post ${post.frontmatter.title}`
          }}
        />
      ) : null} */}
            <PostTitleContainer>
                {post.frontmatter.featuredpost && <FeaturedPostIconLeft />}
                <Link to={post.fields.slug}>
                    <PostTitleTextContainer>
                        {post.frontmatter.title}
                    </PostTitleTextContainer>
                </Link>

                {post.frontmatter.featuredpost && <FeaturedPostIconRight />}
            </PostTitleContainer>
            <StyledDivider />
            <DateText>
                <DateIcon />
                {post.frontmatter.date}
            </DateText>
            <PostTextContainer>{post.excerpt}</PostTextContainer>
            <Link to={post.fields.slug}>
                <KeepReadingLinkContainer>
                    <KeepReadingIcon />
                    Keep Reading →
                </KeepReadingLinkContainer>
            </Link>
        </PostContainer>
    )
}

export default Post
