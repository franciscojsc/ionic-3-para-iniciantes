import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  //adicionando o provider para realizar a injenção de dependência
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Francisco Chaves",
    data: "November 5, 1955",
    descricao: "Estou criando um app invcrivel...",
    qtd_like: "129 Likes",
    qtd_comentario:"4 Comments",
    time_comentario: "11h ago"
  };

  //modificador de acesso, nome da varivel, tipo, valor
  public nome_usuario:string = "Francisco Chaves do código";

  //injetor o moovieProvider por construtor
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MoovieProvider) {

  }

  public somaDoisNumero(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  
  //o any diz que é objeto javascript
  public lista_filmes = new Array<any>();

  //Quando a página estiver carregada
  ionViewDidLoad() {

    //utilizar observadores, para indicar quando a requisição estiver concluída
    this.movieProvider.getLatestMovies()
    .subscribe(
      data => {
        //sucesso
      console.log(data);
    }, error => {
        //erro
      console.log(error);
    });

    this.movieProvider.getPopularMovies()
    .subscribe(
      data => {
        //sucesso
      console.log(data);
    }, error => {
        //erro
      console.log(error);
    });

  }

}
