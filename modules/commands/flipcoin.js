const data = {
    name: 'coinflip',
    description: 'Heads or Tails?'
}
async function run({interaction}){
    try{
        await interaction.reply({content: Math.random() > .5 ? 'Heads' : 'Tails'})
    }catch(err){
        console.log(err);
    }
}
module.exports = {data, run}