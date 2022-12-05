import type { NextPage } from 'next'
import Head from 'next/head'
import HorizontalCard from '../components/HorizontalCard'
import Nav2 from '../components/Nav2'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'
import VericalCard from '../components/VericalCard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Unoma</title>
        <meta name="description" content="Unoma categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative md:flex bg-black min-h-screen scrollbar-thin scrollbar-thumb-[#008BEE]'>
        <div className='relative z-20'><SideNav page='categories' /></div>
        <div className='flex-1 w-full md:pl-72'>
          <div className='flex flex-col overflow-y-scroll scrollbar-none'>
            <TopNav />
            <Nav2 />
            <div className='grid grid-cols-2 gap-4 px-5 py-5 border-b-2 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 border-b-purple'>
              <VericalCard thumbnail="/card1.png" />
              <VericalCard thumbnail="/card2.png" />
              <VericalCard thumbnail="/card3.png" />
              <VericalCard thumbnail="/card4.png" />
              <VericalCard thumbnail="/card5.png" />
              <VericalCard thumbnail="/card6.png" /> 
              <VericalCard thumbnail="/card7.png" />
              <VericalCard thumbnail="/card8.png" />
              <VericalCard thumbnail="/card5.png" />
              <VericalCard thumbnail="/card6.png" /> 
              <VericalCard thumbnail="/card7.png" />
              <VericalCard thumbnail="/card8.png" />
            </div>
            <div className='p-5'>
              <h2 className='text-white h2'>Top 5 Podcasters</h2>
              <div className='flex space-x-5 py-2.5 overflow-x-scroll scrollbar-thin scrollbar-thumb-[#008BEE]'>
                <HorizontalCard thumbnail='/podcaster1.png' />
                <HorizontalCard thumbnail='/podcaster2.png' />
                <HorizontalCard thumbnail='/podcaster3.png' />
                <HorizontalCard thumbnail='/podcaster2.png' />
                <HorizontalCard thumbnail='/podcaster3.png' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Home


/**
 * 
 * <div className='flex flex-col flex-1 overflow-x-scroll overflow-y-scroll scrollbar-none'>
          <TopNav />
          <Nav2 />
          <div className='grid grid-cols-3 gap-4 px-5 py-5 border-b-2 xl:grid-cols-4 2xl:grid-cols-5 border-b-purple'>
            <VericalCard thumbnail="/card1.png" />
            <VericalCard thumbnail="/card2.png" />
            <VericalCard thumbnail="/card3.png" />
            <VericalCard thumbnail="/card4.png" />
            <VericalCard thumbnail="/card5.png" />
            <VericalCard thumbnail="/card6.png" /> 
            <VericalCard thumbnail="/card7.png" />
            <VericalCard thumbnail="/card8.png" />
          </div>
          <div className='p-5'>
            <h2 className='text-white h2'>Top 5 Podcaster</h2>
            <div className='flex space-x-5 py-2.5 overflow-x-scroll scrollbar-thin scrollbar-thumb-[#008BEE]'>
              <HorizontalCard thumbnail='/podcaster1.png' />
              <HorizontalCard thumbnail='/podcaster2.png' />
              <HorizontalCard thumbnail='/podcaster3.png' />
              <HorizontalCard thumbnail='/podcaster2.png' />
              <HorizontalCard thumbnail='/podcaster3.png' />
            </div>
          </div>
        </div>

        'px-5 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 border-b-2 border-b-purple py-5'
 * 
 */