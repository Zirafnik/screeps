function checkHarvesterNum() {
    let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length + Memory.build.filter(c => c == 'harvester').length < 3) {
        Memory.build.push('harvester');
        console.log('Added Harvester to queue!');
    }
}

module.exports = checkHarvesterNum;