import React from 'react';

export default class ImageGrid extends React.Component<{
  data: {
    image: any,
    text: string,
  }[]
}> {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {this.props.data.map((data, index) => {
          return (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10 }}>
              <img src={data.image} />
              <span style={{ fontFamily: 'Sanchez', fontSize: 20, color: 'white' }}>{data.text}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
