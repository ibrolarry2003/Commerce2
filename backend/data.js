import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Ibrahim',
            email: 'admin@trevohealthsolutions.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true,
          },
          {
            name: 'Yetunde',
            email: 'wife@trevohealthsolutions.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
          },
          {
            name: 'Folake',
            email: 'flakky@trevohealthsolutions.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },
    ],
    products: [
        {  name: "Trevo-32 ounces", category: "health", slug: 'trevo',
        image: "/images/p1.jpg", 
        price: 45000, countInStock: 10, brand: "Health", rating: 2.0, reviewz: 6,
    description: "High quality: Its very good for every family" },

    {  name: "Trevo-16 ounces", category: "health", slug: 'trevo2',
    image: "/images/p2.jpg", 
    price: 23000, countInStock: 5,brand: "Health", rating: 5.0, reviewz: 8,
description: "High quality" },

{  name: "RP3 By Trevo-60 counts", category: "health", slug: 'trevo3',
image: "/images/p3.jpg",
 price: 20000, countInStock: 2, brand: "Health", rating: 4.5, reviewz: 8,
description: "High quality" },

{  name: "RP3 By Trevo-20 counts", category: "health", slug: 'trevo4',
image: "/images/p4.jpg",
 price: 10000, countInStock: 0, brand: "Health", rating: 3.5, reviewz: 8,
description: "High quality" },

{  name: "FP3 By Trevo-60 counts", category: "health", slug: 'trevo5',
image: "/images/p1.jpg", 
price: 22000,countInStock: 4, brand: "Health", rating: 4.0, reviewz: 8,
description: "High quality" },

{  name: "FP3 By Trevo-20 counts", category: "health", slug: 'trevo6',
image:"/images/p2.jpg",
 price: 10000 ,countInStock: 2,brand: "Health", rating: 4.0, reviewz: 8,
description: "High quality" },

{  name: "Shield By Trevo-60 counts", category: "health", slug: 'trevo7',
image: "/images/p3.jpg", price: 20000, countInStock: 0, brand: "Health", rating: 4.0, reviewz: 20,
description: "High quality" },

{ name: "Shield By Trevo-90 counts", category: "health", slug: 'trevo8',
image: "/images/p4.jpg", price: 20000, countInStock: 0, brand: "Health", rating: 4.0, reviewz: 20,
description: "High quality" },

{ name: "Another shield", category: "health", slug: 'trevo9',
image: "/images/p4.jpg", price: 21000, countInStock: 10, brand: "Health", rating: 4.0, reviewz: 20,
description: "High quality" },

{  name: "Shield ", category: "Pharmacy", slug: 'trevo71',
image: "/images/p3.jpg", price: 29000, countInStock: 0, brand: "Health", rating: 4.0, reviewz: 20,
description: "High quality" },

{ name: "Shield By", category: "Supermarket", slug: 'trevo81',
image: "/images/p5.jpg", price: 27000, countInStock: 0, brand: "Health", rating: 4.0, reviewz: 20,
description: "High quality" },

{ name: "Another shield and life", category: "Store", slug: 'trevo91',
image: "/images/p6.jpg", price: 22000, countInStock: 10, brand: "Health", rating: 4.0, reviewz: 20,
description: "High quality" },

    ]
};

export default data;




