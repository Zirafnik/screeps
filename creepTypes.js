let creepTypes = {
    'harvester': {body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 5},
    'builder': {body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 2},
    'upgrader': {body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 1},
    'repairer': {body: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE], num: 2},
    'defenseRepairer': {body: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE], num: 1}
}

module.exports = creepTypes;