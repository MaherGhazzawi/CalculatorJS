const buttons = document.querySelectorAll('.btn');
const resulta = document.getElementById('resulta');

buttons.forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        resulta.textContent += (e.target.id);
    })
});
equal.addEventListener('click', ()=>{
    resulta.textContent = eval(resulta.textContent);
});
clear.addEventListener('click' , ()=>{
    resulta.textContent = ''
})