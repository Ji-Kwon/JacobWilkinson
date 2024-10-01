let playerPokemonIndex = 0;
let opponentPokemonIndex = 0;
let playerTeam = ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];
let opponentTeam = ['geodude', 'rattata'];
let playerPokemon, opponentPokemon;

function getPokemonData(pokemonNameOrId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;
    
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemon = {
                name: data.name,
                stats: data.stats.map(stat => ({
                    name: stat.stat.name,
                    base_stat: stat.base_stat
                })),
                sprites: {
                    front: data.sprites.front_default,
                    back: data.sprites.back_default
                },
                moves: data.moves.slice(0, 4).map(move => move.move.name)
            };
            return pokemon;
        })
        .catch(error => console.error('Error fetching Pokémon data:', error));
}

function displayPokemon(pokemon, isPlayer) {
    const pokemonContainer = document.getElementById(isPlayer ? 'player-pokemon' : 'opponent-pokemon');
    pokemonContainer.innerHTML = '';

    // Add name
    const nameElement = document.createElement('h3');
    nameElement.textContent = pokemon.name;
    pokemonContainer.appendChild(nameElement);

    // Add sprite
    const spriteElement = document.createElement('img');
    spriteElement.src = isPlayer ? pokemon.sprites.back : pokemon.sprites.front;
    pokemonContainer.appendChild(spriteElement);

    // Add stats
    const statsElement = document.createElement('ul');
    pokemon.stats.forEach(stat => {
        const statElement = document.createElement('li');
        statElement.textContent = `${stat.name}: ${stat.base_stat}`;
        statsElement.appendChild(statElement);
    });
    pokemonContainer.appendChild(statsElement);

    // Add moves
    const movesElement = document.createElement('ul');
    pokemon.moves.forEach(move => {
        const moveElement = document.createElement('li');
        moveElement.textContent = move;
        movesElement.appendChild(moveElement);
    });
    pokemonContainer.appendChild(movesElement);
}

function initializeBattle() {
    // Fetch and display player's first Pokémon
    getPokemonData(playerTeam[playerPokemonIndex]).then(pokemon => {
        playerPokemon = pokemon;
        displayPokemon(playerPokemon, true);
    });

    // Fetch and display opponent's first Pokémon
    getPokemonData(opponentTeam[opponentPokemonIndex]).then(pokemon => {
        opponentPokemon = pokemon;
        displayPokemon(opponentPokemon, false);
    });
}

function attack() {
    // Simple damage logic: reduce opponent's HP
    const damage = Math.floor(Math.random() * 10) + 1; // Random damage between 1 and 10
    const opponentHP = opponentPokemon.stats.find(stat => stat.name === 'hp');
    
    if (opponentHP) {
        opponentHP.base_stat -= damage;
        alert(`${playerPokemon.name} attacked ${opponentPokemon.name} for ${damage} damage!`);

        if (opponentHP.base_stat <= 0) {
            alert(`${opponentPokemon.name} fainted!`);
            // Switch to the next Pokémon if the opponent's Pokémon faints
            opponentPokemonIndex++;
            if (opponentPokemonIndex < opponentTeam.length) {
                getPokemonData(opponentTeam[opponentPokemonIndex]).then(pokemon => {
                    opponentPokemon = pokemon;
                    displayPokemon(opponentPokemon, false);
                });
            } else {
                alert('You won the battle!');
            }
        } else {
            displayPokemon(opponentPokemon, false);
        }
    }
}

function switchPokemon() {
    playerPokemonIndex++;
    if (playerPokemonIndex < playerTeam.length) {
        getPokemonData(playerTeam[playerPokemonIndex]).then(pokemon => {
            playerPokemon = pokemon;
            displayPokemon(playerPokemon, true);
        });
    } else {
        alert('No more Pokémon to switch!');
        playerPokemonIndex--;
    }
}

// Initialize battle
initializeBattle();

// Add event listeners for attack and switch
document.getElementById('attack-button').addEventListener('click', attack);
document.getElementById('switch-pokemon').addEventListener('click', switchPokemon);