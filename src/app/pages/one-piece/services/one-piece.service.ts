import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from 'src/app/shared/interfaces/character.interface';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from "src/environments/environment";
import { CharacterDetailOnePieceModel } from '../interfaces/character-detail-one-piece';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService extends UtilService {

  constructor(private http: HttpClient) {
    super();
  }

  getCharacters(): Observable<CharacterModel[]> {
    return this.getDataSession('characters', this.http.get(`${environment.api.subpaths.onepiece}/character`));
  }

  setCharacterSelected(data: CharacterModel): void {
    this.setDataSession('character-selected', data);
  }

  getCharacterSelected(): Observable<CharacterModel> {
    return this.getDataSession('character-selected');
  }

  getCharacterDetail(): Observable<CharacterDetailOnePieceModel> {
    //return this.getDataSession('character-detail');
    return new Observable<any>((observer) => {
      observer.next({
        introduction: "Monkey D. Luffy (モンキー・Ｄ・ルフィ Monkī Dī Rufi?), más conocido como Luffy Sombrero de Paja (麦わらのルフィ Mugiwara no Rufi?), es el protagonista principal de la serie de manga y anime One Piece. Comió una fruta del diablo llamada fruta Gomu Gomu, que le convirtió en un hombre de goma. Además de esto, posee varias habilidades que le hacen ser un pirata más que especial; un gran ejemplo de ello es la capacidad de usar el haoshoku haki ―que sólo lo posee una persona dentro de un millón― y poseer también los otros dos tipos de haki. \nLuffy pertenece a una familia plagada de personajes conocidos mundialmente: es hijo del líder del Ejército Revolucionario y criminal más buscado del mundo, Monkey D. Dragon; nieto del héroe de la Marine y anterior vicealmirante Monkey D. Garp, hermano adoptivo del conocido pirata Ace Puño de Fuego ―antiguo comandante de la segunda división de los Piratas de Barbablanca―, así como del oficial general del Ejército Revolucionario, Sabo. Su objetivo en la vida es convertirse en el próximo Rey de los Piratas, encontrar el legendario tesoro conocido como el One Piece, que perteneció al anterior Rey de los Piratas Gol D. Roger, y conquistar el Nuevo Mundo liderando una tripulación formada por grandes piratas.\nComo fundador y capitán de los Piratas de Sombrero de Paja, es el primer miembro que compone la tripulación, así como uno de sus tres principales combatientes. Luffy fue uno de los once piratas novatos conocidos como los los Once Supernovas junto al espadachín de su tripulación Roronoa Zoro y, con ello, uno de los once piratas con una recompensa superior a Belly100.000.000. Actualmente su recompensa es de Belly1.500.000.000 tras los hechos acaecidos en Whole Cake Island.[1]\nLuffy se ha ganado una enorme reputación en todo el mundo por causar problemas incluso entre los Siete Guerreros del Mar y la Marine, cometiendo crímenes y acciones que se consideran amenazadoras contra el Gobierno Mundial.",
        history: "Luffy was born in Foosha Village to Monkey D. Dragon and an unknown woman. Dragon left Luffy in the care of his grandfather, Monkey D. Garp, who did many dangerous things to Luffy to make him stronger, like throwing him down a deep ravine, leaving him alone in the wild, and tying him to a balloon.\n When Luffy was 6, Shanks and the Red Hair Pirates stationed themselves in Foosha Village. While they were there, their sniper Yasopp frequently told Luffy that he had a son his age named Usopp.[26] Luffy wanted to join the Red Hair Pirates, and after they had been in the village for nearly a year, he stabbed himself under his left eye to prove he was tough enough to be a pirate.\nAfter the Red Hair Pirates left, Garp took Luffy to Mt. Colubo and placed him in the care of the mountain bandit Curly Dadan and the Dadan Family. He introduced Luffy to Dadan's other ward Portgas D. Ace, but Ace was cold toward Luffy.[28] Every day, Ace would travel away from the Dadan Family hideout, and Luffy attempted to follow him. Ace would put obstacles in his path to stop him, but Luffy continued following him.\nThe first thing that Luffy came across on his voyage was a whirlpool, which pulled his ship in. Luffy managed to survive by hiding in a barrel, which washed ashore on Goat Island. The Alvida Pirates' cabin boy Koby rolled the barrel to a storehouse, and some of his crewmates went to open it, causing Luffy to knock them out as he emerged accidentally.\nLuffy pulled himself toward the Krieg Pirates, and hit several of them at once with his outstretched arms. He watched as Baratie's front deck expanded and the cooks rushed into battle,[83], but Krieg then hit him away with a chained spiked ball. Luffy flew back to the Baratie and landed on the back of Pearl's head, causing Krieg's subordinate to hit his face on his shield and get a nosebleed.[84] In response to being injured, Pearl lit himself on fire and forced Luffy and Sanji back with his flames. As Sanji fought Pearl, Krieg attempted to intervene by throwing his spiked ball, but Luffy hit it away. He sent the ball flying into Krieg's galleon's mast, causing it to fall onto Pearl.",
        abilities: "",
        character: {
          alias: "Luffy",
          birthday: "1900-05-05",
          id: 1,
          image: { url: 'one-piece/characters/luffy.png', name: 'character-list-luffy', summary: null, tag: 'character-list' },
          name: "Monkey D. Luffy"
        },
        location: {
          name: "East Blue"
        },
        tags: [
          { name: "pirate" },
          { name: "captain" },
          { name: "mugiwara" },
          { name: "straw hat pirates" },
          { name: "protagonist" },
          { name: "yonko" },
          { name: "worst generation" }
        ]
      });
      observer.complete();
    })
  }

}
