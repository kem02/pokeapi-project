import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Pokemon() {
    const [flipPic, setFlipPic] = useState(false)
    const pokemonData = useLoaderData();
    console.log(pokemonData);

    const pokemonImage = flipPic ? pokemonData.sprites.back_default : pokemonData.sprites.front_default;

    const toggleClick = () => {
        setFlipPic(prevState => !prevState)
    }
    
    return (
        <div>
            <img src={pokemonImage} onClick={toggleClick} />
            
        </div>
    )
}
