// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

// METHOD 1
function reverse(str) {
  return str.split("").reverse().join("");
}

// Operation is O(1) and Time Complexity is O(1)
// No space usage

// METHOD 2
// function reverse(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     result = char + result;
//   }
//   return result;
// }

// reverse("Zino");
// Operation is O(n) and Time Complexity is O(n)
// Space Complexity is O(n)

// METHOD 3
// function reverse(str) {
//   return str.split("").reduce((output, value) => {
//     output = value + output
//     return output;
//   }, "");
// }

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

describe("String Reversal", () => {
  it("reverse() correctly reverses string", () => {
    assert.equal(reverse("ffaa"), "aaff");
    assert.equal(reverse("  aaff"), "ffaa  ");
  });
});

mocha.run();
