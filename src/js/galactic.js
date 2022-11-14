export default class GalacticBirthCalc {
  constructor(age){
    if(!isNaN(age))
      this.age = age;
    else
      this.age = 'NaN';
  }
}