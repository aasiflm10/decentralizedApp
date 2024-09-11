import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { AirDrop } from './Airdrop';
import { ShowSolBalance } from './Balance';
import { SignMessage } from './SingMessage';
import { DrawerDefault } from './Drawer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/LpiGEE7-J44ti19KVKu4CBNTf7pz54Xo"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <DrawerDefault/>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      </div>
    </>

  )
}

export default App
