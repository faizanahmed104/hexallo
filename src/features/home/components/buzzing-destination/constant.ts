// components/home/buzzing/constant.ts

export type BuzzingDestinationItem = {
  id: number;
  title: string;
  checkins: string; // e.g. "1.2k check-ins this week"
  description: string; // main description text
  image: string;
  rating: string; // e.g. "3.5"
};

export const BUZZING_DESTINATION_DATA: BuzzingDestinationItem[] = [
  {
    id: 1,
    title: "Kina Mountain",
    checkins: "1.2k check-ins this week",
    description:
      "Your guide to the most happening events this weekend — from concerts to pop-ups.",
    image: "/images/home/cards/buzzing-destination-1.jpg",
    rating: "3.5",
  },
  {
    id: 2,
    title: "Kina Mountain",
    checkins: "1.2k check-ins this week",
    description:
      "Your guide to the most happening events this weekend — from concerts to pop-ups.",
    image: "/images/home/cards/buzzing-destination-2.jpg",
    rating: "3.5",
  },
  {
    id: 3,
    title: "Kina Mountain",
    checkins: "1.2k check-ins this week",
    description:
      "Your guide to the most happening events this weekend — from concerts to pop-ups.",
    image: "/images/home/cards/buzzing-destination-3.jpg",
    rating: "3.5",
  },
  {
    id: 4,
    title: "Kina Mountain",
    checkins: "1.2k check-ins this week",
    description:
      "Your guide to the most happening events this weekend — from concerts to pop-ups.",
    image: "/images/home/cards/buzzing-destination-4.jpg",
    rating: "3.5",
  },
];
