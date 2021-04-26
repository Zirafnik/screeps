let creepTypes = {
    'harvester': {body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], cost: 550},
    'builder': {body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], cost: 550},
    'upgrader': {body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], cost: 550},
    'repairer': {body: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE], cost: 350},
    'defenseRepairer': {body: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE], cost: 350}
}

module.exports = creepTypes;