import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Aboutme from '../components/Aboutme'
import HeadingAnim from '../components/HeadingAnim'


function HeroSection() {

     const images = [ "https://images.pexels.com/photos/5974354/pexels-photo-5974354.jpeg?auto=compress&cs=tinysrgb&w=600",
                                 "https://images.pexels.com/photos/5767926/pexels-photo-5767926.jpeg?auto=compress&cs=tinysrgb&w=600",
                                 "https://images.pexels.com/photos/8961526/pexels-photo-8961526.jpeg?auto=compress&cs=tinysrgb&w=600"
                                ]

  return (
    <>
    <Carousel images={images}/>
    <HeadingAnim/>
    <Aboutme  reverse="flex-row-reverse" />
   <Gallery/>
    <Aboutme reverse="flex-row" />
    <HeadingAnim/>
    <Footer/>
    </>
  )
}

export default HeroSection