
let movFolks = [
            {
              name:"Bruce Willis",
              pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bruce_Willis_by_Gage_Skidmore_3.jpg/220px-Bruce_Willis_by_Gage_Skidmore_3.jpg",
              bestFilm:"Armageddon",
              wonOscar: false,
            },
            {
              name:"Denzel Washington",
              pic:"https://pmcvariety.files.wordpress.com/2019/03/denzel-washington-little-things.jpg?w=1000",
              bestFilm:"Training Day",
              wonOscar: true,
            },
            {
              name:"Bradley Cooper",
              pic:"https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2019-07%2F262aa600-ad57-11e9-bbef-b33b8bdb7281",
              bestFilm:"A Star is Born",
              wonOscar:false,
            },
            {
              name:"Resse Witherspoon",
              pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Reese_Witherspoon_at_TIFF_2014.jpg/440px-Reese_Witherspoon_at_TIFF_2014.jpg",
              bestFilm:"Sweet Home Alabama",
              wonOscar:true,
            },
            {
              name:"Anne Hathaway",
              pic:"https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2019-05/1280_anne_hathaway.jpg?itok=Db1cvFKB&h=adc4fd1c",
              bestFilm:"The Devil Wears Prada",
              wonOscar:true,
            },
            {
              name:"Ben Affleck",
              pic:"https://s2.gossipcop.com/up/2019/07/Ben-Affleck-Working-Out-574x395.jpg",
              bestFilm:"Reindeer Games",
              wonOscar:false,
            }
];


const printToDom = (stringToPrint,divId) =>{
const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};


const movFolksBuilder = () =>{
let actDiv = document.createElement('div');
actDiv.id = "actors";
document.body.appendChild(actDiv);  
let actString = " "; 
movFolks.forEach((actor) => { 
  // console.log(actor);
actString += `<div class="card" style="width: 18rem;">`;
actString += `<img class="card-img-top" src="${actor.pic}" alt="">`;
actString +=  `<div class="card-body">`;
actString +=  `<h5 class="card-title">${actor.name}</h5>`;
actString +=  `<p class="card-text">Best Film: ${actor.bestFilm}</p>`;
actString +=  `<p></p>`;
actString +=  `</div>`;
actString +=  `</div>`;
})
printToDom(actString,'actors');
};


const theyWon = () =>{
    let winners = movFolks.filter(movFolk => movFolk.wonOscar == true);
    winners.forEach((winner) =>{
      console.log(winner);
    winners += `<div class="card" style="width: 18rem;">`;
    winners += `<img src="${winner.pic}" class="card-img-top" alt="...">`;
    winners += `<div class="card-body">`;
    winners += `<h5 class="card-title">${winner.name}</h5>`;
    winners += `<p class="card-text"><p></p>`;
    winners += `<p class="card-text">Best Film ${winner.bestFilm}`;
    winners += `</div>`;
    winners += `</div>`;
 });
 printToDom(winners,'here');
}



const win = () => {
  let winnersh1 = document.createElement('h1');
  winnersh1.id ="here";
  winnersh1.style.innerHTML = "WINNERS";
  document.body.appendChild(winnersh1);
  $("#won").on('click', theyWon);
  $("#actors").hide();
}
win();


export {movFolksBuilder};