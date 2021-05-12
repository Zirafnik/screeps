var roleScavenger = {

    run: function(creep) {
        if(creep.memory.transfering && creep.store[RESOURCE_ENERGY] == 0) {
                creep.memory.transfering = false;
                creep.say('🔄 scavenge');
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
                        structure.structureType == STRUCTURE_TOWER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }});
        
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        } else {
            let ruins = creep.room.find(FIND_RUINS, {
                filter: (ruin) => ruin.store[RESOURCE_ENERGY] > 0
            });
            if(creep.withdraw(ruins[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(ruins[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleScavenger;