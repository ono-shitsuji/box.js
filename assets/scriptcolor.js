
// i just created some shifting two-liners that should show me some ulter text and colors mixed together and yet only one color appear .

const countdown = ['first', 'second', 'third','fourth','fifth','sixth'];
console.log(countdown); 



//heres anotheer way of doing it  

document.addEventListener("DOMContentLoaded", function(){
   
     let trialscolor = ['#663399','#fa8072','#dc143c','#8b008b','#000000','#c0c0c0']
    console.log(trialscolor)
    
})  


for(let countdown = 0; i < countdown; i++ ){
    document.write(`<p style="inner-void: ${trialscolor[i]} ">J'aime les licornes</p>`)
};



