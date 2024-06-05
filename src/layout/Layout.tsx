import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { useDataContext } from '../context/useDataContext'
import { images, logos } from '../components/data'
import Header from './Header'
import Bars from './Bars'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { lan } = useDataContext()
  const [currentImageIndex, setCurrentImageIndex] = useState(null)

  useEffect(() => {
    if (lan === 'es') {
      setCurrentImageIndex(0)
    } else if (lan === 'en') {
      setCurrentImageIndex(1)
    } else {
      setCurrentImageIndex(2)
    }
  }, [lan])

  return (
    <section
      className='min-h-screen'
      style={{
        backgroundImage: `url(./images/${images[currentImageIndex]})`
      }}
    >
      <div className='w-screen max-w-6xl p-6 flex m-auto gap-y-6 flex-col lg:w-full lg:flex-row'>
        <div className='w-full lg:w-1/4 flex justify-between items-start sticky z-50'>
          <Link to='/'>
            <img
              src={`./images/${logos[currentImageIndex]}`}
              alt='Logo Barbara'
              className='w-52 lg:w-full hover:opacity-70 transition-all'
            />
          </Link>
          <Bars />
        </div>
        <div className='lg:w-3/4 lg:pl-12 flex flex-col gap-y-6'>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </section>
  )
}

export default Layout
