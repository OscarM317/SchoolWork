 var produce = [
  'bread',
  'ham',
  'cheese',
];
var detailedProduceList = {
  bread :
  {
  produceName: 'bread',
  type: 'grain',
  shape: 'rectangle',
  color: 'brown',
  flavor: 'spicy'
  },
  ham :
  {
  produceName: 'ham',
  type: 'meat',
  shape: 'circle',
  color: 'pink',
  flavor: 'sour'
  },
  cheese :
  {
  produceName: 'cheese',
  type: 'dairy',
  shape: 'square',
  color: 'yellow',
  flavor: 'sweet'
  }
}
var loopDisplay = document.getElementById("loopDisplay");
var listCode = "";
var unorderedList = "<ul>"+listCode+"</ul>";
var i;

function decItems() {
for (i=0; i < produce.length; i++) {
            var listItem = "<li>"+i+": "+produce[i]+"</li>";
            listCode+=listItem;
  }
return listCode;
}

function impItems() {
  produce.forEach((item, i) => {
   var listItem = "<li>"+i+": "+item+"</li>";
   listCode+=listItem;
   return listCode;
 });
}

function updateLoopDisplay(codeType) {
  listCode = ""
  if (codeType == 'Declarative') {
      decItems()
    } if (codeType == 'Imperative') {
      impItems()
    }
    else {
      console.log('What is your codeType?!')
    }
    unorderedList = "<p>"+codeType+"</p><ul>"+listCode+"</ul>";
    loopDisplay.innerHTML = unorderedList;
}

function updateObjectDisplay() {
  let produceDescription = detailedProduceList.map(
(item, i)=>{
return 'A '+ item.produceName +' is a '+ item.type +' that is '+ item.flavor +', '+ item.color +', and a '+ item.shape +'.'
}
)
return objectDisplay.innerHTML = produceDescription
}

console.log(produce,listCode);

document.getElementById('objBTN').addEventListener('click',()=>{updateObjectDisplay("Object");})

document.getElementById('decBTN').addEventListener('click',()=>{updateLoopDisplay('Declarative'); console.log("clicked")})
document.getElementById('impBTN').addEventListener('click',()=>{updateLoopDisplay('Imperative'); console.log("clicked")})
