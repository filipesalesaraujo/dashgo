import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Filipe Sales</Text>
          <Text color="gray.300" fontSize="small">
            filipesalesaraujo@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Filipe Sales"
        src="https://github.com/filipesalesaraujo.png"
      />
    </Flex>
  );
}
