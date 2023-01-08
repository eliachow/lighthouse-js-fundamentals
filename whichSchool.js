const whichSchool = function (age) {
  for (i = 1; i < 12; i++) {
    expect(whichSchool(i)).to.be.equal("Elementary School");
  }
  for (i = 13; i < 19; i++) {
    expect(whichSchool(i)).to.be.equal("Secondary School");
  }
  for (i = 19; i < 100; i++) {
    expect(whichSChool(i)).to.be.equal("Lighthouse Labs");
  }
};

console.log(whichSchool(22)); //call the function
