import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  produtos: Produto[] = [];
  formGroupProduto: FormGroup;

  constructor(private ProdutoService: ProdutoService,   formBuilder: FormBuilder){
    this.formGroupProduto = formBuilder.group({
      id: [''],
      brand: [''],
      model: [''],
      price: [''],
      inventory: ['']
    });
  }

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(){
    this.ProdutoService.getProdutos().subscribe({
        next: data => this.produtos = data,
        error: (msg) => console.log("Erro ao chamar o endpoint" + msg)
      }
    )
  }
}
