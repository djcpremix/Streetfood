
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
  ownerName: string;
  location: string;
  companyRegistered: boolean;
  phone: string;
  email: string;
  companyDescription: string;
  googleMapsEmbedUrl: string;
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
    { id: 'r1', author: 'Priya Sharma', rating: 4.5, comment: "Fresh and high-quality ingredients every time. Very reliable.", date: '2 days ago' },
    { id: 'r2', author: 'Rahul Verma', rating: 5, comment: "Excellent service and the best prices for bulk orders. Highly recommend!", date: '5 days ago' },
    { id: 'r3', author: 'Anjali Mehta', rating: 4, comment: "Good selection of products. Delivery was on time. Will order again.", date: '1 week ago' },
];

const menus: { [key: string]: MenuItem[] } = {
    tacos: [
        { id: 'm1', name: 'Carne Asada Tacos', description: 'Grilled steak tacos on fresh corn tortillas.', price: 150, image: 'https://placehold.co/300x300.png' },
        { id: 'm2', name: 'Al Pastor Tacos', description: 'Spit-grilled pork with pineapple and onions.', price: 120, image: 'https://placehold.co/300x300.png' },
    ],
    indian: [
        { id: 'm4', name: 'Chole Bhature', description: 'Spicy chickpea curry with fried bread.', price: 250, image: 'https://placehold.co/300x300.png' },
        { id: 'm5', name: 'Pani Puri (Golgappe)', description: 'Hollow puri filled with flavored water, tamarind chutney.', price: 100, image: 'https://placehold.co/300x300.png' },
    ],
};

export const vendors: Vendor[] = [
  {
    id: '1',
    name: "Auntie's Kitchen",
    cuisine: 'Maharashtrian',
    rating: 4.8,
    reviewsCount: 124,
    distance: '1.5 km',
    image: 'https://placehold.co/600x400.png',
    address: 'FC Road, Pune',
    menu: menus.indian,
    reviews: reviews,
  },
  {
    id: '2',
    name: 'Mumbai Magic',
    cuisine: 'Street Food',
    rating: 4.9,
    reviewsCount: 250,
    distance: '3.2 km',
    image: 'https://placehold.co/600x400.png',
    address: 'Koregaon Park, Pune',
    menu: menus.indian,
    reviews: reviews,
  },
];

