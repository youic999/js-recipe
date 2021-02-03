console.log("hello")

const FizzBuzz = function(number){
  for(let n=1; n<=number; n++) {
    if (n%15 === 0){
      console.log("FizzBuzz")
    } else if(n%3 === 0){
      console.log("Fizz")
    } else if(n%5 === 0){
      console.log("Buzz")
    } else{
      console.log(n)
    }   
  }
}

const genkiFunction = function(number){
  for(let n=1; n<=number; n++) {
    const str = String(n)
    if (n%3 === 0 || str.indexOf("3") !== -1){
      console.log(n + "!!!!!")
    }else{
      console.log(n)
    }
  }
}

FizzBuzz(100)
genkiFunction(200)
