var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var button = document.querySelector('button');

navigator.serviceWorker.register('/sw.js');

function addAnimationOnTime(e,c,t) {
    setTimeout(()=>{
        e.classList.add(c);
    }, t);
}

function removeAnimationOnTime(e,c,t) {
    setTimeout(()=>{
        e.classList.remove(c);
    }, t);
}

function animate() {

    removeAnimationOnTime(title, 'animate-in', 1)
    removeAnimationOnTime(button, 'animate-in', 1)
    courseFeatureElements.forEach((e,i,o) => {
        removeAnimationOnTime(e, 'animate-in', 1)
    });

    addAnimationOnTime(title, 'animate-in', 1000);
    let t = 3000;
    courseFeatureElements.forEach((e,i,o) => {
        addAnimationOnTime(e, 'animate-in', t)
        t += 1000;
    })
    addAnimationOnTime(button, 'animate-in', t);
    
}
button.addEventListener('click', (e)=>{
    animate();
});

animate();
