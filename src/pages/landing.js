import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultNavbar from '../components/DefaultNavbar';
import DefaultFooter from '../components/DefaultFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/style.css';
import './../assets/img/favicon.png'




export default function landing() {

        return (
            <>

            <main id="main">
            
            <div className="absolute w-full z-20">
            <DefaultNavbar />
              </div>       
        
        
       
          
                <section id="hero" class="d-flex justify-cntent-center align-items-center">
                    <div id="heroCarousel" class="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">


                        <div class="carousel-item active">
                            <div class="carousel-container">
                                <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Chirp Chirp</span></h2>
                                <p class="animate__animated animate__fadeInUp">With your digital wallet, you can use the app anonymously</p>

                            </div>
                        </div>


                        <div class="carousel-item">
                            <div class="carousel-container">
                                <h2 class="animate__animated animate__fadeInDown">DECENTRALIZED</h2>
                                <p class="animate__animated animate__fadeInUp">This microblog is truly decentralized</p>

                            </div>
                        </div>


                        <div class="carousel-item">
                            <div class="carousel-container">
                                <h2 class="animate__animated animate__fadeInDown">SECURE</h2>
                                <p class="animate__animated animate__fadeInUp">The transactions and information provided is safe.</p>

                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                        </a>

                        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                        </a>

                    </div>
                </section>



                <section class="services">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                                <div class="icon-box icon-box-pink">
                                    <div class="icon"><i class="bx bxl-dribbble"></i></div>
                                    <h4 class="title"><a href="">Anonymous</a></h4>
                                    <p class="description">Access application resources without providing a username or password</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div class="icon-box icon-box-cyan">
                                    <div class="icon"><i class="bx bx-file"></i></div>
                                    <h4 class="title"><a href="">Micro Blog</a></h4>
                                    <p class="description">Share short messages with an online audience to improve engagement</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div class="icon-box icon-box-green">
                                    <div class="icon"><i class="bx bx-tachometer"></i></div>
                                    <h4 class="title"><a href="">Secure</a></h4>
                                    <p class="description">Free from the control and interference of a single authority. User privacy is well safeguarded</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div class="icon-box icon-box-blue">
                                    <div class="icon"><i class="bx bx-world"></i></div>
                                    <h4 class="title"><a href="">Decentralized</a></h4>
                                    <p class="description">Chirp Chirp runs on a blockchain and distributed computing systems. Fully open source and autonomous.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section class="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-6 video-box">
                                <img src={require('./../assets/img/coin.png')}class="img-fluid" alt=""></img>
                            </div>

                            <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

                                <div class="icon-box">
                                    <div class="icon"><i class="bx bx-fingerprint"></i></div>
                                    <h4 class="title"><a href="">Digital Wallet</a></h4>
                                    <p class="description">Connect your account to start using the services.</p>
                                </div>

                                <div class="icon-box">
                                    <div class="icon"><i class="bx bx-gift"></i></div>
                                    <h4 class="title"><a href="">Send/Receive Gifts</a></h4>
                                    <p class="description">Send and receive algos to your friends and favorite creators on the blockchain.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                <section class="features">
                    <div class="container">

                        <div class="section-title">
                            <h2>Features</h2>

                        </div>
                    </div>

                    <div class="row" data-aos="fade-up">
                        <div class="col-md-5">
                            <img src={require('./../assets/img/features-1.jpg')} class="img-fluid" alt=""></img>
                        </div>
                        <div class="col-md-7 pt-4">
                            <p>Chirp Chirp allows you to communicate with your audience quickly via sending short images instead of writing pages of text.</p>

                        </div>
                    </div>

                    <div class="row" data-aos="fade-up">
                        <div class="col-md-5 order-1 order-md-2">
                            <img src={require('./../assets/img/features-2.jpg')} class="img-fluid" alt=""></img>
                        </div>
                        <div class="col-md-7 pt-5 order-2 order-md-1">
                            <h3>Analyze Trends</h3>

                            <p>
                                Analyze the current trends on the application.
                            </p>
                        </div>
                    </div>

                    <div class="row" data-aos="fade-up">
                        <div class="col-md-5">
                            <img src={require('./../assets/img/features-3.jpg')} class="img-fluid" alt=""></img>
                        </div>
                        <div class="col-md-7 pt-5">
                            <h3>See what fellow chirpers have been up to</h3>

                            <p>
                                View the explorer page to see what chirpers have been chirping.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
            
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
           
            <script src="assets/vendor/purecounter/purecounter.js"></script>
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>
           
            <script src="assets/js/main.js"></script>
            
            <DefaultFooter />
            </>
        
        )





}

 