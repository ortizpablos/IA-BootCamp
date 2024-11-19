'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const CarruselDiaDos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      id: 1,
      url: "/dia02/01.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      url: "/dia02/02.jpg",
      alt: "Slide 1"
    },
    {
      id: 3,
      url: "/dia02/03.jpg",
      alt: "Slide 2"
    },
    {
      id: 4,
      url: "/dia02/04.jpg",
      alt: "Slide 3"
    },
    {
        id: 5,
        url: "/dia02/05.jpg",
        alt: "Slide 3"
      },
      {
        id: 6,
        url: "/dia02/06.jpg",
        alt: "Slide 3"
      },
      {
        id: 7,
        url: "/dia02/07.jpg",
        alt: "Slide 3"
      },
      {
        id: 8,
        url: "/dia02/08.jpg",
        alt: "Slide 3"
      },
      {
        id: 9,
        url: "/dia02/09.jpg",
        alt: "Slide 3"
      },
      {
        id: 10,
        url: "/dia02/10.jpg",
        alt: "Slide 3"
      },
      {
        id: 11,
        url: "/dia02/11.jpg",
        alt: "Slide 3"
      },
      {
        id: 12,
        url: "/dia02/12.jpg",
        alt: "Slide 3"
      },
      {
        id: 13,
        url: "/dia02/13.jpg",
        alt: "Slide 3"
      },
      {
        id: 14,
        url: "/dia02/14.jpg",
        alt: "Slide 3"
      },
      {
        id: 15,
        url: "/dia02/15.jpg",
        alt: "Slide 3"
      },
      {
        id: 16,
        url: "/dia02/16.jpg",
        alt: "Slide 3"
      },
      {
        id: 17,
        url: "/dia02/17.jpg",
        alt: "Slide 3"
      },
      {
        id: 18,
        url: "/dia02/18.jpg",
        alt: "Slide 3"
      },
      {
        id: 19,
        url: "/dia02/19.jpg",
        alt: "Slide 3"
      },
  ]


  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [currentIndex])

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] p-4">
      {/* Main carousel container */}
      <h2 className='text-center text-white'>Dia 02</h2>
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.url}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Optional caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-bold">{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Indicators/dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
      <hr />
    </div>

  )
}

export default CarruselDiaDos

