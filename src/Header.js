import React from "react";
import { Box, Flex, Link, Image, Text } from "@chakra-ui/react"; // Assurez-vous d'utiliser Chakra UI
import Logo from "./LogoLSD.svg"; // Importation du logo

function Header() {
  return (
    <Box bg="blue.600" px={4} py={3}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Flex alignItems="center">
            <Image
              src={Logo}
              alt="Laurent Serre Développement"
              boxSize="25px"
              mr={2}
            />
            <Text fontSize="xl" fontWeight="bold" color="white"></Text>
          </Flex>
        </Link>
        <Flex alignItems="center">
          <Link
            px={2}
            py={1}
            href="#apropos"
            color="white"
            _hover={{ textDecoration: "underline" }}
          >
            À propos
          </Link>
          <Link
            px={2}
            py={1}
            href="#programme"
            color="white"
            _hover={{ textDecoration: "underline" }}
          >
            Programme
          </Link>
          <Link
            px={2}
            py={1}
            href="#temoignages"
            color="white"
            _hover={{ textDecoration: "underline" }}
          >
            Témoignages
          </Link>
          <Link
            px={2}
            py={1}
            href="#contact"
            color="white"
            _hover={{ textDecoration: "underline" }}
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
