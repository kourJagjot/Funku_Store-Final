import React from 'react'
import Header from '../Components/common/Header'
import Footer from '../Components/common/Footer'

const Contact = () => {
  return (
    <div>
        <Header/>
        <section className="page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="content">
					<h1 className="page-name">Contact Us</h1>
					<ol className="breadcrumb">
						<li><a href="index">Home</a></li>
						<li className="active">contact</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>




<section className="page-wrapper">
	<div className="contact-section">
		<div className="container">
			<div className="row">
				{/* <!-- Contact Form --> */}
				<div className="contact-form col-md-6 " >
					<form id="contact-form" method="post" action="" role="form">
					
						<div className="form-group">
							<input type="text" placeholder="Your Name" className="form-control" name="name" id="name"/>
						</div>
						
						<div className="form-group">
							<input type="email" placeholder="Your Email" className="form-control" name="email" id="email"/>
						</div>
						
						<div className="form-group">
							<input type="text" placeholder="Subject" className="form-control" name="subject" id="subject"/>
						</div>
						
						<div className="form-group">
							<textarea rows="6" placeholder="Message" className="form-control" name="message" id="message"></textarea>	
						</div>
						
						<div id="mail-success" className="success">
							Thank you. The Mailman is on His Way :
						</div>
						
						<div id="mail-fail" className="error">
							Sorry, don't know what happened. Try later :
						</div>
						
						<div id="cf-submit">
							<input  id="contact-submit" className="btn btn-transparent" value="Submit"/>
						</div>						
						
					</form>
				</div>
				{/* <!-- ./End Contact Form --> */}
				
				{/* <!-- Contact Details --> */}
				<div className="contact-details col-md-6 " >
					<div className="google-map">
						<div id="map"></div>
					</div>
					<ul className="contact-short-info" >
						<li>
							<i className="tf-ion-ios-home"></i>
							<span>123 Main Street,Anytown, USA,nytown, USA</span>
						</li>
						<li>
							<i className="tf-ion-android-phone-portrait"></i>
							<span>Phone: +890-31-000-000</span>
						</li>
						<li>
							<i className="tf-ion-android-globe"></i>
							<span>Fax: +840-31-200-000</span>
						</li>
						<li>
							<i className="tf-ion-android-mail"></i>
							<span>Email: hello@example.com</span>
						</li>
					</ul>
					{/* <!-- Footer Social Links --> */}
					<div className="social-icon">
						<ul>
							<li><a className="fb-icon" href="https://www.facebook.com"><i className="tf-ion-social-facebook"></i></a></li>
							<li><a href="https://www.twitter.com/"><i className="tf-ion-social-twitter"></i></a></li>
							<li><a href="#"><i className="tf-ion-social-dribbble-outline"></i></a></li>
							<li><a href="#"><i className="tf-ion-social-googleplus-outline"></i></a></li>
							<li><a href="#"><i className="tf-ion-social-pinterest-outline"></i></a></li>
						</ul>
					</div>
					{/* <!--/. End Footer Social Links --> */}
				</div>
				{/* <!-- / End Contact Details --> */}
					
				
			
			</div> 
            {/* <!-- end row --> */}
		</div> 
        {/* <!-- end container --> */}
	</div>
</section>
<Footer/>
    </div>
  )
}

export default Contact