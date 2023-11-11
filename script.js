class Produto {
    constructor() {
        this.id = 1;
        this.ArrayProdutos = [];
    }

    Adicionar() {
        let produto = this.lerDados();

        if (this.validar(produto)) {
            this.salvar(produto);
        }
        this.listar();
        this.Cancelar();
    }

    lerDados() {
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdnome').value;
        produto.precoProduto = document.getElementById('pdpreco').value;

        return produto;
    }

    validar(produto) {
        let msg = '';

        if (produto.nomeProduto === '') {
            msg += 'Por favor, informe o nome do produto!\n';
        }

        if (produto.precoProduto === '') {
            msg += 'Por favor, informe o preço do produto!\n';
        }

        if (msg !== '') {
            alert(msg);
            return false;
        }

        return true;
    }

    salvar(produto) {
        this.ArrayProdutos.push(produto);
        this.id++;
    }

    listar() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.ArrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.ArrayProdutos[i].id;
            td_nome.innerText = this.ArrayProdutos[i].nomeProduto;
            td_preco.innerText = this.ArrayProdutos[i].precoProduto;

            let imagem = document.createElement('img');
            imagem.src = "imagens/5598.jpg";
            imagem.setAttribute("onclick", "produto.Deletar(" + this.ArrayProdutos[i].id + ")");
            td_del.appendChild(imagem);
        }
    }

    Cancelar() {
        document.getElementById('pdnome').value = '';
        document.getElementById('pdpreco').value = '';
    }

    Deletar(id) {
        let tbody = document.getElementById('tbody');
        for (let i = 0; i < this.ArrayProdutos.length; i++) {
            if (this.ArrayProdutos[i].id == id) {
                this.ArrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }

        alert('O item foi apagado com sucesso!');
    }
}

var produto = new Produto();
