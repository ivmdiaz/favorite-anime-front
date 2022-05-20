export class ECategoryImage {

  id: number;
  code: string;
  name: string;
  folder: string;

  public static GEIC001 = new ECategoryImage(1, 'OPIC001', 'location-gallery', 'assets/img/one-piece/location');
  public static GEIC002 = new ECategoryImage(2, 'OPIC002', 'character-list', 'assets/img/one-piece/character-list');
  public static GEIC003 = new ECategoryImage(2, 'OPIC003', 'character-list', 'assets/img/one-piece/character-detail/luffy');


  constructor(id: number, code: string, name: string, folder: string) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.folder = folder;
  }

  static values(): ECategoryImage[] {
    return Object.values(this);
  }

  static findByCode(code: string): ECategoryImage {
    return this.values().find(value => value.code === code);
  }

}
