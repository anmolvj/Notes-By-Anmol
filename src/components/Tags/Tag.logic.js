import React from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby-theme-material-ui'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE',
    TUSCAN: '#F7D9A0'
}

const StyledLink = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`
const StyledChip = styled(Chip)`
    background-color: ${colors.TUSCAN};
    margin-right: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: ${props => (props.uppercase ? 'uppercase' : 'lowercase')};
    font-size: 0.7rem;
    &:hover {
        color: ${colors.CERULEAN_BLUE};
    }
`
const StyledAvatar = styled(Avatar)`
    background-color: white;
`
const Tag = ({ tag, size = 'small', uppercase, totalCount, ...props }) => (
    <StyledLink to={`/tags/${kebabCase(tag)}/`}>
        <StyledChip
            size={size}
            label={tag}
            uppercase={uppercase}
            avatar={
                totalCount ? <StyledAvatar>{totalCount}</StyledAvatar> : null
            }
        />
    </StyledLink>
)

export default Tag
