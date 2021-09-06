import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <header id="header">
                <div className="container d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <h1><a href="index.html">Influencer Hub</a></h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About Us</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                            <li><Link className="nav-link scrollto" to={'/influencer/profile'}>Team</Link></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link" to="/main/login" >Sign In</Link></li>
                            <li><Link className="getstarted" to="/main/register">Sign Up</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

            <section id="hero">

                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1">
                            <h1>Single Platform for all the Influencers</h1>
                            <h2>Integrate all your platforms for better reach to your audience</h2>
                            <Link to="/influencer/profile" className="btn-get-started scrollto">Get Started</Link>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" >
                            <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">

                <section id="clients" className="clients section-bg">
                    <div className="container">

                        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-5.png" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-6.png" className="img-fluid" />
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="about" className="about section-bg">
                    <div className="container">

                        <div className="row">
                            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                            <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                                <div className="content d-flex flex-column justify-content-center">
                                    <h3 >Voluptatem dignissimos provident quasi</h3>
                                    <p >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6 icon-box" >
                                            <i className="bx bx-receipt"></i>
                                            <h4><a href="#">Corporis voluptates sit</a></h4>
                                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        </div>
                                        <div className="col-md-6 icon-box">
                                            <i className="bx bx-cube-alt"></i>
                                            <h4><a href="#">Ullamco laboris nisi</a></h4>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        </div>
                                        <div className="col-md-6 icon-box">
                                            <i className="bx bx-images"></i>
                                            <h4><a href="#">Labore consequatur</a></h4>
                                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                        </div>
                                        <div className="col-md-6 icon-box">
                                            <i className="bx bx-shield"></i>
                                            <h4><a href="#">Beatae veritatis</a></h4>
                                            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 >Services</h2>
                            <p >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch" >
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/services-1.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Temporibus laudantium</a></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" >
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/services-2.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Aperiores voluptates</a></h5>
                                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                        <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" >
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/services-3.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Veritatis natus nisi</a></h5>
                                        <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                        <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" >
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/services-4.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Aliquam veritatis</a></h5>
                                        <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut</p>
                                        <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="features" className="features section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 >Features</h2>
                            <p >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row content">
                            <div className="col-md-5" >
                                <img src="assets/img/features-1.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-4" >
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row content">
                            <div className="col-md-5 order-1 order-md-2" >
                                <img src="assets/img/features-2.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1" >
                                <h3>Corporis temporibus maiores provident</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                        <div className="row content">
                            <div className="col-md-5" >
                                <img src="assets/img/features-3.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5" >
                                <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                                <ul>
                                    <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row content">
                            <div className="col-md-5 order-1 order-md-2" >
                                <img src="assets/img/features-4.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1" >
                                <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="portfolio" className="portfolio section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 >Portfolio</h2>
                            <p >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container" >

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="team" className="team section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 >Team</h2>
                            <p >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" >
                                    <div className="pic"><img src="assets/img/team/team-1.jpg" alt="" /></div>
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member"  >
                                    <div className="pic"><img src="assets/img/team/team-2.jpg" alt="" /></div>
                                    <h4>Sarah Jhinson</h4>
                                    <span>Product Manager</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" >
                                    <div className="pic"><img src="assets/img/team/team-3.jpg" alt="" /></div>
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="assets/img/team/team-4.jpg" alt="" /></div>
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="pricing" className="pricing section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 >Pricing</h2>
                            <p >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row no-gutters">

                            <div className="col-lg-4 box">
                                <h3>Free</h3>
                                <h4>$0<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>

                            <div className="col-lg-4 box featured">
                                <span className="featured-badge">Featured</span>
                                <h3>Business</h3>
                                <h4>$29<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>

                            <div className="col-lg-4 box">
                                <h3>Developer</h3>
                                <h4>$49<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="faq" className="faq section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 >Frequently Asked Questions</h2>
                            <p >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row faq-item d-flex align-items-stretch" >
                            <div className="col-lg-5">
                                <i className="bx bx-help-circle"></i>
                                <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                </p>
                            </div>
                        </div>

                        <div className="row faq-item d-flex align-items-stretch"  >
                            <div className="col-lg-5">
                                <i className="bx bx-help-circle"></i>
                                <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                                </p>
                            </div>
                        </div>

                        <div className="row faq-item d-flex align-items-stretch">
                            <div className="col-lg-5">
                                <i className="bx bx-help-circle"></i>
                                <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.
                                </p>
                            </div>
                        </div>

                        <div className="row faq-item d-flex align-items-stretch">
                            <div className="col-lg-5">
                                <i className="bx bx-help-circle"></i>
                                <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.
                                </p>
                            </div>
                        </div>

                        <div className="row faq-item d-flex align-items-stretch" >
                            <div className="col-lg-5">
                                <i className="bx bx-help-circle"></i>
                                <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                </p>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="contact" className="contact section-bg">
                    <div className="container" >

                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-6">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-box" >
                                            <i className="bx bx-map"></i>
                                            <h3>Our Address</h3>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4"  >
                                            <i className="bx bx-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>info@example.com<br />contact@example.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4"  >
                                            <i className="bx bx-phone-call"></i>
                                            <h3>Call Us</h3>
                                            <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form w-100" >
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main >

            <footer id="footer">

                <div className="footer-top">

                    <div className="container">

                        <div className="row  justify-content-center">
                            <div className="col-lg-6">
                                <h3>Bocor</h3>
                                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                            </div>
                        </div>

                        <div className="row footer-newsletter justify-content-center">
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" placeholder="Enter your Email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>

                    </div>
                </div>


            </footer>
        </div>

    )
}

export default Home;