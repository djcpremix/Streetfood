export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export type Vendor = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewsCount: number;
  distance: string;
  image: string;
  address: string;
  menu: MenuItem[];
  reviews: Review[];
};

export type RawMaterial = {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
};

export type Distributor = {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewsCount: number;
  image: string;
  products: RawMaterial[];
};

const reviews: Review[] = [
    { id: 'r1', author: 'Jane Doe', rating: 4.5, comment: "Absolutely delicious tacos, the best I've had in a while! The salsa was perfectly spicy.", date: '2 days ago' },
    { id: 'r2', author: 'John Smith', rating: 5, comment: "A must-try! The Chole Bhature is out of this world. Quick service too.", date: '5 days ago' },
    { id: 'r3', author: 'Emily White', rating: 4, comment: "Great food, reasonable prices. The momos were fantastic. A bit crowded though.", date: '1 week ago' },
];

const menus: { [key: string]: MenuItem[] } = {
    tacos: [
        { id: 'm1', name: 'Carne Asada Tacos', description: 'Grilled steak tacos on fresh corn tortillas.', price: 3.50, image: 'https://placehold.co/300x300.png' },
        { id: 'm2', name: 'Al Pastor Tacos', description: 'Spit-grilled pork with pineapple and onions.', price: 3.00, image: 'https://placehold.co/300x300.png' },
        { id: 'm3', name: 'Veggie Tacos', description: 'Grilled peppers, onions, and zucchini with guac.', price: 2.75, image: 'https://placehold.co/300x300.png' },
    ],
    indian: [
        { id: 'm4', name: 'Chole Bhature', description: 'Spicy chickpea curry with fried bread.', price: 8.99, image: 'https://placehold.co/300x300.png' },
        { id: 'm5', name: 'Pani Puri (Golgappe)', description: 'Hollow puri filled with flavored water, tamarind chutney.', price: 5.49, image: 'https://placehold.co/300x300.png' },
        { id: 'm6', name: 'Aloo Tikki Chaat', description: 'Spiced potato patties with yogurt and chutneys.', price: 6.99, image: 'https://placehold.co/300x300.png' },
    ],
    asian: [
        { id: 'm7', name: 'Steamed Chicken Momos', description: 'Juicy chicken dumplings served with a spicy dip.', price: 7.50, image: 'https://placehold.co/300x300.png' },
        { id: 'm8', name: 'Pad Thai Noodles', description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts.', price: 10.50, image: 'https://placehold.co/300x300.png' },
        { id: 'm9', name: 'Banh Mi Sandwich', description: 'Vietnamese sandwich with grilled pork and pickled veg.', price: 9.00, image: 'https://placehold.co/300x300.png' },
    ],
    pizza: [
      { id: 'm10', name: 'Margherita Slice', description: 'Classic cheese, tomato, and basil on a crispy crust.', price: 4.00, image: 'https://placehold.co/300x300.png' },
      { id: 'm11', name: 'Pepperoni Slice', description: 'A timeless classic with spicy pepperoni.', price: 4.50, image: 'https://placehold.co/300x300.png' },
      { id: 'm12', name: 'Garlic Knots (4pcs)', description: 'Dough knots baked and tossed in garlic butter.', price: 3.50, image: 'https://placehold.co/300x300.png' },
    ],
};

export const vendors: Vendor[] = [
  {
    id: '1',
    name: "Tony's Taco Truck",
    cuisine: 'Mexican',
    rating: 4.8,
    reviewsCount: 124,
    distance: '0.5 miles',
    image: 'https://placehold.co/600x400.png',
    address: '123 Market St, San Francisco, CA',
    menu: menus.tacos,
    reviews: reviews,
  },
  {
    id: '2',
    name: 'Delhi Delights',
    cuisine: 'Indian',
    rating: 4.9,
    reviewsCount: 250,
    distance: '1.2 miles',
    image: 'https://placehold.co/600x400.png',
    address: '456 Curry Ln, Fremont, CA',
    menu: menus.indian,
    reviews: reviews,
  },
  {
    id: '3',
    name: "Mama Lin's Kitchen",
    cuisine: 'Asian Fusion',
    rating: 4.7,
    reviewsCount: 88,
    distance: '0.8 miles',
    image: 'https://placehold.co/600x400.png',
    address: '789 Noodle Ave, Oakland, CA',
    menu: menus.asian,
    reviews: reviews,
  },
  {
    id: '4',
    name: "Brooklyn Pizza Slice",
    cuisine: 'Italian',
    rating: 4.6,
    reviewsCount: 152,
    distance: '2.1 miles',
    image: 'https://placehold.co/600x400.png',
    address: '101 Pizza Pl, Berkeley, CA',
    menu: menus.pizza,
    reviews: reviews,
  },
];

const rawMaterials: { [key: string]: RawMaterial[] } = {
  vegetables: [
    { id: 'rm1', name: 'Onions', price: 40, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm2', name: 'Potatoes', price: 30, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm3', name: 'Tomatoes', price: 50, unit: 'kg', image: 'https://placehold.co/300x300.png' },
  ],
  dairy: [
    { id: 'rm4', name: 'Amul Cheese', price: 250, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm5', name: 'Paneer', price: 400, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm6', name: 'Yogurt', price: 80, unit: 'kg', image: 'https://placehold.co/300x300.png' },
  ],
  meats: [
    { id: 'rm7', name: 'Chicken Breast', price: 350, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm8', name: 'Mutton', price: 700, unit: 'kg', image: 'https://placehold.co/300x300.png' },
  ],
};

export const distributors: Distributor[] = [
  {
    id: 'd1',
    name: 'Fresh Veggies Co.',
    category: 'Fresh Produce',
    rating: 4.8,
    reviewsCount: 150,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.vegetables,
  },
  {
    id: 'd2',
    name: 'Modern Dairy',
    category: 'Dairy Products',
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.dairy,
  },
  {
    id: 'd3',
    name: 'Quality Meats Inc.',
    category: 'Butcher',
    rating: 4.7,
    reviewsCount: 95,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.meats,
  },
];
