import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, Container, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

// Main App Component
const Home = () => {
  return (
    <ChakraProvider>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Hello World</Text>
          <Text>Welcome to your first NodeJS + React + Meteor app!</Text>
          <IconButton aria-label="Rocket Icon" icon={<FaRocket />} size="lg" />
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

const root = createRoot(document.getElementById("react-target"));
root.render(<Home />);
