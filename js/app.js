const boxes=document.querySelectorAll('.box');

function checkBoxes(){
    const innerHeight=window.innerHeight / 5 * 4;
    console.log(innerHeight);
    boxes.forEach((box)=>{
        const boxtop=box.getBoundingClientRect().top;
        console.log(boxtop);
        if(boxtop<innerHeight){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    });
}
checkBoxes();

window.addEventListener('scroll',checkBoxes);