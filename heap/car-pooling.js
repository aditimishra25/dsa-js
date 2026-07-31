/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 *
 * Intuition:
 * ----------
 * Instead of simulating every passenger individually,
 * record only where passengers enter (+) and leave (-).
 *
 * changes[i] = net change in passengers at location i.
 *
 * Then take a running sum (prefix sum) to know
 * how many passengers are currently in the car.
 *
 * Time Complexity: O(n + 1000) ≈ O(n)
 * Space Complexity: O(1000) ≈ O(1)
 */

var carPooling = function (trips, capacity) {
  // Maximum location is 1000
  let changes = new Array(1001).fill(0);

  // Record passenger changes
  for (let trip of trips) {
    let passengers = trip[0];
    let from = trip[1];
    let to = trip[2];

    // Passengers get in
    changes[from] += passengers;

    // Passengers get out
    changes[to] -= passengers;
  }

  // Current passengers in the car
  let currentPassengers = 0;

  // Walk through every location
  for (let i = 0; i < changes.length; i++) {
    // Apply all passenger changes
    currentPassengers += changes[i];

    // Capacity exceeded
    if (currentPassengers > capacity) {
      return false;
    }
  }

  return true;
};
