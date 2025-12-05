export type GhanaTopTenItem = {
  id: number;
  category: string;
  title: string;
  time: string;
  location: string;
  priceLabel: string; // e.g. "From"
  priceValue: string; // e.g. "USD 89"
  image: string;
};

export const GHANA_TOP_TEN_DATA: GhanaTopTenItem[] = [
  {
    id: 1,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/buzzing-destination-1.jpg",
  },
  {
    id: 2,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/buzzing-destination-2.jpg",
  },
  {
    id: 3,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/buzzing-destination-3.jpg",
  },
  {
    id: 4,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/buzzing-destination-4.jpg",
  },
];
