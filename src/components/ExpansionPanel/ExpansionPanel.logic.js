import React from 'react'
import { Link } from 'gatsby-theme-material-ui'
import Grid from '@material-ui/core/Grid'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import { MdExpandMore } from 'react-icons/md'
import {
    Title,
    Description,
    StyledExpansionPanel,
    StyledExpansionPanelDetails,
    ImageGridItem,
} from './ExpansionPanel.styled'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default ({ url, title, description, featuredimage }) => (
    <StyledExpansionPanel>
        <ExpansionPanelSummary
            aria-controls="panel1a-content"
            expandIcon={<MdExpandMore />}
        >
            <Link to={url}>
                <Title variant="body2">{title}</Title>
            </Link>
        </ExpansionPanelSummary>
        <StyledExpansionPanelDetails>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={2}
            >
                <ImageGridItem item xs={1}>
                    <PreviewCompatibleImage imageInfo={featuredimage} />
                </ImageGridItem>
                <Grid item xs={10}>
                    <Description variant="subtitle2">{description}</Description>
                </Grid>
            </Grid>
        </StyledExpansionPanelDetails>
    </StyledExpansionPanel>
)
