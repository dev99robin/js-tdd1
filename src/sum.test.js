describe("Test narrow function declaration", function() {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 10 + 15 to equal 25', () => {
    expect(sum(10, 15)).not.toBe(125);
  });
});

describe("Test var function declaration", function() {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum2(1, 2)).toBe(3);
  });

  it('adds 10 + 15 to equal 25', () => {
    expect(sum2(10, 15)).not.toBe(125);
  });
});

describe("Test traditional function declaration", function() {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum3(1, 2)).toBe(3);
  });

  it('adds 10 + 15 to equal 25', () => {
    expect(sum3(10, 15)).not.toBe(125);
  });
});
