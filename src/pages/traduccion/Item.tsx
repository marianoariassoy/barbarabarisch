const Item = ({ data }) => {
  return (
    <article className='fade-in'>
      <h2 className='font-bold'>{data.title}</h2>
      <p>{data.description}</p>
    </article>
  )
}

export default Item
