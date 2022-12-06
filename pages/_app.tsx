import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { RecoilRoot } from 'recoil'

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Unoma',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#000000',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      })}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
