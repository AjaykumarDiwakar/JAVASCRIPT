const form =document.querySelector('form');

const result=document.querySelector('#results')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    console.log(height);
    const weight=parseInt(document.querySelector('#weight').value)
    
    
    if(height==='' || height<=0 ||isNaN(height)){
        result.appendChild(document.createTextNode(`Please Enter a valid height: ${height}`))
    }else if(weight==='' || weight<=0 ||isNaN(weight)){
        result.appendChild(document.createTextNode(`Please Enter a valid weight: ${weight}`))
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        // show the result
        result.innerHTML=`<span>Your BMI is: ${bmi}</span>`

        const p=document.createElement('p')
        if(bmi<18.6){
            p.innerHTML="Category: Under Weight"
        }else if(bmi>=18.6 && bmi <=24.9){
            p.innerHTML="Category: Normal Weight"
        }else{
            p.innerHTML="Category: Over Weight"
        }

        result.appendChild(p)

    }
})