import Image from "next/image";

interface Props {
    thumbnail: string
}

export default function VericalCard({ thumbnail }: Props) {
  return (
    <div>
      <div>
        <Image src={thumbnail} width={185} height={150} className="rounded-lg" />
      </div>
      <h3 className="text-white h3">Podcast Title</h3>
      <p className="p text-gray">10 episodes</p>
    </div>
  )
}