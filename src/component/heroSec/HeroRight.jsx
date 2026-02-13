import images from '../../assets/scripts/renderImage';

const heroRight = () => {
  return (
    <div className=" w-full md:w-1/2 xl:w-1/3 lg:w-1/2 flex items-center h-full p-5  md:flex relative">
      <img className='Hero-FadeIn-Ap heroimg absolute z-10 w-[90%] xl:w-[100%]' src={images.hero001} alt="Hero Image" loading="lazy" />
      <img className='Hero-FadeIn-Up absolute z-20 w-[90%] xl:w-[100%]' src={images.hero002} alt="Hero Image" loading="lazy" />
    </div>
  )
}


export default heroRight