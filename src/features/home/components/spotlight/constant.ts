export type SpotlightItem = {
  id: number;
  category: string;
  title: string;
  time: string;
  location: string;
  priceLabel: string; // e.g. "From"
  priceValue: string; // e.g. "USD 89"
  image: string;
};

export const SPOTLIGHT_DATA: SpotlightItem[] = [
  {
    id: 1,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/spotlight-1.jpg",
  },
  {
    id: 2,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/spotlight-2.png",
  },
  {
    id: 3,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/spotlight-3.jpg",
  },
  {
    id: 4,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/spotlight-4.jpg",
  },
];
