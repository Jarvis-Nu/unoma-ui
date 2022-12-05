import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PhotographIcon } from '@heroicons/react/solid'
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

export default function AddModal() {
  const [open, setOpen] = useRecoilState(modalState)
  const cancelButtonRef = useRef(null)
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 min-h-full overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative text-left text-white transition-all transform bg-black min-h-[260px]
                  rounded-lg shadow-xl w-[300px] sm:w-[500px] border-2 border-[#008BEE] px-3.5 py-2.5 space-y-2.5">
                <div>
                  <Dialog.Title className="font-semibold text-center h3 sm:h2 sm:text-start">Add New Podcast</Dialog.Title>
                </div>
                <div className='w-full space-y-1.5 sm:flex sm:space-y-0 sm:space-x-2.5 items-center'>
                  <div>
                    {
                      thumbnail.thumbnail ? <img
                        src={thumbnail.thumbnail}
                        className="object-center w-full sm:w-[225px] h-40 cursor-pointer"
                        onClick={() => setThumbnail({thumbnail: ""})}
                      /> : (
                        <div className="flex flex-col items-center justify-center w-full sm:w-[225px] h-40 bg-black border-2 text-[#008BEE]
                            border-[#008BEE] hover:cursor-pointer rounded-xl"
                            onClick={() => filePickerRef.current?.click()}>
                          <PhotographIcon className="w-10 h-10" />
                          <h4 className="text-lg font-semibold">Enter podcast thumbnail</h4>
                          <input type="file" ref={filePickerRef} onChange={e => displayThumbnail(e)} hidden />
                        </div>
                      )
                    }
                  </div>
                  <div className='w-full space-y-1.5'>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent outline-none p-1.5 border-2 border-[#008BEE] rounded-lg text-sm"
                      />
                      <label
                        htmlFor="name"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
                          px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
                          peer-focus:-translate-y-4 left-1 bg-black">
                        Name
                      </label>
                    </div>
                    <div className="relative">
                      <textarea
                        id="description"
                        className="w-full bg-transparent outline-none p-1.5 border-2 border-[#008BEE] rounded-lg text-sm"
                      />
                      <label
                        htmlFor="description"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
                          px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
                          peer-focus:-translate-y-4 left-1 bg-black">
                        Description
                      </label>
                    </div>
                    <button className="p-2 text-white w-full bg-[#008BEE] rounded-lg">Add podcast</button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}