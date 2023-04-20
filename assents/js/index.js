if (localStorage.getItem("token")==null){
    alert("você precisa estar logado para acessar essa página");
    window.location.href="./assets/html/log.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = 'Olá ${userLogado.nome}';

function sair(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/log.html";
}
const modal = document.querySelector('modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sValor = document.querySelector('#m-Valor')
const sDesconto = document.querySelector('#-desconto')
const btnSalva = document.querySelector('#btnsalva')
let itens
let id
function openModal(edit = false , index = 0){
    modal.classList.add('activer')
    modal.onclick = e =>{
        if(e.target.className.indexOF ('modal-containe') !== -1){
        }
    }
    if (edit){
        sNome.value = intens[index].nome
        sValor.value = intens[index].valor
        sDesconto.value = intens[index].sDesconto
        id = index
    }else{
        sNome.value ='jeff'
        sValor.value ='20'
        sDesconto.value='30%'
    }
}
function editeItem(index){
    openModal(true,index)
}
function deletItem(index){
 itens.splice(index ,1)
 selItensBD()
 loardItens()
}
function insertItem(item,index){
    let tr = document.createElement('tr')
    tr.innerHTML =` 
    <td>${item.nome}</td>
    <td>${item.valor}</td>
    <td>${item.desconto}</td>
    <td class="acao">
    <button onclik="editItem(${index})" ><i class= 'bx bx-edit'></i><button>
    </td>
    <td class ="acao">
    <button onclick ="deleteItem(${index})"><i class ='bx bx-trash'></i></button>
    </td>
    `
    tbody.appendChild(tr)
}
e.preventDefault();
if(id !== undefined){
    intens[id].nome= sNome.value
    itens[id].valor= sValor.value
    itens[id].desconto= sDesconto.value
}else{
    itens.push({'nome': sNome.value,'valor':sValor.value, 'desconto':sDesconto.value})

selItensBD()
modal.classList.remove('active')
loardItens()
id=undefined
}
function loardItens(){
    itens =getItemBD()
    tbody.innerHTML=''
    itens.array.forEach(item,index=> {
        insertItem(item,index)
        
    });
}
const getItemBD=()=>JSON.parse(localStorage.getItem('db func')) ??[]
const selItensBD=()=>localStorage.setItem('db,func',JSON.stringify(itens))
loardItens()