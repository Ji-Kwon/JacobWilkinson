class Pokemon{
    constructor(name, sprite, hp, moves, types){
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.fullhp = hp;
        this.moves = moves;
        this.types = types;
    }
}

// Example input string
const pokemonString = `
Gliscor @ Toxic Orb  
Ability: Poison Heal  
Tera Type: Ground  
EVs: 252 HP / 252 Def / 4 SpD  
Impish Nature  
- Earthquake  
- Acrobatics  
- Ice Fang  
- Fire Fang  

Piplup @ Eviolite  
Ability: Competitive  
Tera Type: Water  
EVs: 252 SpA / 252 Spe  
Modest Nature  
- Blizzard  
- Hydro Pump  
- Drill Peck  
- Facade  

Darkrai @ Life Orb  
Ability: Bad Dreams  
Tera Type: Dark  
EVs: 4 Atk / 252 SpA / 252 Spe  
Hasty Nature  
- Brick Break  
- Dark Pulse  
- Focus Blast  
- Drain Punch  

Dragonite @ Choice Band  
Ability: Multiscale  
Tera Type: Dragon  
EVs: 252 Atk / 4 SpA / 252 Spe  
Hasty Nature  
- Aqua Tail  
- Body Slam  
- Brick Break  
- Blizzard  
`;

// Fetch data based on the input string
getPokemonDataFromString(pokemonString);

let pkmList = [];

let typeMatch = {
    'normal': [['ghost'], ['fighting'], ['rock', 'steel']],
    'fire': [[], ['water', 'ground', 'rock'], ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy']],
    'water': [[], ['electric', 'grass'], ['fire', 'water', 'ice', 'steel']],
    'electric': [['ground'], ['ground'], ['electric', 'flying', 'steel']],
    'grass': [[], ['fire', 'ice', 'poison', 'flying', 'bug'], ['water', 'electric', 'grass', 'ground']],
    'ice': [[], ['fire', 'fighting', 'rock', 'steel'], ['ice']],
    'fighting': [['ghost'], ['flying', 'psychic', 'fairy'], ['bug', 'rock', 'dark']],
    'poison': [['steel'], ['ground', 'psychic'], ['grass', 'fighting', 'poison', 'bug', 'fairy']],
    'ground': [['flying'], ['water', 'grass', 'ice'], ['poison', 'rock']],
    'flying': [['ground'], ['rock', 'electric', 'ice'], ['grass', 'bug', 'fighting']],
    'psychic': [['dark'], ['bug', 'ghost', 'dark'], ['fighting', 'psychic']],
    'bug': [[], ['fire', 'flying', 'rock'], ['grass', 'fighting', 'ground']],
    'rock': [[], ['water', 'grass', 'fighting', 'ground', 'steel'], ['normal', 'fire', 'poison', 'flying']],
    'ghost': [['normal'], ['ghost', 'dark'], ['poison', 'bug']],
    'dragon': [['fairy'], ['ice', 'dragon', 'fairy'], ['fire', 'water', 'electric', 'grass']],
    'dark': [[], ['fighting', 'bug', 'fairy'], ['ghost', 'dark']],
    'steel': [[], ['fire', 'fighting', 'ground'], ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy']],
    'fairy': [[], ['poison', 'steel'], ['fighting', 'bug', 'dark']],
};

async function getPokemonDataFromString(pokemonString) {
    const pokemonSections = pokemonString.trim().split('\n\n');

    for (const section of pokemonSections) {
        const lines = section.split('\n');
        const pokemonName = lines[0].split(' ')[0].toLowerCase();
        const moveNames = lines.filter(line => line.startsWith('-')).map(line => line.slice(2).toLowerCase().replace(/(?<=\w) (?=\w)/g, '-'));

        try {
            const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const pokemonData = await pokemonResponse.json();
            
            const name = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
            const sprite = pokemonData.sprites.front_default;
            const hp = pokemonData.stats[0].base_stat;
            const types = pokemonData.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1));
            //console.log(name, sprite, hp, types);

            const movePromises = moveNames.map(async (moveName) => {
                const moveResponse = await fetch(`https://pokeapi.co/api/v2/move/${moveName}`);
                const moveDetails = await moveResponse.json();
                return [
                    moveDetails.name.charAt(0).toUpperCase() + moveDetails.name.slice(1),
                    moveDetails.type.name.charAt(0).toUpperCase() + moveDetails.type.name.slice(1),
                    moveDetails.power,
                    moveDetails.accuracy
                ];
            });

            const moves = await Promise.all(movePromises);
            //console.log(moves);
            const pokemonEntry = new Pokemon();
            pokemonEntry.name = name;
            pokemonEntry.sprite = sprite;
            pokemonEntry.hp = hp;
            pokemonEntry.fullhp =hp;
            pokemonEntry.types = types;
            pokemonEntry.moves = moves;
            pkmList.push(pokemonEntry);
        } catch (error) {
            console.error(`Error fetching data for ${pokemonName}:`, error);
        }
    }
}
//console.log(pkmList);
/*function spawn(bool){
    let p = pkmList[Math.floor(Math.random()*pkmList.length)];
    let pkm = new Pokemon(p[0], p[1], p[2], p[3], p[4]);

    if (bool){
        for(i=0; i<4; i++){
            document.getElementById('move'+(i+1)).value = pkm.moves[i] ? pkm.moves[i][0]: 'N/A';
        }
    }
    return pkm;
}*/
function spawn(bool) {
    // Get a random Pokemon instance from the list
    let pkm = pkmList[Math.floor(Math.random() * pkmList.length)];

    if (pkm) { // Check if a Pokemon instance was actually retrieved
        if (bool) {
            for (let i = 0; i < 4; i++) {
                // Use pkm.moves[i] to access the moves correctly
                document.getElementById('move' + i).value = pkm.moves[i] ? pkm.moves[i][0] : 'N/A';
            }
        }
        return pkm; // Return the Pokemon instance
    } else {
        console.error("No Pokemon found in the list.");
    }
}

