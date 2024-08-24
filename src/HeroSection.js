import React, { useState } from "react";
import { Box, Heading, Text, Button, VStack, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import QuestionnaireDirecteurCommercial from "./QuestionnaireDirecteurCommercial"; // Importation du questionnaire

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      bgGradient="linear(to-r, #1A2980, #26D0CE)"
      color="white"
      py="20"
      textAlign="center"
      position="relative"
      overflow="hidden"
      shadow="lg"
    >
      <VStack spacing="6" maxW="1200px" mx="auto">
        <Text
          fontSize="lg" // Augmentation de la taille de la police
          fontFamily="Permanent Marker, cursive"
          textShadow="1px 1px 4px rgba(0, 0, 0, 0.2)" // Légère ombre
          mt="4" // Ajout d'un margin-top pour l'espacement
        >
          Il est de plus en plus difficile de développer son chiffre d'affaires
          et sa marge !
        </Text>

        <Heading
          as="h1"
          size="3xl"
          fontWeight="extrabold"
          textShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
        >
          Rencontrez la Méthode Laurent Serre
        </Heading>
        <Text
          fontSize="2xl"
          maxW="600px"
          textShadow="1px 1px 6px rgba(0, 0, 0, 0.2)"
        >
          Nous construisons votre processus autonome et personnalisé de
          génération de leads
          <br /> et concrétisation de contrats.
          <br /> <strong>30% de CA en plus garanti.</strong>
        </Text>
        <MotionButton
          size="lg"
          colorScheme="yellow"
          variant="solid"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          shadow="xl"
          onClick={handleClickOpen}
          w="100%" // Largeur à 100% pour s'adapter à l'écran
          maxW="300px" // Limite de la largeur maximale
          mx="auto" // Centrage horizontal
        >
          De combien pouvez-vous augmenter votre chiffre d'affaires
          <br /> dans les trois prochains mois ?
        </MotionButton>

        <Text fontSize="md" color="gray.200" mt="6">
          Moins de deux minutes pour un plan d'action personnalisé sur mesure
          pour la rentrée offert.
        </Text>

        <Box w="full" px={{ base: 4, md: 12 }}>
          {" "}
          {/* Augmentation de la marge */}
          <Stack direction={{ base: "column", md: "row" }} spacing="8" mt="10">
            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              textAlign="center"
              bg="whiteAlpha.200"
              p="4"
              borderRadius="md"
              shadow="lg" // Ajout de l'ombre pour le relief
              color="white"
              flex="1"
            >
              <Text fontSize="3xl" fontWeight="bold" color="yellow.300">
                ✔
              </Text>
              <Text>
                Analyse approfondie de votre processus de vente actuel.
              </Text>
            </MotionBox>

            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              textAlign="center"
              bg="whiteAlpha.200"
              p="4"
              borderRadius="md"
              shadow="lg"
              color="white"
              flex="1"
            >
              <Text fontSize="3xl" fontWeight="bold" color="yellow.300">
                ✔
              </Text>
              <Text>
                Optimisation avec les meilleures techniques de vente issues des
                neurosciences.
              </Text>
            </MotionBox>
            <MotionBox
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
              }} // Ajout d'une ombre animée au survol
              whileTap={{ scale: 0.95 }}
              textAlign="center"
              bg="whiteAlpha.200"
              p="4"
              borderRadius="md"
              shadow="lg"
              color="white"
              flex="1"
            >
              <Text fontSize="3xl" fontWeight="bold" color="yellow.300">
                ✔
              </Text>
              <Text>
                Optimisation avec les meilleures techniques de vente issues des
                neurosciences.
              </Text>
            </MotionBox>
          </Stack>
        </Box>
      </VStack>

      {/* Pop-up Dialog contenant le questionnaire */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Questionnaire</DialogTitle>
        <DialogContent>
          <QuestionnaireDirecteurCommercial />
        </DialogContent>
      </Dialog>
    </MotionBox>
  );
};

export default HeroSection;
