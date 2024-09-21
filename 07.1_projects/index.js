const buttons=document.querySelectorAll('.button')
buttons.forEach((button)=>{

    button.addEventListener('click',(e)=>{
        console.log(e);

        console.log(e.target);
        document.querySelector('body').style.background=e.target.id
        
    })

})