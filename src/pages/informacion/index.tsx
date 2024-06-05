import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Image from '../../components/Image'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/informacion/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Bárbara Barisch / Información'
  }, [])

  const text = {
    es: {
      link: 'VER',
      cv: 'barbara_birsch_cv.pdf'
    },
    en: {
      link: 'SEE',
      cv: 'barbara_birsch_cv_english.pdf'
    },
    pr: {
      link: 'VER',
      cv: 'barbara_birsch_cv_portugues.pdf'
    }
  }

  return (
    <Layout>
      <section className='bg-white p-8 flex gap-12 flex-col lg:flex-row'>
        <div className='flex flex-col gap-y-6 lg:w-3/4'>
          <div className='text-balance text-sm whitespace-break-spaces'>
            {loading ? (
              <div className='mb-20'>
                <Loader />
              </div>
            ) : (
              <div className='fade-in'>{data[0].description}</div>
            )}
          </div>
          <div>
            <Image
              src='./images/bio.jpg'
              alt='translate'
            />
          </div>
        </div>
        <div className='flex justify-end'>
          <a
            target='_blank'
            href={'./images/' + text[lan].cv}
            className='w-32 h-20 img-bg-lan text-center pt-3'
          >
            <div className='text-white flex flex-col items-center'>
              <span>{text[lan].link}</span>
              <span className='font-bold'>CV</span>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Index
