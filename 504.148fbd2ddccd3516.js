"use strict";(self.webpackChunkfavorite_anime_front=self.webpackChunkfavorite_anime_front||[]).push([[504],{2504:(z,y,i)=>{i.r(y),i.d(y,{OnePieceModule:()=>$});var e=i(5e3),v=i(2916);let _=(()=>{class a{getDataSession(t,r){return new v.y(o=>{const h=sessionStorage.getItem(t);h?(o.next(JSON.parse(h)),o.complete()):r?r.subscribe(m=>{this.setDataSession(t,m),o.next(m),o.complete()}):(o.next(void 0),o.complete())})}setDataSession(t,r){r?sessionStorage.setItem(t,JSON.stringify(r)):sessionStorage.removeItem(t)}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();class u{constructor(n,t,r,o){this.id=n,this.code=t,this.name=r,this.folder=o}static values(){return Object.values(this)}static findByCode(n){return this.values().find(t=>t.code===n)}}u.GEIC001=new u(1,"OPIC001","location-gallery","assets/img/one-piece/location"),u.GEIC002=new u(2,"OPIC002","character-list","assets/img/one-piece/character-list");let d=(()=>{class a extends _{getImageSource(t){return`${u.findByCode(t.category.code).folder}/${t.filename}`}getParagraphs(t){return t.split(/\n/g)}}return a.\u0275fac=function(){let n;return function(r){return(n||(n=e.n5z(a)))(r||a)}}(),a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var L=i(2340),Z=i(520);let C=(()=>{class a extends d{constructor(t){super(),this.http=t}getCharacters(){return this.getDataSession("characters",this.http.get(`${L.N.api.subpaths.onepiece}/character`))}setCharacterSelected(t){this.setDataSession("character-selected",t)}getCharacterSelected(){return this.getDataSession("character-selected")}getCharacterDetail(){return new v.y(t=>{let r={category:{id:3,code:"OPIC002"},filename:"luffy.png"},o={relationship:{id:1,code:"NN",name:"Father"},character:{alias:"Luffy",birthday:"1900-05-05",id:1,image:r,name:"Monkey D. Luffy"}};this.getCharacterSelected().subscribe(h=>{t.next({introduction:"Monkey D. Luffy, also known as Straw Hat Luffy and commonly as Straw Hat,[7] is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters.[25] His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger.[26] He believes that being the Pirate King means having the most freedom in the world.\nBorn in Foosha Village, Luffy accidentally ate the Gomu Gomu no Mi at age 7, which turned his body into rubber.[28] He met Red-Haired Shanks, who gave Luffy the very Straw Hat that has become Luffy's signature accessory, having gifted it to the boy as part of a promise for them to meet again someday. Luffy is the son of the Revolutionary leader Monkey D. Dragon,[29] the grandson of the Marine hero Monkey D. Garp,[30] the sworn brother of the late Fire Fist Portgas D. Ace and Revolutionary Chief-of-Staff Sabo, and the foster son of Curly Dadan. He is one of the few people in the world who carries the Will of D.\nLuffy has gone up against numerous global powers around him, starting with fighting the most powerful pirates in the East Blue and moving to clashes against the Marines, Seven Warlords of the Sea, Cipher Pol, World Nobles, and even the Four Emperors of the Grand Line, emerging victorious in a majority of these battles. He invaded and indirectly caused the annihilation of Enies Lobby, escaped the impregnable Impel Down, and was a focal figure in the Summit War of Marineford. He either defeated or befriended seven of the eleven known past or present Warlords prior to the organization's dissolution, and has invaded the territory of two Emperors. Luffy's accomplishments and heritage have caused him to be labeled as a Dangerous Future Element while in the process gaining a reputation for being reckless and, in some cases, insane, earning the wrath of Fleet Admiral Sakazuki, the Marine Headquarters, and even the World Government.[31]",history:"Luffy was born in Foosha Village to Monkey D. Dragon and an unknown woman. Dragon left Luffy in the care of his grandfather, Monkey D. Garp, who did many dangerous things to Luffy to make him stronger, like throwing him down a deep ravine, leaving him alone in the wild, and tying him to a balloon.\n When Luffy was 6, Shanks and the Red Hair Pirates stationed themselves in Foosha Village. While they were there, their sniper Yasopp frequently told Luffy that he had a son his age named Usopp.[26] Luffy wanted to join the Red Hair Pirates, and after they had been in the village for nearly a year, he stabbed himself under his left eye to prove he was tough enough to be a pirate.\nAfter the Red Hair Pirates left, Garp took Luffy to Mt. Colubo and placed him in the care of the mountain bandit Curly Dadan and the Dadan Family. He introduced Luffy to Dadan's other ward Portgas D. Ace, but Ace was cold toward Luffy.[28] Every day, Ace would travel away from the Dadan Family hideout, and Luffy attempted to follow him. Ace would put obstacles in his path to stop him, but Luffy continued following him.\nThe first thing that Luffy came across on his voyage was a whirlpool, which pulled his ship in. Luffy managed to survive by hiding in a barrel, which washed ashore on Goat Island. The Alvida Pirates' cabin boy Koby rolled the barrel to a storehouse, and some of his crewmates went to open it, causing Luffy to knock them out as he emerged accidentally.\nLuffy pulled himself toward the Krieg Pirates, and hit several of them at once with his outstretched arms. He watched as Baratie's front deck expanded and the cooks rushed into battle,[83], but Krieg then hit him away with a chained spiked ball. Luffy flew back to the Baratie and landed on the back of Pearl's head, causing Krieg's subordinate to hit his face on his shield and get a nosebleed.[84] In response to being injured, Pearl lit himself on fire and forced Luffy and Sanji back with his flames. As Sanji fought Pearl, Krieg attempted to intervene by throwing his spiked ball, but Luffy hit it away. He sent the ball flying into Krieg's galleon's mast, causing it to fall onto Pearl.",abilities:"As captain of the Straw Hat Pirates, Luffy has the greatest authority over an increasingly powerful and diverse crew consisting of several infamous members, many of whom are extremely powerful in their own right. Luffy has a great amount of influence over his crew, so much so that the members of his crew all trust him with their lives, both in spite of his reckless behavior and in some cases even because of it.\nHe is also one of twelve pirates who have been dubbed as the Worst Generation, a group of individuals who have become famous for the bold actions and major conflicts they committed against the World Government, and all have bounties of over Beli.png100,000,000. Indirectly, he also has claim over the Straw Hat Grand Fleet, a massive fleet consisting of seven powerful New World crews numbering 5600 people in total, who all swore to serve under him of their own will and come to assist him whenever he may need them.[25] The scope of Luffy's authority is considered by the World Government to be close to on par with the Four Emperors, the four most powerful and influential pirates in the world and Luffy has officially been considered by the press to be the Fifth Emperor as a result.\nThis is one of the reasons Luffy is considered by the World Government to be extremely dangerous, and currently has a bounty of Beli.png1,500,000,000 which is surpassed by only a known few alive and deceased, all belonging to the current Four Emperors of the Sea, Whitebeard and Gol D. Roger themselves.[26] Luffy has exhibited his threat most notably by invading all three of the World Government's main strongholds in Paradise: he defeated at least a thousand Marines on Enies Lobby[27] by himself and took out two CP9 agents,[28] with the invasion ultimately resulting in the destruction of Enies Lobby via Buster Call;[29] he infiltrated the great prison Impel Down and orchestrated the only mass breakout in its history;[30] he invaded Marineford during the Summit War of Marineford and greatly aided the Whitebeard Pirates in their ultimately unsuccessful effort to rescue Portgas D. Ace from execution",character:h,location:{name:"East Blue"},tags:[{name:"pirate"},{name:"captain"},{name:"mugiwara"},{name:"straw hat pirates"},{name:"protagonist"},{name:"yonko"},{name:"worst generation"}],gallery:[r,r,r,r],relationships:[o,o,o,o,o]}),t.complete()})})}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(Z.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var p=i(5834),s=i(9808),f=i(3322),l=i(7093),c=i(9224),x=i(7423);function F(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"div",2)(1,"mat-card",3),e.NdJ("click",function(){const h=e.CHM(t).$implicit;return e.oxw().navigate(h)}),e.TgZ(2,"mat-card-header",4)(3,"mat-card-title"),e._uU(4),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6),e.qZA()(),e._UZ(7,"img",5),e.TgZ(8,"mat-card-actions")(9,"button",6),e._uU(10,"EXPLORE"),e.qZA()()()()}if(2&a){const t=n.$implicit,r=e.oxw();e.xp6(4),e.Oqu(t.name),e.xp6(2),e.Oqu(t.alias),e.xp6(1),e.s9C("src",r.service.getImageSource(t.image),e.LSH),e.s9C("alt",t.image.name)}}let O=(()=>{class a{constructor(t){this.service=t,this.navigateItemEvent=new e.vpe}navigate(t){this.navigateItemEvent.emit(t)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-character-list-base"]],inputs:{datasource:"datasource"},outputs:{navigateItemEvent:"navigateItemEvent"},decls:2,vars:1,consts:[["fxLayout","row wrap"],["fxFlex","20%","fxFlex.sm","50%","fxFlex.xs","100%",4,"ngFor","ngForOf"],["fxFlex","20%","fxFlex.sm","50%","fxFlex.xs","100%"],[1,"app-card",3,"click"],[1,"list-character-card-header"],["mat-card-image","",3,"src","alt"],["mat-button",""]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.YNc(1,F,11,4,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",r.datasource))},directives:[l.xw,s.sg,l.yH,c.a8,c.dk,c.n5,c.$j,c.G2,c.hq,x.lW],styles:[".list-character-card-header[_ngcontent-%COMP%]{min-height:6em}"]}),a})(),S=(()=>{class a{constructor(t,r){this.service=t,this.router=r,t.getCharacters().subscribe(o=>this.datasource=o)}ngOnInit(){this.service.setCharacterSelected(void 0)}navigate(t){this.service.setCharacterSelected(t),this.router.navigate(["one-piece/character"])}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(C),e.Y36(p.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-character-list"]],decls:2,vars:1,consts:[["ngClass","app-container","ngClass.lt-md","app-container-lt-md"],[3,"datasource","navigateItemEvent"]],template:function(t,r){1&t&&(e.TgZ(0,"main",0)(1,"app-character-list-base",1),e.NdJ("navigateItemEvent",function(h){return r.navigate(h)}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("datasource",r.datasource))},directives:[s.mk,f.oO,O],styles:[""]}),a})();var w=i(4967);function T(a,n){if(1&a&&(e.TgZ(0,"mat-chip",13),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.Oqu(t.name)}}let P=(()=>{class a{constructor(t){this.service=t}ngOnInit(){}get character(){return this.datasource.character}get location(){return this.datasource.location}get tags(){return this.datasource.tags}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-character-presentation"]],inputs:{datasource:"datasource"},decls:25,vars:9,consts:[["fxLayout","row","fxLayout.lt-md","column","fxLayoutGap.lt-md","1em"],["fxFlex","40%","fxLayout","column"],["fxLayoutAlign","center center"],["alt","image not found",1,"image-avatar",3,"src"],["fxFlex","40%","fxLayout","column","fxLayoutAlign","center stretch","fxLayoutGap","1em"],["fxLayout","row","fxLayoutGap","1em","fxLayoutAlign","center center"],["fxFlex","33%","fxFlex.sm","20%","fxLayout","column","fxLayoutAlign","center center"],["src","assets/img/one-piece/character-presentation/birthday.png",1,"image-presentation"],["src","assets/img/one-piece/character-presentation/place.png",1,"image-presentation"],["src","assets/img/one-piece/character-presentation/alias.png",1,"image-presentation"],["fxLayout","row","fxLayoutAlign","center center"],["fxFlex.sm","80%"],["class","chip-presentation",4,"ngFor","ngForOf"],[1,"chip-presentation"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),e._uU(4),e.qZA()(),e.TgZ(5,"div",2),e._UZ(6,"img",3),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6),e._UZ(10,"img",7),e.TgZ(11,"h3"),e._uU(12),e.ALo(13,"date"),e.qZA()(),e.TgZ(14,"div",6),e._UZ(15,"img",8),e.TgZ(16,"h3"),e._uU(17),e.qZA()(),e.TgZ(18,"div",6),e._UZ(19,"img",9),e.TgZ(20,"h3"),e._uU(21),e.qZA()()(),e.TgZ(22,"div",10)(23,"mat-chip-list",11),e.YNc(24,T,2,1,"mat-chip",12),e.qZA()()()()),2&t&&(e.xp6(4),e.Oqu(r.character.name),e.xp6(2),e.s9C("src",r.service.getImageSource(r.character.image),e.LSH),e.xp6(6),e.Oqu(e.xi3(13,6,r.character.birthday,"MMMM d")),e.xp6(5),e.Oqu(r.location.name),e.xp6(4),e.Oqu(r.character.alias),e.xp6(3),e.Q6J("ngForOf",r.tags))},directives:[l.xw,l.SQ,l.yH,l.Wh,w.qn,s.sg,w.HS],pipes:[s.uU],styles:[".image-avatar[_ngcontent-%COMP%]{width:200px;height:200px;background-size:cover;background-position:top center;border-radius:50%}.image-presentation[_ngcontent-%COMP%]{max-width:80px}  .mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px;justify-content:center}"]}),a})();var b=i(1252);function A(a,n){if(1&a&&(e.TgZ(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6),e.qZA()(),e._UZ(7,"img",5),e.qZA()()),2&a){const t=n.$implicit,r=e.oxw(2);e.xp6(4),e.Oqu(t.character.name),e.xp6(2),e.Oqu(t.relationship.name),e.xp6(1),e.s9C("src",r.service.getImageSource(t.character.image),e.LSH),e.s9C("alt",t.character.image.name)}}function I(a,n){if(1&a&&(e.TgZ(0,"div")(1,"div",1),e.YNc(2,A,8,4,"div",2),e.qZA()()),2&a){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.datasource)}}let M=(()=>{class a{constructor(t){this.service=t}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-character-relationship"]],inputs:{datasource:"datasource"},decls:1,vars:1,consts:[[4,"ngIf"],["fxLayout","row wrap"],["fxFlex","25%","fxFlex.xs","50%",4,"ngFor","ngForOf"],["fxFlex","25%","fxFlex.xs","50%"],["ngClass","app-card"],["mat-card-image","",3,"src","alt"]],template:function(t,r){1&t&&e.YNc(0,I,3,1,"div",0),2&t&&e.Q6J("ngIf",r.datasource)},directives:[s.O5,l.xw,s.sg,l.yH,c.a8,s.mk,f.oO,c.dk,c.n5,c.$j,c.G2],styles:[""]}),a})();var k=i(5245);function D(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"div",10)(1,"img",11),e.NdJ("click",function(){const h=e.CHM(t).index;return e.oxw(3).selectImage(h)}),e.qZA()()}if(2&a){const t=n.$implicit,r=e.oxw(3);e.xp6(1),e.s9C("src",r.service.getImageSource(t),e.LSH)}}function H(a,n){if(1&a&&(e.TgZ(0,"div",8),e.YNc(1,D,2,1,"div",9),e.qZA()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.datasource)}}function G(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2),e._UZ(2,"img",3),e.TgZ(3,"button",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().next()}),e.TgZ(4,"mat-icon"),e._uU(5,"navigate_before"),e.qZA()(),e.TgZ(6,"button",5),e.NdJ("click",function(){return e.CHM(t),e.oxw().prev()}),e.TgZ(7,"mat-icon",6),e._uU(8,"navigate_next"),e.qZA()()(),e.YNc(9,H,2,1,"div",7),e.qZA()}if(2&a){const t=e.oxw();e.xp6(2),e.s9C("src",t.service.getImageSource(t.currentValue),e.LSH),e.xp6(7),e.Q6J("ngIf",t.selector)}}let U=(()=>{class a{constructor(t){this.service=t,this.selector=!0}ngOnInit(){this.selectImage(0)}selectImage(t){this.currentIndex=t,this.currentValue=this.datasource[this.currentIndex]}next(){let t=this.currentIndex+1;t>this.datasource.length-1&&(t=0),this.selectImage(t)}prev(){let t=this.currentIndex-1;t<0&&(t=this.datasource.length-1),this.selectImage(t)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-character-gallery"]],inputs:{datasource:"datasource",selector:"selector"},decls:1,vars:1,consts:[["fxLayout","column",4,"ngIf"],["fxLayout","column"],[1,"gallery-current"],[1,"gallery-current-image",3,"src"],["mat-mini-fab","","color","primary",1,"prev",3,"click"],["mat-mini-fab","","color","primary",1,"next",3,"click"],[1,"myIcon"],["fxLayout","row wrap","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","center center"],["fxFlex","20%",4,"ngFor","ngForOf"],["fxFlex","20%"],[1,"gallery-selector-image",3,"src","click"]],template:function(t,r){1&t&&e.YNc(0,G,10,2,"div",0),2&t&&e.Q6J("ngIf",r.datasource)},directives:[s.O5,l.xw,x.lW,k.Hw,l.Wh,s.sg,l.yH],styles:[".gallery-current[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column}.next[_ngcontent-%COMP%]{margin-right:.5em;position:absolute;align-self:flex-end;top:50%;opacity:.4}.prev[_ngcontent-%COMP%]{margin-left:.5em;position:absolute;align-self:flex-start;top:50%;opacity:.4}.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover{opacity:1!important}.gallery-current-image[_ngcontent-%COMP%], .gallery-selector-image[_ngcontent-%COMP%]{max-width:100%;max-height:450px;object-fit:scale-down}.gallery-selector-image[_ngcontent-%COMP%]{opacity:.4}.gallery-selector-image[_ngcontent-%COMP%]:hover{opacity:1}"]}),a})();function q(a,n){if(1&a&&(e.TgZ(0,"p",7),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t," ")}}function B(a,n){if(1&a&&(e.TgZ(0,"p",7),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t," ")}}function J(a,n){if(1&a&&(e.TgZ(0,"p",7),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t," ")}}function E(a,n){if(1&a&&(e.TgZ(0,"mat-tab",8),e._UZ(1,"app-character-relationship",9),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("datasource",t.datasource.relationships)}}function N(a,n){if(1&a&&(e.TgZ(0,"mat-tab",10),e._UZ(1,"app-character-gallery",9),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("datasource",t.datasource.gallery)}}let Y=(()=>{class a{constructor(t){this.service=t}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-character-content"]],inputs:{datasource:"datasource"},decls:12,vars:5,consts:[["mat-align-tabs","center",1,"tab-group"],["label","Introduction"],["class","paragraf-content",4,"ngFor","ngForOf"],["label","History"],["label","Abilities"],["label","Relationships",4,"ngIf"],["label","Gallery",4,"ngIf"],[1,"paragraf-content"],["label","Relationships"],[3,"datasource"],["label","Gallery"]],template:function(t,r){1&t&&(e.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"mat-card"),e.YNc(3,q,2,1,"p",2),e.qZA()(),e.TgZ(4,"mat-tab",3)(5,"mat-card"),e.YNc(6,B,2,1,"p",2),e.qZA()(),e.TgZ(7,"mat-tab",4)(8,"mat-card"),e.YNc(9,J,2,1,"p",2),e.qZA()(),e.YNc(10,E,2,1,"mat-tab",5),e.YNc(11,N,2,1,"mat-tab",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngForOf",r.service.getParagraphs(r.datasource.introduction)),e.xp6(3),e.Q6J("ngForOf",r.service.getParagraphs(r.datasource.history)),e.xp6(3),e.Q6J("ngForOf",r.service.getParagraphs(r.datasource.abilities)),e.xp6(1),e.Q6J("ngIf",r.datasource.relationships),e.xp6(1),e.Q6J("ngIf",r.datasource.gallery))},directives:[b.SP,b.uX,c.a8,s.sg,s.O5,M,U],styles:[".tab-group[_ngcontent-%COMP%]{min-height:600px}"]}),a})();const W=[{path:"",component:S,pathMatch:"full"},{path:"character",component:(()=>{class a{constructor(t){this.service=t,this.service.getCharacterDetail().subscribe(r=>this.datasource=r)}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(C))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-character-detail"]],decls:5,vars:2,consts:[["ngClass","app-container","ngClass.lt-md","app-container-lt-md"],["ngClass","character-detail-content","ngClass.lt-md","character-detail-content-lt-md"],[3,"datasource"]],template:function(t,r){1&t&&(e.TgZ(0,"main",0)(1,"div",1),e._UZ(2,"app-character-presentation",2),e.qZA(),e.TgZ(3,"div",1),e._UZ(4,"app-character-content",2),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("datasource",r.datasource),e.xp6(2),e.Q6J("datasource",r.datasource))},directives:[s.mk,f.oO,P,Y],styles:[".character-detail-content[_ngcontent-%COMP%]{margin:0 10em}.character-detail-content-lt-md[_ngcontent-%COMP%]{margin:0 .5em}"]}),a})()}];let R=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[p.Bz.forChild(W)],p.Bz]}),a})();var g=i(6801);let j=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[g._]]}),a})(),Q=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[g._]]}),a})(),$=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[g._,R,j,Q]]}),a})()}}]);