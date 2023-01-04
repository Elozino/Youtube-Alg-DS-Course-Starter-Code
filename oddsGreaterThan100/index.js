// Return odd numbers greater than 100

function oddsGreaterThan100() {
  let oddNumberGreaterThan100 = [];
  for (let i = 101; i <= 200; i += 2) {
    oddNumberGreaterThan100.push(i);
  }
  console.log(oddNumberGreaterThan100);
  return oddNumberGreaterThan100;
}

// oddsGreaterThan100();

// OR

function oddsGreaterThan100(value) {
  if (value % 2 !== 0) {
    return value;
  } else {
    return "Value is an odd number";
  }
  // Using ternary operator
  // return value % 2 !== 0 ? value : "Value is an even number";
}

// oddsGreaterThan100(3);

///////////////////////
function oddsGreaterThan100() {
  return 113;
}

oddsGreaterThan100();

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("oddsGreaterThan100", () => {
  it("returns an odd number.", () => {
    const res = oddsGreaterThan100();
    assert.equal(typeof res, "number");
    assert.equal(res % 2 !== 0, true);
  });
  it("returns a number greater than 100.", () => {
    const res = oddsGreaterThan100();
    assert.equal(typeof res, "number");
    assert.equal(res > 100, true);
  });
});

mocha.run();
