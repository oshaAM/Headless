import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Button } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <p className="text-center text-2xl">meow</p>
      <Welcome />
      <ColorSchemeToggle />
      <Button className="mt-4">meow</Button>
    </>
  );
}
