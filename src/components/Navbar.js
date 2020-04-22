import React from 'react'
import styled from 'styled-components'
import { AiOutlineLinkedin, AiFillHome } from 'react-icons/ai'
import { Link } from 'gatsby-theme-material-ui'
const colors = {
    ETON_BLUE: '#87CBAC',
}

const StyledNav = styled.nav`
    background-color: #1a1a1a;
`

const NavLinks = styled(Link)`
    &&& {
        color: white;
        background-color: #1a1a1a;
        font-family: Nunito;
        font-weight: bold;
        font-size: 1rem;
        &.active {
            color: ${colors.ETON_BLUE};
            background-color: #1a1a1a;
        }
        &:hover {
            color: ${colors.ETON_BLUE};
        }
    }
`
const HomeIcon = styled(AiFillHome)`
    color: ${colors.ETON_BLUE};
    height: 1.2rem;
    width: 1.2rem;
`
const LinkedInIcon = styled(AiOutlineLinkedin)`
    color: ${colors.ETON_BLUE};
    height: 1.5rem;
    width: 1.5rem;
`
const ExpandedNavContainer = styled.div`
    background-color: #1a1a1a;
`
const HamburgerSpanLines = styled.span`
    color: ${colors.ETON_BLUE};
    background-color: green;
`

const LinkedInLink = styled.a`
    color: white;
`

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: 'is-active',
                      })
                    : this.setState({
                          navBarActiveClass: '',
                      })
            }
        )
    }

    render() {
        return (
            <StyledNav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" title="Logo">
                            <HomeIcon />
                        </Link>
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                        >
                            <HamburgerSpanLines />
                            <HamburgerSpanLines />
                            <HamburgerSpanLines />
                        </div>
                    </div>
                    <ExpandedNavContainer
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-start has-text-centered">
                            <NavLinks
                                className="navbar-item"
                                to="/my-story"
                                activeClassName="active"
                                underline="none"
                            >
                                My Story
                            </NavLinks>

                            <NavLinks
                                className="navbar-item"
                                to="/blog"
                                activeClassName="active"
                                underline="none"
                            >
                                Blog
                            </NavLinks>
                            <NavLinks
                                className="navbar-item"
                                to="/contact"
                                activeClassName="active"
                                underline="none"
                            >
                                Contact
                            </NavLinks>
                        </div>
                        <div className="navbar-end has-text-centered">
                            <LinkedInLink
                                className="navbar-item"
                                href="https://www.linkedin.com/in/anmolvijayvargiya"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Linkedin"
                            >
                                <LinkedInIcon />
                            </LinkedInLink>
                        </div>
                    </ExpandedNavContainer>
                </div>
            </StyledNav>
        )
    }
}

export default Navbar
