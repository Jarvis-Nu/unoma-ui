import Image from "next/image"

interface Props {
    thumbnail: string,
    hex: string
}

export default function VericalCard({ thumbnail, hex }: Props) {
  return (
    <div className="hover:cursor-pointer hover:bg-zinc-500/10 p-1.5 rounded-lg">
      <div className="w-full">
        <Image src={thumbnail} width={185} height={150} className="rounded-lg" />
      </div>
      <h3 className="text-white h3">Podcast Title</h3>
      <p className="p text-gray">10 episodes</p>
    </div>
  )
}