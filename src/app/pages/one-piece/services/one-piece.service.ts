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


      let gallery1 = [
        { name: 'Image ACE', url: `assets/img/one-piece/characters/ace.png`, summary: "summary", tag: 'test' },
        { name: 'Image ACE', url: `assets/img/one-piece/characters/bigmom.png`, summary: "summary", tag: 'test' },
        { name: 'Image ACE', url: `assets/img/one-piece/characters/luffy.png`, summary: "summary", tag: 'test' },
        { name: 'Image ACE', url: `assets/img/one-piece/characters/zoro.png`, summary: "summary", tag: 'test' },
        { name: 'Image ACE', url: `assets/img/one-piece/characters/usopp.png`, summary: "summary", tag: 'test' },
      ]

      let gallery2 = [
        { name: 'Image ACE', url: `assets/img/homepage/dragon-ball-presentation.jpg`, summary: "summary", tag: 'test' },
        { name: 'Image ACE', url: `assets/img/homepage/naruto-presentation.jpg`, summary: "summary", tag: 'test' },
        { name: 'Image ACE', url: `assets/img/homepage/one-piece-presentation.jpg`, summary: "summary", tag: 'test' },
        { name: 'Image ACE', url: `assets/img/homepage/dragon-ball-presentation.jpg`, summary: "summary", tag: 'test' },
        { name: 'Image ACE', url: `assets/img/homepage/naruto-presentation.jpg`, summary: "summary", tag: 'test' },
      ]

      let itemRelationship = {
        relationship: { id: 1, code: 'NN', name: 'Father' },
        relationshipCharacter: {
          alias: "Luffy",
          birthday: "1900-05-05",
          id: 1,
          image: { url: 'one-piece/characters/luffy.png', name: 'character-list-luffy', summary: null, tag: 'character-list' },
          name: "Monkey D. Luffy"
        }
      }

      observer.next({
        introduction: "Monkey D. Luffy (モンキー・Ｄ・ルフィ Monkī Dī Rufi?), más conocido como Luffy Sombrero de Paja (麦わらのルフィ Mugiwara no Rufi?), es el protagonista principal de la serie de manga y anime One Piece. Comió una fruta del diablo llamada fruta Gomu Gomu, que le convirtió en un hombre de goma. Además de esto, posee varias habilidades que le hacen ser un pirata más que especial; un gran ejemplo de ello es la capacidad de usar el haoshoku haki ―que sólo lo posee una persona dentro de un millón― y poseer también los otros dos tipos de haki. \nLuffy pertenece a una familia plagada de personajes conocidos mundialmente: es hijo del líder del Ejército Revolucionario y criminal más buscado del mundo, Monkey D. Dragon; nieto del héroe de la Marine y anterior vicealmirante Monkey D. Garp, hermano adoptivo del conocido pirata Ace Puño de Fuego ―antiguo comandante de la segunda división de los Piratas de Barbablanca―, así como del oficial general del Ejército Revolucionario, Sabo. Su objetivo en la vida es convertirse en el próximo Rey de los Piratas, encontrar el legendario tesoro conocido como el One Piece, que perteneció al anterior Rey de los Piratas Gol D. Roger, y conquistar el Nuevo Mundo liderando una tripulación formada por grandes piratas.\nComo fundador y capitán de los Piratas de Sombrero de Paja, es el primer miembro que compone la tripulación, así como uno de sus tres principales combatientes. Luffy fue uno de los once piratas novatos conocidos como los los Once Supernovas junto al espadachín de su tripulación Roronoa Zoro y, con ello, uno de los once piratas con una recompensa superior a Belly100.000.000. Actualmente su recompensa es de Belly1.500.000.000 tras los hechos acaecidos en Whole Cake Island.[1]\nLuffy se ha ganado una enorme reputación en todo el mundo por causar problemas incluso entre los Siete Guerreros del Mar y la Marine, cometiendo crímenes y acciones que se consideran amenazadoras contra el Gobierno Mundial.",
        history: "Luffy was born in Foosha Village to Monkey D. Dragon and an unknown woman. Dragon left Luffy in the care of his grandfather, Monkey D. Garp, who did many dangerous things to Luffy to make him stronger, like throwing him down a deep ravine, leaving him alone in the wild, and tying him to a balloon.\n When Luffy was 6, Shanks and the Red Hair Pirates stationed themselves in Foosha Village. While they were there, their sniper Yasopp frequently told Luffy that he had a son his age named Usopp.[26] Luffy wanted to join the Red Hair Pirates, and after they had been in the village for nearly a year, he stabbed himself under his left eye to prove he was tough enough to be a pirate.\nAfter the Red Hair Pirates left, Garp took Luffy to Mt. Colubo and placed him in the care of the mountain bandit Curly Dadan and the Dadan Family. He introduced Luffy to Dadan's other ward Portgas D. Ace, but Ace was cold toward Luffy.[28] Every day, Ace would travel away from the Dadan Family hideout, and Luffy attempted to follow him. Ace would put obstacles in his path to stop him, but Luffy continued following him.\nThe first thing that Luffy came across on his voyage was a whirlpool, which pulled his ship in. Luffy managed to survive by hiding in a barrel, which washed ashore on Goat Island. The Alvida Pirates' cabin boy Koby rolled the barrel to a storehouse, and some of his crewmates went to open it, causing Luffy to knock them out as he emerged accidentally.\nLuffy pulled himself toward the Krieg Pirates, and hit several of them at once with his outstretched arms. He watched as Baratie's front deck expanded and the cooks rushed into battle,[83], but Krieg then hit him away with a chained spiked ball. Luffy flew back to the Baratie and landed on the back of Pearl's head, causing Krieg's subordinate to hit his face on his shield and get a nosebleed.[84] In response to being injured, Pearl lit himself on fire and forced Luffy and Sanji back with his flames. As Sanji fought Pearl, Krieg attempted to intervene by throwing his spiked ball, but Luffy hit it away. He sent the ball flying into Krieg's galleon's mast, causing it to fall onto Pearl.",
        abilities: "As captain of the Straw Hat Pirates, Luffy has the greatest authority over an increasingly powerful and diverse crew consisting of several infamous members, many of whom are extremely powerful in their own right. Luffy has a great amount of influence over his crew, so much so that the members of his crew all trust him with their lives, both in spite of his reckless behavior and in some cases even because of it.\nHe is also one of twelve pirates who have been dubbed as the Worst Generation, a group of individuals who have become famous for the bold actions and major conflicts they committed against the World Government, and all have bounties of over Beli.png100,000,000. Indirectly, he also has claim over the Straw Hat Grand Fleet, a massive fleet consisting of seven powerful New World crews numbering 5600 people in total, who all swore to serve under him of their own will and come to assist him whenever he may need them.[25] The scope of Luffy's authority is considered by the World Government to be close to on par with the Four Emperors, the four most powerful and influential pirates in the world and Luffy has officially been considered by the press to be the Fifth Emperor as a result.\nThis is one of the reasons Luffy is considered by the World Government to be extremely dangerous, and currently has a bounty of Beli.png1,500,000,000 which is surpassed by only a known few alive and deceased, all belonging to the current Four Emperors of the Sea, Whitebeard and Gol D. Roger themselves.[26] Luffy has exhibited his threat most notably by invading all three of the World Government's main strongholds in Paradise: he defeated at least a thousand Marines on Enies Lobby[27] by himself and took out two CP9 agents,[28] with the invasion ultimately resulting in the destruction of Enies Lobby via Buster Call;[29] he infiltrated the great prison Impel Down and orchestrated the only mass breakout in its history;[30] he invaded Marineford during the Summit War of Marineford and greatly aided the Whitebeard Pirates in their ultimately unsuccessful effort to rescue Portgas D. Ace from execution",
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
        ],
        gallery: gallery2,
        relationships: [itemRelationship, itemRelationship, itemRelationship, itemRelationship, itemRelationship]
      });
      observer.complete();
    })
  }

}
