class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.reviews = [];
  }

  getDetails() {
    return `Name: ${this.name}\nPrice: $${this.price}\nDescription: ${this.description}`;
  }

  addReview(review) {
    this.reviews.push(review);
  }

  getAverageRating() {
    if (this.reviews.length === 0) {
      return 0;
    }
    const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / this.reviews.length).toFixed(1);
  }
}

class ElectronicsProduct extends Product {
  constructor(name, price, description, warrantyPeriod, brand) {
    super(name, price, description);
    this.warrantyPeriod = warrantyPeriod;
    this.brand = brand;
  }

  getDetails() {
    return `${super.getDetails()}\nBrand: ${this.brand}\nWarranty: ${this.warrantyPeriod} months`;
  }
}

class ClothingProduct extends Product {
  constructor(name, price, description, size, material, gender) {
    super(name, price, description);
    this.size = size;
    this.material = material;
    this.gender = gender;
  }

  getDetails() {
    return `${super.getDetails()}\nSize: ${this.size}\nMaterial: ${this.material}\nGender: ${this.gender}`;
  }
}

class Review {
  constructor(customer, product, rating, comment) {
    this.customer = customer;
    this.product = product;
    this.rating = rating;
    this.comment = comment;
  }
}

class OrderBase {
  constructor(customer, products) {
    if (this.constructor === OrderBase) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.orderId = Date.now();
    this.customer = customer;
    this.products = products;
    this.createdAt = new Date();
  }

  calculateTotalPrice() {
    throw new Error("Method 'calculateTotalPrice()' must be implemented.");
  }

  processPayment() {
    throw new Error("Method 'processPayment()' must be implemented.");
  }
}

class OnlineOrder extends OrderBase {
  constructor(customer, products) {
    super(customer, products);
    this.totalPrice = this.calculateTotalPrice();
    this.status = 'pending';
  }

  calculateTotalPrice() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  processPayment() {
    console.log(`Processing payment of $${this.totalPrice} for order ${this.orderId}...`);
    this.status = 'completed';
    console.log('Payment successful.');
  }
}

class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.orderHistory = [];
    this.reviews = [];
  }

  searchProducts(keyword, catalog) {
    const searchTerm = keyword.toLowerCase();
    return catalog.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  }

  placeOrder(productsArray) {
    const order = new OnlineOrder(this, productsArray);
    this.orderHistory.push(order);
    return order;
  }

  viewOrderHistory() {
    console.log(`\n--- Order History for ${this.name} ---`);
    if (this.orderHistory.length === 0) {
      console.log('No orders found.');
      return;
    }
    this.orderHistory.forEach(order => {
      console.log(`Order ID: ${order.orderId}, Total: $${order.totalPrice}, Status: ${order.status}, Products: ${order.products.map(p => p.name).join(', ')}`);
    });
  }

  leaveReview(product, rating, comment) {
    const review = new Review(this, product, rating, comment);
    this.reviews.push(review);
    product.addReview(review);
    return review;
  }
}

const productCatalog = [
  new ElectronicsProduct('Laptop Pro', 1200, 'A powerful laptop for professionals.', 24, 'TechBrand'),
  new ElectronicsProduct('Wireless Mouse', 40, 'An ergonomic wireless mouse.', 12, 'Clicker'),
  new ClothingProduct('T-Shirt', 25, 'A comfortable cotton t-shirt.', 'M', 'Cotton', 'Unisex'),
  new ClothingProduct('Running Shoes', 90, 'Lightweight shoes for running.', '10', 'Synthetic', 'Male')
];

const customer = new Customer('John Doe', 'john.doe@example.com');

console.log('--- Searching for "laptop" ---');
const searchResults = customer.searchProducts('laptop', productCatalog);
console.log(searchResults.map(p => p.name));

console.log('\n--- Placing an Order ---');
const itemsToOrder = [productCatalog[0], productCatalog[1]];
const newOrder = customer.placeOrder(itemsToOrder);
console.log(`Order created with ID: ${newOrder.orderId}`);

newOrder.processPayment();
customer.viewOrderHistory();

console.log('\n--- Leaving Reviews ---');
customer.leaveReview(productCatalog[0], 5, 'Absolutely fantastic machine!');
customer.leaveReview(productCatalog[0], 4, 'Great value for the price.');
customer.leaveReview(productCatalog[2], 5, 'So soft and fits perfectly.');

console.log('\n--- Checking Product Details and Ratings ---');
const laptop = productCatalog[0];
console.log(laptop.getDetails());
console.log(`Average Rating: ${laptop.getAverageRating()}`);

const tShirt = productCatalog[2];
console.log(`\n${tShirt.getDetails()}`);
console.log(`Average Rating: ${tShirt.getAverageRating()}`);