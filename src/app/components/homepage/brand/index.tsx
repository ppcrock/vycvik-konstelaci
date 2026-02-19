"use client"
import Slider from 'react-infinite-logo-slider'
import SingleBrand from './SingleBrand'

function Brand() {
  const brandList = [
    {
      image: '/images/brand/brand-icon-1.svg',
      darkImg: '/images/brand/brand-darkicon-1.svg',
      title: 'Adobe',
    },
    {
      image: '/images/brand/brand-icon-2.svg',
      darkImg: '/images/brand/brand-darkicon-2.svg',
      title: 'Figma',
    },
    {
      image: '/images/brand/brand-icon-3.svg',
      darkImg: '/images/brand/brand-darkicon-3.svg',
      title: 'Shopify',
    },
    {
      image: '/images/brand/brand-icon-4.svg',
      darkImg: '/images/brand/brand-darkicon-4.svg',
      title: 'Dribble',
    },
    {
      image: '/images/brand/brand-icon-5.svg',
      darkImg: '/images/brand/brand-darkicon-5.svg',
      title: 'Webflow',
    },
  ]

  return (
    <section>
      <div className='container mx-auto lg:max-w-7xl px-4'>
        <div className='gap-4'>
          <div className='flex justify-center text-center py-4 relative'>
            <p className='relative px-2 text-dark/60 dark:text-white/60 md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent'>
              Loved by 1000+ big and small brands around the world
            </p>
          </div>
          {brandList.length > 0 && (
            <div className='relative py-3 Xsm:py-7'>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-r from-white dark:from-transparent via-transparent to-white dark:to-transparent z-10" />
              <Slider
                width='200px'
                duration={20}
                pauseOnHover={true}
                blurBorders={false}>
                {brandList.map((items: any, index: number) => (
                  <SingleBrand key={index} brand={items} />
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Brand
