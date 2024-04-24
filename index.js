function findKthLargest() {
    const inputArray = document.getElementById('inputArray').value.split(',').map(Number);
    const k = parseInt(document.getElementById('kValue').value);
    const sortedArray = inputArray.sort((a, b) => b - a); // Descending order
    const kthLargest = sortedArray[k - 1];
    document.getElementById('kthOutput').innerText = `Kth Largest/Smallest Element: ${kthLargest}`;
}

function reverseString() {
    const inputString = document.getElementById('reverseStringInput').value;
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById('reverseStringOutput').innerText = `Reversed String: ${reversedString}`;
}

// Implement other functionalities in a similar manner
