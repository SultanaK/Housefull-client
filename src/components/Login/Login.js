import React, { Component } from 'react'
import ValidationError from '../ValidationError'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            email: {
                value: "",
                touched: false
            },
            password: {
                value: "",
                touched: false
            },
            repeatPassword: {
                value: "",
                touched: false
            }
        };
    }

    updateEmail(email) {
        this.setState({ email: { value: email, touched: true } });
    }

    updatePassword(password) {
        this.setState({
            password: { value: password, touched: true }
        });
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({
            repeatPassword: {
                value: repeatPassword,
                touched: true
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, password, repeatPassword } = this.state;
    }

    validateEmail() {
        const email = this.state.email.value.trim();
        if (email.length === 0) {
            return "Email is required";
        } else if (email.length < 6) {
            return "Name must be at least 3 characters long";
        } else if (!email.match(/[@]/)) {
            return "Password must contain at least one number";
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return "Password is required";
        } else if (password.length < 6 || password.length > 72) {
            return "Password must be between 6 and 72 characters long";
        } else if (!password.match(/[0-9]/)) {
            return "Password must contain at least one number";
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();

        if (repeatPassword !== password) {
            return "Passwords do not match";
        }
    }

    render() {
        const emailError = this.validateEmail();
        const passwordError = this.validatePassword();
        const repeatPasswordError = this.validateRepeatPassword();

        return (
            <form className="registration" onSubmit={e => this.handleSubmit(e)}>
                <h2>Register</h2>
                <div className="registration__hint">* required field</div>
                <div className="form-group">
                    <label htmlFor="name">Email *</label>
                    <input
                        type="text"
                        className="registration__control"
                        name="email"
                        id="email"
                        onChange={e => this.updateEmail(e.target.value)}
                    />
                    {this.state.email.touched && <ValidationError message={emailError} />}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input
                        type="password"
                        className="registration__control"
                        name="password"
                        id="password"
                        onChange={e => this.updatePassword(e.target.value)}
                    />
                    <div className="registration__hint">
                        6 to 72 characters, must include a number
          </div>
                    {this.state.password.touched && (
                        <ValidationError message={passwordError} />
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password *</label>
                    <input
                        type="password"
                        className="registration__control"
                        name="repeatPassword"
                        id="repeatPassword"
                        onChange={e => this.updateRepeatPassword(e.target.value)}
                    />
                    {this.state.repeatPassword.touched && (
                        <ValidationError message={repeatPasswordError} />
                    )}
                </div>

                <div className="registration__button__group">
                    <button type="reset" className="registration__button">
                        Cancel
          </button>
                    <button
                        type="submit"
                        className="registration__button"
                        disabled={
                            this.validateEmail() ||
                            this.validatePassword() ||
                            this.validateRepeatPassword()
                        }
                    >
                        login
          </button>
                </div>
            </form>
        );
    }
}


