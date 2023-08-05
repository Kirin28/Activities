function commas(num){
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    const n = Math.round(num*1000)/1000;
    return n.toString().replace(regex, ',');  
  } 


//round up to 3 decimals (n*1000)/1000; 2 decimals: (n*100)/100
//second, convert the number to string
//third, replace 'regex'-> \B = non-word boundary \b = word boundary -> detects if there are word characters?; ? = if condition; \d{3} = 3 digits; + = repeat; ?!\d = to match the following decimals? /g = globally
  console.log(commas(1)) //"1"
  console.log(commas(1000)) //"1,000"
  console.log(commas(100.2346)) //"100.235"
  console.log(commas(1000000000.23)) //"1,000,000,000.23"
  console.log(commas(-1)) //"-1"


 /*  function commas(num){

    return num.toLocaleString("en-GB");
  } */