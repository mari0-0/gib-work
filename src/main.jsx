import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReactLenis } from 'lenis/react'
import { createWeb3Modal, defaultSolanaConfig } from '@web3modal/solana/react'
import { solana } from '@web3modal/solana/chains'

const chains = [solana]

// Your WalletConnect Cloud project ID
const projectId = '996da8fae47aeaa05797640c0c47dce3'

// Create metadata
const metadata = {
  name: 'gib-work',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create solanaConfig
const solanaConfig = defaultSolanaConfig({
  metadata,
  chains,
  projectId,
	auth: {
    email: false, // default to true
    socials: [],
    showWallets: true, // default to true
    walletFeatures: true // default to true
    
  }
})

// Create modal
createWeb3Modal({
  solanaConfig,
  chains,
  projectId,
	themeVariables: {
		'--w3m-border-radius-master': '0.1rem',
		'--w3m-accent': '#8151fd',
	}
})

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ReactLenis root>
			<App />
		</ReactLenis>
	</StrictMode>
);
