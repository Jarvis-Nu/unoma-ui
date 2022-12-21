import { useConnectModal } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useSigner } from 'wagmi'
import HorizontalCard from '../components/HorizontalCard'
import Nav2 from '../components/Nav2'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'
import VericalCard from '../components/VericalCard'
import { getMemberships, UnlockProvider, useUnlock } from '../hooks/useUnlock'

const Home: NextPage = () => {
  
  const router = useRouter()
  const { data: signer } = useSigner()
  const { openConnectModal } = useConnectModal();
  const ref: any = useRef(null)

  const podcasts = [
    {
      id: 1,
      thumbnail: "/card1.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 2,
      thumbnail: "/card2.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 3,
      thumbnail: "/card1.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 4,
      thumbnail: "/card4.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 5,
      thumbnail: "/card5.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 6,
      thumbnail: "/card6.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 7,
      thumbnail: "/card7.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 8,
      thumbnail: "/card8.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 9,
      thumbnail: "/card7.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
    {
      id: 10,
      thumbnail: "/card8.png",
      name: "Supreme podcast",
      icon: "https://i.ibb.co/5FM9CZw/supremelogo.png",
      hex: "0xa1c6d1386a6458997ce908b8c3058cef44687c08"
    },
  ]

  async function getStatus(config: any) {
    try {
      const getMembership = await getMemberships(config, await signer?.getAddress())
      if (getMembership.length > 0) {
        console.log(getMembership)
        return true
      }
      else {
        console.log(getMembership)
        return false
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UnlockProvider path={router.pathname}>
      <Head>
        <title>Unoma</title>
        <meta name="description" content="Unoma categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative md:flex bg-black min-h-screen scrollbar-thin scrollbar-thumb-[#008BEE]'>
        <LoadingBar color="#008BEE" ref={ref} shadow={true} />
        <div className='relative z-20'><SideNav page='categories' /></div>
        <div className='flex-1 w-full md:pl-72'>
          <div className='flex flex-col overflow-y-scroll scrollbar-none'>
            <TopNav />
            <Nav2 />
            <div className='grid grid-cols-2 gap-4 px-5 py-5 border-b-2 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 border-b-purple'>
              {
                podcasts.map(podcast => (
                  <div onClick={async () => {
                    const config: any = new Object()
                    const subconfig: any = new Object()
                    subconfig[`${podcast.hex}`] = {
                      network: 5
                    }
                    config.title = `Subscribe to ${podcast.name}`
                    config.icon = podcast.icon
                    config.locks = subconfig
                    if (await signer?.getAddress()) {
                      ref.current?.continuousStart()
                      if (await getStatus(config)) {
                        router.push("/podcasts/podcast")
                      }
                      else {
                        try {
                          // checkout()
                          let url = new URL("https://app.unlock-protocol.com/checkout")
                          url.searchParams.set('paywallConfig', JSON.stringify(config))
                          let redirectUri = new URL(window.location.href)
                          url.searchParams.set('redirectUri', redirectUri.toString());
                          router.push(url.toString())
                        } catch (error) {
                          console.log(error)
                        }
                      }
                    }
                    else {
                      if (openConnectModal) {
                        openConnectModal()
                      }
                    }
                  }}>
                    <VericalCard thumbnail={podcast.thumbnail} hex={podcast.hex} key={podcast.id} />
                  </div>
                ))
              }
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
    </UnlockProvider>
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

        // const config: any = new Object()
        // const subconfig: any = new Object()
        // subconfig[`${podcast.hex}`] = {
        //   network: 5
        // }
        // config.title = "Please subscribe to enjoy Supreme Podcast for one month"
        // config.locks = subconfig
        // if (await signer?.getAddress()) {
        //   if (await getStatus(config)) {
        //     router.push("/podcasts/podcast")
        //   }
        //   else {
        //     checkout()
        //   }
        // }
        // else {
        //   if (openConnectModal) {
        //     openConnectModal()
        //   }
        // }

        
  // useEffect(() => {
  //   async function address() {
  //     setAddress(await signer?.getAddress() || "")
  //   }
  //   address()
  // }, [])

  // const config: any = new Object()
  // const subconfig: any = new Object()
  // subconfig[`${address}`] = {
  //   network: 5
  // }
  // config.title = "Please subscribe to enjoy Supreme Podcast for one month"
  // config.locks = subconfig

  // const { loading, checkout, authenticate, isAuthorized, user } = useUnlock(config)