import { Typography } from '@mui/material'
import React, { Component } from 'react'
import './style.scss';
import { Feature1, Feature2, Feature3, Rating, RightArrow } from '../../components/Icons';

export default class Sections extends Component {
  render() {
    return (
      <div>
        <div className='section'>
          <div className='section-3'>
            <Typography variant='h4' color='#696984'>
              Trusted by 5,000+ Companies Worldwide
            </Typography>
            <img src='/icons/companies.png' alt='companies' />
          </div>
          <div className='section-4'>
            <div>
              <Typography variant='h1' color='#2F327D'>
                <span style={{ color:'#F48C06' }}>All-In-One</span> Cloud Software.
              </Typography>
            </div>
            <div>
              <Typography variant='subtitle2' color='#696984'>
                Skilline is one powerful online software suite that combines all the
                <p/>tools needed to run a successful school or office.
              </Typography>
            </div>
            <div className='features'>
              <div className="feature">
                <Feature1/>
                <Typography className='title'>
                  Online Billing, Invoicing, & Contracts
                </Typography>
                <Typography variant='subtitle2' className='subtitle'>
                  Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                </Typography>
              </div>
              <div className="feature">
                <Feature2/>
                <Typography className='title'>
                  Easy Scheduling & Attendance Tracking
                </Typography>
                <Typography variant='subtitle2' className='subtitle'>
                  Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance
                </Typography>
              </div>
              <div className="feature">
                <Feature3/>
                <Typography className='title'>
                  Customer Tracking
                </Typography>
                <Typography variant='subtitle2' className='subtitle'>
                  Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization
                </Typography>
              </div>
            </div>
          </div>

          <div className='section-5'>
            <div className="testimonial">
              <div className='text-1'>
                <div className='line'></div>
                <div className='text'>
                  TESTIMONIAL
                </div>
              </div>
              <div className="text-2">
                <Typography variant='h1' color='#2F327D' className='what' fontFamily='Nunito San'>
                  What They Say?
                </Typography>
                <Typography variant='subtitle2'>
                  Skilline has got more than 100k positive ratings from our users around the world. 
                </Typography>
                <Typography variant='subtitle2'>
                  Some of the students and teachers were greatly helped by the Skilline.
                </Typography>
                <Typography variant='subtitle2'>
                  Are you too? Please give your assessment
                </Typography>
              </div>
              <div className='btn write'>
                Write your assessment
                <RightArrow/>
              </div>
            </div>
            <div className="testimonial2">
              <img src='/icons/smiling-woman.png' alt='smiling woman'/>
              <div className='comment'>
                <Typography variant='subtitle2'>
                  "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                </Typography>
                <div className='name'>
                  <div>
                    Gloria Rose
                  </div>
                  <div className='review'>
                    <Rating/>
                    12 reviews at Yelp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
