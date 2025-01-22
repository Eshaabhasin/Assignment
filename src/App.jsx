import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import imagesection from "../src/assets/Section.png";
import star from "../src/assets/starimage.png";
import starsimg from "../src/assets/fivestars.png";
import squareimg from "../src/assets/square.png";
import vectorimage from "../src/assets/Vector.png";
import handsimage from "../src/assets/customer.png";
import youtube from "../src/assets/youtube.png"
import companylogos from "../src/assets/Logos.png"
import service1 from "../src/assets/service1.png"
import arrow from "../src/assets/arrowimg.png"
import serviceimg from "../src/assets/service2.png"
import service3img from "../src/assets/service3.png"
import groupimg from "../src/assets/Frame.png"
import smile from "../src/assets/Symbol4.png"
import display from "../src/assets/Displayicon.png"
import rightimg from "../src/assets/right.png"
import companies from "../src/assets/Pagination container.png"
import features from "../src/assets/feature.png"
import img2 from "../src/assets/Image.png"
import img3 from "../src/assets/Image1.png"
import mob from "../src/assets/Path.png"
import apple from "../src/assets/Subtract.png"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="hero-container">
        <div className="hero-content">
          <div className="main-heading">
            <img src={star} className="star-rating" alt="Star" />
            <p className="ratings">Google Rating</p>
            <img className="fivestars" src={starsimg} alt="Five Stars" />
          </div>
          <h1 className="heading">
            Your trusted partner<br />for compliance business needs
          </h1>
          <div className="vertical-line"></div>
          <p className="information">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, <b>registrations, tax filings,</b>{" "}
            and other <b>legal matters</b>.
          </p>
          <div className="stats">
            <div className="stat-icon">
              <div className="stat-item">
                <img className="stat-image" src={squareimg} alt="Square" />
                <div className="stat-info">
                  <h1 className="stat-details">4.5+</h1>
                  <p className="topic">Customer Rating</p>
                  <p>Learn More</p>
                </div>
              </div>
            </div>
            <div className="stat-icon">
              <div className="stat-item">
                <img className="stat-image" src={handsimage} alt="Square" />
                <div className="stat-info">
                  <h1 className="stat-details">20,000+</h1>
                  <p className="topic">Clients</p>
                 
                </div>
              </div>
            </div>
            <div className="stat-icon">
              <div className="stat-item">
                <img className="stat-image" src={vectorimage} alt="Square" />
                <div className="stat-info">
                  <h1 className="stat-details">99.8%</h1>
                  <p className="topic">Financial Stability</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cta">
          <button className="cta-button">Talk An Expert</button>
         <img className="yt" src={youtube}></img>
           <p className="yt-content">See how it works</p>
          </div>
        </div>
        <img className="section-img" src={imagesection} alt="Section" />
        <div className="startup-section">
          <p className="startup-heading">Trusted By Over 100+ Startups and freelance business</p>
          <img className="company" src={companylogos}></img>
        </div>
        <div className="services-section">
          <p className="services-heading">WELCOME TO REGISTERKARO.IN</p>
          <h1 className="services-subheading">Explore Our Services</h1>
          <div className="service">
            <div className="service-1">
              <div className="test">
              <img  className="service-img" src={service1}></img>
              </div>
              <h1 className="info">Company Information</h1>
              <p className="service-info">Build web-based solutions that
              enhance customer experience</p>
              <div className="learn">
              <p className="learn-section">Learn More</p>
              <img src={arrow}></img>
              </div>
            </div>
            <div className="vertical-line2">
              </div>
            <div className="service-2">
              <img className="service-img" src={serviceimg}></img>
              <h1  className="info">Company Secretarial Services</h1>
              <p className="service-info">Make data-driven decisions and
