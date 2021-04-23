let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let roleScavenger = require('role.scavenger');

let checkHarvesterNum = require('spawn.harvester');
let checkBuilderNum = require('spawn.builder');
let checkUpgraderNum = require('spawn.upgrader');

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
    
    spawnCreep();
    
    let srcNum = true;

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        
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
    }
    
    towerLogic(Game.getObjectById(''));
    
    console.log('-----------------------');

}