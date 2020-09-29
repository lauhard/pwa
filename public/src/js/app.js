const button = document.querySelector('button')
const title = document.querySelector('.title')
const features = document.querySelectorAll('.course-feature')


function addAnimationOnTime(e,c,t) {
    setTimeout(()=>{
        e.classList.add(c);
    },t);
}

function removeAnimationOnTime(e,c,t) {
    setTimeout(()=>{
        e.classList.remove(c);
    },t);
}

function animate(){

    removeAnimationOnTime(title, "animate-in", 1)

    removeAnimationOnTime(button, "animate-in", 1)

    features.forEach((e,i,o) => {
        removeAnimationOnTime(e, "animate-in", 1)
    });

    addAnimationOnTime(title, "animate-in", 1000)

    var t = 2000;
    features.forEach((e,i,o) => {
        addAnimationOnTime(e, "animate-in", t)
        t+= 1500;
    });

    addAnimationOnTime(button, "animate-in", t)
}

button.addEventListener("click",(e)=>{
    animate()
})

animate()