class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ul class="navbar-nav justify-content-center">
	      		<li class="nav-item active">
	        		<a class="nav-link" href="index.html">About Us<span class="sr-only">(current)</span></a>
	      		</li>
				  
				<li class="nav-item dropdown">
	        		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownChaptersLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          		Register
	        		</a>
	        		<div class="dropdown-menu justify-content-start" aria-labelledby="navbarDropdownChaptersLink">
	          			<a class="dropdown-item" href="https://forms.gle/gKuzotK5qLDToLTNA">REGISTER</a>
						<a class="dropdown-item" href="terms.html">Terms&Conditions</a>
					    <a class="dropdown-item" href="privacypolicy.html">Privacy Policy</a>
						<a class="dropdown-item" href="refund.html"> Refund Policy </a>
	        		</div>
	      		</li>
	      	
				 
	      		<li class="nav-item dropdown">
	        		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownChaptersLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          		Upcomming Hackathons
	        		</a>
	        		<div class="dropdown-menu justify-content-start" aria-labelledby="navbarDropdownChaptersLink">
	          			<a class="dropdown-item" href="https://hacksharks-2-0.devpost.com/">Hacksharks 2.0</a>
						<a class="dropdown-item" href="https://hacksharks-2-0.devpost.com/">Wolf HACK</a>
						<a class="dropdown-item" href="https://hacksharks-2-0.devpost.com/">The Code Jam</a>
	        		</div>
	      		</li>
	      		<li class="nav-item dropdown">
	        		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMoreLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          		Activities
	        		</a>
	        		<div class="dropdown-menu" aria-labelledby="navbarDropdownMoreLink">
					<a class="dropdown-item" href="events_2022.html">Student Activities</a>
	        			<a class="dropdown-item" href="events_2022.html">Social Events</a>
	          			<a class="dropdown-item" href="events_2022.html">Technical Events</a>
	          			
	        		</div>
	      		
				<li class="nav-item">
	        		<a class="nav-link" href="https://rzp.io/l/aTg4zTuOBj">Apply Membership</a>
				
	      		</li>
	    	</ul>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

		<div class="footer-info">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-4">
						<div class="contact-mode address">
							<h4 class="text-left">Address</h4>
							<hr class="underline" align="left" style="width:6em">
						</div>
						<address>
						DevSharks  <br>
						
						Email : techevents.org@gmail.com <br>
						</address>
					</div>
					<div class="col-xs-12 col-md-4">
						<div class="contact-mode contact">
							<h4 class="text-left">Contact Info</h4>
							<hr class="underline" align="left" style="width:9em">
						</div>
						<div>
						    <p>for any queries, appeal, code of conduct voilations write us on:</p>
							<p>E-Mail: <span><a href="mailto:techevents.org@gmail.com? subject = ">techevents.org@gmail.com</a></span></p>
							<p>Mobile: <a href="Phone : "></a> (Toll Free)</p>
							<p>Mobile: <a href="Phone : "></a> (Counselor)</p>
						</div>
					</div>
					<div class="col-xs-12 col-md-4">
						<div class="contact-mode social-media">
							<h4 class="text-left">Follow Us</h4>
							<hr class="underline" align="left" style="width:7em">
						</div>
						<div class="contact-mode social-media-handles">
							
							<a href="https://www.instagram.com/devsharks_org/"><i class="fa fa-instagram fa-2x"></i></a>
							<a href="https://www.linkedin.com/company/devsharksorg/"><i class="fa fa-linkedin-square fa-2x"></i></a>
							<a href="https://twitter.com/devsharks_org"><i class="fa fa-twitter-square fa-2x"></i></a>
						</div>
					</div>
				</div>
		<div class="col-lg-6 col-md-6 col-sm-12 mapp " data-aos="zoom-in">
			<div class="mapouter"><div class="gmap_canvas"><iframe width="1100" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Menlo Park, CA 94205%20USA%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:1100px;}</style><a href="https://www.embedgooglemap.net">use google map on website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1100px;}</style></div></div>
			<br>
			<br>
			<br>
			<br>

		</div>
			</div>
		</div>
        `
    }
}

customElements.define('my-footer', MyFooter)