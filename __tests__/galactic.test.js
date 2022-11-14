import GalacticBirthCalc from './../src/js/galactic.js';

describe ('GalacticBirthCalc', ()=> {

  test("should create a GalacticBirthdayCalc object with the user's age in years", ()=> {
    const gBirthCalc = new GalacticBirthCalc(53);
    expect(gBirthCalc.age).toEqual(53);
  });

});