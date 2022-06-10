import { Container, Global } from '@mantine/core';
import { Header } from '@/landing/components/Header';
import { Trending } from '@/landing/components/Trending';
import { Footer } from '@/landing/components/Footer';
import { MinimalLayout } from '@/core/layouts/MinimalLayout';
import { ReactElement } from 'react';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
import Image from 'next/image';
// Landing page
function HomePage() {
  return (
    <>
      <Global
        styles={(theme) => ({
          body: {
            ...theme.fn.fontStyles(),
            backgroundColor: theme.colorScheme === 'dark' ? '#141517' : '#7d766e',
          },
        })}
      />
      <Header />
      <div className="w-screen">
        <Image src="/img/headless.png" width="700" height="500" className="mx-auto" />
      </div>
      <Container>
        <Trending />
      </Container>
      <Footer />
    </>
  );
}

HomePage.getLayout = (page: ReactElement) => <MinimalLayout>{page}</MinimalLayout>;

export default HomePage;
