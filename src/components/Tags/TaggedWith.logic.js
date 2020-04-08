import React from 'react'
import styled from 'styled-components'

const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE'
}

const TaggedWithContainer = styled.div``
const Count = styled.span`
    color: ${colors.ETON_BLUE};
`
const Tag = styled.span`
    color: ${colors.CERULEAN_BLUE};
`

const TaggedWith = ({ count, tag }) => (
    <TaggedWithContainer>
        <Count>{count}</Count> post{count > 1 && 's'} tagged with{' '}
        <Tag>{tag}</Tag>
    </TaggedWithContainer>
)

export default TaggedWith
