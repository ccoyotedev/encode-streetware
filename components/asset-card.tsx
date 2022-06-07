import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Image,
  useColorModeValue,
  Text,
  Stack,
  Button,
  HStack,
} from "@chakra-ui/react";

type Props = {
  src?: string;
  title?: string;
  cost?: string;
  id?: number;
};

const AssetCard = ({ src, title, cost }: Props) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(
      { pathname: "/asset-view", query: { src, title, cost } },
      "/asset-view"
    );
  };

  return (
    <>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        pb="2%"
        minHeight="450px"
      >
        <Image objectFit="fill" w="100%" src={src} alt={title} />
        <Stack
          align={{ md: "stretch" }}
          textAlign={{ md: "left" }}
          mt={{ base: 2, md: 0 }}
          ml={{ md: 2 }}
        >
          <Text fontWeight="bold" fontSize="sm" color="black">
            {title}
          </Text>
          <HStack>
            <Text fontWeight="bold" fontSize="sm" color="gray.500">
              {cost}
              <Image display="inline" src="/eth.svg" pl="3px" />
            </Text>
            <Button size="xs" colorScheme="teal" variant="outline">
              <a onClick={handleClick}>Details</a>
            </Button>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};
export default AssetCard;
