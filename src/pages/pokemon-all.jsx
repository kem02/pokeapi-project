import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Box, Flex, Spacer, Spinner, Button, HStack, Image } from "@chakra-ui/react";
import axios from "axios";
import "../index.css"

export default function AllPokemon() {
    const [nextUrl, setNextUrl] = useState("");
    // console.log(nextUrl)
    const [prevUrl, setprevUrl] = useState("");
    const [currentPokemon, setCurrentPokemon] = useState();

    const pokeData = useLoaderData();
    console.log(pokeData);



    useEffect(() => {
        if (pokeData) {
            if (pokeData.next) {
                // console.log(pokeData.next)
                const params = new URL(pokeData.next)
                // console.log(params)
                const offset = params.searchParams.get("offset")
                setNextUrl(offset);
                // console.log(nextUrl)
            }
            if (pokeData.previous) {
                const params = new URL(pokeData.previous)
                const offset = params.searchParams.get("offset")
                setprevUrl(offset);
            }
        }
    }, [pokeData]);


    const getPokemonDetails = (url) => {
        console.log(url)
        axios.get(url).then((data) => {
            console.log(data.data)
            setCurrentPokemon(data.data)
        }).catch((error) => {
            console.log(error)
        })
    };



    return (
        <div>
            {
                pokeData ?
                    <Flex
                        style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}
                        // border="5px solid blue"
                        justifyContent="center"
                    >
                        <Flex
                            border="5px solid red"
                            mt="50px"
                            alignItems="center"
                            w="600px"
                            h="700px"

                            boxShadow='dark-lg'
                            rounded='md'
                        >
                            <Spacer />
                            <Box
                                ml="35px"
                            // border="5px solid green"
                            >

                                {
                                    pokeData.results.slice(0, 10).map((item) => (
                                        <HStack>
                                            <Box
                                                as="Button"
                                                key={item.name}
                                                // border="5px solid yellow"
                                                bg="#F5F7DC"
                                                marginY="5px"
                                                marginX="5px"
                                                w="130px"
                                                h="50px"
                                                onMouseEnter={() => getPokemonDetails(item.url)}
                                                onMouseLeave={() => setCurrentPokemon(null)}
                                            >

                                                <Link to={`/pokemon/${item.name}`} >
                                                    {item.name}
                                                </Link>

                                            </Box>

                                            <Box width="50px" height="50px"  >
                                                {currentPokemon && currentPokemon.name == item.name ? <Image src={currentPokemon.sprites.front_default} /> : null}
                                            </Box>

                                        </HStack>

                                    ))
                                }

                                {
                                    <Button as={Link} to={`/allpokemon/?offset=${prevUrl}`} >Previous</Button>
                                }

                            </Box>

                            <Box
                                ml="70px"
                            // border="5px solid green"
                            >
                                {
                                    pokeData.results.slice(10, 20).map((item) => (

                                        <HStack>
                                            <Box
                                                as="Button"
                                                key={item.name}
                                                // border="5px solid yellow"
                                                bg="#F5F7DC"
                                                marginY="5px"
                                                marginX="5px"
                                                w="130px"
                                                h="50px"
                                                onMouseEnter={() => getPokemonDetails(item.url)}
                                                onMouseLeave={() => setCurrentPokemon(null)}
                                            >

                                                <Link to={`/pokemon/${item.name}`} >
                                                    {item.name}
                                                </Link>

                                            </Box>

                                            <Box h="50px" w="50px" >
                                                {currentPokemon && currentPokemon.name == item.name ? <Image src={currentPokemon.sprites.front_default} /> : null}
                                            </Box>

                                        </HStack>

                                    ))
                                }

                                {
                                    <Button as={Link} to={`/allpokemon/?offset=${nextUrl}`} >Next</Button>
                                }

                            </Box>

                            <Spacer />
                        </Flex>


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
        </div>
    )
}