utilize technology to reach
business goals.</p>
<div className="learn">
              <p className="learn-section">Learn More</p>
              <img src={arrow}></img>
              </div>
              
            </div>
            <div className="vertical-line2"></div>
            <div className="service-3">
              <img className="service-img" src={service3img }></img>
              <h1  className="info">Virtual Office Address</h1>
              <p className="service-info">Foster customer relationships by
              effectively serving your market.</p>
              <div className="learn">
              <p className="learn-section">Learn More</p>
              <img src={arrow}></img>
              </div>
            </div>
            <div className="vertical-line2"></div>
          </div>
          <div className="service-container2">
            <div className="service-1">
              <div className="test">
              <img  className="service-img" src={service1}></img>
              </div>
              <h1 className="info">Annual Compliance Services</h1>
              <p className="service-info">Turn your ideas into modern
              products with our design experts.</p>
              <div className="learn">
              <p className="learn-section">Learn More</p>
              <img src={arrow}></img>
              </div>
            </div>
            <div className="vertical-line2">
              </div>
            <div className="service-2">
              <img className="service-img" src={serviceimg}></img>
              <h1  className="info">Payroll Services</h1>
              <p className="service-info">Expand your business across the
              globe with minimal effort.</p>
<div className="learn">
              <p className="learn-section">Learn More</p>
              <img src={arrow}></img>
              </div>
              
            </div>
            <div className="vertical-line2"></div>
            <div className="service-3">
              <img className="service-img" src={service3img }></img>
              <h1  className="info">Bookkeeping Services</h1>
              <p className="service-info">Steering user behaviours with
creative design, data insights &
technology.</p>
              <div className="learn">
              <p className="learn-section">Learn More</p>
              <img src={arrow}></img>
              </div>
            </div>
            <div className="vertical-line2"></div>
          </div>
          
          
        </div>
        <div className="about-section">
          <div className="left">
          <p className="about">WELCOME TO REGISTERKARO.IN</p>
          <h1 className="about-registerkaro">About Register Karo</h1>
          <p className="about-content">We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations. <br></br>
