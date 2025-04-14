const maskCard = (card: string) => {
  if (card.length < 6) return card;
  return `${card.slice(0, 2)}**** **** ****${card.slice(-4)}`;
};

export default maskCard;
