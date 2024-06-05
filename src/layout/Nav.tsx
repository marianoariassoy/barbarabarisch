import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Nav = () => {
  const [location] = useLocation()
  const { lan } = useDataContext()

  return (
    <nav
      className='bg-white/50 backdrop-blur px-6 fixed top-0 left-0 h-screen w-screen hidden lg:block lg:bg-white lg:w-auto lg:static lg:h-auto'
      id='nav'
    >
      <div className='w-full h-full flex items-center justify-center'>
        <ul className='flex flex-col lg:flex-row items-center uppercase font-bold justify-between'>
          {menu.map((item, index) => (
            <li key={index}>
              <Link to={item.url}>
                <span
                  className={`w-40 py-4 text-center block transition-all ${
                    location === item.url ? 'text-primary img-bg' : 'hover:opacity-70'
                  }`}
                >
                  {item[lan].title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
