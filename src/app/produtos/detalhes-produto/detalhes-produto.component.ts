import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto } from '../produtos';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produstosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacao: NotificacaoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produstosService.getById(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacao.notificar('O produto foi adicionado ao carrinho');
  }

}
