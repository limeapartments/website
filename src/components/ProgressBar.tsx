import React from 'react';

export default class ProgressBar extends React.Component<{
  title: string,
  percent: number,
  color: string
}> {
  render() {
    return (
      <div style={{
        width: '80%',
        marginHorizontal: 'auto',
        marginTop: 20
      }}>
        <div style={{
          textTransform: 'uppercase',
          color: this.props.color,
          fontFamily: 'Muli',
          fontWeight: 200,
          width: '100%'
        }}>
          {this.props.title}
        </div>
        <div style={{
          height: 3,
          width: '100%',
          backgroundColor: '#444'
        }}>
          <div style={{
            height: '100%',
            width: `${100 * this.props.percent}%`,
            backgroundColor: this.props.color
          }}>
          </div>
        </div>
      </div>
    )
  }
}
