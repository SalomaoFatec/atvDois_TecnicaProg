import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorDepedentes from "../impressores/impressaoDependentes";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;
    constructor() {
      super();
      this.clientes = Armazem.InstanciaUnica.Clientes;
    }
    processar(): void {
      console.clear();
      let titular = this.entrada.receberTexto(
       " Digite o CPF do titular completo..."
      );
      console.log("Iniciando a listagem dos clientes dependentes...");
      this.clientes.map((clienteMap) => {
        clienteMap.Documentos.filter((docFilter) => {
          if (docFilter.Numero === titular) {
            clienteMap.Dependentes.forEach((dependentes) => {
              this.impressor = new ImpressaorDepedentes(dependentes);
              console.log(this.impressor.imprimir());
            });
          }
        });
      });
    }
}