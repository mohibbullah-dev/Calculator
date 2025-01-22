let buttons=document.querySelectorAll('.buttons');
let display=document.getElementById('display');

allBtn=Array.from(buttons);
let string='';


allBtn.forEach(button => {
     
    button.addEventListener('click', function(e){
        let inputContent = e.target.innerHTML.trim();
        allBtn.forEach((button)=>{
            button.style.boxShadow=''  // Remove boxShadow from prevous one
        })
      button.style.boxShadow='0px 0px 20px 1px #7fff00'

      
    if (inputContent.trim()== '=') {
        console.log("Out of try catch:"+string)
        try {
            string=eval(string).toString();
            console.log("in side try catch: "+string)
            display.innerHTML=string;
        } catch (error) {
            string=0
            // console.log('The error is : '+error)
            // display.innerHTML='invalid input';
            // console.log(error)
        }
        


    }else if(inputContent.trim()== 'ac'){
     string = 0
     display.innerHTML=string

    }else if(inputContent.trim() == 'del'){
  
        string = string.slice(0, -1);
        display.innerHTML=string;
    }else{
        string += inputContent;
        display.innerHTML=string
    }

  
  })

});








