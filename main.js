let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let roleScavenger = require('role.scavenger');
let roleRepairer = require('role.repairer');
let roleDefenseRepairer = require('role.defenseRepairer');

let checkHarvesterNum = require('checkNum.harvester');
let checkBuilderNum = require('checkNum.builder');
let checkUpgraderNum = require('checkNum.upgrader');
let checkRepairerNum = require('checkNum.repairer');
let checkDefenseRepairerNum = require('checkNum.defenseRepairer');

let towerLogic = require('logic.towers');
let spawnCreep = require('spawnCreep');

module.exports.loop = function () {
    
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    checkHarvesterNum();
    checkBuilderNum();
    checkUpgraderNum();
    checkRepairerNum();
    checkDefenseRepairerNum();
    
    spawnCreep();
    
    let srcNum = true;

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        creep.notifyWhenAttacked(true);
        
        //allocates creeps across 2 resources equaly
        if(srcNum) {
            creep.memory.src = 1;
            srcNum = false;
        } else {
            creep.memory.src = 0;
            srcNum = true;
        }
        
        //assigns roles
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'scavenger') {
            roleScavenger.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'defenseRepairer') {
            roleDefenseRepairer.run(creep);
        }
    }

    let towers = _.filter(Game.structures, (struc) => struc.structureType == STRUCTURE_TOWER);
    towers.forEach(tower => towerLogic(tower));
    
    console.log('-----------------------');

}