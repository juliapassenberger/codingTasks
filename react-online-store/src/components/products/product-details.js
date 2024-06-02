// JS to create data for products

// Define product class
class Product {
    constructor(id, name, description, price, colours, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.colours = colours;
        this.image = image;
    }
}


// Create 10 product objects
let product1 = new Product(
    1,
    'Velvet Throne'
    , 'Rule your space with the Velvet Throne. This chair blends plush comfort the elegance of bare necessities, a must-have for anybody.'
    , 899.99, ['Comfort brown', 'Shalour coral', 'Midnight blue', 'Crushed ice'], 'sam-moghadam-khamseh-ofxbaFNFNmo-unsplash.jpg'
);

let product2 = new Product(
    2,
    'Cloud Nine Armchair'
    , 'Float away on the Cloud Nine Armchair. Its luxurious cushioning and sleek design make it a dreamy addition to any home.'
    , 749.99, ['Honey yellow', 'Mossy green', 'Heart red', 'Pirate green'], 'gabriela-fechet-xmbyHuNy828-unsplash.jpg'
);

let product3 = new Product(
    3,
    'Blissful Oasis One-Seater'
    , 'Create your personal retreat with the Blissful Oasis One-Seater. Comfort and style come together in this serene seating option.'
    , 599.99, ['Creamy home', 'Bubble gum', 'Honey yellow', 'Shalour coral'], 'avery-klein-JaXs8Tk5Iww-unsplash.jpg'

);

let product4 = new Product(
    4,
    'Glamour Lounger'
    , 'Lounge in luxury with the Glamour Lounger. Its chic design and supreme comfort make it the star of any room, especially yours.'
    , 1099.99, ['Sand dune', 'Blissful blue', 'Mossy green'], 'scopic-ltd-NLlWwR4d3qU-unsplash.jpg'
);

let product5 = new Product(
    5,
    'Divine Recline'
    , 'Experience paradise with the Divine Recline. This recliner offers unmatched comfort and a heavenly design to elevate your space.'
    , 1299.99, ['Pirate green', 'Crushed ice', 'Creamy home'], 'khloe-arledge-8Rz_RIyp5FM-unsplash.jpg'
);

let product6 = new Product(
    6,
    'Starlit Armchair'
    , 'Sit under the stars with the Starlit Armchair. A touch of sparkle and supreme comfort make this chair a standout piece.'
    , 799.99, ['Bubble gum', 'Shalour coral', 'Heart red', 'Midnight blue'], 'joshua-lawrence-q838OXUOO74-unsplash.jpg'
);

let product7 = new Product(
    7,
    'Eleganza One-Seater'
    , 'Sophistication meets comfort in the Eleganza One-Seater. Perfect for those who appreciate high-end design and cozy seating.'
    , 679.99, ['Crushed ice', 'Mossy green', 'Midnight blue', 'Sand dune'], 'daniil-silantev-1P6AnKDw6S8-unsplash.jpg'
);

let product8 = new Product(
    8,
    'Luxura Comfort Chair'
    , 'Indulge in the Luxora Comfort Chair. Its modern elegance and plush seating make it an irresistible addition to your home.'
    , 899.99, ['Onyx black', 'Crushed ice', 'Blissful blue', 'Pirate green'], 'juan-burgos-Dp2xzrdXrNs-unsplash.jpg'
);

let product9 = new Product(
    9,
    'Royale Recliner'
    , 'Relax like royalty with the Royale Recliner. Combining design of greatness with ultimate comfort, the perfect fit for an emperor.'
    , 1499.99, ['Pirate green', 'Creamy home', 'Sand dune', 'Blissful blue'], 'wesley-shen-2Kk81Yj8TM8-unsplash.jpg'
);

let product10 = new Product(
    10,
    'Serenade Armchair'
    , 'Let the Serenade Armchair sing its song of comfort and style in your home. Perfect for adding a touch of elegance to any room.'
    , 699.99, ['Midnight blue', 'Honey yellow', 'Granite grey', 'Shalour coral'], 'kam-idris-_HqHX3LBN18-unsplash.jpg'
);


// Add all product objects to an array
let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];

export default products;
