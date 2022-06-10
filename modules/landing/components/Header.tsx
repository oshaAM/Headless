import React from 'react';
import { Group } from '@mantine/core';
import { Button } from '@mantine/core';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
export const Header = () => {
  return <Group position="right" px="xl" >

    <div >
      <ColorSchemeToggle />
    </div>
  </Group>

};
