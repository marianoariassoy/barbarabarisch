import { languages, colors } from '../components/data'
import { useDataContext } from '../context/useDataContext'
import Nav from './Nav'

const Header = () => {
  const { lan, setLan } = useDataContext()

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
  }

  return (
    <header className='flex flex-col gap-y-6'>
      <div className='flex gap-x-3 lg:gap-x-6 items-center justify-end'>
        {languages.map((language, index) => (
          <button
            key={index}
            className={`text-white w-[4.2rem] h-[4.2rem] rounded-full 
            text-xs bg-primary-hover transition-all font-medium hover:opacity-100 ${
              language.code === lan ? 'opacity-100' : 'opacity-60'
            } `}
            style={{ backgroundColor: colors[index] }}
            onClick={() => handleLanguage(language.code)}
          >
            {language.title}
          </button>
        ))}
      </div>

      <Nav />
    </header>
  )
}

export default Header
