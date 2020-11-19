const madLib = 'Star Wars is a (adjective) (noun) of (adjective) versus evil in a (noun;_place) far far away. There are (adjective) battles between (adjective) (plural_noun;_vehicle) in (adjective) space and (adjective) duels with (plural_noun) called (adjective) sabers. (Plural_noun) called "droids" are helpers and (plural_noun) to the heros. A (adjective) power called The (noun) (verb)s people to do (adjective) things, like (verb) (plural_noun). The Jedi (plural_noun;_type_of_job) use The Force for the (adjective) side and the Sith (verb) it for the (adjective) side.';
let adjectives = {};
let verbs = {};
let nouns = {};

function updateMadlib() {
  document.querySelectorAll('input').forEach((item, i) => {
    if(item.type != button){
      if(item.id.includes('adjectives')){
        adjectives[item.id] = item.value ? item.value : item.placeholder
      } else if(item.id.includes('verbs')) {
        verbs[item.id] = item.value ? item.value : item.placeholder
      } else {
        nouns[item.id] = item.value ? item.value : item.placeholder
      }
    } else {
      console.log('nope');
    }
}

let madLibArray = madLib.split("");
let adjCount = 1;
let verbCount = 1;
let nounCount = 0;
let newMadLibArray = madlibArray.map((item, i)=>{
  if(item.id.includes('adjectives')){
    let idString = 'adjectives'+ String(adjCount)
    item = document.getElementById(idString).value
    adjCount++
  } else if(item.id.includes('verbs')) {
    let idString = 'verb'+ String(verbCount)
    item = document.getElementById(idString).value
    verbCount++
  } else if(item.id.includes('nouns')) {
    let nounKeyArray = Object.keys(nouns)
    item = document.getElementById(nounKeyArray[nounCount]).value
    nounCount++
  } else {

  }

  return item

})

document.getElementById('madLib').addEventListener('click',updateMadlib)
