import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { AiOutlineLinkedin, AiFillHome } from 'react-icons/ai'

const colors = {
    ETON_BLUE: '#87CBAC'
}

const MyName = styled.h1`
    font-weight: bold;
    color: ${colors.ETON_BLUE};
`
const HomeIcon = styled(AiFillHome)`
    color: ${colors.ETON_BLUE};
    height: 1.5rem;
    width: 1.5rem;
`
const LinkedInIcon = styled(AiOutlineLinkedin)`
    color: ${colors.ETON_BLUE};
    height: 1.5rem;
    width: 1.5rem;
`

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: ''
        }
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: 'is-active'
                      })
                    : this.setState({
                          navBarActiveClass: ''
                      })
            }
        )
    }

    render() {
        return (
            <nav
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
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-start has-text-centered">
                            <Link className="navbar-item" to="/about">
                                About
                            </Link>
                            {/* <Link className="navbar-item" to="/products">
                Products
              </Link> */}
                            <Link className="navbar-item" to="/blog">
                                Blog
                            </Link>
                            <Link className="navbar-item" to="/contact">
                                Contact
                            </Link>
                            {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
                        </div>
                        <div className="navbar-end has-text-centered">
                            <a
                                className="navbar-item"
                                href="https://www.linkedin.com/in/anmolvijayvargiya"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Linkedin"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
