import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";

export default class EditarDependente extends Processo{

    private clientes: Cliente;
    constructor(clientes: Cliente) {
        super()
        this.clientes = clientes
    }

    processar(): void {
    
    this.clientes.Dependentes.forEach((dependente, index) => {
        console.log(index + 1 +  "-" + " " + dependente.Nome)
    })
    let depSelecionado = this.entrada.receberNumero("Selecione qual dependente deseja editar...")
    this.clientes.Dependentes.forEach((dependente, index) => {
        if ((index + 1 ) == depSelecionado) {
            let nome = this.entrada.receberTexto("Digite o novo nome...")
            dependente.Nome = nome
        }
    } )
    }
    
}