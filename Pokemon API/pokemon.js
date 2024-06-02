// Task 13 - Practical Task 1: Pokemon API

// Set input for api call
const pokemonRoot = 'https://pokeapi.co/api/v2/pokemon/';
let pokemonName = 'squirtle';

// Select html elements
let input = document.getElementById("searchField");
const button = document.getElementById("searchButton");
let list = document.getElementById("result");
let placeholder = document.querySelectorAll(".hidden");
let body = document.getElementsByTagName("body")[0];


// Enter keydown event listener
input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        console.log("hit enter");

        if (input.value == "") {
            alert("Search for a pokemon to get started.")
        } else {
            console.log("sth else");
            pokemonName = input.value;
            catchPokemon(pokemonName);
        }
        console.log("out");
    }
})

// Button click event listener
button.addEventListener("click", function () {

    if (input.value == "") {
        alert("Search for a pokemon to get started.")
    } else {
        pokemonName = input.value;
        catchPokemon(pokemonName);
    }
})


async function catchPokemon(pokemonName) {
    try {
        // API call
        let response = await fetch(`${pokemonRoot}/${pokemonName}`);
        let pokemon = await response.json();

        console.log(pokemon);

        // Check if the user searched for 'pikachu'
        if (pokemonName.toLowerCase() === 'pikachu') {
            // Set class for body to allow conditional styling
            body.classList.add('body-pikachu');
        } else {
            body.classList.remove('body-pikachu');
        }

        // Information displayed in the results section
        list.textContent = "";

        // Name
        let h3 = document.createElement("h3");
        h3.textContent = pokemon.name;
        result.appendChild(h3);

        // Weight
        let weight = document.createElement("p");
        weight.innerHTML = `\n\n <b>Weight:</b> \n${pokemon.weight}`;
        result.appendChild(weight);

        // Pokedex number
        let number = document.createElement("p");
        number.innerHTML = `\n\n <b>PokeDex Number:</b> \n${pokemon.id}`;
        result.appendChild(number);

        // Moves
        let moves = document.createElement("p");
        moves.innerHTML = `\n\n <b>Moves:</b> \n`;
        result.appendChild(moves);

        let movesList = document.createElement("ul");

        result.appendChild(movesList);

        // List items for each move
        for (let i = 0; i < pokemon.moves.length; i++) {
            let attack = document.createElement("li");
            attack.innerHTML = `\n\n${pokemon.moves[i].move.name}`;
            movesList.appendChild(attack);
        }


    }

    catch (error) {
        console.log(error);
    }
}

