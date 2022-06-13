
const project = document.querySelector('project')
document.querySelector('.project').addEventListener('click', Event => {
    project.insertAdjacentElement('beforebegin', left)
    if(Event.deltaY > 0){
        console.log(left)
    }else{
        console.log('direita')
        // Event.target.scrollBy(-300, 0)
    }
})