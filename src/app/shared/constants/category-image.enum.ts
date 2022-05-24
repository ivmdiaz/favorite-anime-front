export class ECategoryImage {

  id: number;
  code: string;
  name: string;
  folder: string;

  public static OPIC001 = new ECategoryImage(1, 'OPCI001', 'location-gallery', 'assets/img/one-piece/location');
  public static OPIC002 = new ECategoryImage(2, 'OPCI002', 'character-list', 'assets/img/one-piece/character-list');
  public static OPIC003 = new ECategoryImage(3, 'OPCI003', 'character-list', 'assets/img/one-piece/character-detail/luffy');
  public static OPIC004 = new ECategoryImage(4, 'OPCI004', 'character-list', 'assets/img/one-piece/character-detail/zoro');


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
