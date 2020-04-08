import React from 'react'
import styled from 'styled-components'
import Tag from './Tag.logic'

const TagsContainer = styled.div`
    margin-top: 1.25rem;
    padding: 1rem;
`

export default ({ tags = [], ...props }) => (
    <TagsContainer>
        {tags.map(t => (
            <Tag tag={t} {...props} />
        ))}
    </TagsContainer>
)
