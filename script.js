const teamMembers = [
    {
        name: 'Son Goku',
        position: 'Fighter',
        skills: ['Fighting', 'Kamehameha', 'Spirit Bomb', 'Ultra Instinct', 'Offense', 'Transformations'],
        strengths: 'Physical Strength', 'Ki Sensing',
        weaknesses: 'Defense', 'Overconfidence',
        biography: 'Goku is considered one of the greatest fighters in anime history and has multiple attacks and transformations to his advantage'
    },
 
        {
            name: 'Vegeta',
            position: 'Fighter',
            skills: ['Fighting', 'Galick Gun',  'Final Flash', 'Ultra Ego' 'Offense', 'Transfromations'],
            strengths: 'Physical Strength', 'Ki Sensing',
            weaknesses: 'Defense', 'Overconfidence',
            biography: 'Vegeta is the prince of all Sayians and he is Gokus Rival and has multiple attacks and transformations to his advantage'
        },

        {
            name: 'Sonic',
            position: 'Runner',
            skills: ['Speed', 'Jumping', 'Agility', 'Transfromations'],
            strengths: 'Speed', 'Agility',
            weaknesses: 'Cant Swim', 'Overconfidence',
            biography: 'Sonic is the fastest thing alive and has been compared to the Flash multiple times and has multiple attacks and transformations to his advantage'
        },

        {
            name: 'Mario',
            position: 'Defense',
            skills: ['Defense', 'Jumping', 'Agility', 'Power-Ups'],
            strengths: 'Defense', 'Offense',
            weaknesses: 'Short', 'can only take one hit if he does not have a Power Up',
            biography: 'Mario is an Italian and is also the hero of the Mushroom Kingdom. He has multiple power ups he could use to his advantage and can become very powerful.'
        },

        {
            name: 'MewTwo',
            position: 'Psychic',
            skills: ['Telekinesis', 'Psystrike', 'Mega Evolution'],
            strengths: 'Attack', 'Sp.Atk',
            weaknesses: 'Defense', 'Sp.Def',
            biography: 'Mewtwo is one of the first Legendary Pokemon. he is also one the most powerful, with Mega Evolution he can get even more powerful'
        },

        {
            name: 'Charizard',
            position: 'Fighter',
            skills: ['Flamethrower', 'Flare Blitz', 'Air Slash', 'Dragon Breath', 'Mega Evolution', 'Gigantamax Form'],
            strengths: 'Attack', 'Sp.Atk',
            weaknesses: 'Defense', 'Sp.Def',
            biography: 'Charizard is one of the first Starter Pokemon. he is also one the most powerful, with Mega Evolution, and a Gigantamax Form he can get even more powerful'
        },

        {
            name: 'Darth Vader',
            position: 'Sith Lord',
            skills: ['Force Choke', 'Saber Throw', 'Form V of LightSaber fighting', 'telekinesis'],
            strengths: 'Strength', 'Intimidation', 'Force Abilities',
            weaknesses: 'Defense', 'Agility',
            biography: 'Darth Vader is a Sith Lord who has conquered multiplr planets and killed many Jedi for the Galactic Empire'
        },
]

function generateTeamCards (){
    const teamCardsContainer = document.getElementById('teamCards')

teamMembers.forEach(member => {
const card = document.createElement('div')
card.classList.add('col-md-4')

let backgroundColor

switch(member.position){
    case: 'Fighter':
    backgroundColor = 'orange', 'dark blue',
    break
    case: 'Runner':
    backgroundColor = 'light blue',
    break
    case: 'Psychic':
    backgroundColor = 'purple',
    break
    case: 'Sith Lord':
    backgroundColor = 'red',
    break
}




card.style.backgroundColor = backgroundColor



const skillsList = member.skills.map(skill => `<li>`${skill} `</skill>`).join('')
card.innerHTML = `
   <div class = "card">
   <div class = "card-header"> ${member.name} </div>
   <div class = "card-body">
   <P><strong> Position: </strong> ${member.position} </p>
      <ul>
      ${member.skills}
      </ul>
      <P><strong> Strengths: </strong> ${member.strengths} </p>
      <P><strong> Weaknesses: </strong> ${member.weaknesses} </p>
      <P><strong> Biography: </strong> ${member.biography} </p>
   </div>
   </div>
`

teamCardsContainer.appendChild(card)
})

}
window.onload = generateTeamCards()