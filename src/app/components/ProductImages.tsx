'use client'

import Image from 'next/image'
import { useState } from 'react'

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

const ProductImages = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image
          src={images[index].url}
          alt=''
          fill
          sizes='50vw'
          className='object-cover rounded-md'
        />
      </div>
      <div className='flex justify-between gap-4 mt-8'>
        {images.map((img, i) => (
          <div
            className='w-1/4 cursor-pointer h-32 relative gap-4 mt-8'
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=''
              fill
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
