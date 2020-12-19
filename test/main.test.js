const expect = require("chai").expect;
const add = require("../main");

describe("Checking equality", () => {
    it("should return true if addition is correct", () => {
     let a=7;
     let b=6;
     let expected= 13;
     let actual = add(a,b);
     
        expect(actual).to.equal(expected); // no error
    });
  });