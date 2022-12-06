import Image from "next/image";
import Link from "next/link";

interface Props {
    thumbnail: string
}

export default function VericalCard({ thumbnail }: Props) {
  return (
    <Link href={"/podcasts/podcast"}>
      <div className="hover:cursor-pointer hover:bg-zinc-500/10 px-1.5 pb-1.5 rounded-lg">
        <div className="w-full">
          <Image src={thumbnail} width={185} height={150} className="rounded-lg" />
        </div>
        <h3 className="text-white h3">Podcast Title</h3>
        <p className="p text-gray">10 episodes</p>
      </div>
    </Link>
  )
}