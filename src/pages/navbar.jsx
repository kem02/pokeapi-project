import React from "react";
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
import { Box, Flex, Icon, Image, Spacer, Button, Text } from "@chakra-ui/react";
import pokeball from "../assets/pokeball.png";
// import "../index.css"

export default function Navbar() {

    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate("/")
    }


    return (
        <>
            <Flex padding="10px" background="red.500" align="center" height={"10vh"}>
                <Box>
                    <Image src={pokeball} alt="pokeball" boxSize="70px" onClick={handleImageClick} cursor="pointer" />
                </Box>
                <Spacer marginLeft={20} />
                <Text fontSize="2xl" fontWeight="semibold" textShadow='1px 1px #fff000'>PokeSearch</Text>
                <Spacer />
                <Flex align="center" gap="4">
                    
                    <NavLink to="/allpokemon">
                        {({ isActive }) => (
                            <Box
                                padding="2"
                                fontWeight="semibold"
                                fontSize="lg"
                                borderWidth="thick"
                                borderTop={"none"}
                                borderLeft={"none"}
                                borderRight={"none"}
                                borderBottomColor={isActive ? "yellow.400" : "white"}
                            >
                                Pokemon
                            </Box>
                        )}
                    </NavLink>

                    <NavLink to="search">
                        {({ isActive }) => (
                            <Box
                                padding="2"
                                fontWeight="semibold"
                                fontSize="lg"
                                marginLeft={"10px"}
                                marginRight={"15px"}
                                borderWidth="thick"
                                borderTop={"none"}
                                borderLeft={"none"}
                                borderRight={"none"}
                                borderBottomColor={isActive ? "yellow.400" : "white"}
                            >
                                Search
                            </Box>
                        )}
                    </NavLink>
                    
                    {/* <Spacer marginRight={8} /> */}
                    


                    {/* <Button as={Link} to="/allpokemon" >Pokemon</Button> */}
                    {/* <Button as={Link} to="search" >Search</Button> */}


                    {/* <Link to="/allpokemon" mx={10} >Pokemon</Link>
                    <Link to="search" mx={10} >Search</Link> */}

                </Flex>

            </Flex>
            <Outlet />
        </>

    )
}
