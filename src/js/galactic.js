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
}