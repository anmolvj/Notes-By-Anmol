import React from 'react'
import { kebabCase } from 'lodash'
import { StyledLabel, StyledLink, StyledChip, StyledAvatar } from './Tag.styled'

const Tag = ({
    tag,
    size = 'small',
    uppercase,
    totalCount,
    tagspage,
    ...props
}) => (
    <StyledLink to={`/tags/${kebabCase(tag)}/`}>
        <StyledChip
            size={size}
            label={<StyledLabel variant="overline">{tag}</StyledLabel>}
            uppercase={uppercase}
            variant="outlined"
            color="secondary"
            tagspage={tagspage}
            avatar={
                totalCount ? <StyledAvatar>{totalCount}</StyledAvatar> : null
            }
        />
    </StyledLink>
)

export default Tag
