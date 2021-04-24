function checkBuilderNum() {
    let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    if(builders.length + Memory.build.filter(c => c == 'builder').length < 4) {
        Memory.build.push('builder');
        console.log('Added Builder to queue!');
    }
}

module.exports = checkBuilderNum;