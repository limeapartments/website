import React from 'react';

interface ImageData {
  image: any,
  text?: string,
  link?: string
}

export default class ImageGrid extends React.Component<{
  data: ImageData[],
  style?: any,
  imagesPerLine?: number
}> {
  renderImage = (data: ImageData, index: number) => {
    return (
      <div
        key={index}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 10,
          minWidth: `${100 / ((this.props.imagesPerLine || 4) + 1)}%`,
          ...( data.link ? { cursor: 'pointer' } : {} )
        }}
        onClick={() => data.link && window.open(data.link, '_blank')}
      >
        <img src={data.image} />
        <span style={{ fontFamily: 'Sanchez', fontSize: 20, color: 'white' }}>
          {data.text}
        </span>
      </div>
    );
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: 1200,
        padding: 20,
        ...(this.props.style || {})
      }}>
        {this.props.data.map((data, index) => {
          return this.renderImage(data, index);
        })}
      </div>
    );
  }
}
