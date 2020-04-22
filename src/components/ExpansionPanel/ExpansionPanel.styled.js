import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export const ImageGridItem = styled(Grid)`
    min-width: 100px;
`
export const colors = {
    ETON_BLUE: '#87CBAC',
    CERULEAN_BLUE: '#3066BE',
}

export const Title = styled(Typography)`
    font-weight: bold;
    font-family: Nunito;
    color: ${colors.ETON_BLUE};
`
export const Description = styled(Typography)`
    font-weight: bold;
    font-family: Nunito;
    color: #333;
`
export const StyledExpansionPanel = styled(ExpansionPanel)`
    margin-bottom: 10px;
    width: 100%;
`
export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
    background-color: #f2f2f2;
    padding: 1rem;
`
