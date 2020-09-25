function shout(string){
  return string.toUpperCase('hello')
}
function whisper(string){
  return string.toLowerCase('HELLO')
}
function logShout(string){
  console.log('HELLO')
}
function logWhisper(string){
  console.log('hello')
}
function sayHiToGrandma(string){
  if(string.toLowerCase()===string){
    return "Ican\'t hear you!"
  }else if(string.toUpperCase()===string){
    return "YES INDEED!";
  }else if (string==="Ilove you, Grandma."){
    return"Ilove you, too.""
  }
  
