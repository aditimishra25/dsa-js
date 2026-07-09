/**
 * Car Fleet
 *
 * A fleet is a group of cars that travel together.
 *
 * Rules:
 * - Cars move towards the target.
 * - A car cannot pass another car.
 * - If a faster car catches a slower car,
 *   they become one fleet.
 *
 * Idea:
 * 1. Calculate how long each car takes to reach the target.
 * 2. Sort cars by position (closest to target first).
 * 3. Process from front to back.
 * 4. If a car would arrive sooner than the fleet ahead,
 *    it catches that fleet and joins it.
 * 5. Otherwise it forms a new fleet.
 *
 * Time Complexity: O(n log n)
 * - Sorting dominates
 *
 * Space Complexity: O(n)
 *
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  // Store:
  // [position, time_to_reach_target]
  let cars = [];

  // Calculate arrival time for every car
  for (let i = 0; i < position.length; i++) {
    // Formula:
    // time = distance / speed
    let time = (target - position[i]) / speed[i];

    cars.push([position[i], time]);
  }

  /**
   * Sort cars by position descending
   *
   * Closest to target comes first.
   *
   * Example:
   *
   * Before:
   * [
   *   [10,1],
   *   [8,1],
   *   [0,12],
   *   [5,7],
   *   [3,3]
   * ]
   *
   * After:
   * [
   *   [10,1],
   *   [8,1],
   *   [5,7],
   *   [3,3],
   *   [0,12]
   * ]
   */
  cars.sort((a, b) => b[0] - a[0]);

  // Number of fleets found so far
  let fleetCount = 0;

  /**
   * Arrival time of the fleet ahead.
   *
   * Example:
   *
   * If the fleet ahead reaches target in 7 hours,
   * any car behind with time <= 7
   * will eventually catch that fleet.
   */
  let fleetTime = 0;

  // Process cars from closest to target to farthest
  for (let i = 0; i < cars.length; i++) {
    let currentTime = cars[i][1];

    /**
     * If current car takes MORE time than the fleet ahead:
     *
     * Example:
     * fleet ahead = 1 hour
     * current car = 7 hours
     *
     * This car is too slow to catch the fleet ahead.
     *
     * Therefore:
     * -> New fleet formed
     */
    if (currentTime > fleetTime) {
      fleetCount++;

      // This fleet becomes the new fleet ahead
      fleetTime = currentTime;
    }

    /**
     * Else:
     *
     * currentTime <= fleetTime
     *
     * Example:
     * fleet ahead = 7 hours
     * current car = 3 hours
     *
     * The car behind is faster and would arrive sooner.
     * Therefore it catches the fleet ahead.
     *
     * No new fleet is created.
     */
  }

  return fleetCount;
};

// ------------------------revision-1---------------------------------
var carFleet = function (target, position, speed) {
  let cars = [];
  for (let i = 0; i < position.length; i++) {
    let time = (target - position[i]) / speed[i];

    cars.push([position[i], time]);
  }

  cars.sort((a, b) => b[0] - a[0]);

  let fleetCount = 0;
  let fleetTime = 0;

  for (let i = 0; i < cars.length; i++) {
    let carTime = cars[i][1];

    if (carTime > fleetTime) {
      fleetCount++;
      fleetTime = carTime;
    }
  }
  return fleetCount;
};
