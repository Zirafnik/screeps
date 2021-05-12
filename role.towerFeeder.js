var roleTowerFeeder = {

    run: function(creep) {

        if(creep.memory.feeding && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.feeding = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.feeding && creep.store.getFreeCapacity() == 0) {
            creep.memory.feeding = true;
            creep.say('⚡ repair');
        }

        if(creep.memory.feeding) {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: structure => structure.structureType == STRUCTURE_TOWER
            });
            
 
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        } 
        else {
            let storage = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER ||
                        structure.structureType == STRUCTURE_STORAGE) &&
                        structure.store.getUsedCapacity() > 0;
            }});

            if(creep.withdraw(storage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleTowerFeeder;