/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];

    }
    
    salvar(){
        let produto = this.lerDados();
        
        if(this.validaCampos(produto) == true){
            this.adicionar(produto);
        }
        
        this.listaTabela();
        this.cancelar();
    }
    
    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i=0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acao = tr.insertCell();
            
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].preco;
            
            td_id.classList.add('center');
            
           
            
            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute('onclick','produto.deletar( '+ this.arrayProdutos[i].id +' )');
            
            
            td_acao.appendChild(imgDelete);
        }
    }
    
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }
    
    lerDados(){
        let produto = {}
        this.validaCampos(produto);
        
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;
        
        return produto;
    }
    
    validaCampos(produto){
        let msg = '';
        if (produto.nomeProduto == '' ){
            msg+= ' - Digite o Nome do Produto!\n'
        }
        if (produto.preco == '' ){
            msg+= ' - Digite o Preco do Produto!\n'
        }
        if (msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }
    
    cancelar(){
        document.getElementById('produto').value = '';
        produto.preco = document.getElementById('preco').value = '';
    }
    
    deletar(id){
        
        let tbody = document.getElementById('tbody');
        
        for (let i = 0; i < this.arrayProdutos.length; i++){
            if (this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }
    
}

var produto = new Produto();
