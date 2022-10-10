import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

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
        this.cliente.forEach(cliente => {
            cliente.Documentos.forEach(documento => {
                if(documento.Numero === cpf) {
                    while (loop){
                        console.log("1 - Editar nome");
                        console.log("2 - Editar CPF");
                        console.log("3 - Editar data de nascimento");
                        console.log("4 - Editar nome social");
                        console.log("5 - Editar endereço");
                        console.log("6 - Editar telefone");
                        console.log("7 - Sair");
                        let opcao = this.entrada.receberNumero("Digite a opção desejada...");
                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto("Digite o novo nome...");
                                cliente.Nome = nome;
                                break;
                            case 7: 
                                loop = false;
                        }

                    }
                }
            })

        })

    }

}