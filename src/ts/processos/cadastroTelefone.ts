import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefone extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
    this.execucao = true;
  }

  processar(): void {
    while (this.execucao) {
      console.clear();
      console.log("1 - Cadastrar novo telefone");
      console.log("0 - Para sair digite");
      this.opcao = this.entrada.receberNumero("Qual opção desejada?");
      switch (this.opcao) {
        case 1:
          console.clear();
          console.log("Iniciando o cadastro de telefone...");
          console.log("*********************************")
          let ddd = this.entrada.receberTexto("1 - Digite o DDD");
          let numero = this.entrada.receberTexto("2 - Digite o número do telefone");
          let telefone = new Telefone(ddd, numero);
          this.cliente.Telefones.push(telefone);
          break;
        case 0:
          this.execucao = false;
          break;
      }
    }
  }
}
