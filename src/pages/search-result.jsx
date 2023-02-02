import { useState } from "react";
import { Box, Card, Flex, Spinner, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useLoaderData, Link } from "react-router-dom";
import wallpaper from "../assets/wallpaperflare.jpg"

export default function SearchResult() {
    const [flipPic, setFlipPic] = useState(false)

    const result = useLoaderData();
    // console.log(result)


    const pokemonImage = flipPic ? result.sprites.back_default : result.sprites.front_default;

    const toggleClick = () => {
        setFlipPic(prevState => !prevState)
    }

    return (
        <Box
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
                result ?
                    <Flex
                        width="full"
                        // border="1px solid black"
                        justifyContent="center"
                        align="center"
                        >

                        <Button as={Link} to="/search">Back</Button>


                        <Card
                            key={result.name}
                            p={6}
                            border="1px solid red"
                            mt="250px"
                            alignItems="center"
                            minW="380px"
                            minH="480px"
                            bg="#FFFFEA"
                            boxShadow='dark-lg'
                            rounded='md'
                            mr="100px"
                            >

                            <Image
                                src={pokemonImage}
                                onClick={toggleClick}
                                h="130px"
                                w="130px"
                            />

                            <Heading style={{ textDecoration: "underline" }} mb={4} >
                                {result.name.toUpperCase()}
                            </Heading>

                            <Flex>Type:{result.types.map((item) => (
                                // console.log(item.type.name)
                                <Box ml={2} >
                                    {item.type.name}
                                </Box>
                            ))}
                            </Flex>

                            <Text>
                                Height: {result.height}
                            </Text>

                            <Text>
                                Weight: {result.weight}
                            </Text>

                            <Box>{result.stats.map((item) => (
                                // console.log(item.stat.name)
                                <Text ml={2} >
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

//  {
//                 result ?
//                     <Box>
//                         {result.name}
//                     </Box>
//                     :
//                     <div>Pokemon data still loading...</div>
//             }