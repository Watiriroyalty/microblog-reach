import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/style.css';
import './../assets/img/favicon.png'

<>
<meta charset="utf-8"></meta>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>

  <title>Chirp Chirp</title>
  <meta content="" name="description"></meta>
  <meta content="" name="keywords"></meta>
<link href="assets/img/favicon.png" rel="icon"></link>
<link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>

<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet"></link>
<link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet"></link>
<link href="assets/vendor/aos/aos.css" rel="stylesheet"></link>
<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link>
<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link>
<link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"></link>
<link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"></link>
<link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link>

<link href="assets/css/style.css" rel="stylesheet"></link>

</>

export default function DefaultFooter() {
    return (
        <> 
        <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

        <div class="footer-newsletter">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                    <h4>Our Newsletter</h4>
                         <p>Subscribe to our newsletter by providing your email address to get updates on chirp chirp</p>
                </div>
              <div class="col-lg-6">
                <form action="" method="post">
                <input type="email" name="email"></input>
                    <input type="submit" value="Subscribe"></input>
                </form>
                   
               
              </div>
            </div>
          </div>
        </div>
      
    
        <div class="footer-top">
          <div class="container">
            <div class="row">   
    
           
              <div class="col-lg-3 col-md-6 footer-info">
              
                <div class="social-links mt-3">
                  <a href="twitter.com" class="twitter"><i class="bx bxl-twitter"></i></a>
                  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                  <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Chirp Chirp</span></strong>. All Rights Reserved
          </div>
       
        </div>
      </footer>
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
           
           <script src="assets/vendor/purecounter/purecounter.js"></script>
           <script src="assets/vendor/aos/aos.js"></script>
           <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
           <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
           <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
           <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
           <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
           <script src="assets/vendor/php-email-form/validate.js"></script>
          
           <script src="./src/assets/js/main.js"></script>
           
           
        

        </>
    );
}
