import styled from 'styled-components'
import { Link } from 'gatsby-theme-material-ui'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import colors from '../../colors'

export const StyledLabel = styled(Typography)`
    font-size: 0.6rem;
    font-weight: bold;
`

export const StyledLink = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`
export const StyledChip = styled(Chip)`
    background-color: ${(props) => (props.tagspage ? 'white' : 'inherit')};
    border-color: ${(props) => (props.tagspage ? 'none' : 'white')};
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'lowercase')};
    &:hover {
        color: ${colors.CERULEAN_BLUE};
    }
`
export const StyledAvatar = styled(Avatar)`
    background-color: white;
`