// Ensure this function is defined outside the loop
function addHandler(btn, move, user, opponent) {
    if (move) { // Ensure move is defined
        btn.addEventListener('click', function () {
            attack(move, user, opponent, 'hpo', ''); // Adjust HP IDs if needed
            setTimeout(() => {
                if (opponent.hp > 0) {
                    attack(opponent.moves[Math.floor(Math.random() * 4)], opponent, user, 'hpu', 'Foe ');
                }
            }, 2000);
        });
    } else {
        console.error("Move is not defined for the button.");
    }
}

// Initialize function
async function initialize() {
    await getPokemonDataFromString(pokemonString); // Wait until data is fetched

    if (pkmList.length > 0) {
        let user = spawn(true);
        sprite1 = document.createElement('img');
        sprite1.src = user.sprite;
        document.getElementById('user').appendChild(sprite1);
        document.getElementById('hpu').innerHTML = `<p>HP: ${user.hp} / ${user.fullhp}</p>`;

        let opponent = spawn(true);
        sprite2 = document.createElement('img');
        sprite2.src = opponent.sprite;
        document.getElementById('opponent').appendChild(sprite2);
        document.getElementById('hpo').innerHTML = `<p>HP: ${opponent.hp}/${opponent.fullhp}</p>`;

        // Ensure you're iterating through moves correctly
        for (let i = 0; i < 4; i++) {
            let btn = document.getElementById('move' + (i));
            let move = user.moves[i];
            addHandler(btn, move, user, opponent); // Call addHandler
        }
    } else {
        console.error("No Pokémon found in the list.");
    }
}

// Call the initialize function to start everything
initialize();

