import React from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby-theme-material-ui'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE',
    TUSCAN: '#F7D9A0',
}
const StyledLabel = styled(Typography)`
    font-size: 0.5rem;
    font-weight: bold;
`

const StyledLink = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`
const StyledChip = styled(Chip)`
    /* background-color: ${colors.TUSCAN}; */
    background-color: ${(props) => (props.tagspage ? 'white' : 'inherit')};;

    border-color: ${(props) => (props.tagspage ? 'none' : 'white')};
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'lowercase')};
    &:hover {
        color: ${colors.CERULEAN_BLUE};
    }
`
const StyledAvatar = styled(Avatar)`
    background-color: white;
`
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
