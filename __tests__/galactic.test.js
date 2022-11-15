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

  test("Tell that the life expectancy for Aquarius is 89", () => {
    expect(gBirthCalcRe.getRemainingYears('Aquarius')).toEqual(89);
  });

  test("Tell that the life expectancy for Taurus is 87", () => {
    expect(gBirthCalcRe.getRemainingYears('Taurus')).toEqual(87);
  });

  test("Tell that the life expectancy for Aries is 91", () => {
    expect(gBirthCalcRe.getRemainingYears('Aries')).toEqual(91);
  });

  test("Tell that the life expectancy for Gemini is 77", () => {
    expect(gBirthCalcRe.getRemainingYears('Gemini')).toEqual(77);
  });

  test("Tell that the life expectancy for Cancer is 55", () => {
    expect(gBirthCalcRe.getRemainingYears('Cancer')).toEqual(55);
  });

  test("Tell that the life expectancy for Leo is 67", () => {
    expect(gBirthCalcRe.getRemainingYears('Leo')).toEqual(67);
  });

  test("Tell that the life expectancy for Virgo is 91", () => {
    expect(gBirthCalcRe.getRemainingYears('Virgo')).toEqual(89);
  });

  test("Tell that the life expectancy for Libra is 104", () => {
    expect(gBirthCalcRe.getRemainingYears('Libra')).toEqual(104);
  });

  test("Tell that the life expectancy for Scorpio is 66", () => {
    expect(gBirthCalcRe.getRemainingYears('Scorpio')).toEqual(66);
  });

  test("Tell that the life expectancy for Sagittarius is 65", () => {
    expect(gBirthCalcRe.getRemainingYears('Sagittarius')).toEqual(65);
  });

  test("Tell that the life expectancy for Capricorn is 101", () => {
    expect(gBirthCalcRe.getRemainingYears('Capricorn')).toEqual(101);
  });

  test("Tell that the life expectancy for Pisces is 69", () => {
    expect(gBirthCalcRe.getRemainingYears('Pisces')).toEqual(69);
  });

  test("Tell the life expectancy of a zodiac regardless of letter cases", () => {
    expect(gBirthCalcRe.getRemainingYears('Pisces')).toEqual(69);
    expect(gBirthCalcRe.getRemainingYears('pisces')).toEqual(69);
    expect(gBirthCalcRe.getRemainingYears('PISCES')).toEqual(69);
  });
});