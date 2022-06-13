document.querySelector('.project').addEventListener('wheel', Event => {
    if(Event.deltaY > 0){
        Event.target.scrollBy(300, 0)
    }else{
        Event.target.scrollBy(-300, 0)
    }
})