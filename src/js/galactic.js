export default class GalacticBirthCalc {
  constructor(age){
    if(isNaN(age))
      this.age = 'NaN';
    else
      this.age = age;
  }
}