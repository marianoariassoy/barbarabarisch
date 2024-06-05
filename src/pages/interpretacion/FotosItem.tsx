import Image from '../../components/Image'
const url = 'http://www.barbarabarisch.com/imagenes/'

const FotosItem = ({ data }) => {
  return (
    <article className='text-sm flex flex-col gap-y-3'>
      <div className='aspect-square overflow-hidden'>
        {data.video ? (
          <iframe
            src={data.video}
            title={data.title}
            allowFullScreen
            className='w-full h-full'
          />
        ) : (
          <Image
            src={url + data.image}
            alt={data.title}
          />
        )}
      </div>
      <div className='w-3/4'>
        <h2 className='font-bold'>{data.title}</h2>
        <p>{data.date}</p>
        <p>{data.description}</p>
      </div>
    </article>
  )
}

export default FotosItem
