import { PlayIcon, PauseIcon } from "@heroicons/react/outline"
import { useState } from "react"
import SideNav from "../../components/SideNav"
import TopNav from "../../components/TopNav"
import { useSigner } from 'wagmi'


export default function Podcast() {

    const [playing, setPlaying] = useState(false)

    return(
        <main className='relative md:flex bg-black h-screen scrollbar-thin scrollbar-thumb-[#008BEE] overflow-y-hidden'>
            <div className='relative z-20'><SideNav page='categories' /></div>
            <div className='flex-1 w-full max-h-screen md:pl-72'>
              <div className='flex flex-col overflow-y-scroll scrollbar-none'>
                <TopNav />
              </div>
            </div>
            <div className="absolute bottom-0 w-full py-2 bg-black border-t-2 h-28 border-t-blue-500 md:pl-72">
                <div className="flex items-center justify-center w-full h-full">
                    <button onClick={async() => {
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

/**

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

        console.log(signer)
    
        const result = await createFlowOperation.exec(signer);
        console.log(result);
    
        console.log(
          `Congrats - you've just created a money stream!
        View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
        Network: Goerli
        Super Token: DAIx
        Sender: ${signer.getAddress()}
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


 */


/*



      const { ethereum } = window

      if (ethereum && ethereum.request) {

        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer =  provider.getSigner()

        await ethereum.request({ method: "eth_accounts" });
        const chainId = await ethereum.request({ method: "eth_chainId" });

        const sf = await Framework.create({
          chainId: Number(chainId),
          provider: provider
        });

      const DAIxContract = await sf.loadSuperToken("fDAIx");
      const DAIx = DAIxContract.address;

      try {
        const deleteFlowOperation = sf.cfaV1.deleteFlowByOperator({
          sender: sender,
          receiver: recipient,
          superToken: DAIx
          // userData?: string
        });
    
        console.log("Deleting your stream...");
    
        const result = await deleteFlowOperation.exec(signer);
        console.log(result);
    
        console.log(
          `Congrats - you've just deleted your money stream!
        View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
        Network: Goerli
        Super Token: DAIx
        Sender: ${sender},
        Receiver: ${recipient},
        `
        );
      } catch (error) {
        console.log(
          "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
        );
        console.error(error);
      }

      } else {
        console.log("Please Install Metamask!!!");
      }

*/