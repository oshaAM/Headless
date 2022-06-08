import { Button, Container } from '@mantine/core';
import { Header } from '@/landing/components/Header';
import { Trending } from '@/landing/components/Trending';
import { Footer } from '@/landing/components/Footer';

// Landing page
export default function HomePage() {
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
