import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Bárbara Barisch / Error'
  }, [])

  const text = {
    es: {
      title: 'Página no encontrada'
    },
    en: {
      title: 'Page not found'
    },
    pr: {
      title: 'Página no encontrada'
    }
  }

  return (
    <Layout>
      <section className='bg-white p-8 font-bold text-center'>{text[lan].title}</section>
    </Layout>
  )
}

export default Index