const rawMaterials: { [key: string]: RawMaterial[] } = {
  puneVeggies: [
    { id: 'rm1', name: 'Onions (Nashik)', price: 40, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm2', name: 'Potatoes (Talegaon)', price: 30, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm3', name: 'Tomatoes (Junnar)', price: 50, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm10', name: 'Green Chillies', price: 60, unit: 'kg', image: 'https://placehold.co/300x300.png' },
  ],
  solapurGrains: [
    { id: 'rm4', name: 'Besan (Gram Flour)', price: 80, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm5', name: 'Jowar Flour', price: 60, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm6', name: 'Basmati Rice', price: 120, unit: 'kg', image: 'https://placehold.co/300x300.png' },
  ],
  kolhapurSpices: [
    { id: 'rm7', name: 'Kolhapuri Masala', price: 400, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm8', name: 'Turmeric Powder', price: 250, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm9', name: 'Red Chilli Powder', price: 300, unit: 'kg', image: 'https://placehold.co/300x300.png' },
  ],
  sataraDairy: [
    { id: 'rm11', name: 'Fresh Paneer', price: 350, unit: 'kg', image: 'https://placehold.co/300x300.png' },
    { id: 'rm12', name: 'Amul Butter', price: 50, unit: '100g pack', image: 'https://placehold.co/300x300.png' },
    { id: 'rm13', name: 'Gowardhan Ghee', price: 600, unit: 'litre', image: 'https://placehold.co/300x300.png' },
  ],
  deccanPackaging: [
    { id: 'rm14', name: 'Takeaway Containers', price: 250, unit: '100 pcs', image: 'https://placehold.co/300x300.png' },
    { id: 'rm15', name: 'Paper Bags (Medium)', price: 150, unit: '100 pcs', image: 'https://placehold.co/300x300.png' },
    { id: 'rm16', name: 'Plastic Cutlery Set', price: 120, unit: '100 sets', image: 'https://placehold.co/300x300.png' },
  ],
  konkanOils: [
    { id: 'rm17', name: 'Sunflower Oil', price: 1800, unit: '15L tin', image: 'https://placehold.co/300x300.png' },
    { id: 'rm18', name: 'Groundnut Oil', price: 2200, unit: '15L tin', image: 'https://placehold.co/300x300.png' },
  ],
  beverages: [
     { id: 'rm19', name: 'Cola Syrup', price: 500, unit: '5L bottle', image: 'https://placehold.co/300x300.png' },
     { id: 'rm20', name: 'Mineral Water Boxes', price: 100, unit: 'box of 12', image: 'https://placehold.co/300x300.png' },
  ],
};

export const distributors: Distributor[] = [
  {
    id: 'd1',
    name: 'Pune Fresh Produce',
    category: 'Fresh Vegetables',
    rating: 4.8,
    reviewsCount: 150,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.puneVeggies,
    ownerName: 'Ramesh Patel',
    location: 'Market Yard, Pune',
    companyRegistered: true,
    phone: '+91 98765 43210',
    email: 'contact@punefresh.com',
    companyDescription: 'Pune Fresh Produce has been a leading supplier of fresh, locally-sourced vegetables since 2005. We partner with over 50 farms in the Pune district to bring the best quality produce to our customers. We are committed to fair trade practices and sustainable agriculture.',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.539373975766!2d73.87442781539668!3d18.499596074288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c444a7f0cf%3A0x857cf30a25698b67!2sMarket%20Yard%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v16788865 Market%20Yard%2C%20Pune%2C%20Maharashtra',
  },
  {
    id: 'd2',
    name: 'Solapur Grains & Flour Mill',
    category: 'Grains & Flours',
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.solapurGrains,
    ownerName: 'Sunita Pawar',
    location: 'MIDC, Solapur',
    companyRegistered: true,
    phone: '+91 91234 56789',
    email: 'sales@solapurgrains.com',
    companyDescription: 'Established in 1998, Solapur Grains & Flour Mill is a trusted name for high-quality grains and flours. We use traditional stone-milling techniques to preserve the nutritional value and taste of our products. Our Jowar and Besan are renowned across Maharashtra.',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60822.75344214476!2d75.87321494863279!3d17.674996400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4181ab96c9345%3A0x8c78c769358117ca!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v167888661 Solapur%2C%20Maharashtra',
  },
  {
    id: 'd3',
    name: 'Kolhapur Spice Co.',
    category: 'Spices',
    rating: 4.7,
    reviewsCount: 95,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.kolhapurSpices,
    ownerName: 'Vikram Bhosle',
    location: 'Kolhapur City',
    companyRegistered: false,
    phone: '+91 99887 76655',
    email: 'vikram.b@kolhapurspice.co',
    companyDescription: '',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61142.45933994452!2d74.2005517486328!3d16.708021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xe76526a5a526c518!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v16788866 Kolhapur%2C%20Maharashtra',
  },
  {
    id: 'd4',
    name: 'Satara Dairy Co-op',
    category: 'Dairy Products',
    rating: 4.9,
    reviewsCount: 180,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.sataraDairy,
    ownerName: 'Anand Deshmukh',
    location: 'Satara',
    companyRegistered: true,
    phone: '+91 91589 12345',
    email: 'support@sataradairy.com',
    companyDescription: 'A cooperative of over 100 local dairy farms, Satara Dairy Co-op provides the freshest dairy products, including paneer, butter, and ghee. We are dedicated to quality and community empowerment.',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60882.35820352983!2d73.98523364863281!3d17.683269200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc175369c3a4f49%3A0x86c27163f59e9c43!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v16788867 Satara%2C%20Maharashtra',
  },
  {
    id: 'd5',
    name: 'Deccan Packaging Solutions',
    category: 'Packaging',
    rating: 4.6,
    reviewsCount: 75,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.deccanPackaging,
    ownerName: 'Priya Singh',
    location: 'Bhosari, Pune',
    companyRegistered: true,
    phone: '+91 90210 98765',
    email: 'priya@deccanpackaging.com',
    companyDescription: 'Your one-stop shop for all food packaging needs. We provide high-quality, food-grade containers, bags, and cutlery to help your brand stand out. Eco-friendly options available.',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30245.74853128919!2d73.82429814863278!3d18.6310344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c3f0b8a3b3%3A0x3f5272189d2d8b58!2sBhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v16788868 Bhosari%2C%20Pune%2C%20Maharashtra',
  },
  {
    id: 'd6',
    name: 'Konkan Edible Oils',
    category: 'Oils & Ghee',
    rating: 4.7,
    reviewsCount: 110,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.konkanOils,
    ownerName: 'Sunil Gavde',
    location: 'Ratnagiri',
    companyRegistered: false,
    phone: '+91 98220 54321',
    email: 'sunil.oils@email.com',
    companyDescription: '',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61057.7011270213!2d73.26729304863282!3d16.9928574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc20ac34c561b31%3A0x65c444733c39d899!2sRatnagiri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v16788869 Ratnagiri%2C%20Maharashtra',
  },
  {
    id: 'd7',
    name: 'Hindustan Beverages Supply',
    category: 'Beverages',
    rating: 4.5,
    reviewsCount: 85,
    image: 'https://placehold.co/600x400.png',
    products: rawMaterials.beverages,
    ownerName: 'Rajesh Shah',
    location: 'Thane, Mumbai',
    companyRegistered: true,
    phone: '+91 98190 12345',
    email: 'r.shah@hindbev.com',
    companyDescription: 'Authorized distributors for major beverage brands. We supply everything from soda syrups and concentrates to bottled water and juices, ensuring your customers always have a refreshing drink.',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120652.290659618!2d72.91980534863281!3d19.213391700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76b2bd%3A0x58235552be4b6845!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v16788870 Thane%2C%20Mumbai%2C%20Maharashtra',
  }
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
