import React from 'react'

const Coming = () => {
  return (
    <div>
        <section className="coming-soon bg-coming-soon text-center overly">
	<div className="container">
		<div className="row">
			<div className="col-md-8 col-md-offset-2">
				<div className="block">
					<div className="count-down">
						<div className="syotimer">
							<div className="your_selector_to_countdown" id="simple-timer"></div>
						</div>
					</div>
					<h1>Hello, we're Funko Store and <br/> we are almost ready for launch</h1>
					<div className="social-media-icons mt-20">
						<ul>
							<li><a href="#"><i className="tf-ion-social-facebook"></i></a></li>
							<li><a href="#"><i className="tf-ion-social-twitter"></i></a></li>
							<li><a href="#"><i className="tf-ion-social-linkedin"></i></a></li>
							<li><a href="#"><i className="tf-ion-social-octocat"></i></a></li>
							<li><a href="#"><i className="tf-ion-social-pinterest"></i></a></li>
							<li><a href="#"><i className="tf-ion-social-instagram"></i></a></li>

						</ul>


					</div>

					<p className="copyright-text">Copyright &copy; 2024</p>

				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Coming