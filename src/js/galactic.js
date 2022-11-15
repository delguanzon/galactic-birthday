export default class GalacticBirthCalc {
  constructor(age){
    if(age === undefined)
      this.age = 0;
    else if(isNaN(age))
      this.age = 'NaN';
    else
      this.age = age;
  }

  getMercuryAge(){
    return this.age*0.24;
  }

  getVenusAge(){
    return this.age*0.62;
  }

  getMarsAge(){
    return this.age*1.88;
  }

  getJupiterAge(){
    return this.age*11.86;
  }

  getRemainingYears(horoscope) {
    const horoscopeMap = new Map ([
      ['Aries',91],
      ['Taurus',87],
      ['Gemini',77],
      ['Cancer',55],
      ['Leo',67],
      ['Virgo',89],
      ['Libra',104],
      ['Scorpio',66],
      ['Sagittarius',65],
      ['Capricorn',101],
      ['Pisces',69],
      ['Aquarius',89],
    ]);
    return horoscopeMap.get(horoscope);
  }
}
