import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getPokemon, getSpecificPokemon } from './api' 
import AllPokemon from './pages/pokemon-all'
import Pokemon from './pages/specific-pokemon'
import { ChakraProvider } from "@chakra-ui/react"


const router = createBrowserRouter([
  {
    path: "/",
    element: <AllPokemon />,
    loader: () => {
      return getPokemon();
    }
  },
  {
    path: "/pokemon/:name",
    element: <Pokemon />,
    loader: ({ params }) => {
      const pokemonName = params.name;

      return getSpecificPokemon(pokemonName);
    }
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
