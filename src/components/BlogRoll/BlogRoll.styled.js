import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const BlogRollContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: ${px2vw(32)};
    max-width: 100%;
`
