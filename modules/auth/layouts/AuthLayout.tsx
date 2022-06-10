import { MinimalLayout } from '@/core/layouts/MinimalLayout';
import { Container, Paper } from '@mantine/core';
import React from 'react';

export const AuthLayout = ({ children }) => {
  return (
    <MinimalLayout>
      <Container className="w-screen h-screen flex flex-col items-center justify-center ">
        <Paper radius="md" withBorder className="relative">
          <div className="absolute -top-4 -right-4">
            <ColorSchemeToggle />
          </div>
          {children}
        </Paper>
      </Container>
    </MinimalLayout>
  );
};

import { ActionIcon, ActionIconVariant, Group, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        variant="filled"
        radius="md"
        sx={(theme) => ({
          backgroundColor: isDark ? theme.colors.dark[5] : theme.colors.blue[2],
          color: isDark ? theme.colors.yellow[4] : theme.colors.blue[8],
          ':hover': {
            backgroundColor: isDark ? theme.colors.dark[6] : theme.colors.blue[3],
            color: isDark ? theme.colors.yellow[6] : theme.colors.dark[9],
          },
        })}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </ActionIcon>
    </Group>
  );
}
