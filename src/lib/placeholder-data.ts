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

export type DeliveryPerson = {
  id: string;
  name: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  vehicle: string;
  image: string;
  bio: string;
  deliveryRange: string;
  reviews: Review[];
};

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  authorImage: string;
  content: string;
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

export const deliveryPersonnel: DeliveryPerson[] = [
  {
    id: 'dp1',
    name: 'Ravi Kumar',
    experience: '3 years',
    rating: 4.9,
    reviewsCount: 215,
    vehicle: 'Motorbike',
    image: 'https://i.pravatar.cc/150?u=dp1',
    bio: 'Fast and reliable delivery partner with extensive knowledge of the city. Always on time.',
    deliveryRange: '15 km radius',
    reviews: reviews.slice(0, 2),
  },
  {
    id: 'dp2',
    name: 'Sunita Sharma',
    experience: '2 years',
    rating: 4.8,
    reviewsCount: 180,
    vehicle: 'Scooter',
    image: 'https://i.pravatar.cc/150?u=dp2',
    bio: 'Friendly and professional, ensuring your orders are handled with care.',
    deliveryRange: '10 km radius',
    reviews: reviews.slice(1, 3),
  },
  {
    id: 'dp3',
    name: 'Amit Singh',
    experience: '5 years',
    rating: 5.0,
    reviewsCount: 350,
    vehicle: 'Motorbike',
    image: 'https://i.pravatar.cc/150?u=dp3',
    bio: 'Veteran delivery expert. Known for exceptional service and speed.',
    deliveryRange: '20 km radius',
    reviews: reviews.slice(0, 1),
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'bp1',
    title: 'The Rise of Ghost Kitchens in Urban Areas',
    author: 'Alex Chen',
    authorImage: 'https://i.pravatar.cc/150?u=alex',
    date: 'July 22, 2024',
    excerpt: 'Explore how ghost kitchens are changing the food delivery landscape and what it means for traditional street vendors.',
    image: 'https://placehold.co/600x400.png',
    category: 'Industry Trends',
    content: `
      <p>Ghost kitchens, also known as virtual kitchens or cloud kitchens, are professional food preparation and cooking facilities set up for the preparation of delivery-only meals. Some restaurant experts consider ghost kitchens a "key restaurant trend."</p>
      <p>The trend has been fueled by the explosive growth of food delivery apps like DoorDash, Uber Eats, and Grubhub. For street vendors, this presents both a challenge and an opportunity. While it increases competition, it also offers a model for expansion without the high cost of a traditional brick-and-mortar restaurant.</p>
      <h3 class="font-bold text-xl my-4">The Pros and Cons for Street Vendors</h3>
      <p><strong>Pros:</strong> Lower overhead, access to a wider customer base through delivery apps, and the ability to experiment with new concepts with less risk.</p>
      <p><strong>Cons:</strong> High commission fees from delivery apps, lack of a physical storefront for brand building, and increased competition from established brands entering the virtual kitchen space.</p>
    `
  },
  {
    id: 'bp2',
    title: 'Top 5 Must-Try Street Foods in New York City',
    author: 'Brenda Smith',
    authorImage: 'https://i.pravatar.cc/150?u=brenda',
    date: 'July 18, 2024',
    excerpt: 'Join us on a culinary tour of the Big Apple as we highlight the most iconic street food dishes you have to try.',
    image: 'https://placehold.co/600x400.png',
    category: 'Food & Travel',
    content: `
      <p>New York City is a melting pot of cultures, and nowhere is that more evident than in its street food scene. From classic hot dogs to exotic new flavors, there's something for everyone.</p>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Hot Dogs:</strong> No trip to NYC is complete without a classic New York-style hot dog from a street cart.</li>
        <li><strong>Halal Carts:</strong> The famous chicken and rice from carts like The Halal Guys is a must-try.</li>
        <li><strong>Pretzels:</strong> A warm, soft pretzel is the perfect snack while walking through the city.</li>
        <li><strong>Street Tacos:</strong> Find authentic and delicious tacos from various vendors across the five boroughs.</li>
        <li><strong>Nut Carts:</strong> The smell of honey-roasted nuts is an iconic part of the Manhattan experience.</li>
      </ol>
    `
  },
  {
    id: 'bp3',
    title: 'How to Market Your Food Stall on a Budget',
    author: 'Charlie Kim',
    authorImage: 'https://i.pravatar.cc/150?u=charlie',
    date: 'July 15, 2024',
    excerpt: 'Learn effective and low-cost marketing strategies to attract more customers to your street food business.',
    image: 'https://placehold.co/600x400.png',
    category: 'Business Tips',
    content: `
      <p>Marketing your food stall doesn't have to break the bank. With a little creativity, you can attract a loyal following.</p>
      <h3 class="font-bold text-xl my-4">Key Strategies</h3>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Social Media:</strong> Use platforms like Instagram and TikTok to showcase your delicious food. High-quality photos and videos are key.</li>
        <li><strong>Local SEO:</strong> Make sure your business is listed on Google Maps so customers can find you easily.</li>
        <li><strong>Collaborations:</strong> Partner with local businesses or influencers to cross-promote.</li>
        <li><strong>Loyalty Programs:</strong> A simple punch card can keep customers coming back.</li>
      </ul>
    `
  },
   {
    id: 'bp4',
    title: 'The Importance of Food Safety for Street Vendors',
    author: 'Brenda Smith',
    authorImage: 'https://i.pravatar.cc/150?u=brenda',
    date: 'July 10, 2024',
    excerpt: 'A deep dive into food safety regulations and best practices to ensure your customers are safe and your business is compliant.',
    image: 'https://placehold.co/600x400.png',
    category: 'Vendor Help',
    content: `
      <p>Food safety is paramount for any food business, but it's especially critical for street vendors who often work in tight spaces and serve a high volume of customers.</p>
      <p>Following proper food safety protocols not only protects your customers from foodborne illness but also protects your business's reputation and helps you avoid fines or closure. Make sure you are up to date on your local health codes and that your staff is properly trained.</p>
    `
  },
];
