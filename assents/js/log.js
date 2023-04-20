let btn = document.querySelector('.fa-eye');
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.setAttribute('type')=='password'){
        inputSenha.setAttribute('type','text')
    }else {
        inputSenha.setAttribute('type','password')
    }
})
function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    let msgError = document.querySelector('#msgError')
    let listaUser = []
    let userValid = {
        nome: 'jeff',
        user: 'jeff',
        senha: 'jeff'
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.foEach((item)=>{
        if(usuario.value ==item.usercard && senha.value == item.senhaCard){
            userValid = {
                nome: item.nomeCard,
                user: item.userCard,
                senha: item,senhaCard
            }
        }
    })
    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href ='../../index.html'
        let mathRandon = Math.random().toString(userValid)
        let token = mathRandon + mathRandon
        localStorage.setItem('token',token)
        localStorage.setItem('userLogado',JSON.stringify(userValid))
    }else {
        userLabel.setAttribute('style','color: red')
        usuario.setAttribute('style','border-color: red')
        senhaLabel.setAttribute('style','color: red')
        senha.setAttribute('style','border-color: red')
        msgError.setAttribute('style','display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }
}