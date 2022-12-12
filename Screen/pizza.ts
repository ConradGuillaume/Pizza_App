export class Pizza {
  nom: string;
  img: string;
  ingredients: string;
  price: number;
  allergen: string;
  key: string;

  constructor(
    nom: string,
    img: string,
    ingredients: string,
    price: number,
    allergen: string,
    key: string
  ) {
    this.nom = nom;
    this.img = img;
    this.ingredients = ingredients;
    this.price = price;
    this.allergen = allergen;
    this.key = key;
  }
}
