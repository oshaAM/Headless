import { Container } from '@mantine/core';
import { Header } from '@/landing/components/Header';
import { Trending } from '@/landing/components/Trending';
import { Footer } from '@/landing/components/Footer';
import { MinimalLayout } from '@/core/layouts/MinimalLayout';
import { ReactElement } from 'react';

// Landing page
function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <Trending />
      </Container>
      <Footer />
    </>
  );
}

HomePage.getLayout = (page: ReactElement) => <MinimalLayout>{page}</MinimalLayout>;
