const Bars = () => {
  const handleMenu = () => {
    document.querySelector('#nav').classList.toggle('hidden')
  }

  return (
    <button
      className='lg:hidden'
      onClick={handleMenu}
    >
      <img
        src='./images/bars-svgrepo-com.svg'
        alt='Bars'
        className='w-8 mt-3'
      />
    </button>
  )
}

export default Bars
