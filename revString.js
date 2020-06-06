console.log('hello world')

function rev(str){
  let reversed = ''
  for (let char in str){
    reversed = reversed + char

  }
  return reversed

}

var a = 'hello'


function rev2 (str){
  return str
    .split('')
    .reverse()
    .join('')


}


function rev3 (str){
 return str.split('').reduce((rev,char) => char +rev,'');

}


rev3(a)

function palindrome(str){
 return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
   });

}



palindrome('racecar')

console.log(a.toUpperCase())
