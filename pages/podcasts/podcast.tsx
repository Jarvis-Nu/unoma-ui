import { PlayIcon, PauseIcon } from "@heroicons/react/outline"
import { useState } from "react"
import SideNav from "../../components/SideNav"
import TopNav from "../../components/TopNav"
import { Framework } from "@superfluid-finance/sdk-core"
import { customHttpProvider } from "../../config";

export default function Podcast() {

    const [playing, setPlaying] = useState(false)

    //where the Superfluid logic takes place
    async function createNewFlow(recipient: any, flowRate: any) {
      const sf = await Framework.create({
        chainId: 5,
        provider: customHttpProvider
      });
    
      const signer = sf.createSigner({
        privateKey:
          "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
        provider: customHttpProvider
      });
    
      const DAIxContract = await sf.loadSuperToken("fDAIx");
      const DAIx = DAIxContract.address;
    
      try {
        const createFlowOperation = sf.cfaV1.createFlow({
          flowRate: flowRate,
          receiver: recipient,
          superToken: DAIx,
          sender: (await signer.getAddress()).toString()
          // userData?: string
        });
    
        console.log("Creating your stream...");
    
        const result = await createFlowOperation.exec(signer);
        console.log(result);
    
        console.log(
          `Congrats - you've just created a money stream!
        View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
        Network: Goerli
        Super Token: DAIx
        Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
        Receiver: ${recipient},
        FlowRate: ${flowRate}
        `
        );
      } catch (error) {
        console.log(
          "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
        );
        console.error(error);
      }
    }

    return(
        <main className='relative md:flex bg-black min-h-screen scrollbar-thin scrollbar-thumb-[#008BEE]'>
            <div className='relative z-20'><SideNav page='categories' /></div>
            <div className='flex-1 w-full md:pl-72'>
                <div className='flex flex-col overflow-y-scroll scrollbar-none'>
                    <TopNav />
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-auto py-2 border-t-2 border-t-blue-500 md:pl-72">
                <div className="flex items-center justify-center w-full h-full">
                    <button onClick={async() => {
                        await createNewFlow("0xaEc10C6768E492d3D20FC996cF514f113C3dB904","100000")
                        if (playing) {
                            setPlaying(false)
                        }
                        else {
                            setPlaying(true)
                        }
                    }}>{playing ? <PauseIcon className="w-16 h-20 text-white" /> : <PlayIcon className="w-16 h-20 text-white" />}</button>
                </div>
            </div>
        </main>
    )
}