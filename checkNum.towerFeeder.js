let creepTypes = require('creepTypes');

function checkTowerFeederNum() {
    let towerFeeders = _.filter(Game.creeps, (creep) => creep.memory.role == 'towerFeeder');
    console.log('TowerFeeders: ' + towerFeeders.length);

    if(towerFeeders.length + Memory.build.filter(c => c == 'towerFeeder').length < creepTypes['towerFeeder'].num) {
        Memory.build.push('towerFeeder');
        console.log('Added TowerFeeder to queue!');
    }
}

module.exports = checkTowerFeederNum;