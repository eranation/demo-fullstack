module Sayings {
  export class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "Hello4, " + this.greeting;
    }
  }
}
export = Sayings