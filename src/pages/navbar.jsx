import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, Flex, Icon, Image, Spacer, Button, Text } from "@chakra-ui/react";
import pokeball from "../assets/pokeball.png";

export default function Navbar() {
    return (
        <>
            <Flex padding="10px" background="red.500" align="center">
                <Box>
                    <Image src={pokeball} alt="pokeball" boxSize="70px" />
                </Box>
                <Spacer marginLeft={20} />
                <Text className="open-sans" fontSize="2xl" textShadow='1px 1px #fff000'>PokeSearch</Text>
                <Spacer />
                <Flex align="center" gap="4">
                    <Button as={Link} to="/allpokemon" >Pokemon</Button>
                    <Button as={Link} to="search" >Search</Button>
                    {/* <Link to="/allpokemon" mx={10} >Pokemon</Link>
                    <Link to="search" mx={10} >Search</Link> */}

                </Flex>

            </Flex>
            <Outlet />
        </>

    )
}
