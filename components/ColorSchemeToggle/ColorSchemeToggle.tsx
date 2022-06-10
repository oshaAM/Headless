import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" mt="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        variant="transparent"
        radius="xl"
        sx={(theme) => ({
          colors: {
            'bgcolor': ['#fbf1e6', '#ded9d1', '#c4c0b8', '#aca69f', '#7a736b', '#605a53', '#45403a', '#2c2520', '#150b00']
          },
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.bgcolor,
          color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
        })}
      >
        {colorScheme === 'dark' ? (
          <SunIcon width={20} height={20} />
        ) : (
          <MoonIcon width={20} height={20} />
        )}
      </ActionIcon>
    </Group>
  );
}
