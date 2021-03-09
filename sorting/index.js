// Implement a swap helper function that we will use in both BS and SS
function swap(arr, i, j) {
  const valAtI = arr[i];
  const valAtJ = arr[j];
  arr[i] = valAtJ;
  arr[j] = valAtI;
}

//bubbleSort works by having sorted data accumulate at end of array
function bubbleSort(arr) {
  for(i=0; i < arr.length; i++){
    for (let j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }

  return arr
}

//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let savedIndex = i;
    for (let j = 1; j < arr.length; j++) {
      if(arr[j + i] < arr[savedIndex]) {
        savedIndex = j + i
      }
    }
    swap(arr, i, savedIndex);
  }
  return arr
}

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

describe("swap()", () => {
  it("swaps values in an array when provided with 2 indexes.", () => {
    const arr = [13, 2, 4];
    swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe("Bubble Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("Selection Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(selectionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
