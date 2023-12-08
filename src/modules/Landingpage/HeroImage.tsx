import { Typography } from '@mui/material'
import React, { Component } from 'react'
import { IPlay } from '../../components/Icons'
import './style.scss';

export default class HeroImage extends Component {
  render() {
    return (
      <div className='hero-image'>
        <div className='left'>
          <div>
            <Typography variant='h1' className='online'>
              <span className='studying'>
                Studying {' '}
              </span>
              Online is now <p/> much easier
            </Typography>
            <Typography variant='subtitle1' className='subtitle' color='#464646'>
              Skilline is an interesting platform that will teach
              <p/>you in more an interactive way
            </Typography>
          </div>
          <div className='buttons'>
            <div className="btn btn1">
              <Typography variant='h4'>
                Join for free
              </Typography>
            </div>
            <div className="btn btn2">
              <IPlay />
            </div>
            <div className="btn btn3">
              <Typography variant='subtitle1'>
                Watch how it works
              </Typography>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
