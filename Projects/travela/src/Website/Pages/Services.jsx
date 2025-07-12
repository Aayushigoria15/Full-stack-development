import React, { useEffect, useState } from 'react'
import Header2 from '../Coman/Header2'
import Footer from '../Coman/Footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'

function Services() {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetchTestimonials()
    }, [])

    const fetchTestimonials = async () => {
        try {
            const res = await axios.get("http://localhost:3000/Services") // your API
            setTestimonials(res.data)

            // Wait a bit, then initialize carousel
            setTimeout(() => {
                if (window.$ && window.$('.testimonial-carousel').owlCarousel) {
                    window.$('.testimonial-carousel').owlCarousel({
                        items: 2,
                        loop: true,
                        margin: 20,
                        autoplay: true,
                        nav: false,
                        dots: true,
                        responsive: {
                            0: { items: 1 },
                            768: { items: 2 },
                            992: { items: 3 }
                        }
                    });
                }
            }, 100); // Wait until DOM is updated
        } catch (error) {
            console.error("Error fetching testimonials:", error)
        }
    }

    return (
        <div>
            <Helmet>
                {/* Styles for Owl Carousel */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />

                {/* Scripts */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
            </Helmet>

            <Header2 title="Our Services" name="Services" />

            {/* Services section — keep your existing one untouched */}

            {/* Testimonials section */}
            <div className="container-fluid testimonial py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                        <h5 className="section-title px-3">Testimonial</h5>
                        <h1 className="mb-0">Our Clients Say!!!</h1>
                    </div>

                    {/* Carousel */}
                    <div className="testimonial-carousel owl-carousel">
                        {
                            testimonials.map((data, index) => (
                                <div key={index} className="testimonial-item text-center rounded pb-4 mx-1" >
                                    <div className="testimonial-comment bg-light rounded p-4">
                                        <p className="text-center mb-5">{data.Description}</p>
                                    </div>
                                    <div className="testimonial-img " >
                                        <img src={data.img} style={{ width: "100%", height: "100%" }} className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div style={{ marginTop: '1px' }}>
                                        <h5 className="mb-0">{data.name}</h5>
                                        <p className="mb-0">{data.location}</p>
                                        <div className="d-flex justify-content-center">
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Services
