import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Bárbara Barisch / Contacto'
  }, [])

  const text = {
    es: {
      image1: 'email1.png',
      image2: 'skype1.png'
    },
    en: {
      image1: 'email2.png',
      image2: 'skype2.png'
    },
    pr: {
      image1: 'email3.png',
      image2: 'skype3.png'
    }
  }

  return (
    <Layout>
      <section className='bg-white p-16 flex justify-center'>
        <div className='font-bold lg:text-xl flex flex-col gap-y-6'>
          <article className='flex items-center gap-x-3'>
            <div>
              <a
                href='mailto:barbarabarisch@gmail.com'
                className='hover:opacity-70 transition-all'
              >
                <img
                  src={`./images/${text[lan].image1}`}
                  alt='Logo Email'
                  className='w-8 lg:w-auto'
                />
              </a>
            </div>
            <div>
              <a
                href='mailto:barbarabarisch@gmail.com'
                className='hover:opacity-70 transition-all'
              >
                barbarabarisch@gmail.com
              </a>
            </div>
          </article>
          <article className='flex items-center gap-x-3'>
            <div>
              <img
                src={`./images/${text[lan].image2}`}
                alt='Logo Skype'
                className='w-8 lg:w-auto'
              />
            </div>
            <div>barbara.barisch</div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Index
