import { Box, Button, HStack } from '@chakra-ui/react';
import { AccountProps } from 'utils/interfaces';

const Navbar = ({ accounts, updateAccounts }: AccountProps) => {
  const isConnected = Boolean(accounts[0]);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      updateAccounts(accounts);
    }
  };
  return (
    <HStack>
      <HStack>
        <Box>Facebook</Box>
        <Box>Twitter</Box>
        <Box>Twitter</Box>
        <Box>Email</Box>
      </HStack>
      <HStack>
        <Box>About</Box>
        <Box>Mint</Box>
        <Box>Mint</Box>
        <Box>Team</Box>
        {isConnected ? (
          <Box>Connected</Box>
        ) : (
          <Button onClick={connectWallet}>Connect</Button>
        )}
      </HStack>
    </HStack>
  );
};

export default Navbar;
