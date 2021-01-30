import React from 'react'

import NavBar from '../../components/navbar/navbar'

function Login() {
    return (
        <body>
          <header>
            <NavBar />
          </header>
          <main>
          <div className="container">
            <div className="row">
                <div className="signn1 col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-3">Sign In</h5>
                            <form className="form-signin">
                                <div className="form-label-group mb-3">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autofocus />
                                </div>

                                <div className="form-label-group mb-3">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                </div>

                                <button className="btn col-12 btn-lg btn-outline-primary btn-block text-uppercase mb-3" type="submit">Login</button>

                                <p className="text-center"><a href="register" className="btn shadow-none">Register?</a></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </main>
          <footer></footer>
        </body>
    );
  }
  
  export default Login;