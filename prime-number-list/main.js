let prime = document.querySelector("#prime");
const start = 1;
const last = 10000;
let count = 0;

for(let i=start; i <= last; i++){
    let milestone = 0;
    

    for(let j=2; j<i; j++){
        if(i%j==0){
            milestone = 1;
            break;
        }        
    }

    if(i>1 && milestone==0){
        count++;
        prime.innerHTML += i + " ";        
        if(count%20==0){
            prime.innerHTML += "</br>";            
        }    
    }    
}


