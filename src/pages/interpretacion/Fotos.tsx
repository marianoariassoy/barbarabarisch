import { useEffect } from 'react'
import { Link } from 'wouter'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import FotosItem from './FotosItem'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/fotos/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Bárbara Barisch / Fotos'
  }, [])

  const text = {
    es: {
      link: 'Volver'
    },
    en: {
      link: 'Go Back'
    },
    pr: {
      link: 'Voltar'
    }
  }

  return (
    <Layout>
      <section className='bg-white p-8 flex gap-12 flex-col lg:flex-row items-start'>
        <div className='grid lg:grid-cols-2 gap-6 w-full lg:w-3/4'>
          {loading ? (
            <Loader />
          ) : (
            data.map((item, index) => (
              <FotosItem
                key={index}
                data={item}
              />
            ))
          )}
        </div>
        <div className='w-full flex justify-end lg:w-1/4'>
          <Link
            href='/interpretacion'
            className='w-32 h-20 img-bg-lan text-center pt-6'
          >
            <span className='text-white flex flex-col items-center uppercase'>{text[lan].link}</span>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Index
