let creepTypes = require('creepTypes');

function spawnCreep() {
    let spawn = Game.spawns['Spawn1'];
    
    let extensions = spawn.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_EXTENSION
    });
    let extensionEnergy = extensions.reduce((acc, curr) => acc + curr.store[RESOURCE_ENERGY], 0);
    let totalEnergyStored = spawn.store[RESOURCE_ENERGY] + extensionEnergy;
    console.log(totalEnergyStored);
    
    if(spawn.spawning) {
        let spawningCreep = Game.creeps[spawn.spawning.name];
        spawn.room.visual.text(
        '🛠️' + spawningCreep.memory.role,
        Game.spawns['Spawn1'].pos.x + 1,
        Game.spawns['Spawn1'].pos.y,
        {align: 'left', opacity: 0.8});
        
        return;
        
    } else if(totalEnergyStored >= creepTypes[Memory.build[0]].cost){
        let type = Memory.build.shift();
        
        let newName = type + Game.time;
        console.log('Spawning new ' + type + ': ' + newName);
        spawn.spawnCreep(creepTypes[type].body, newName,
        {memory: {role: type, src: Math.round(Math.random())}});
    }
}

module.exports = spawnCreep;