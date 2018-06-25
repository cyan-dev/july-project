let money = 0

mainDiv = document.getElementById('maindiv')

let enemy = document.createElement('img')
enemy.src = './media/img/murloc.gif'
enemy.alt = 'murloc des profondeurs'

mainDiv.appendChild(enemy)

enemy.addEventListener('click', () => {
    money += 1
    console.log('money : ' + money)
})

