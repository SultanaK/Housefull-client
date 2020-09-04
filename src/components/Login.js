import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <section>
                <h3>Login</h3>
                <form className="login-user">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="registration_email" name="email" placeholder="Your email.." required></input>
                        <label for="password">Passward</label>
                        <input type="password" id="registration_password" name="password" placeholder="Your password.." required></input>
                            <button type="submit"> Submit</button>
                                    
    
        </form>
       </section> 
     
            
        )
    }
}