<br></br>
I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
<button className="about-button">Learn More</button>
          </div>
          <div className="right">
          <img src={groupimg}></img>
          </div>
        </div>
        <div className="why-section">
          <div className="left-whysection">
        <p className="about">WHY REGISTERKARO.IN  </p>
        <h1 className="why">Why Choose Register Karo</h1>
        <p className="why-info">It is with consistent services and results that build trust with the people and that in
        turn help us to serve the business better.</p>
        <div className="why-card">
            <img className="smile-img" src={smile}></img>
            <h1 className="why-details">Guaranteed Satisfaction</h1>
            <p className="why-content">We ensure that you stay 100%
            satisfied with our offered services</p>
        </div>
        </div>
        <div className="why-rightsection">
          <div className="right-cards">
          <div className="whycard-right1">

          </div>
          <div className="whycard-right2">
            
          </div>
    
          </div>
        </div>
        </div>
        <div className="our-video">
          <div className="video-left">
            <h1 className="video">0ur Video Introductions</h1>
            <p className="video-content">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
            <div className="display-sec">
              <img className="video-img" src={display}></img>
              <h1 className="explore">Explore Ideas together</h1>
             
            </div>
            <p className="engage">Engage audience segments and finally create actionable insights.<br></br> Amplify vertical integration.</p>
            <div className="display-sec">
              <img className="video-img" src={display}></img>
              <h1 className="explore">Bring those ideas to life</h1>
             
            </div>
            <p className="engage">Engage audience segments and finally create actionable insights. <br></br>Amplify vertical integration.</p>
            
          </div>
          <div className="video-right">
            <img src={rightimg}></img>
          </div>
        </div>
        <div className="our-clients">
          <h1 className="happy">Our Happy Clients</h1>
          <p className="client-content">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
          <img className="comp" src={companies}></img>
        </div>
        <img className="features-sect" src={features}></img>
        <div className="blogs-container">
      <div className="blogs-header">
        <p className="blogs-subtitle">EXPLORE OUR BLOGS</p>
        <h1 className="blogs-title">Accelerate Digital Transformation</h1>
      </div>
      <div className="blogs-grid">
        {/* Blog Card 1 */}
        <div className="blog-card">
        <img src={img2}></img>
          <div className="blog-info">
            <p className="blog-author">Prabhash Mishra • 1 Jan 2023</p>
            <h2 className="blog-title">Small business & Startup ↗</h2>
            <p className="blog-description">
              Like to know the secrets of transforming a 2–14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="blog-tags">
              <span className="blog-tag">Tax & Audit</span>
              <span className="blog-tag">Management</span>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="blog-card">
         <img src={img3}></img>
          <div className="blog-info">
            <p className="blog-author">Mahesh Kumar • 1 Jan 2023</p>
            <h2 className="blog-title">Scale-Up Company Offer ↗</h2>
            <p className="blog-description">
              Mental models are simple expressions of complex processes or
              relationships.
            </p>
            <div className="blog-tags">
              <span className="blog-tag">Tax</span>
              <span className="blog-tag">Research</span>
              <span className="blog-tag">Compliance</span>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="blog-card">
        <img src={img2}></img>
          <div className="blog-info">
            <p className="blog-author">Rakhi Verma • 1 Jan 2023</p>
            <h2 className="blog-title">Growing Business Package ↗</h2>
            <p className="blog-description">
              Introduction to Wireframing and its Principles. Learn from the
              best in the industry.
            </p>
            <div className="blog-tags">
              <span className="blog-tag">Audit</span>
              <span className="blog-tag">Money Back</span>
            </div>
          </div>
        </div>
      </div>
      <button className="blogs-show-more-button">Show more blogs ↗</button>
    </div>
    <div className="container">
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What peoples says about us</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-card">
          <div className="testimonial-rating">⭐⭐⭐⭐</div>
            <p className="testimonial-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="testimonial-author">
              <h4>Chris</h4>
              <span>President and CEO, PrintReach, USA</span>
            </div>
          
          </div>
          <div className="testimonial-card">
          <div className="testimonial-rating">⭐⭐⭐⭐</div>
            <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="testimonial-author">
              <h4>Alex</h4>
              <span>Marketing Manager, Example Inc.</span>
            </div>
            
          </div>
          <div className="testimonial-card">
          <div className="testimonial-rating">⭐⭐⭐⭐</div>
            <p className="testimonial-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="testimonial-author">
              <h4>Jamie</h4>
              <span>CTO, TechStart, USA</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>Can I recover deleted files from desktop with this software?</summary>
            <p>Yes, this software supports recovery of deleted files from desktop systems.</p>
          </details>
          <details className="faq-item">
            <summary>Is this software compatible with macOS and Windows?</summary>
            <p>Yes, the software is fully compatible with macOS and Windows.</p>
          </details>
          <details className="faq-item">
            <summary>How secure is my data with this software?</summary>
            <p>Your data is protected with advanced encryption and privacy safeguards.</p>
          </details>
          <details className="faq-item">
            <summary>Does the software support external drives?</summary>
            <p>Yes, external drives and USB devices are supported.</p>
          </details>
          <details className="faq-item">
            <summary>What is the refund policy for the software?</summary>
            <p>We offer a 30-day money-back guarantee if you are not satisfied with the product.</p>
          </details>
        </div>
      </section>
    </div>
    <div className="mobile">
      <div className="left-mobile">
        <h1 className="manage">Manage Your Services by your<br></br>
        Mobile Phone</h1>
        <p className="download">Download our app to manage and track your services. Our app <br></br>enables you to stay in touch with our experts and aids you in tracking<br></br> your progress. </p>
        <p className="get-details">Get the App</p>
       
       <button className="get"> <img className="apple-img" src={apple}></img>Get it On <br></br> <b><span>App Store</span></b></button>
       
      </div>
      <div className="right-mobile">
        <div class="try">
        <div className="leftsec-mob">
        <img src={mob}></img>
        </div>
        <div className="rightsec-mob">
        <img src={mob}></img>
        </div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default App;
