window.onload = () => {
   document.querySelector("#button").addEventListener("click" , () =>  {
    document.querySelector("#exquizeme").innerHTML = generateExcuse()
   })
}

var generateExcuse = () => {
    let who = ["Rick and Morty", "Covid", "The big sad", "Global Warming", "My cat", "A Demagorgon", "Lord Bolton", "My snail"]
    let action = ["ate", "peed", "licked", "broke", "teleported", "drooled"]
    let what = ["my homework", "my dignity", "my wallet", "my boyfriend", "my will to live"]
    let when = ["before class", "right as I was leaving home", "when I was coming to work", "while I was washing my teeth", "while i was cleaning the house"]
    let whoIndex = Math.floor(Math.random() * who.length)
    let actionIndex = Math.floor(Math.random() * action.length)
    let whatIndex = Math.floor(Math.random() * what.length)
    let whenIndex = Math.floor(Math.random() * when.length)
    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`
}