import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageSlider1, ImageSlider2 } from './components'
import cloud from './assets/cloud1.png';
import sun from './assets/sun1.png';
import sky from './assets/sky1.png';
import sky2 from './assets/sky2.png';

function App() {

  const images = [cloud, sky, sun, sky2];

  return (
    <>
      <div className="carousels-container" style={{
        aspectRatio: '10 / 6',
        marginBottom: '100px'
      }}>
      <ImageSlider1
        images={images}
      />
      <ImageSlider2
        images={images}
      />
      </div>
    </>
  )
}

export default App
