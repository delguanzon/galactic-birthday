export default class GalacticBirthCalc {
  constructor(age) {
    this.age = age;
  }

  validateAge() {
    if (this.age === undefined)
      this.age = 0;
    if (isNaN(this.age))
      this.age = 'NaN';
    return this.age;
  }

  getMercuryAge() {
    const age = this.validateAge();
    return age * 0.24;
  }

  getVenusAge() {
    const age = this.validateAge();
    return age * 0.62;
  }

  getMarsAge() {
    const age = this.validateAge();
    return age * 1.88;
  }

  getJupiterAge() {
    const age = this.validateAge();
    return age * 11.86;
  }

  getZodiacExp(zodiac) {
    const zodiacMap = new Map([
      ['aries', 91],
      ['taurus', 87],
      ['gemini', 77],
      ['cancer', 55],
      ['leo', 67],
      ['virgo', 89],
      ['libra', 104],
      ['scorpio', 66],
      ['sagittarius', 65],
      ['capricorn', 101],
      ['pisces', 69],
      ['aquarius', 89],
    ]);
    return zodiacMap.get(zodiac.toLowerCase());
  }

  getYearsLeft(zodiac, planet) {
    const planetName = planet.toLowerCase();
    const age = this.validateAge();
    const planetMap = new Map([
      ['earth', 1],
      ['mercury', 0.24],
      ['venus', 0.62],
      ['mars', 1.88],
      ['jupiter', 11.86]
    ]);
    if (age > this.getZodiacExp(zodiac)) {
      return Number(((age - this.getZodiacExp(zodiac)) * planetMap.get(planetName)).toFixed(2));
    }
    return Number(((this.getZodiacExp(zodiac) - age) * planetMap.get(planetName)).toFixed(2));

  }
}
