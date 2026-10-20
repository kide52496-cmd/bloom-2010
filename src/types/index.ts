export type Relationship = 
  | 'mother' 
  | 'teacher' 
  | 'lover' 
  | 'friend' 
  | 'colleague' 
  | 'all';

export type WishStyle = 
  | 'gentle' 
  | 'sincere' 
  | 'romantic' 
  | 'playful' 
  | 'formal';

export interface PredefinedWish {
  id: string;
  category: Relationship;
  categoryLabel: string;
  recipientLabel: string;
  title: string;
  quote: string;
  content: string[];
  signature: string;
  badge: string;
}

export interface FlowerWish {
  id: string;
  name: string;
  botanicalName: string;
  meaning: string;
  themeColor: string;
  accentColor: string;
  shortWish: string;
  fullPoem: string;
  message: string;
  emoji: string;
  cuteTag: string;
  cuteWish: string;
  cutePerks: string[];
}

export interface CustomCardData {
  recipient: string;
  sender: string;
  relationship: Relationship;
  style: WishStyle;
  message: string;
  createdAt: number;
}
