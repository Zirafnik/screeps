var roleHarvester = {

    run: function(creep) {
        if(creep.memory.transfering && creep.store[RESOURCE_ENERGY] == 0) {
                creep.memory.transfering = false;
                creep.say('🔄 harvest');
        }
        if(!creep.memory.transfering && creep.store.getFreeCapacity() == 0) {
            creep.memory.transfering = true;
            creep.say('🚧 transfer');
        }

        if(creep.memory.transfering) {
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_CONTAINER ||
                        structure.structureType == STRUCTURE_STORAGE &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
            }});
            
            let arr = [];
            targets.forEach(struc => {
                arr.push(struc.structureType);
            });
            console.log(arr);
            
            //make extension priority transfer
            let index = 0;
            if(arr.includes('extension')) {
                index = arr.indexOf('extension');
            } else {
                index = 0;
            }
        
            if(targets.length > 0) {
                if(creep.transfer(targets[index], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[index], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        } else {
            let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[creep.memory.src]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.src], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleHarvester;