import Image from "next/image"

interface Props {
    thumbnail: string
}

export default function HorizontalCard({ thumbnail }: Props) {
  return (
    <div className="bg-lightPurple min-w-[300px] max-h-40 rounded-lg p-5 flex space-x-5">
      <div className="rounded-full">
        <Image src={thumbnail} width={100} height={100} />
      </div>
      <div className="space-y-2 flex-1">
        <h3 className="h3 text-white">Tony Stark</h3>
        <p className="p text-white">100 episodes</p>
        <button className="bg-blue px-5 py-1.5 rounded-lg text-white">Follow</button>
      </div>
    </div>
  )
}