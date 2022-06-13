const github_logo = `<svg class="svgGit" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.92425 25C9.32829 24.8301 9.6087 24.4359 9.6087 23.9763V20.9662C9.6087 20.8551 9.61753 20.7419 9.63077 20.6242C9.62415 20.6264 9.61753 20.6286 9.6087 20.6308C9.6087 20.6308 7.91304 20.6308 7.57303 20.6308C6.7252 20.6308 5.99219 20.2953 5.65217 19.6267C5.25696 18.9014 5.08696 17.6751 4.06912 17.0064C3.89912 16.8954 4.01393 16.7277 4.35173 16.7277C4.69175 16.7843 5.42697 17.2286 5.87738 17.8428C6.3874 18.457 6.89521 18.958 7.80044 18.958C9.20465 18.958 9.95975 18.8883 10.4124 18.6487C10.94 17.8733 11.6709 17.2852 12.4348 17.2852V17.2722C9.23115 17.1698 7.18444 16.12 6.23064 14.4973C4.15965 14.5213 2.35581 14.7238 1.32694 14.8915C1.29382 14.7086 1.26512 14.5256 1.24083 14.3405C2.25645 14.1771 3.9786 13.9811 5.95907 13.9441C5.89504 13.7894 5.83984 13.6304 5.79348 13.4692C3.80859 13.3712 2.09749 13.4475 1.16576 13.5237C1.15472 13.3386 1.13927 13.1534 1.13706 12.9661C2.06878 12.8921 3.73573 12.8158 5.66984 12.9051C5.62568 12.6263 5.59698 12.341 5.59698 12.0448C5.59698 11.0973 5.93478 10.0932 6.5574 9.25684C6.2748 8.30938 5.87959 6.30119 6.67001 5.57588C8.19565 5.57588 9.27089 6.30118 9.7787 6.74769C10.7391 6.35564 11.8122 6.13347 13 6.13347C14.1878 6.13347 15.2609 6.35564 16.1661 6.74769C16.6739 6.30118 17.7469 5.57588 19.2748 5.57588C20.1226 6.35564 19.67 8.36383 19.3874 9.25684C20.0078 10.0932 20.3478 11.0407 20.2904 12.0448C20.2904 12.3149 20.2661 12.5741 20.2286 12.8289C22.2069 12.7331 23.918 12.8115 24.8651 12.8855C24.8651 13.075 24.8475 13.258 24.8364 13.4431C23.8937 13.3669 22.1384 13.2863 20.1138 13.393C20.063 13.5803 20.0012 13.7633 19.9283 13.9397C21.9331 13.9658 23.6972 14.1575 24.7614 14.3252C24.7371 14.5104 24.7084 14.6933 24.6753 14.8741C23.5934 14.7042 21.752 14.5038 19.6568 14.4951C18.7162 16.0982 16.707 17.1458 13.5652 17.2678V17.2852C15.0357 17.2852 16.3913 19.459 16.3913 20.9662V23.9763C16.3913 24.4359 16.6717 24.8301 17.0757 25C22.2532 23.3098 26 18.4919 26 12.8245C26 5.75231 20.169 0 13 0C5.83101 0 0 5.75231 0 12.8245C0 18.4919 3.74677 23.3098 8.92425 25Z" fill="#CEDAF2"/>
</svg>`;


function api(){
    fetch('https://api.github.com/users/FelipeSaimon/repos')
    .then((respostaServer) =>{

        return respostaServer.json();
    })
    .then((respostaConvertida) =>{
        createObject(respostaConvertida) 
     })
}

api()
function createObject(respostaConvertida){
    let number = [respostaConvertida.length]

    //parseInt(number)

    let dados = {
        url: '',
        Nome: '',
        Descricao: '',
        lang:''
    }
    //let svg1 = document.querySelector('.svgGit')
    //let project

    for(let i = 0; i < number; i++){
        //console.log(i)
        let project = document.querySelector('.project')
        let container = document.createElement('div')

        let a = document.createElement('a')
        let h4 = document.createElement('h4')
        let p = document.createElement('p')
        let p1 = document.createElement('p')
        
        container.classList.add('content')
        project.appendChild(container)

        dados.url = respostaConvertida[i].html_url
        dados.Nome = respostaConvertida[i].name
        dados.Descricao = respostaConvertida[i].description
        dados.lang = respostaConvertida[i].language

        a.href = dados.url
        a.target = '_blank'
        a.classList.add('github')
        container.appendChild(a)
        a.insertAdjacentHTML('beforeend', github_logo)
        //a.append()

        //console.log(a)

        h4.classList.add('title-project')
        h4.textContent = dados.Nome
        container.appendChild(h4)

        p.textContent = dados.Descricao
        container.appendChild(p)

        p1.classList.add('language')
        p1.textContent = dados.lang
        container.appendChild(p1)

    }

}

