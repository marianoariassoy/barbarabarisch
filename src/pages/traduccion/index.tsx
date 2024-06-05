import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/traduccion/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Bárbara Barisch / Traducción'
  }, [])

  const text = {
    es: {
      title: 'PRINCIPALES CLIENTES'
    },
    en: {
      title: 'TOP CLIENTS'
    },
    pr: {
      title: 'PRINCIPAIS CLIENTES'
    }
  }

  return (
    <Layout>
      <section className='bg-white p-8 flex flex-col gap-y-6'>
        <div>
          <h1 className='font-bold'>{text[lan].title}</h1>
        </div>
        <div className='flex flex-col gap-y-6 text-sm'>
          {loading ? (
            <Loader />
          ) : (
            data.map((item, index) => (
              <Item
                key={index}
                data={item}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
