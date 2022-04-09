import React from 'react'
import Image from 'next/image'
import Testimonial from '../src/components/Testimonial'

export default function Clients() {
  return (
    <>
      <div>
        <section className="explore">
          <div className="container-fluid">
            <div className="building text-center">
              <h1>Good Design Makes <br />Business Growth Better</h1>
              <p>Some from scratch and others reborn, these are some brands we have worked with, to create meaningful and magical experiences!</p>
              <ul>
                <li>
                  <h2>25+</h2>
                  <h3>Funded Startups</h3>
                </li>
                <li>
                  <h2>200</h2>
                  <h3>Clients</h3>
                </li>
                <li>
                  <h2>150+</h2>
                  <h3>Projects</h3>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*Start Trusted by 150+ brands*/}
        <section className='my-140'>
        <div className="container">
          <div className="trusted">
            <div className="brands text-center">
              <h2>Trusted by 150+ brands</h2>
            </div>
            <div className="work-box">
              <div className='row'>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/Spayee.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/Finshots.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/Qoohoo.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/Dybo.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/Magtapp.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/Alagrand.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/Superpay.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/Socialsamosa.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/fredo.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/Leadschool.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/slice.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                  <Image src="/images/index/windo.png" layout='responsive'  height={123} width={259}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Testimonial content="DBU is full of out of the box thinkers. Whole team is gifted with ability to understand the soul and spirit of their client's ideas, re-creates those ideas and produce designs that exactly express what clients would have imagined in his mind. I recommend DBU whole heartedly."
        name={"Vikas Sethia"} designation={"Founder, Josh Community"} image="/images/index/user.png" />
      </div>

    </>
  )
}
