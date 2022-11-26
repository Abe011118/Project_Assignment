//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
  //inputValue is the variable that contains the search string
  // const inputValue = document.getElementById("search-input").value;

  const inputValue = "What";// enable for test only

  function searchFor(arr, query) {
      function condition(element) {
          return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
      return arr.filter(condition);
  }

  const searchArr = (arr, query) => arr.filter(element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  return searchArr(newsList, inputValue);
}

let flag;
export function sort(type) {
  if (type == "ascending") {
    //Write your code here for sorting (ascending)

    newsList.sort();
    flag = true;
  } else {
    //Write your code here for sorting (descending)

    if(flag == true) {
      newsList.reverse();
      flag = false;
    }
  }
  // console.log(newsList);
  return newsList;
}









  // search a piece of string or a character from a array elements
  // let searchArrayWStr = [];
  // for (let i = 0; i < newsList.length; i++) {
    
  //   if(newsList[i].includes(inputValue) == true) {// check array with the search string
  //     // console.log(`Array position `+ i + " contain the String " + inputValue);
  //     searchArrayWStr.push(newsList[i]);
  //   }
  // }
  // return searchArrayWStr;