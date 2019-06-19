import React from 'react'
import Carousel from './Carousel'
import MouseoverLink from './MouseoverLink'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const TitleDiv = styled.div`
  color: white;
  font-family: 'Amatic SC';
  font-size: 50px;
  padding-top: 100px;
`

interface Props {
  images: any[]
  history: any
  location: {
    pathname: string
    search: string
    hash: string
    state: any
  }
  match: any
}

class Header extends React.Component<Props> {
  colorsForPath = (path: string) => {
    const { pathname } = this.props.location
    const isPathActive = pathname.indexOf(path) >= 0
    return {
      activeColor: isPathActive ? 'white' : 'black',
      inactiveColor: isPathActive ? 'black' : 'white',
    }
  }

  render() {
    return (
      <Carousel images={this.props.images}>
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <div>
              <a href="https://limeapartments.com">
                <img
                  style={{ marginTop: 60 }}
                  src={require('../../static/images/lime-logo.png')}
                />
              </a>
              <TitleDiv style={{ marginBottom: 100, paddingTop: 20 }}>
                REFRESHING APARTMENTS
              </TitleDiv>
            </div>
            <a
              style={{ marginTop: 8, marginBottom: 8 }}
              href="https://www.facebook.com/pages/Lime-Apartments/389529864487875?skip_nax_wizard=true"
            >
              <img src={require('../../static/images/facebook-icon.png')} />
            </a>
          </div>
          <div
            style={{
              width: '100%',
              backgroundColor: 'rgba(219, 63, 168, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              paddingTop: 16,
              paddingBottom: 16,
            }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                maxWidth: 1000,
              }}
            >
              <MouseoverLink
                to="/amenities"
                {...this.colorsForPath('/amenities')}
              >
                Amenities
              </MouseoverLink>
              <MouseoverLink
                to="/experience"
                {...this.colorsForPath('/experience')}
              >
                Experience
              </MouseoverLink>
              <MouseoverLink
                to="/location"
                {...this.colorsForPath('/location')}
              >
                Location
              </MouseoverLink>
              <MouseoverLink
                to="/floor-plans"
                {...this.colorsForPath('/floor-plans')}
              >
                Floor Plans
              </MouseoverLink>
              <MouseoverLink to="/gallery" {...this.colorsForPath('/gallery')}>
                Gallery
              </MouseoverLink>
              <MouseoverLink
                to="/residents"
                {...this.colorsForPath('/residents')}
              >
                Residents
              </MouseoverLink>
              <MouseoverLink to="/contact" {...this.colorsForPath('/contact')}>
                Contact
              </MouseoverLink>
              <MouseoverLink
                to="/redirect?url=https%3A%2F%2Fwww.rhris.com%2Fapplynow.cfm%3FsiteID%3D26756A"
                activeColor="black"
                inactiveColor="white"
              >
                Apply Now
              </MouseoverLink>
              
              <MouseoverLink
                to="/redirect?url=https%3A%2F%2Fwww.rhris.com%2Fapplynow.cfm%3FsiteID%3D26756A"
                activeColor="black"
                inactiveColor="white"
              >
                Apply Now2
              </MouseoverLink>
            </div>
          </div>
        </div>
      </Carousel>
    )
  }
}

export default withRouter<Props>(Header)
