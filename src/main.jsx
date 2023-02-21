import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getPokemon, getSpecificPokemon } from './api'
import AllPokemon from './pages/pokemon-all'
import Pokemon from './pages/specific-pokemon'
import Navbar from './pages/navbar'
import { ChakraProvider } from "@chakra-ui/react"
import Search from './pages/search'
import SearchResult from './pages/search-result'
import ErrorPage from './pages/error-page'
import Index from './pages'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Index /> },

      {
        path: "/allpokemon",
        element: <AllPokemon />,
        loader: ({ request }) => {
          console.log(request)
          const params = new URL(request.url)
          const offset = params.searchParams.get("offset")
          console.log(offset)
          return getPokemon(offset);
        }
      },
      {
        path: "search",
        element: <Search />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: ":name",
            element: <SearchResult />,
            errorElement: <ErrorPage />,

            loader: ({ params }) => {
              console.log(params);
              const pokemonName = params.name;
              return getSpecificPokemon(pokemonName)
            }
          }
        ]
      },


    ]
  },

  {
    path: "/pokemon/:name",
    element: <Pokemon />,
    loader: ({ params }) => {
      console.log(params)
      const pokemonName = params.name;

      return getSpecificPokemon(pokemonName);
    }
  },
  // {
  //   path: "/search/:name",
  //   element: <SearchResult />,
  //   loader: ({ params }) => {
  //     console.log(params);
  //     const pokemonName = params.name;
  //     return getSpecificPokemon(pokemonName)
  //   }
  // }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
