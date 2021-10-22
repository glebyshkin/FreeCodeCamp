// task 56
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
    testNotEqual(10);

    // task 57
    // Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
    testStrictNotEqual(10);

    //task 58
    function testGreaterThan(val) {
        if (val > 100) {  // Change this line
          return "Over 100";
        }

        if (val > 10) {  // Change this line
          return "Over 10";
        }

        return "10 or Under";
      }
      testGreaterThan(10);

      // task 59
      function testGreaterOrEqual(val) {
        if (val >= 20) {  // Change this line
          return "20 or Over";
        }

        if (val >= 10) {  // Change this line
          return "10 or Over";
        }

        return "Less than 10";
      }

      testGreaterOrEqual(10);

      // task 60
      function testLessThan(val) {
        if (val < 25) {  // Change this line
          return "Under 25";
        }

        if (val < 55) {  // Change this line
          return "Under 55";
        }

        return "55 or Over";
      }

      testLessThan(10);