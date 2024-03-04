import React from "react";
import { Box, Text } from "@chakra-ui/react";

const PromotionBanner = () => {
  return (
    <Box position="fixed" top="0" width="100%" bg="blue.600" p={2} zIndex="banner">
      <Text fontSize="lg" color="white" textAlign="center">
        💰 Play More, Win More! Exclusive deals every day! 💰
      </Text>
    </Box>
  );
};

export default PromotionBanner;
