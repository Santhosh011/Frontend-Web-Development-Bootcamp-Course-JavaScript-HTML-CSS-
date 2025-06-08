const myObj = [
  {
    "Anime Name" : "Attack On Titan",
    "Rating" : 10
  },
  {
    "Anime Name" : "My Hero Academia",
    "Rating" : 7
  },
  {
    "Anime Name" : "Tokyo Goul",
    "Rating" : 8
  },
];
function fun() {
  document.getElementById("output").innerText = "Value has changed";
}
function addConstData(){
  const container = document.getElementById("container");
  
  for(let i =0; i<myObj.length; i++){
    let pElem = document.createElement("p");
    let p = myObj[i]["Anime Name"] +", Should You Watch? :";
    if(myObj[i]["Rating"] === 10){
      p += "Absolute Banger";
    }
    else if(myObj[i]["Rating"] === 8){
      p += "Okish";
    }
    else if(myObj[i]["Rating"] === 7){
      p += "Blehh if you have time Duhhh";
    }
    else{
      p+= "Your Wish";
    }
    pElem.innerText = p;
    container.appendChild(pElem);
  }
}
