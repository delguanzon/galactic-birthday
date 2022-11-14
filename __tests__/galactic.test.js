import GalacticBirthCalc from './../src/js/galactic.js';

describe ('GalacticBirthCalc', ()=> {

  let gBirthCalcRe;

  test("should create a GalacticBirthdayCalc object with the user's age in years", ()=> {
    const gBirthCalc = new GalacticBirthCalc(53);
    expect(gBirthCalc.age).toEqual(53);
  });

  test("should display NaN if the user did not enter a number", () => {
    const gBirthCalc = new GalacticBirthCalc();
    expect(gBirthCalc.age).toEqual(0);
  });

  test("should display NaN if the user entered a non-numerical value", () => {
    const gBirthCalc = new GalacticBirthCalc('fifty three');
    expect(gBirthCalc.age).toEqual("NaN");
  });

  beforeEach(() => {
    let gBirthCalcRe = new GalacticBirthCalc(100);
  });

  test("Convert earth age to mercury age", () => {    
    expect(gBirthCalcRe.getMercuryAge()).toEqual(24);
  });

});