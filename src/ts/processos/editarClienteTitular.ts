import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import cadastroTelefone from "./cadastroTelefone";
import EditarDependente from "./editarDependente";
import EditarTelefone from "./editarTelefone";

export default class EditarClienteTitular extends Processo {

    private cliente : Cliente[]
    constructor() {
        super()
        this.cliente = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear();
        let cpf = this.entrada.receberTexto("Digite o CPF do titular...");
        let loop = true;
        this.cliente.forEach(clienteAlvo => {
            clienteAlvo.Documentos.forEach(documento => {
                if(documento.Numero === cpf) {
                    while (loop){
                        console.log("1 - Editar nome");
                        console.log("2 - Editar telefone");
                        console.log("3 - Editar endereço");
                        console.log("4 - Editar dependente");
                        console.log("5 - Cadastrar novo telefone");
                        console.log("6 - Cadastrar novo documento");
                        console.log("0 - Sair");
                        let opcao = this.entrada.receberNumero("Digite a opção desejada...");
                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto("Digite o novo nome...");
                                clienteAlvo.Nome = nome;
                                break;
                            case 2:
                                this.processo = new EditarTelefone(clienteAlvo);
                                this.processo.processar();
                                break;
                            case 3:
                                console.log("Digite o novo endereço...");
                                let rua = this.entrada.receberTexto("Digite a rua...");
                                let bairro = this.entrada.receberTexto("Digite o bairro...");
                                let cidade = this.entrada.receberTexto("Digite a cidade...");
                                let estado = this.entrada.receberTexto("Digite o estado...");
                                let pais = this.entrada.receberTexto("Digite o país...");
                                let codigoPostal = this.entrada.receberTexto("Digite o código postal...");
                                clienteAlvo.Endereco.Rua = rua;
                                clienteAlvo.Endereco.Bairro = bairro;
                                clienteAlvo.Endereco.Cidade = cidade;
                                clienteAlvo.Endereco.Estado = estado;
                                clienteAlvo.Endereco.Pais = pais;
                                clienteAlvo.Endereco.CodigoPostal = codigoPostal;
                                break;
                            case 4:
                                this.processo = new EditarDependente(clienteAlvo);
                                this.processo.processar();
                                break;
                                break;
                            case 5:
                                this.processo = new cadastroTelefone(clienteAlvo);
                                this.processo.processar();
                                break;
                            case 0: 
                                loop = false;
                        }

                    }
                }
            })

        })

    }

}