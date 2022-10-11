import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import Cliente from "../modelos/cliente"

export default class ExcluirCliente extends Processo {

    private clientes: Cliente[]

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente que deseja excluir...")
        this.clientes.forEach((buscarCliente) => {
            buscarCliente.Documentos.forEach((buscarDocumento) => {
                if (buscarDocumento.Numero == cpf) {
                    this.clientes.splice(this.clientes.indexOf(buscarCliente), 1)
                    console.log("Cliente excluído com sucesso!")
                }
                else{
                    console.log("Cliente não encontrado!")
                }
            })
        })

    }
}