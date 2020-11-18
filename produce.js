 var produce = [
  'bread',
  'ham',
  'cheese',
  'tomatoes',
  'lettuce',
  'onion'
];

var display

var listCode = ""

var unorderedList = "<ul>" + listCode + "</ul>"

var i

function decItems (){

For (i=0; i < produce.length; i++) {

            Var listItem = "<li>" + i + ": " + produce[i] + "</li>";

listCode+=listItem;

  }

return listCode;

}

function updateCode (codeType){

  listCode = ""

  if (codeType == 'Declarative') {

      decItems()

    } if (codeType == 'Imperative') {

      impItems()

    }

    else {

      console.log('What is your codeType?!')

    }

    unorderedList = "<p>"+ codeType + "</p><ul>" + listCode + "</ul>";

    return display.innerHTML = unorderedList;

}

function impItems (){

  produce.forEach((item, i) => {

   var listItem = "<li>" + i + ": "+ item + "</li>";

   listCode+=listItem;

   return listCode;

 });

}

console.log(produce);

document.getElementById("display").innerHTML = display;

document.getElementById('decBTN').addEventListener('click',()=>{updateDec(); console.log("clicked")})
document.getElementById('impBTN').addEventListener('click',()=>{updateImp(); console.log("clicked")})

console.log(produce, listCode)
