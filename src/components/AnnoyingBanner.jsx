import React from "react";
import { Box, Text } from "@chakra-ui/react";

const AnnoyingBanner = () => {
  return (
    <Box position="fixed" bottom="0" width="100%" bg="red.600" p={2}>
      <Text fontSize="lg" color="white" textAlign="center">
        🚨 Gambling is great and not bad at all! 🚨
      </Text>
    </Box>
  );
};

export default AnnoyingBanner;
