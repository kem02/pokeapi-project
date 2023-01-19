import { useLoaderData, Link } from "react-router-dom";
import { List } from "@chakra-ui/react";

export default function AllPokemon() {
    const pokeData = useLoaderData();
    console.log(pokeData);

    return (
        <div>
            {
                pokeData ? 
                <ul>
                    {
                        pokeData.results.map((item) => (
                            <li key={item.name}>
                                <Link to={`/pokemon/${item.name}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                :
                <div>Pokemon data still loading...</div>
            }
        </div>
    )
}