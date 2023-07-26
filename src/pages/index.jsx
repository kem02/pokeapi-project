import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import landscape from "../assets/landscape.jpg"


export default function Index() {
    return (
        <Box
            bg={`url(${landscape})`}
            justifyContent="center"
            align="center"
            backgroundSize="cover"
            backgroundPosition="center"
            width={"100%"}
            height={"90vh"}
            opacity={0.965}

        >
            <Flex
                // border="1px solid black"
                justifyContent="center"
            >
                <Box
                    bg="rgba(52, 194, 255, 0.7)"
                    border="2px solid cyan"
                    borderRadius="3xl"
                    w="500px"
                    h="300px"
                    mt="150px"
                    mb="20px"
                >
                    <Heading
                        fontSize="2xl"
                        mt="100px"
                        style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}
                    >
                        Welcome to my PokeSearch page! <br /> Feel free to look around and search for pokemon!</Heading>
                </Box>
            </Flex>

            <Box
                bg="rgba(0, 134, 79, 0.65)"
                color="white"
                width="100%"
                position="absolute" 
                bottom="0" 
                textAlign="center"
                py={2}
            >
                <Text
                // fontSize="xl"
                fontWeight="bold"
                >Made with &#x2764;&#xFE0F; by Kevin </Text>
            </Box>

        </Box>

    )
}