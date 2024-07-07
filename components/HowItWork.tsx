"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChess } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { AiOutlineFileSearch } from "react-icons/ai";
import Modal from "./Modal";
import { PiWarningCircleLight } from "react-icons/pi";

import other from "@/public/images/other.png"
import wallet from "@/public/image/walletconnect.png"
import metamask from "@/public/image/metamask.png"
import coinbase from "@/public/image/coinbase.png"
import phantom from "@/public/image/phantom.png"
import trust from "@/public/image/trust_wallet.png"
import safepal from "@/public/image/safepal.jpeg"
import ledger from "@/public/image/ledger.webp"
import keplr from "@/public/image/keplr.png"


const HowItWork = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showConnectManuallyModal, setShowConnectManuallyModal] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'error'>('idle');
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const toggleWalletModal = () => {
    setShowWalletModal(!showWalletModal);
    setConnectionStatus('idle');
    setSelectedWallet(null);
  };

  const handleCloseWalletModal = () => {
    setShowWalletModal(false);
    setConnectionStatus('idle');
    setSelectedWallet(null);
  };

  const handleWalletClick = (walletName: string) => {
    setShowWalletModal(false); // Close Wallet Modal
    setShowTermsModal(true); // Open Terms Modal
    setSelectedWallet(walletName);
  };

  const handleConnectClick = () => {
    setShowWalletModal(true);
  };

  const handleAcceptTerms = () => {
    setShowTermsModal(false);
    setConnectionStatus('connecting'); // Set status to connecting
    setShowConnectManuallyModal(true);

    // After 3 seconds, show the error message
    setTimeout(() => {
        setConnectionStatus('error');
    }, 3000);
};

  
  const walletData = [
    { name: "WalletConnect", image: wallet },
    { name: "Metamask", image: metamask },
    { name: "Coinbase", image: coinbase },
    { name: "Phantom", image: phantom },
    { name: "Trust Wallet", image: trust },
    { name: "Keplr Wallet", image: keplr },
    // { name: "Ronin Wallet", image: ronin },
    { name: "Safepal", image: safepal },
    { name: "Ledger", image: ledger },
    { name: "Other wallets", image: other },
  ];
  interface howItWorksCardProps {
    id: string;
    title: string;
    content: string | number;
    icon: React.ReactNode;
  }

  const howItWorksCard: howItWorksCardProps[] = [
    {
      id: "1",
      title: "VALIDATIONS & APPROVALS",
      content:
        "Access portfolio and transactions across multiple hardware wallets, portfolio changes and all connected dapps.",
      icon: <FaChess />,
    },
    {
      id: "2",
      title: "RECOVERY",
      content:
        "See where your assets move to and revoke access to malicious contracts and interactions.",
      icon: <FaChartBar />,
    },
    {
      id: "3",
      title: "STAKING AND NFT REVIEW",
      content:
        "Having complete control of your staking portfolio, staking rewards and NFT portfolio across all chains. ",
      icon: <VscLaw />,
    },
    {
      id: "4",
      title: "CROSS BRIDGE",
      content:
        "Utilizing Cosmos SDK for secure cross-chain asset bridging between Later 1s and Layer 2s. Bridge assets multichain and check status of all bridge assets.",
      icon: <AiOutlineFileSearch />,
    },
    {
      id: "5",
      title: "CLAIM AIRDROP",
      content:
        "Claim various distributed tokens across various protocols and blockchains with a single click.",
      icon: <AiOutlineFileSearch />,
    },
    {
      id: "6",
      title: "AUTHENTICATION",
      content:
        "Authenticate your wallets with blockchains servers to avoid failed transactions and loss of funds.",
      icon: <AiOutlineFileSearch />,
    },
    {
      id: "7",
      title: "GAS RETRIEVAL",
      content:
        "Retrieve all unused gas fees on different chains and claim them back to your wallet, allows you view all unused gas fees across different protocols.",
      icon: <AiOutlineFileSearch />,
    },
    {
      id: "8",
      title: "WHITELISTS",
      content:
        "View projects that you can get whitelisted on and their criteria to be an early adopter.",
      icon: <AiOutlineFileSearch />,
    },
  ];
  return (
    <div className="mt-28 relative lg:mt-60  bg-transparent px-4 md:px-16">
      <div className="">
        
        <div className="flex flex-col sm:grid grid-cols-2 xl:grid-cols-4 gap-5 py-10 ">
          {howItWorksCard.map(({ id, title, content, icon }) => (
            <div
              key={id}
              className="flex flex-col bg-[#0F1212] md:min-h-[250px] px-6 py-4 font-semibold rounded-lg justify-center items-center"
              onClick={handleConnectClick} 
            >
              <span className=" text-3xl opacity-50 p-3 rounded-full bg-[#2f887f] text-white">
                {icon}
              </span>
              <div className="flex items-center gap-1 text-base leading-4 md:block">
                <h1 className="md:text-lg my-3 tracking-wider leading-6">
                  {title}
                </h1>
              </div>
              <p className="text-sm text-[#F9F9F9]/90 font-normal">
                {content}
              </p>
            </div>
          ))}
        </div>
      </div>
        {/* Wallet Modal */}
        <Modal isVisible={showWalletModal} onClose={handleCloseWalletModal}>
        <div className="modal left-0 top-0 flex justify-center items-center">
          <div className="rounded-3xl shadow-lg modal-content w-[350px]">
            <div className="border-b py-4 px-2 modal-header">
              <h5 className="modal-title">Connect Wallet</h5>
            </div>
            <div className="p-3 modal-body">
              {connectionStatus === 'idle' && (
                <>
                  <p>Connect with one of our available wallet providers.</p>
                  <div className="modal-wallets">
                    {walletData.map((wallet, index) => (
                      <Link href="#" key={index} onClick={() => handleWalletClick(wallet.name)}>
                        <Image src={wallet.image} width={30} height={35} alt={wallet.name} />
                        {wallet.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* Terms Modal */}
      <Modal isVisible={showTermsModal} onClose={() => setShowTermsModal(false)}>
        <div className="modal left-0 top-0 flex justify-center items-center z-[90]">
          <div className="rounded-3xl shadow-lg w-[350px] alert-body">
            <div className="p-3 modal-body flex justify-center items-center flex-col">
              <PiWarningCircleLight className="text-center justify-center items-center h-16 w-16 text-yellow-600" />
              <h1 className="py-4 text-black font-semibold">Notice!!!</h1>
              <p className="text-black text-sm font-light">Any information used on the website is not accessible by anyone except the user, no one can have access to any information put/used for validity, make sure you logout your wallet when you are done.</p>
              <span className="py-4 text-black font-medium text-sm">Terms & Policy Apply</span>
              <button
                onClick={handleAcceptTerms}
                className="text-white cursor-pointer px-[4.5px] py-[6px] md:px-1.5 md:py-1.5 bg-blue-500 font-semibold text-base rounded-md"
              >
                Accept Terms
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Connect Manually Modal */}
      <Modal isVisible={showConnectManuallyModal} onClose={() => setShowConnectManuallyModal(false)}>
    <div className="modal left-0 top-0 flex justify-center items-center">
    <div className="rounded-3xl shadow-lg modal-content w-[350px] h-[180px]">
            <div className="p-3 modal-body">
                {connectionStatus === 'connecting' && (
                    <div className="justify-center items-center gap-5 flex flex-col">
                        {selectedWallet && (
                            <>
                                <Image
                                    src={walletData.find(wallet => wallet.name === selectedWallet)?.image || ''}
                                    width={40}
                                    height={40}
                                    alt={selectedWallet}
                                    className="ml-2"
                                />
                                <p>Connecting to {selectedWallet}...</p>
                            </>
                        )}
                    </div>
                )}
                {connectionStatus === 'error' && (
                    <div className="justify-center items-center gap-5 flex flex-col">
                        {selectedWallet && (
                            <>
                                <Image
                                    src={walletData.find(wallet => wallet.name === selectedWallet)?.image || ''}
                                    width={40}
                                    height={40}
                                    alt={selectedWallet}
                                    className="ml-2"
                                />
                                <p>Error connecting, connect manually</p>
                                <button className="text-[#0F1212] cursor-pointer px-[4.5px] py-[6px] md:px-1.5 md:py-1.5 bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] w-full font-semibold text-base rounded-md">
                                    <Link href="/connect">
                                        Connect manually
                                    </Link>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
</Modal>

    </div>
  );
};

export default HowItWork;
