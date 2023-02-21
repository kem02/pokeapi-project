import { Box, Card, Flex, Spinner, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import wallpaper from "../assets/wallpaperflare.jpg"


export default function Pokemon() {
    const [flipPic, setFlipPic] = useState(false)

    const pokemonData = useLoaderData();
    // console.log(pokemonData);
    const navigate = useNavigate();


    const pokemonImage = flipPic ? pokemonData.sprites.back_default : pokemonData.sprites.front_default;

    const toggleClick = () => {
        setFlipPic(prevState => !prevState)
    }



    return (
        <Box
            style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}
            // border="1px solid red"
            justifyContent="center"
            align="center"
            bg={`url(${wallpaper})`}
            backgroundSize="cover"
            backgroundPosition="center"
            width={"100vw"}
            height={"100vh"}
            opacity={0.965}
        >

            {
                pokemonData ?
                    <Flex
                        width="full"
                        // border="1px solid black"
                        justifyContent="center"
                        align="center"
                    >

                        <Button
                            onClick={() => navigate(-1)}
                            mr="20px"
                            mb="160px"
                        >Back
                        </Button>


                        <Card
                            key={pokemonData.name}
                            p={6}
                            border="1px solid red"
                            mt="250px"
                            alignItems="center"
                            minW="380px"
                            minH="480px"
                            bg="#FFFFEA"
                            boxShadow='dark-lg'
                            rounded='md'
                            mr="260px"
                        >

                            <Text>Click on the sprite to see the back!</Text>

                            <Image
                                src={pokemonImage}
                                onClick={toggleClick}
                                h="130px"
                                w="130px"
                            />

                            <Heading style={{ textDecoration: "underline" }} mb={4}>
                                {pokemonData.name.toUpperCase()}
                            </Heading>

                            <Flex>Type:{pokemonData.types.map((item) => (
                                // console.log(item.type.name)
                                <Box ml={2}>
                                    {item.type.name}
                                </Box>
                            ))};
                            </Flex>

                            <Text>
                                Height: {pokemonData.height}
                            </Text>

                            <Text>
                                Weight: {pokemonData.weight}
                            </Text>

                            <Box>{pokemonData.stats.map((item) => (
                                // console.log(item.stat.name)
                                <Text ml={2}>
                                    {item.stat.name[0].toUpperCase() + item.stat.name.slice(1)}: {item.base_stat}
                                </Text>
                            ))}
                            </Box>

                        </Card>

                    </Flex>
                    :
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
            }


        </Box>
    )
}
