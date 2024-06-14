import React from 'react'

function ForgetPassword() {
  return (
    <div>F
        <section className="forget-password-page account">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="block text-center">
          <a className="logo" href="index-2">
            <img src="images/logo.png" alt=""/>
          </a>
          <h2 className="text-center">Welcome Back</h2>
          <form className="text-left clearfix">
            <p>Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.</p>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Account email address"/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-main text-center">Request password reset</button>
            </div>
          </form>
          <p className="mt-20"><a href="login">Back to log in</a></p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ForgetPassword