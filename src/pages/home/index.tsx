import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import { images, logos, languages, colors } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { setLan } = useDataContext()
  const [location, setLocation] = useLocation()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleLanguage = (code: string) => {
    setLan(code)
    if (code === 'es') {
      document.documentElement.style.setProperty('--color-primary', colors[0])
      document.documentElement.style.setProperty('--image-nav-bg', "url('./images/select1.png')")
      document.documentElement.style.setProperty('--image-lan-bg', "url('./images/globo1.png')")
    } else if (code === 'en') {
      document.documentElement.style.setProperty('--color-primary', colors[1])
      document.documentElement.style.setProperty('--image-nav-bg', "url('./images/select2.png')")
      document.documentElement.style.setProperty('--image-lan-bg', "url('./images/globo2.png')")
    } else {
      document.documentElement.style.setProperty('--color-primary', colors[2])
      document.documentElement.style.setProperty('--image-nav-bg', "url('./images/select3.png')")
      document.documentElement.style.setProperty('--image-lan-bg', "url('./images/globo3.png')")
    }
    setLocation('/informacion')
  }

  return (
    <section
      className='w-screen h-screen flex items-center justify-center p-6'
      style={{
        backgroundImage: `url(./images/${images[currentImageIndex]})`
      }}
    >
      <div className='flex flex-col gap-y-6 justify-center items-center'>
        <div className='w-full'>
          <img
            src={`./images/${logos[currentImageIndex]}`}
            alt='Logo Barbara'
            className='w-full max-w-72 m-auto'
          />
        </div>
        <div className='flex gap-x-6 lg:gap-x-16 items-center w-full'>
          {languages.map((language, index) => (
            <button
              key={index}
              className='text-white w-24 h-24 rounded-full 
              text-sm bg-primary-hover transition-all font-medium'
              style={{ backgroundColor: colors[index] }}
              onClick={() => handleLanguage(language.code)}
            >
              {language.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Index
