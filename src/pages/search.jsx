import { Button, Flex, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, } from "react-router-dom";
import { useForm } from "react-hook-form"

export default function Search() {
    
    
    const navigate = useNavigate();
    

    const {register, handleSubmit, reset, formState } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        const lowerCasePokemon = data.search.toLowerCase();
        navigate(`/search/${lowerCasePokemon}`);
        
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({ search: '' });
        }
      }, [formState, reset]);


    return (
        <>
            <Box style={{ fontFamily: "'Open Sans', Arial, sans-serif" }} position="absolute" zIndex={10} left={0} right={0} >
                 <Flex justifyContent="center" alignItems="center" mt={2}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl >
                            <FormLabel htmlFor="search" fontWeight="bold" fontSize="large">Search for Pokemon</FormLabel>
                            <Input {...register("search")} placeholder="Type pokemon here" backgroundColor="#EAEAEA"/>
                            <Button type="submit" width="100%">Search</Button>
                        </FormControl>
                    </form>
                    
                </Flex>
            </Box>
            
            <Outlet />
        </>
    )
}


//This is using controlled components for form without react-hook-form.


// export default function Search() {
//     const [pokemonName, setPokemonName] = useState("")
    
//     const navigate = useNavigate();
//     console.log(pokemonName);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log(e);
        
//         console.log(pokemonName)
//         navigate(`/search/${pokemonName}`);
//         setPokemonName("")
//     }

//     return (
//         <>
//             <Box position="absolute" zIndex={10} left={0} right={0} >
//                  <Flex justifyContent="center" alignItems="center" mt={2}>
//                     <form onSubmit={handleSubmit}>
//                         <FormControl >
//                             <FormLabel htmlFor="search">Search for Pokemon</FormLabel>
//                             <Input value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} placeholder="Type pokemon here" type="text" name="search" />
//                             <Button type="submit" width="100%">Search</Button>
//                         </FormControl>
//                     </form>
                    
//                 </Flex>
//             </Box>
            
//             <Outlet />
//         </>
//     )
// }