/*let user = spawn(true);
sprite1 = document.createElement('img');
sprite1.src = user.sprite;
document.getElementById('user').appendChild(sprite1);
document.getElementById('hpu').innerHTML = `<p>HP: ${user.hp} / ${user.fullhp}</p>`;

let opponent = spawn(true);
sprite2 = document.createElement('img');
sprite2.src = opponent.sprite;
document.getElementById('opponent').appendChild(sprite2);
document.getElementById('hpo').innerHTML = `<p>HP: ${opponent.hp}/${opponent.fullhp}</p>`;

for(i=0; i<4; i++){
    let btn = document.getElementById('move'+(i+1));
    let move = user.moves[i];
    function addHandler(btn, move, user, opponent){
        btn.addEventListener('click', function(){
            attack(move, user, opponent, 'hpo', '');
            setTimeout(() => {
                if (opponent.hp > 0) {
                    attack(opponent.moves[Math.floor(Math.random() * 4)], opponent, user, 'hpu', 'Foe ');
                }
            }, 2000);
        });
    }
    addHandler(btn, move, user, opponent);
}*/
/*async function initialize() {
    await getPokemonDataFromString(pokemonString); // Wait until data is fetched

    if (pkmList.length > 0) {
        let user = spawn(true);
        sprite1 = document.createElement('img');
        sprite1.src = user.sprite;
        document.getElementById('user').appendChild(sprite1);
        document.getElementById('hpu').innerHTML = `<p>HP: ${user.hp} / ${user.fullhp}</p>`;

        let opponent = spawn(true);
        sprite2 = document.createElement('img');
        sprite2.src = opponent.sprite;
        document.getElementById('opponent').appendChild(sprite2);
        document.getElementById('hpo').innerHTML = `<p>HP: ${opponent.hp}/${opponent.fullhp}</p>`;

        for (let i = 0; i < 4; i++) {
            let btn = document.getElementById('move' + i);
            let move = user.moves[i];
            function addHandler(btn, move, user, opponent){
                btn.addEventListener('click', function(e){
                    attack(move, user, opponent, 'hp2', '');
                    setTimeout(attack,2000, opponent.moves[Math.floor(Math.random()*3)], opponent, user, 'hp1', 'Foe ');
                });
            }
        }
    } else {
        console.error("No Pokémon found in the list.");
    }
}

// Call the initialize function to start everything
initialize();
*/
function attack(move, attacker, receiver, hp, owner){
    console.log(receiver.types)
    document.getElementById('comment').innerHTML = `<p>${owner} ${attacker.name} used ${move[0]}</p>`;
    if(Math.random() < move[3]/100){
        let power = move[2] += Math.floor(Math.random()*10);
        let rtypes = receiver.types;
        let mtype = move[1];
        let scale = 1;

        // Loop through each type of the receiver to calculate scale
        for (let rtype of rtypes) {
            let typeEffectiveness = typeMatch[rtype];

            // Check if the move type matches any type of the receiver
            if (typeEffectiveness) {
                // Check immunities (scale = 0)
                if (typeEffectiveness[0].includes(mtype)) {
                    scale = 0; // No effect
                    setTimeout(() => {
                        document.getElementById('comment').innerHTML = '<p>It had no effect!</p>';
                    }, 1000);
                    break; // Exit the loop since there's no effect
                }

                // Check for super effective hits (scale = 2)
                if (typeEffectiveness[1].includes(mtype)) {
                    scale *= 2; // Double damage
                    setTimeout(() => {
                        document.getElementById('comment').innerHTML = '<p>It was super effective!</p>';
                    }, 1000);
                }

                // Check for not very effective hits (scale = 0.5)
                if (typeEffectiveness[2].includes(mtype)) {
                    scale *= 0.5; // Half damage
                    setTimeout(() => {
                        document.getElementById('comment').innerHTML = '<p>It was not very effective!</p>';
                    }, 1000);
                }
            }
        }
        power *= scale;
        receiver.hp = Math.max(0, receiver.hp -Math.floor(power));
        document.getElementById(hp).innerHTML = `<p>HP: ${receiver.hp}/${receiver.fullhp}</p>`;
    }
    else{
        setTimeout(() => {
            document.getElementById('comment').innerHTML = '<p>Attack missed!</p>';
        }, 1000);
    }
    checkWinner(hp);
}

//function swap(){

//}

function checkWinner(hp){
    let f = (user.hp <=0) ? user : (opponent.hp<=0) ? opponent : false;
    if(f!=false){
        alert('Game Over: ' + f.name + ' fainted!');
        document.getElementById(hp).innerHTML = `<p>HP: 0/${f.fullhp}</p>`;
        setTimeout(() =>{
            location.reload();
        },1500)
    }

}

