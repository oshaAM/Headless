import Head from 'next/head';
import React, { ReactNode } from 'react';

export const MinimalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      {children}
    </>
  );
};
