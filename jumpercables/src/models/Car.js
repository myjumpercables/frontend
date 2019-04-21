import {Service} from './Service'

export class Car {
  constructor(id, model, make, year, services) {
    this.id = id;
    this.model = model;
    this.make = make;
    this.year = year;
    this.services = [
                    new Service("Broken Altenator", "My Car doesn't moveDASDASFAJFISFJASFNIFANFFI", "4/20/19"), 
                    new Service("Loud Noises from Muffler", "Car growls when I try to feed it", "4/2/19")
                    ]
  }
}
