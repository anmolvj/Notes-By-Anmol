import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'

const TaggedWithContainer = styled.div``
const Count = styled.span`
    color: ${colors.ETON_BLUE};
`
const Tag = styled.span`
    color: #f50057;
`

const TaggedWith = ({ count, tag }) => (
    <TaggedWithContainer>
        <Count>{count}</Count> post{count > 1 && 's'} tagged with{' '}
        <Tag>{tag}</Tag>
    </TaggedWithContainer>
)

export default TaggedWith
