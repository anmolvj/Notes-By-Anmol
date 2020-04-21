import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import px2vw from '../../../utils/px2vw'

const Image = styled(Img)`
    margin: auto;
    width: 100vw;

    @media (min-width: 1024px) {
        max-width: ${px2vw(750)};
    }
`
const PreviewCompatibleImage = ({ imageInfo }) => {
    const { alt = '', childImageSharp, image } = imageInfo

    if (!!image && !!image.childImageSharp) {
        return <Image fluid={image.childImageSharp.fluid} alt={alt} />
    }

    if (!!childImageSharp) {
        return <Image fluid={childImageSharp.fluid} alt={alt} />
    }

    if (!!image && typeof image === 'string')
        return <img src={image} alt={alt} />

    return null
}

PreviewCompatibleImage.propTypes = {
    imageInfo: PropTypes.shape({
        alt: PropTypes.string,
        childImageSharp: PropTypes.object,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
            .isRequired,
        style: PropTypes.object,
    }).isRequired,
}

export default PreviewCompatibleImage
