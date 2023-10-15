class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature() {
    return this.signature;
  }
}
class MyHouse {
  private locked: boolean = true;
  private key: Key | null;

  constructor(key: Key | null) {
    this.key = key;
  }

  openDoor(key: Key | null): void {
    if (key === this.key) {
      this.locked = false;
      console.log("Door unlocked.");
    } else {
      console.log("The key doesn't fit. The doors remain closed.");
    }
  }

  comeIn(person: Person): void {
    if (!this.locked) {
      console.log(`${person.constructor.name} enters the House.`);
    } else {
      console.log("The door is closed. You can't log in.");
    }
  }
}

class Person {
  private key: Key | null;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key | null {
    return this.key;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
