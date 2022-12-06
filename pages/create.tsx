import { PhotographIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'

interface ThumbnailInterface {
  thumbnail: string
}

const Add: NextPage = () => {
    const filePickerRef: any = useRef(null)
    const [thumbnail, setThumbnail] = useState<{thumbnail: string}>({thumbnail: ""})
    function displayThumbnail(e: any) {
        const reader = new FileReader()
        let type = e.target.files[0].type
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readEvent) => {
          if (type == "image/jpeg" || type == "image/jpg" || type == "image/png" || type == "image/webp") {
            let thumb = readEvent.target?.result || ""
            setThumbnail({thumbnail: thumb+""})
          }
        }
    }
  return (
    <div>
      <Head>
        <title>Unoma</title>
        <meta name="description" content="Unoma categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative md:flex bg-black min-h-screen scrollbar-thin scrollbar-thumb-[#008BEE]'>
        <div className='relative z-20 md:w-72'><SideNav page='add' /></div>
        <div className='flex-1 w-full'>
          <div className='flex flex-col h-full overflow-y-scroll scrollbar-none'>
            <TopNav />
            <div className='min-h-[calc(100%)] bg-[url("/addBg.png")] bg-no-repeat bg-cover bg-center'>
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className='max-w-lg mt-20 pt-20 md:mt-0 px-5 mb-32 text-center space-y-2.5'>
                        <h2 className='font-semibold text-white h2'>Add Podcast</h2>
                        <p className='text-white p'>
                            Join UNOMA and start promoting your podcast to gain listeners,
                            likes, and comments. Build a community by getting to know
                            your audience and engaging with them.
                        </p>
                        <div className='space-y-2.5'>
                            <input type="text" placeholder="Title of recording"
                                className='w-full bg-black border-2 border-[#008BEE]  p-2.5 rounded-xl outline-none text-white' />
                            <textarea placeholder="Title of recording"
                                className='w-full h-40 bg-black border-2 border-[#008BEE] rounded-xl outline-none text-white p-2.5' />
                            <div>
                                {
                                    thumbnail.thumbnail ? <img
                                        src={thumbnail.thumbnail}
                                        className="object-cover object-center w-full cursor-pointer h-96"
                                        onClick={() => setThumbnail({thumbnail: ""})}
                                    />
                                    : (
                                        <div className="flex flex-col items-center justify-center w-full h-40 bg-black border-2 text-[#008BEE]
                                        border-[#008BEE] hover:cursor-pointer rounded-xl"
                                           onClick={() => filePickerRef.current?.click()}>
                                           <PhotographIcon className="w-10 h-10" />
                                           <h4 className="text-lg font-semibold">Enter post thumbnail</h4>
                                           <input type="file" ref={filePickerRef} onChange={e => displayThumbnail(e)} hidden />
                                       </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Add