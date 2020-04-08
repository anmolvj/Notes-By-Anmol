import React from 'react'
import { Link } from 'gatsby'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import {
    StyledLinkIcon,
    Title,
    Description,
    StyledExpansionPanel,
    StyledExpansionPanelDetails
} from './ExpansionPanel.styled'

export default ({ url, title, description }) => (
    <StyledExpansionPanel>
        <ExpansionPanelSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Link to={url}>
                <StyledLinkIcon />
            </Link>
            <Title variant="body2">{title}</Title>
        </ExpansionPanelSummary>
        <StyledExpansionPanelDetails>
            <Description variant="subtitle2">{description}</Description>
        </StyledExpansionPanelDetails>
    </StyledExpansionPanel>
)
