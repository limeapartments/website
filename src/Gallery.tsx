import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { VFlex, BlackStriped } from './components/Shared'
import ImageGrid from './components/ImageGrid'
import CallNow from './components/CallNow'

export default () => (
  <>
    <Header
      images={[
        require('../static/images/gallery-header1.jpg'),
        require('../static/images/gallery-header2.jpg'),
      ]}
    />
    <BlackStriped>
      <VFlex>
        <ImageGrid
          imagesPerLine={3}
          data={Array(18)
            .fill(0)
            .map((_, index) => ({
              image: require(`../static/images/gallery-grid${index + 1}.jpg`),
            }))}
        />
      </VFlex>
    </BlackStriped>
    <Footer />
    <CallNow />
  </>
)
