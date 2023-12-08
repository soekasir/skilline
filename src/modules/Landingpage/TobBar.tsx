import React, { Component } from 'react'
import './style.scss';
import { IPolygonLogo } from '../../components/Icons';
import { Typography } from '@mui/material';

export default class TobBar extends Component {
  tabs=[
    {
      link:'',
      title:'Home'
    },
    {
      link:'',
      title:'Careers'
    },
    {
      link:'',
      title:'Blog'
    },
    {
      link:'',
      title:'About Us'
    },
  ]

  render() {
    return (
      <>
        <div className='background-top'>
          <div className='img'>
            <img src='/icons/lovely-teenage.png' alt='lovely-teenage'/>
            <img src='/icons/Group 7.png' alt='Assisted Student' className='assisted'/>
            <img src='/icons/Group 9.png' alt='Other' className='other'/>
            <img src='/icons/Group 10.png' alt='Congratulations' className='congrat'/>
            <img src='/icons/Group 13.png' alt='User Experience' className='ux'/>
          </div>
        </div>
        <div className='top-bar'>
          <div className='logo'>
            <IPolygonLogo/>
            <Typography variant='h2' className='title'>
              Skilline
            </Typography>
          </div>
          <div className='navigation'>
            <div className='tab'>
              {
                this.tabs.map((tab)=>{
                  return <div>
                    <Typography color='#252641' variant='h4'>
                      {tab.title}
                    </Typography>
                  </div>
                })
              }
            </div>
            <div className='account'>
              <div className='btn login'>
                <Typography variant='h4'>
                  Login
                </Typography>
              </div>
              <div className='btn signup'>
                <Typography variant='h4'>
                  Sign Up
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
