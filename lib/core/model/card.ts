export interface ICardModel {
  title: string;
  listItems: string[];
}

export default class CardModel {
  static fromPrismicGroup(items): ICardModel[] {
    const cards = [];

    items.forEach((item) => {
      const isHeading = item.type === "heading2";

      if (isHeading) {
        cards.push({});
      }

      const currentCard = cards[cards.length - 1];

      if (isHeading) {
        currentCard.title = item.text;
      } else if (item.type === "list-item") {
        currentCard.listItems = currentCard.listItems
          ? [...currentCard.listItems, item.text]
          : [item.text];
      }
    });

    return cards;
  }
}
