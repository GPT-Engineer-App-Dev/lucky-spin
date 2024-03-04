import React, { useState } from "react";
import { Box, Button, Center, Container, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";

const emojis = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🍌", "🍍", "🥭"];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

import { useEffect } from "react";

const SlotMachine = () => {
  const [slots, setSlots] = useState([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
  const [credits, setCredits] = useState(100);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    let spinInterval;
    if (isSpinning) {
      spinInterval = setInterval(() => {
        setSlots([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
      }, 100);
    }
    return () => clearInterval(spinInterval);
  }, [isSpinning]);

  const spin = () => {
    if (credits > 0) {
      setCredits(credits - 1);
      setIsSpinning(true);
      const spinTimeout = setTimeout(() => {
        if (!isSpinning) {
          setIsSpinning(false);
        }
        if (slots[0] === slots[1] && slots[1] === slots[2]) {
          setCredits((prevCredits) => prevCredits + 49);
        }
        if (isSpinning && credits > 1) {
          spin();
        }
      }, 2000);
      return () => clearTimeout(spinTimeout);
    }
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
        <Button leftIcon={<FaRedo />} colorScheme="teal" onClick={spin} isDisabled={credits <= 0 || isSpinning}>
          {isSpinning ? "Stop" : "Spin"}
        </Button>
        <Button colorScheme="orange" onClick={() => setIsSpinning(!isSpinning)} isDisabled={credits <= 0}>
          {isSpinning ? "Stop Auto-Spin" : "Auto-Spin"}
        </Button>
        <VStack spacing={4}>
          <Text color="green.500" fontSize="xl">
            {slots[0] === slots[1] && slots[1] === slots[2] ? "🎉🎉🎉 Congratulations, you hit the jackpot! 🎉🎉🎉" : "Try again!"}
          </Text>
          <Text fontSize="md">Credits: {credits}</Text>
        </VStack>
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
