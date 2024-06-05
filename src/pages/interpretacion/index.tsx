import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/interpretacion/${lan}`)
  const [items, setItems] = useState(20)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Bárbara Barisch / Interpretación'
  }, [])

  const text = {
    es: {
      link: 'VER',
      link2: 'FOTOS',
      more: 'VER MAS'
    },
    en: {
      link: 'SEE',
      link2: 'PICTURES',
      more: 'SEE MORE'
    },
    pr: {
      link: 'VER',
      link2: 'FOTOS',
      more: 'VER MAS'
    }
  }

  return (
    <Layout>
      <section className='bg-white p-8 flex gap-12 flex-col lg:flex-row'>
        <div className='w-full flex flex-col gap-y-6 lg:w-3/4'>
          {loading ? (
            <Loader />
          ) : (
            data.slice(0, items).map((item, index) => (
              <Item
                key={index}
                data={item}
              />
            ))
          )}
          <div>
            {!loading && items >= data.length ? null : (
              <button
                className='bg-primary text-white px-6 py-2 text-sm font-bold mt-3 bg-primary-hover transition-all'
                onClick={() => setItems(items + 20)}
              >
                {text[lan].more}
              </button>
            )}
          </div>
        </div>
        <div className='w-full flex justify-end lg:w-1/4'>
          <Link
            href='/fotos'
            className='w-32 h-20 img-bg-lan text-center pt-3'
          >
            <div className='text-white flex flex-col items-center'>
              <span>{text[lan].link}</span>
              <span className='font-bold'>{text[lan].link2}</span>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Index
