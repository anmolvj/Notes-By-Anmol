import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { AiOutlineLinkedin, AiFillHome } from 'react-icons/ai'

const colors = {
    ETON_BLUE: '#87CBAC',
}

const StyledNav = styled.nav`
    background-color: #1a1a1a;
`

const NavLinks = styled(Link)`
    color: white;
    font-family: Nunito;
    font-weight: bold;
    font-size: 1rem;
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
                            <NavLinks className="navbar-item" to="/my-story">
                                My Story
                            </NavLinks>
                            {/* <Link className="navbar-item" to="/products">
                Products
              </Link> */}
                            <NavLinks className="navbar-item" to="/blog">
                                Blog
                            </NavLinks>
                            <NavLinks className="navbar-item" to="/contact">
                                Contact
                            </NavLinks>
                            {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
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
