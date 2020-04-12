import React from 'react'
import PropTypes from 'prop-types'
import { MyStoryPageTemplate } from '../../templates/my-story-page'

const MyStoryPagePreview = ({ entry, widgetFor, getAsset }) => (
    <MyStoryPageTemplate
        headshotImg={getAsset(entry.getIn(['data', 'headshotImg']))}
        greeting={entry.getIn(['data', 'greeting'])}
        content={widgetFor('body')}
    />
)

MyStoryPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func,
    getAsset: PropTypes.func
}

export default MyStoryPagePreview
