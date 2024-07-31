class Customer {
  constructor(private firstName: string, private lastName: string) {}

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
}

class Feedback {
  constructor(
    private customer: Customer,
    private comment: string,
    private score?: number
  ) {}

  getCustomer() {
    return this.customer;
  }
  getComment() {
    return this.comment;
  }
  getScore() {
    return this.score;
  }
}

class Product {
  public feedbacks: Feedback[] = [];

  constructor(private name: string, private price: number) {}

  addFeedbacks(...newFeedbacks: Feedback[]) {
    this.feedbacks = this.feedbacks.concat(newFeedbacks);
  }

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }
}

class Store {
  private customers: Customer[] = [];
  private products: Product[] = [];

  constructor(private name: string) {}

  addCustomers(...newCustomers: Customer[]): void {
    this.customers = this.customers.concat(newCustomers);
  }

  addProducts(...newProduct: Product[]): void {
    this.products = this.products.concat(newProduct);
  }

  getProductsLessThan(amount: number): Product[] {
    let result: Product[] = [];
    for (let product of this.products) {
      if (product.getPrice() <= amount) {
        result.push(product);
      }
    }
    return result;
  }

  getFeedbacksWith(keyword: string): Feedback[] {
    let result: Feedback[] = [];
    for (let product of this.products) {
      for (let feedback of product.feedbacks) {
        if (feedback.getComment().includes(keyword)) {
          result.push(feedback);
        }
      }
    }
    return result;
  }

  getCommentsFrom(customer: Customer): string[] {
    let result: string[] = [];
    for (let product of this.products) {
      for (let feedback of product.feedbacks) {
        if (
          feedback.getCustomer().getFirstName() === customer.getFirstName() &&
          feedback.getCustomer().getLastName() === customer.getLastName()
        ) {
          result.push(feedback.getComment());
        }
      }
    }
    return result;
  }
}

// create Customers
let john = new Customer("John", "Smith");
let rady = new Customer("Rady", "Div");

// Create feedbacks
let cocacola = new Product("Cocacola", 2.5);
cocacola.addFeedbacks(new Feedback(john, "good", 10));
cocacola.addFeedbacks(new Feedback(rady, "bad", 5));

let sting = new Product("ST", 10);
sting.addFeedbacks(new Feedback(john, "I like it", 10));
sting.addFeedbacks(new Feedback(rady, "I don't like it", 30));

// create store
let aeon = new Store("Aeon");
aeon.addCustomers(john, rady);
aeon.addProducts(sting, cocacola);

console.log(aeon.getProductsLessThan(100));
console.log(aeon.getFeedbacksWith("good"));