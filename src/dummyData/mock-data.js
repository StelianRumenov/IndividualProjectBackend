const { v4: uuidv4 } = require("uuid");

const FARMERSDATA = [
  {
    id: uuidv4(),
    des: "",
    farmName: "Green Meadow Farms",
    postalCode: "1234 AB",
    city: "Amsterdam",
    rating: 4.5,
    image: "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Fresh Eggs",
        price: 2.5,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Organic Vegetables Bundle",
        price: 10.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Raw Honey",
        price: 5.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Sunrise Orchards",
    postalCode: "5678 CD",
    city: "Rotterdam",
    rating: 4.2,
    image:
      "https://images.pexels.com/photos/1334131/pexels-photo-1334131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Apple Cider",
        price: 8.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Assorted Fruits Basket",
        price: 12.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Homemade Jams",
        price: 4.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Golden Harvest Fields",
    postalCode: "9101 EF",
    city: "Utrecht",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/112781/pexels-photo-112781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Fresh Wheat Bread",
        price: 3.5,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Harvested Honeycomb",
        price: 6.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Sunflower Oil",
        price: 7.5,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Dutch Dairy Delights",
    postalCode: "2345 GH",
    city: "The Hague",
    rating: 4.0,
    image:
      "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Cheese Selection",
        price: 15.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Fresh Milk",
        price: 3.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Yogurt Pack",
        price: 4.5,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Organic Oasis Farms",
    postalCode: "6789 IJ",
    city: "Eindhoven",
    rating: 4.7,
    image: "https://images.pexels.com/photos/1370387/pexels-photo-1370387.jpeg",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Organic Greens Mix",
        price: 8.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Herbal Tea Blend",
        price: 5.5,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Heirloom Tomatoes",
        price: 6.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Windmill Acres",
    postalCode: "3456 KL",
    city: "Groningen",
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/7125540/pexels-photo-7125540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Windmill Flour",
        price: 4.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Organic Potatoes",
        price: 3.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Sunflower Seeds",
        price: 2.5,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Floral Fields",
    postalCode: "7890 MN",
    city: "Tilburg",
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/7785644/pexels-photo-7785644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Assorted Flowers Bouquet",
        price: 8.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Dried Lavender Bunch",
        price: 5.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Floral Honey",
        price: 7.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Harvest Haven",
    postalCode: "1234 OP",
    city: "Breda",
    rating: 4.1,
    image:
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Harvest Blend Tea",
        price: 4.5,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Pumpkin Spice Jam",
        price: 6.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Fresh Apples",
        price: 3.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Countryside Crops",
    postalCode: "5678 QR",
    city: "Haarlem",
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Countryside Pasta",
        price: 5.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Hearty Vegetable Soup Mix",
        price: 7.5,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Organic Carrots",
        price: 2.5,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Fertile Vineyards",
    postalCode: "9101 ST",
    city: "Maastricht",
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Red Wine Bottle",
        price: 12.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Grapes Variety Pack",
        price: 8.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Wine Barrel Aged Vinegar",
        price: 5.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Windmill Farms Cooperative",
    postalCode: "2345 UV",
    city: "Amersfoort",
    rating: 4.6,
    image: "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Windmill Artisan Bread",
        price: 4.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Sunflower Honey",
        price: 6.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Dutch Cheese Platter",
        price: 15.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Sustainable Greens",
    postalCode: "6789 WX",
    city: "Ede",
    rating: 4.2,
    image:
      "https://images.pexels.com/photos/1334131/pexels-photo-1334131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Sustainable Salad Mix",
        price: 7.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Bamboo Fiber Cutlery Set",
        price: 10.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Green Energy Smoothie Pack",
        price: 8.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Holland Harvest Hub",
    postalCode: "1234 YZ",
    city: "Enschede",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/112781/pexels-photo-112781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Dutch Tulip Bulbs",
        price: 6.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Harvest Festive Decorations",
        price: 12.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Wooden Shoe Planters",
        price: 8.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Bio Bounty Gardens",
    postalCode: "5678 AB",
    city: "Leeuwarden",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Organic Herb Collection",
        price: 5.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Biodegradable Plant Pots",
        price: 3.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Fruit Tree Saplings",
        price: 7.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Fertile Fields Cooperative",
    postalCode: "9101 CD",
    city: "Nijmegen",
    rating: 4.8,
    image: "https://images.pexels.com/photos/1370387/pexels-photo-1370387.jpeg",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Cooperative Membership",
        price: 20.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Community Supported Agriculture (CSA) Box",
        price: 18.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Cooperative Merchandise",
        price: 15.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Dutch Delicacies Plantation",
    postalCode: "3456 EF",
    city: "Almere",
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/7125540/pexels-photo-7125540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Dutch Stroopwafels",
        price: 4.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Traditional Dutch Pastries",
        price: 6.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Dutch Cheese Sampler",
        price: 15.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Flourishing Orchards",
    postalCode: "7890 GH",
    city: "Zwolle",
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/7785644/pexels-photo-7785644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Apple Pie Kit",
        price: 10.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Orchard-Fresh Apples",
        price: 3.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Homemade Apple Sauce",
        price: 5.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Bountiful Harvest Gardens",
    postalCode: "1234 IJ",
    city: "Arnhem",
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Harvest Festival Pumpkin",
        price: 8.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Colorful Bell Peppers Bundle",
        price: 6.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Garden-Fresh Zucchini",
        price: 4.0,
      },
    ],
  },
  {
    id: uuidv4(),
    des: "",
    farmName: "Country Charm Farms",
    postalCode: "5678 KL",
    city: "Apeldoorn",
    rating: 4.1,
    image: "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg",
    products: [
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Country-Style Honey Mustard",
        price: 5.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Farmhouse Cheddar Cheese",
        price: 7.0,
      },
      {
        id: uuidv4(),
        des: "",
        image:
          "https://images.pexels.com/photos/2095924/pexels-photo-2095924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        productName: "Rustic Bread Loaf",
        price: 4.0,
      },
    ],
  },
];
export { FARMERSDATA };
