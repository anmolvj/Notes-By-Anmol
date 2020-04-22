import React from 'react'
import { navigate } from 'gatsby-link'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { MdSend } from 'react-icons/md'
import colors from '../../colors'
import Layout from '../../components/Layout'

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
}

const SendButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 1024px) {
        justify-content: flex-start;
    }
`
const SendButton = styled(Button)`
    color: ${colors.ETON_BLUE};
    font-size: 1.25rem;
    padding: 0;
    margin-top: 10px;
    text-transform: none;
    font-weight: bold;
`
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isValidated: false }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    render() {
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h1>Contact</h1>
                            <form
                                name="contact"
                                method="post"
                                action="/contact/thanks/"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={this.handleSubmit}
                            >
                                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />
                                <div hidden>
                                    <label>
                                        Don’t fill this out:{' '}
                                        <input
                                            name="bot-field"
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor={'name'}>
                                        Your name
                                    </label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type={'text'}
                                            name={'name'}
                                            onChange={this.handleChange}
                                            id={'name'}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor={'email'}>
                                        Email
                                    </label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type={'email'}
                                            name={'email'}
                                            onChange={this.handleChange}
                                            id={'email'}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label
                                        className="label"
                                        htmlFor={'message'}
                                    >
                                        Message
                                    </label>
                                    <div className="control">
                                        <textarea
                                            className="textarea"
                                            name={'message'}
                                            onChange={this.handleChange}
                                            id={'message'}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                {/* <div className="field"> */}
                                <SendButtonContainer>
                                    <SendButton
                                        size="large"
                                        type="submit"
                                        endIcon={<MdSend />}
                                    >
                                        Send
                                    </SendButton>
                                </SendButtonContainer>

                                {/* </div> */}
                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
