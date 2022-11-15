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

  setHoroscope(horoscope){
    this.horoscope = horoscope;
  }

}