import { Injectable } from '@angular/core';
import { Livro } from './livro'; 

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> =[
    { codigo: 1, codEditora: 1, titulo: 'Inteligência Artificial: Fundamentos e Aplicações', resumo: 'Um guia abrangente sobre os fundamentos teóricos e as aplicações práticas da inteligência artificial. Explore os conceitos de aprendizado de máquina, visão computacional e processamento de linguagem natural.', autores: ['Leonardo Silva', 'Mariana Costa'] },
    { codigo: 2, codEditora: 2, titulo: 'Segurança Cibernética: Protegendo Seus Dados no Mundo Digital', resumo: 'Um manual essencial para entender as ameaças digitais e proteger sua privacidade online. Aprenda sobre técnicas de prevenção de ataques, criptografia e melhores práticas de segurança.', autores: ['Fernando Oliveira', 'Isabela Santos'] },
    { codigo: 3, codEditora: 3, titulo: 'Rede Arbitrum: O Futuro da Escalabilidade na Blockchain', resumo: 'Descubra a próxima geração de plataformas blockchain e suas soluções inovadoras para escalabilidade e eficiência. Este livro oferece uma visão detalhada da tecnologia de rede arbitrária e seu impacto no ecossistema criptográfico.', autores: ['Rafael Almeida', 'Juliana Lima'] }
];


  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.obterProximoCodigo();
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

    obterProximoCodigo(): number {
    const codigos = this.livros.map(livro => livro.codigo);
    const maiorCodigo = Math.max(...codigos);
    return maiorCodigo + 1;
  }
}
