import React from "react";
import { Link } from "gatsby";
import {
  PostContainer,
  PostTitleContainer,
  PostTitleTextContainer,
  PostTextContainer,
  KeepReadingLinkContainer,
  FeaturedPostIconLeft,
  FeaturedPostIconRight,
  DateText,
  DateIcon
} from "./Post.styled";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Post = ({ post }) => {
  return (
    <PostContainer>
      {post.frontmatter.featuredimage ? (
        <div className="featured-thumbnail">
          <PreviewCompatibleImage
            imageInfo={{
              image: post.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`
            }}
          />
        </div>
      ) : null}
      <PostTitleContainer>
        {post.frontmatter.featuredpost && <FeaturedPostIconLeft />}
        <Link to={post.fields.slug}>
          <PostTitleTextContainer>
            {post.frontmatter.title}
          </PostTitleTextContainer>
        </Link>

        {post.frontmatter.featuredpost && <FeaturedPostIconRight />}
      </PostTitleContainer>
      <DateText>
        <DateIcon />
        {post.frontmatter.date}
      </DateText>
      <PostTextContainer>{post.excerpt}</PostTextContainer>
      <Link to={post.fields.slug}>
        <KeepReadingLinkContainer>Keep Reading →</KeepReadingLinkContainer>
      </Link>
    </PostContainer>
  );
};

export default Post;
