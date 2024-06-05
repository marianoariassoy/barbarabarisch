const Item = ({ data }) => {
  return (
    <article className='text-sm flex gap-x-6 fade-in'>
      <div className='w-1/4'>{data.date}</div>
      <div className='w-3/4'>
        <h2 className='font-bold'>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </article>
  )
}

export default Item
