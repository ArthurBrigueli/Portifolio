const container_secundario = document.querySelector('.container-secundario')
const sessao2 = document.querySelector('.sessao2')
const botaoimg2 = document.querySelector('.img2')
const botaoimg1 = document.querySelector('.img1')
const skils = document.querySelector('.skils')
const about = document.querySelector('.about')
const img = document.querySelector('.label2')
const contact = document.querySelector('.contact')



contact.addEventListener('click', ()=>{
    ativarContato()
})


img.addEventListener('click', ()=>{
    ativarSessao2()
})


about.addEventListener('click', ()=>{
    ativarBordaSobreMin()
})

skils.addEventListener('click', ()=>{
    ativarBordaSkils()
})



botaoimg1.addEventListener('click', ()=>{
    botaoimg1Ativado()
})


const ativarContato = ()=>{
    contact.classList.toggle('contact-ativado')
}

const botaoimg1Ativado = () => {
    botaoimg1.classList.toggle('ativado')
    if(botaoimg1.classList.contains('ativado')){
        botaoimg1.src = 'img/chevron-left.svg'
        contact.classList.remove('contact-ativado')
    }else{
        botaoimg1.src = 'img/chevron-right.svg'
    }
}


const ativarSessao2 = () =>{
    container_secundario.classList.toggle('ativado')
    if(container_secundario.classList.contains('ativado')){
        botaoimg2.src = 'img/chevron-up.svg'
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
        });
    }else{
        botaoimg2.src = 'img/chevron-down.svg'
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
}




//API GITHUB

const getRepositorio = async() => {
    const apiGithub = `https://api.github.com/users/ArthurBrigueli/repos`
    const res = await fetch(apiGithub)
    const data = await res.json()
    return data
}



const imgGit = document.querySelector('.img-git')
const nomeGit = document.querySelector('.nome-git')
const repositorio_contagem = document.querySelector('.span-repositorio-contagem')


const getUser = async() => {
    const apiGithub = `https://api.github.com/users/ArthurBrigueli`
    const res = await fetch(apiGithub)
    const data = await res.json()
    return data
}


const gitHubStatus = async()=>{
    const data = await getUser()
    const imgurl = data.avatar_url
    const name = data.name
    imgGit.src = `${imgurl}`
    nomeGit.textContent = `${name}`
    repositorio_contagem.textContent = `Repositorio: ${data.public_repos}`
    
}

const repositorio = async()=>{
    const data = await getRepositorio()
    const container = document.querySelector('.container-secundario')
    data.map(item=>{
        let project = document.createElement('div')
        project.innerHTML = `
            <div class="project">
                <div>
                    <span class="nameRepositorio">${item.name}</span>
                    <span>${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                </div>
                <div>
                    <a class="url-repositorio" href="${item.html_url}" target="_blank">Link do repositorio</a>
                    <span><span class="circle"></span>${item.language}</span>
                </div>
            </div>
        `
        container.appendChild(project)
    }
    )
}

gitHubStatus()
repositorio()




// function for add border when click in menu and redirect for option


const ativarBordaSobreMin = ()=>{
    const sobreMin = document.querySelector('.sobre-min-p')
    setInterval(function(){
        sobreMin.classList.add('about-ativado')
    }, 100)
    sobreMin.classList.remove('about-ativado')
}



const ativarBordaSkils = ()=>{
    const containerhabilidade = document.querySelector('.container-habilidade')
    setInterval(function(){
        containerhabilidade.classList.add('skils-ativado')
    }, 100)
    containerhabilidade.classList.remove('skils-ativado')
}




