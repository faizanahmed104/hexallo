export type UnmissableItem = {
  id: number;
  category: string;
  title: string;
  time: string;
  location: string;
  priceLabel: string; // e.g. "From"
  priceValue: string; // e.g. "USD 89"
  image: string;
};

export const UNMISSABLE_DATA: UnmissableItem[] = [
  {
    id: 1,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/unmissable-1.jpg",
  },
  {
    id: 2,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/unmissable-2.jpg",
  },
  {
    id: 3,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/unmissable-3.jpg",
  },
  {
    id: 4,
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    priceLabel: "From",
    priceValue: "USD 89",
    image: "/images/home/cards/unmissable-4.jpg",
  },
];
