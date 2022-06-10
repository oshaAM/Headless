import { GetServerSidePropsContext, NextPage } from 'next';
import { ReactElement, ReactNode, useState } from 'react';
import { getCookie, setCookies } from 'cookies-next';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { DefaultLayout } from '@/core/layouts/DefaultLayout';
// import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '@/core/styles/tailwind.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App(
  props: AppProps & { colorScheme: ColorScheme; Component: NextPageWithLayout }
) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {/* <SessionProvider session={pageProps.session} refetchInterval={0}> */}
        {getLayout(<Component {...pageProps} />)}
        {/* </SessionProvider> */}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
