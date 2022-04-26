import { MatCard } from 'src/app/shared/interfaces/mat-card.interface';

export interface MatCardAnime extends MatCard {
  routerLink: string;
}

export const ANIMES: MatCardAnime[] = [
  {
    title: "One Piece",
    subtitle: "Eiichirō Oda",
    image: "/assets/img/homepage/one-piece-presentation.jpg",
    content: "The series focuses on Monkey D. Luffy, a young man made of rubber, whom, inspired by his childhood idol, the powerful pirate Red Haired' Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates.",
    routerLink: "one-piece"
  },
  {
    title: "Dragon Ball",
    subtitle: "Akira Toriyama",
    image: "/assets/img/homepage/dragon-ball-presentation.jpg",
    content: "Dragon Ball tells the tale of a young warrior by the name of Son Goku, a young peculiar boy with a tail who embarks on a quest to become stronger and learns of the Dragon Balls, when, once all 7 are gathered, grant any wish of choice.",
    routerLink: "dragon-ball"
  },
  {
    title: "Naruto",
    subtitle: "Masashi Kishimoto",
    image: "/assets/img/homepage/naruto-presentation.jpg",
    content: "It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto's pre-teen years, and the second in his teens.",
    routerLink: "naruto"
  }
]
