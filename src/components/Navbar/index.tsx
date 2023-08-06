import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";
import { Inter, Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"] });

export default function Nav() {
  return (
    <>
      <Box bg={"transparent"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text className="font-bold">X</Text>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button variant={"anime"} className={quicksand.className}>
                Trabalho
              </Button>
              <Button variant={"anime"} className={quicksand.className}>
                Pessoal
              </Button>
              <Button variant={"anime"} className={quicksand.className}>
                Sobre
              </Button>
              <Button variant={"anime"} className={quicksand.className}>
                Contato
              </Button>
              <Button variant={"anime"} className={quicksand.className}>
                Insta
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
