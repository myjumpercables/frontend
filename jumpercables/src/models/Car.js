import {Service} from './Service'
import {Repair} from "./Repair";

export class Car {
  constructor(id, model, make, year, services) {
    this.id = id;
    this.model = model;
    this.make = make;
    this.year = year;
    this.services = [
                    new Service(undefined, "Broken Altenator", "My Car doesn't moveDASDASFAJFISFJASFNIFANFFI", "4/20/19", [new Repair('Alternator Fix', 1300, 'We had to fully replace the alternator in this car')]),
                    new Service(undefined, "Loud Noises from Muffler", "Car growls when I try to feed it", "4/2/19")
                    ]
  }
}
