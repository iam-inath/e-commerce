'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Summer Collection Sales!',
    description: 'Get up to 50% off on selected summer essentials.',
    img: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '/summer-sale',
    bg: 'bg-gradient-to-r from-yellow-200 to-yellow-400',
  },
  {
    id: 2,
    title: 'New Arrivals: Tech Gadgets',
    description: 'Discover the latest in tech innovations and gadgets.',
    img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '/new-tech',
    bg: 'bg-gradient-to-r from-blue-200 to-blue-400',
  },
  {
    id: 3,
    title: 'Home Decor Refresh',
    description: 'Transform your living space with stylish home decor items.',
    img: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '/home-decor',
    bg: 'bg-gradient-to-r from-green-200 to-green-400',
  },
  {
    id: 4,
    title: 'Fashion Forward: Autumn Collection',
    description: 'Stay ahead of the trend with our new autumn fashion line.',
    img: 'https://images.pexels.com/photos/2916120/pexels-photo-2916120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '/autumn-fashion',
    bg: 'bg-gradient-to-r from-red-200 to-red-400',
  },
]

const Slider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden '>
      <div
        className='w-max h-full flex transition-all ease-in-out duration-1000'
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER  */}
            <div className='h-1/2 xl:h-full xl:w-1/2 flex items-center flex-col justify-center text-center gap-8 xl:gap-12'>
              <h2 className='text-xl lg:text-3xl 2xl:text-5xl '>
                {slide.description}
              </h2>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className='rounded-md bg-black text-white py-3 px-4'>
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/*IMAGE CONTAINER*/}
            <div className='relative h-1/2 xl:h-full xl:w-1/2'>
              <Image
                src={slide.img}
                alt=''
                fill
                sizes='100%'
                className='object-cover'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex justify-center items-center ${
              current === index ? 'scale-150' : ''
            } `}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
