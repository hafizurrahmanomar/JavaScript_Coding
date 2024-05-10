const button = document.getElementById('btn');
button.innerText="JavaScript Check";


function updatedButtonText(btnText) {
    
    const button = document.getElementById('btn');
    button.innerText=btnText;
};

updatedButtonText('Please Click Here');

function updatedButtonTextWithClick(){
    updatedButtonText('Click Me');  
}

const btnClick = document.getElementById('btn')
btnClick.addEventListener('click',updatedButtonTextWithClick)

