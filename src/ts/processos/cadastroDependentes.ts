import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroDependentes extends Processo {
  private clientes: Cliente[];
  constructor() {
    super();
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }

  processar(): void {
    console.log("Iniciando o cadastro de um novo dependente...");
    let cpf = this.entrada.receberTexto(
      "Para cadastrar um dependente, é necessário inserir o CPF do Cliente Titular"
    );

    this.clientes.filter((clienteTitular) => {
      clienteTitular.Documentos.filter((documento) => {
        if (documento.Numero == cpf) {
          let nome = this.entrada.receberTexto(
            "Qual o nome do novo dependente?"
          );
          let nomeSocial = this.entrada.receberTexto(
            "Qual o nome social do novo dependente?"
          );
          let dataNascimento = this.entrada.receberData(
            "Qual a data de nascimento?"
          );
          let dependente = new Cliente(nome, nomeSocial, dataNascimento);
          clienteTitular.Dependentes.push(dependente);

          this.processo = new CadastrarDocumentosCliente(dependente);
          this.processo.processar();
 
          dependente.Endereco = clienteTitular.Endereco.clonar() as Endereco;
          
        }
      });
    });
  }
}
