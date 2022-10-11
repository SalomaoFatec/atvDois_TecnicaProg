import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";


export default class EditarTelefone extends Processo {
    private clientes: Cliente
    constructor(clientes: Cliente) {
        super()
        this.clientes = clientes

    }
    processar(): void {

        this.clientes.Telefones.forEach((telefone, index ) => {
            console.log(index + 1 +  "-" + " " + telefone.Ddd + " " + telefone.Numero)
        })
        let telSelecionado = this.entrada.receberNumero("Selecione qual telefone deseja editar...")
        this.clientes.Telefones.forEach((telefone, index) => {
            if ((index + 1) == telSelecionado) {
                let ddd = this.entrada.receberTexto("Digite o novo ddd...")
                let numero = this.entrada.receberTexto("Digite o novo número...")
                telefone.Numero = numero
                telefone.Ddd = ddd
            }
        })
    }


}