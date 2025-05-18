// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman', function() {
  it('TC-1: should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('TC-2: should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('TC-3: should convert 57 to "LVII"', function() {
    expect(integerToRoman(57)).to.equal('LVII');
  });

  it('TC-4: should throw error for empty input', function() {
    expect(() => integerToRoman("")).to.throw();
  });

  it('TC-5: should throw error for 0', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('TC-6: should throw error for 5000', function() {
    expect(() => integerToRoman(5000)).to.throw("The number must be between 1 and 3999.");
  });
});

describe('romanToInteger', function() {
  it('TC-7: should convert "X" to 10', function() {
    expect(romanToInteger('X')).to.equal(10);
  });

  it('TC-8: should convert "I" to 1', function() {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('TC-9: should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('TC-10: should throw error for invalid repetition "IIIIIIIII"', function() {
    expect(() => romanToInteger('IIIIIIIII')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC-11: should throw error for "MMMCMXCIXI" (invalid number)', function() {
    expect(() => romanToInteger('MMMCMXCIXI')).to.throw('The number must be between 1 and 3999.');
  });

  it('TC-12: should throw error for invalid character "A"', function() {
    expect(() => romanToInteger('A')).to.throw('The Roman numeral contains invalid characters.');
  });

  it('TC-13: should throw error for empty string', function() {
    expect(() => romanToInteger('')).to.throw('Input must be a valid Roman numeral.');
  });
});
