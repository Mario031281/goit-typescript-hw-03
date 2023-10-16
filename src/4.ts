class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature() {
    return this.signature;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];
  abstract openDoor(key: Key): void;

  constructor(key: Key) {
    this.key = key;
    this.door = false;
  }

  public comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key | null): void {
    if (key && key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door unlocked.");
    }
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

const key = new Key();
const house = new MyHouse(key);
const personKey = new Key();
const person = new Person(personKey);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
