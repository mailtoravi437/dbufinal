import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <main>
            <Head>
                <title>DBU | About</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <section className="explore">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <Image className='explore-image' src="/images/about/sahil.png" alt='Sahil' width={328} height={430} />
                            <h2 className='explore-image--heading'>Sahil Dev aka Designer Banda,</h2>
                            <h3 className='explore-image--sub-heading'>Founder</h3>
                        </div>
                        <div className="offset-md-1 col-sm-7 about-content">
                            <h2 className='about-heading'>About Founder</h2>
                            <p className='about-paragraph'>A mechanical engineering graduate from IIT-BHU later found my passion in design. In the last 4 years, I have worked with more than 150+ startups & businesses and impacted thousands of users by the strong digital presence, impactful and unique brand identity.</p>

                            <small className='about-link'><a target="_blank">designerbanda.com</a> <Image src="/images/about/arrow.svg" height={26} width={26} /></small>
                        </div>
                    </div>
                </div>
            </section>


            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1">
                            <h2>Our Team</h2>
                            <p>We are UX/UI designers, Product Designers, Consultants, Strategists, illustrators, UX Researchers, Marketer, Motion Designers, Artists, and bathroom singers.</p>
                        </div>
                        <div className="work-box">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content red">
                                        <Image src="/images/about/akash.png" alt='Akash Solanki' width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Akash Solanki,</h2><span>UX Consultant</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content grey">
                                        <Image src="/images/about/veer.png" alt="Veer Shrivastava" width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Veer Shrivastava,</h2><span>UI/UX Designer</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content red">
                                        <Image src="/images/about/hemant.png" alt="Hemanth Bharti" width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Hemanth Bharthi,</h2><span>Visual Designer</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content grey">
                                        <Image src="/images/about/rajini.png" alt='Shreya Singh' width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Shreya Singh, </h2><span>Illustrator</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content grey">
                                        <Image src="/images/about/vivek.png" alt="Vivek kesarwani" width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Vivek kesarwani,</h2><span>Visual Designer</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content red">
                                        <Image src="/images/about/ravi.png" alt="Ravi Kumar" width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Ravi Kumar,</h2><span>Web Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="whatwedo1bg my-120">
                <div className="container">
                    <div className="whatwedo1">
                        <div className="todo">
                            <h2>What we do?</h2>
                        </div>
                        <div className="work-box">
                            <div className='row'>
                                <div className='col-md-6 col-sm-6 whatwedo-box'>
                                    <div className="title1">
                                        <img src="vector/Group.png" />
                                        <h2>Branding</h2>
                                        <p>Building a visual expression of the products that encourages loyalty and builds trust. We bring the client???s vision into reality with a planned research, ideation, and precise execution.</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6 whatwedo-box'>
                                    <div className="title1">
                                        <img src="vector/Group (2).png" />
                                        <h2>UX/UI</h2>
                                        <p>We create interfaces with the core objective of creating an experience that facilitates effective interaction for the end-users that helps businesses to achieve their financial goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-md-6 col-sm-6 whatwedo-box'>
                                    <div className="title1">
                                        <img src="vector/Group (3).png" />
                                        <h2>Development</h2>
                                        <p>We specialize in building fast, reliable, SEO-friendly, responsive websites and user-oriented mobile apps that are adaptable, modular, and expandable using cutting-edge technologies.</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6 whatwedo-box'>
                                    <div className="title1">
                                        <img src="vector/Group (6).png" />
                                        <h2>Marketing</h2>
                                        <p>A strong digital presence on social media that increases traffic and exposure to your product.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
        <div className="container">
          <div className="social-media">
            <ul>
              <Link href="https://www.linkedin.com/in/designerbanda/"><li className='linked-in'><a href="#">Linked-in</a></li></Link>
              <Link href="https://www.instagram.com/designer.banda/"><li className='instagram'><a href="#">Instagram</a></li></Link>
              <Link href="https://www.behance.net/DesignerBanda"><li className='behance'><a href="#">Behance</a></li></Link>
              <Link href="https://www.facebook.com/designer.bandaa/"><li className='facebook'><a href="#">Facebook</a></li></Link>
            </ul>
          </div>
        </div>
      </section>
        </main>
    )
}
