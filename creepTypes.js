let creepTypes = {
    'harvester': {body: [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 5},
    'builder': {body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 2},
    'upgrader': {body: [WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 0},
    'repairer': {body: [WORK, CARRY, CARRY, MOVE, MOVE], num: 4},
    'defenseRepairer': {body: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE], num: 1},
    'towerFeeder': {body: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE], num: 0},
    'defenseAttacker': {body: [ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE], num: 0},
    'toughAttacker': {body: [], num: 0},
    'defenseRanged': {body: [], num: 0}
}

module.exports = creepTypes;