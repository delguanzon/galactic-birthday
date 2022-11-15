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
    gBirthCalcRe = new GalacticBirthCalc(100);
  });

  test("Convert earth age to mercury age", () => {    
    expect(gBirthCalcRe.getMercuryAge()).toEqual(24);
  });

  test("Convert earth age to venus age", () => {    
    expect(gBirthCalcRe.getVenusAge()).toEqual(62);
  });

  test("Convert Earth age to Mars age", () => {    
    expect(gBirthCalcRe.getMarsAge()).toEqual(188);
  });

  test("Convert Earth age to Jupiter age", () => {    
    expect(gBirthCalcRe.getJupiterAge()).toEqual(1186);
  });

  test("Convert Earth age to Jupiter age", () => {    
    expect(gBirthCalcRe.getJupiterAge()).toEqual(1186);
  });

  test("Should set the object's horoscope", () => {
    gBirthCalcRe.setHoroscope('Capricorn');
    expect(gBirthCalcRe.horoscope).toEqual('Capricorn');
  });

  test("should tell how much the user's left to live based on their horoscope", () => {
    expect(gBirthCalcRe.getRemainingYears()).toEqual(80);
  });
});