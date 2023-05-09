const health = ['will live a long life', 'will be sick soon, take care of your health', 'should stop alcohol']
const love = ['will find love very soon', 'will finish your days alone', 'have a secret admirer']
const money = ['will win lottery', 'will find a bill on the ground today', 'are broke, sorry..']

const msg = () => {

    let healthmsg = health[Math.floor(Math.random() * health.length)];
    let lovemsg = love[Math.floor(Math.random() * love.length)];
    let moneymsg = money[Math.floor(Math.random() * money.length)];

    return `Hi! Here is your horoscope for today: You ${healthmsg}. You ${lovemsg}. And you ${moneymsg}.`

}

const clic =() => {
    document.getElementById("text").innerHTML = msg();
}

  console.log(msg());