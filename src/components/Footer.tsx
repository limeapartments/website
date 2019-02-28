import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div style={{
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <img style={{ height: 40 }} src={require('../../static/images/lime-logo.png')} />
        <div style={{ fontFamily: 'Open Sans', fontSize: 13, color: 'white' }}>
          Lime Apartments | 2904 Lyndale Avenue South • Minneapolis, Minnesota 55408 | 855.246.1190 | refresh(at)limeapartments(dot)com
        </div>
        <div style={{ fontFamily: 'Open Sans', fontSize: 13, color: 'white' }}>
          ©2018 Saturday Properties | Photography & Site Design: Carbon Creative
        </div>
      </div>
    );
  }
}
