import React, { useState } from "react";
import { Box, Button, Center, Container, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";

const emojis = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🍌", "🍍", "🥭"];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const SlotMachine = () => {
  const [slots, setSlots] = useState([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);

  const spin = () => {
    setSlots([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
  };

  return (
    <Container py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Slot Machine
        </Heading>
        <Divider />
        <Flex>
          {slots.map((emoji, index) => (
            <Box key={index} p={8} m={1} borderRadius="md" borderWidth="2px" borderColor="gray.200" fontSize="3xl" textAlign="center" width="70px">
              {emoji}
            </Box>
          ))}
        </Flex>
        <Button leftIcon={<FaRedo />} colorScheme="teal" onClick={spin}>
          Spin
        </Button>
        <Text color="green.500" fontSize="xl">
          {slots[0] === slots[1] && slots[1] === slots[2] ? "🎉🎉🎉 Congratulations, you hit the jackpot! 🎉🎉🎉" : "Try again!"}
        </Text>
      </VStack>
    </Container>
  );
};

const Index = () => {
  return (
    <Center h="100vh" bg="gray.50">
      <SlotMachine />
    </Center>
  );
};

export default Index;
