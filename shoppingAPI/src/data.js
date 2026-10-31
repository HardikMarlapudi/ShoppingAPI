export const products = [
    {
        id: 1,
        title: "Iphone 9",
        price: 549.99,
        category: "smartphones",
        description: "An apple mobile which is nothing like apple",
        thumbnail: "/src/images/iphone9.jpg"
    },

    {
        id: 2,
        title: "Samsung Galaxy Book",
        price: 1499.99,
        category: "laptops",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        thumbnail: "/src/images/samsungGalaxyBook.jpg"
    },

    {
        id: 3,
        title: "OPPOF19",
        price: 280.99,
        category: "smartphones",
        description: "OPPO F19 is officially announced on April 2021.",
        thumbnail: "/src/images/OPPOF19.jpg"
    },

    {
        id: 4,
        title: "MacBook Pro",
        price: 1749.99,
        category: "laptops",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        thumbnail: "/src/images/macbookPro.jpg"
    },

    {
        id: 5,
        title: "Ipad Air 2020",
        price: 599.99,
        category: "tablets",
        description: "Apple iPad Air 2020 WiFi 64GB",
        thumbnail: "/src/images/ipadPro.jpg"
    },

    {
        id: 6,
        title: "Amazon Fire HD 8",
        price: 89.99,
        category: "tablets",
        description: "Amazon Fire HD 8 tablet with a vibrant 8-inch HD display, 32 GB, and up to 12 hours of battery life.",
        thumbnail: "/src/images/amazonFireHD8.jpg"
    }
]

export async function getProducts() {
   
    const response = await fetch('https://dummyjson.com/products?limit=30');

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    return data.products;
}
