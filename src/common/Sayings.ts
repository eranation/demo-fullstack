module Sayings {
  export class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet(times: number, foo?:boolean, bar:string = "test") {
      return Array(times + 1).join(this.greeting);
      //return "Hello5, " + this.greeting;
    }
  }
}
export = Sayings