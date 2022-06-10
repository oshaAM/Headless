import { NextPage } from 'next';
import { ReactNode, useState } from 'react';
import { getCookie, setCookies } from 'cookies-next';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { DefaultLayout } from '@/core/layouts/DefaultLayout';
import { SessionProvider } from 'next-auth/react';
import App from 'next/app';
import type { AppContext, AppProps } from 'next/app';

import '@/core/styles/tailwind.css';

type NextPageWithLayout = NextPage & {
  Layout?: ({ children }: { children: ReactNode }) => JSX.Element;
};

export default function MyApp(
  props: AppProps & { colorScheme: ColorScheme; Component: NextPageWithLayout }
) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const Layout = Component.Layout || DefaultLayout;

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            bgcolor: [
              '#fbf1e6',
              '#ded9d1',
              '#c4c0b8',
              '#aca69f',
              '#7a736b',
              '#605a53',
              '#45403a',
              '#2c2520',
              '#150b00',
            ],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const colorScheme = (await getCookie('mantine-color-scheme', appContext.ctx)) || 'light';
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme,
  };
};
