var roleRepairer = {

    run: function(creep) {

        if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
            creep.memory.repairing = true;
            creep.say('⚡ repair');
        }

        if(creep.memory.repairing) {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: structure => structure.structureType == STRUCTURE_ROAD
            });
        
            targets.sort((a,b) => a.hits - b.hits);
            
            console.log
 
            if(targets.length > 0) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        } 
        else {
            let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[creep.memory.src]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.src], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleRepairer;