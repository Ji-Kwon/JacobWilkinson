class Pokemon{
    constructor(name, sprite, hp, atk, def, spA, spD, spe, types, moves){
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.hpfull = hp;
        this.atk = atk;
        this.def = def;
        this.spA = spA;
        this.spD = spD;
        this.spe = spe;
        this.types = types;
        this.moves = moves;
    }
}
const userInput = `
Gliscor @ Toxic Orb  
Ability: Poison Heal  
EVs: 252 HP / 252 Def / 4 SpD  
Impish Nature  
- Earthquake  
- Aerial Ace  
- Ice Fang 
- Fire Fang  

Starmie @ Life Orb  
Ability: Natural Cure  
EVs: 4 Def / 252 SpA / 252 Spe  
Timid Nature  
IVs: 0 Atk  
- Rapid Spin  
- Ice Beam  
- Hydro Pump  
- Thunderbolt  

Magnezone @ Choice Scarf  
Ability: Magnet Pull  
EVs: 4 Def / 252 SpA / 252 Spe  
Timid Nature  
IVs: 2 Atk / 30 SpA / 30 Spe  
- Thunder  
- Flash Cannon  
- Thunderbolt  
- Facade  

Mienshao @ Life Orb  
Ability: Regenerator  
EVs: 252 Atk / 4 SpD / 252 Spe  
- High Jump Kick  
- Stone Edge  
- U-turn  
- Fake Out  

Serperior @ Assault Vest  
Ability: Contrary  
EVs: 56 HP / 200 SpA / 252 Spe  
Timid Nature  
IVs: 2 Atk / 30 SpA / 30 Spe  
- Leaf Storm  
- Dragon Pulse  
- Grass Pledge  
- Facade  
`;


const oppInput = `Mamoswine @ Choice Band  
Ability: Snow Cloak  
EVs: 252 Atk / 4 SpD / 252 Spe  
Jolly Nature  
- Avalanche  
- Earthquake  
- Ice Shard  
- Icicle Crash  

Scizor @ Life Orb  
Ability: Technician  
EVs: 248 HP / 252 Atk / 8 SpD  
Adamant Nature  
- Bullet Punch  
- X-Scissor  
- Pursuit  
- Facade  

Garchomp  
Ability: Sand Veil  
EVs: 252 Atk / 4 SpD / 252 Spe  
Jolly Nature  
- Crunch  
- Dragon Claw  
- Facade  
- Fire Fang  

Ferrothorn @ Rocky Helmet  
Ability: Iron Barbs  
EVs: 248 HP / 252 Atk / 8 SpA  
Brave Nature  
- Energy Ball  
- Facade  
- Flash Cannon  
- Power Whip  

`;

let userPkm = [];
let oppPkm = [];

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


async function fetchUserPkm(){
    const pkmSections = userInput.trim().split("\n\n");
    for(const section of pkmSections){
        const lines = section.split("\n");
        const pokemonName = lines[0].split(' ')[0].toLowerCase();
        const move = lines.filter(line => line.startsWith('-')).map(line => line.slice(2).toLowerCase().replace(/(?<=\w) (?=\w)/g, '-').trim());

        try {
            const pkmResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const pkmData = await pkmResponse.json();
            if(!pkmResponse.ok) {
                throw new Error(`Could not fetch pokemon: ${pokemonName}`);
            }
            
            //get data
            const name = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1);
            const sprite = pkmData.sprites.front_default;
            const hp = pkmData.stats[0].base_stat;
            const atk = pkmData.stats[1].base_stat;
            const def = pkmData.stats[2].base_stat;
            const spA = pkmData.stats[3].base_stat;
            const spD = pkmData.stats[4].base_stat;
            const spe = pkmData.stats[5].base_stat;
            const types = pkmData.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1));
          
            const movePromises = move.map(async (moveName) => {
                const moveResponse = await fetch(`https://pokeapi.co/api/v2/move/${moveName}`);
                if(!moveResponse.ok) {
                    throw new Error(`Could not fetch move: ${moveName}`);
                }

                const moveData = await moveResponse.json();
                return [
                    moveData.name.charAt(0).toUpperCase() + moveData.name.slice(1),
                    moveData.type.name.charAt(0).toUpperCase() + moveData.type.name.slice(1),
                    moveData.power,
                    moveData.accuracy
                ];
            });

            const moves = await Promise.all(movePromises);

            const pokemon = new Pokemon(name, sprite, hp, atk, def, spA, spD, spe, types, moves);
            userPkm.push(pokemon);
        }
        catch(error) {
            console.error(error);
        }
    }
}
fetchUserPkm();
console.log(userPkm);

async function fetchOpponentPkm(){
    const pkmSections = oppInput.trim().split("\n\n");
    for(const section of pkmSections){
        const lines = section.split("\n");
        const pokemonName = lines[0].split(' ')[0].toLowerCase();
        const move = lines.filter(line => line.startsWith('-')).map(line => line.slice(2).toLowerCase().replace(/(?<=\w) (?=\w)/g, '-').trim());

        try {
            const pkmResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const pkmData = await pkmResponse.json();
            if(!pkmResponse.ok) {
                throw new Error(`Could not fetch pokemon: ${pokemonName}`);
            }
            
            //get data
            const name = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1);
            const sprite = pkmData.sprites.front_default;
            const hp = pkmData.stats[0].base_stat;
            const atk = pkmData.stats[1].base_stat;
            const def = pkmData.stats[2].base_stat;
            const spA = pkmData.stats[3].base_stat;
            const spD = pkmData.stats[4].base_stat;
            const spe = pkmData.stats[5].base_stat;
            const types = pkmData.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1));
          
            const movePromises = move.map(async (moveName) => {
                const moveResponse = await fetch(`https://pokeapi.co/api/v2/move/${moveName}`);
                if(!moveResponse.ok) {
                    throw new Error(`Could not fetch move: ${moveName}`);
                }

                const moveData = await moveResponse.json();
                return [
                    moveData.name.charAt(0).toUpperCase() + moveData.name.slice(1),
                    moveData.type.name.charAt(0).toUpperCase() + moveData.type.name.slice(1),
                    moveData.power,
                    moveData.accuracy
                ];
            });

            const moves = await Promise.all(movePromises);
            console.log(moves);
            const pokemon = new Pokemon(name, sprite, hp, atk, def, spA, spD, spe, types, moves);
            oppPkm.push(pokemon);
        }
        catch(error) {
            console.error(error);
        }
    }
}
fetchOpponentPkm();
console.log(oppPkm);

function spawnPkm(bool){
    let pkm1 = userPkm[Math.floor(Math.random()*userPkm.length)];
    let pkm2 = oppPkm[Math.floor(Math.random()*oppPkm.length)];
    if(bool){
        for(i=0; i<4; i++){
            document.getElementById('move'+i).value = pkm1.moves[i][0];
            document.getElementById('move'+i).value = pkm2.moves[i][0];
        }
    }return pkm1, pkm2
}

let user = spawnPkm(true);
sprite1 = document.createElement('img');
sprite1.src = user.sprite;
document.getElementById('user').appencChild(sprite1);
document.getElementById('hpu').innerHTML = `<p>HP: ${user.hp} / ${user.hpfull}</p>`;

let opponent = spawnPkm(true);
sprite2 = document.createElement('img');
sprite2.src = opponent.sprite;
document.getElementById('opponent').appencChild(sprite2);
document.getElementById('hpo').innerHTML = `<p>HP: ${opponent.hp} / ${opponent.hpfull}</p>`;

for(i=0; i<4; i++){
    let btn = document.getElementById('move'+i);
    let move = p1.moves[i];
    function addHandler(btn, move, pk1, pk2){
        btn.addEventListener('click', function(e){
            attack(move, p1, p2, 'hpo', '');
            setTimeout(attack,2000, p1.moves[Math.floor(Math.random()*3)], p2, p1, 'hpu', 'Foe ')
        });
    }
    addHandler(btn, move, p1, p2);
}


function attack(move, attacker, receiver, hp, owner){
    document.getElementById('comment').innerHTML = `<p> ${owner} ${attacker.name} used ${move[0]}! </p>`;
    if(Math.random() < move[4]){
        let rtype1 = typeMatch[receiver.type[0]];
        let rtype2 = typeMatch[receiver.type[1]];
        let mtype = move[1];
        let scale = 1;
    }
}


function switchPkm(){


}
