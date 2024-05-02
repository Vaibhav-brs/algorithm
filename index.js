
function findKthLargestAndSmallest() {
    const arrayInput = document.getElementById('array').value;
    const k = parseInt(document.getElementById('k').value);

    const array = arrayInput.split(',').map(Number);
    const sortedArray = array.slice().sort((a, b) => b - a);
    const kthLargest = sortedArray[k - 1];
    const kthSmallest = sortedArray[array.length - k];

    document.getElementById('kthResult').innerText = `Kth Largest: ${kthLargest}, Kth Smallest: ${kthSmallest}`;
}

function reverseString() {
    const stringInput = document.getElementById('string').value;
    const reversedString = stringInput.split('').reverse().join('');

    document.getElementById('reverseResult').innerText = `Reversed String: ${reversedString}`;
}

// Implement other functionalities in a similar manner
