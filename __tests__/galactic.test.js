import GalacticBirthCalc from './../src/js/galactic.js';

describe('GalacticBirthCalc', () => {

  let gBirthCalcRe;

  test("should create a GalacticBirthdayCalc object with the user's age in years", () => {
    const gBirthCalc = new GalacticBirthCalc(53);
    expect(gBirthCalc.age).toEqual(53);
  });

  test("should display 0 if the user did not enter a number", () => {
    const gBirthCalc = new GalacticBirthCalc();    
    expect(gBirthCalc.validateAge()).toEqual(0);
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
    expect(gBirthCalcRe.getZodiacExp('Aquarius')).toEqual(89);
  });

  test("Tell that the life expectancy for Taurus is 87", () => {
    expect(gBirthCalcRe.getZodiacExp('Taurus')).toEqual(87);
  });

  test("Tell that the life expectancy for Aries is 91", () => {
    expect(gBirthCalcRe.getZodiacExp('Aries')).toEqual(91);
  });

  test("Tell that the life expectancy for Gemini is 77", () => {
    expect(gBirthCalcRe.getZodiacExp('Gemini')).toEqual(77);
  });

  test("Tell that the life expectancy for Cancer is 55", () => {
    expect(gBirthCalcRe.getZodiacExp('Cancer')).toEqual(55);
  });

  test("Tell that the life expectancy for Leo is 67", () => {
    expect(gBirthCalcRe.getZodiacExp('Leo')).toEqual(67);
  });

  test("Tell that the life expectancy for Virgo is 91", () => {
    expect(gBirthCalcRe.getZodiacExp('Virgo')).toEqual(89);
  });

  test("Tell that the life expectancy for Libra is 104", () => {
    expect(gBirthCalcRe.getZodiacExp('Libra')).toEqual(104);
  });

  test("Tell that the life expectancy for Scorpio is 66", () => {
    expect(gBirthCalcRe.getZodiacExp('Scorpio')).toEqual(66);
  });

  test("Tell that the life expectancy for Sagittarius is 65", () => {
    expect(gBirthCalcRe.getZodiacExp('Sagittarius')).toEqual(65);
  });

  test("Tell that the life expectancy for Capricorn is 101", () => {
    expect(gBirthCalcRe.getZodiacExp('Capricorn')).toEqual(101);
  });

  test("Tell that the life expectancy for Pisces is 69", () => {
    expect(gBirthCalcRe.getZodiacExp('Pisces')).toEqual(69);
  });

  test("Tell the life expectancy of a zodiac regardless of letter cases", () => {
    expect(gBirthCalcRe.getZodiacExp('Pisces')).toEqual(69);
    expect(gBirthCalcRe.getZodiacExp('pisces')).toEqual(69);
    expect(gBirthCalcRe.getZodiacExp('PISCES')).toEqual(69);
  });

  test("should display the user's surpassed years on earth", () => {
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Earth')).toEqual(31);
  });

  test("should display the user's surpassed years on venus", () => {
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Venus')).toEqual(19.22);
  });

  test("should display the user's surpassed years on mercury", () => {
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Mercury')).toEqual(7.44);
  });

  test("should display the user's surpassed years on mars", () => {
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Mars')).toEqual(58.28);
  });

  test("should display the user's surpassed years on jupiter", () => {
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Jupiter')).toEqual(367.66);
  });

  test("should round the user's surpassed years to two decimal places", () => {
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Mercury')).toEqual(7.44);
  });

  test("should display the user's remaining years on earth", () => {
    gBirthCalcRe = new GalacticBirthCalc(30);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Earth')).toEqual(39);
  });

  test("should display the user's remaining years on earth", () => {
    gBirthCalcRe = new GalacticBirthCalc(30);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Venus')).toEqual(24.18);
  });

  test("should display the user's remaining years on Venus", () => {
    gBirthCalcRe = new GalacticBirthCalc(30);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Venus')).toEqual(24.18);
  });

  test("should display the user's remaining years on Mercury", () => {
    gBirthCalcRe = new GalacticBirthCalc(30);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Mercury')).toEqual(9.36);
  });

  test("should display the user's remaining years on Mars", () => {
    gBirthCalcRe = new GalacticBirthCalc(30);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Mars')).toEqual(73.32);
  });

  test("should display the user's remaining years on Jupiter", () => {
    gBirthCalcRe = new GalacticBirthCalc(30);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Jupiter')).toEqual(462.54);
  });

  test("should display the user's remaining/surpassed years regardless of planet letter case", () => {
    gBirthCalcRe = new GalacticBirthCalc(30);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'Jupiter')).toEqual(462.54);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'JUPITER')).toEqual(462.54);
    expect(gBirthCalcRe.getYearsLeft('Pisces', 'jupiter')).toEqual(462.54);
  });
});