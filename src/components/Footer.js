import React from 'react'
import styled from 'styled-components'
import instagram from '../img/social/instagram.svg'
import linkedin from '../img/social/linkedin.svg'

const FooterContainer = styled.footer`
    flex-shrink: 0;
`

const Footer = class extends React.Component {
    render() {
        return (
            <FooterContainer className="footer">
                <div className="content has-text-centered has-background-black has-text-white-ter">
                    <div className="container has-background-black has-text-white-ter">
                        <div className="columns">
                            <div
                                className="column is-4 social"
                                style={{ margin: 'auto' }}
                            >
                                <a
                                    title="Linkedin"
                                    href="https://www.linkedin.com/in/anmolvijayvargiya"
                                >
                                    <img
                                        src={linkedin}
                                        alt="Linkedin"
                                        style={{ width: '1em', height: '1em' }}
                                    />
                                </a>
                                <a
                                    title="instagram"
                                    href="https://www.instagram.com/anmol_uno"
                                >
                                    <img
                                        src={instagram}
                                        alt="Instagram"
                                        style={{ width: '1em', height: '1em' }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        )
    }
}

export default Footer
