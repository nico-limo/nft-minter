import MainMint from 'components/MainMint';
import Navbar from 'layouts/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [accounts, setAccounts] = useState<string[]>([]);

  const updateAccounts = (newAccounts: string[]) => {
    setAccounts(newAccounts);
  };

  return (
    <>
      <Head>
        <title>NFT minter App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar accounts={accounts} updateAccounts={updateAccounts} />
      <MainMint accounts={accounts} updateAccounts={updateAccounts} />
    </>
  );
};

export default Home;
