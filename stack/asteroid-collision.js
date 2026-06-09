/**
 * Asteroid Collision
 *
 * Positive number  -> moving right  ➡️
 * Negative number  -> moving left   ⬅️
 *
 * Collision can happen ONLY when:
 *
 * stack top > 0
 * current asteroid < 0
 *
 * Example:
 *  5   -3
 * ➡️   ⬅️
 *
 * They move toward each other.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

    // Stores asteroids that have survived so far
    let stack = [];

    // Process each asteroid one by one
    for (let i = 0; i < asteroids.length; i++) {

        // Assume current asteroid survives
        let isAlive = true;

        /**
         * Collision is possible only when:
         *
         * stack top is moving right  (> 0)
         * current is moving left     (< 0)
         *
         * Example:
         * [5, 10]
         *       -6
         *
         * 10 and -6 will collide
         */
        while (
            isAlive &&
            stack.length > 0 &&
            stack[stack.length - 1] > 0 &&
            asteroids[i] < 0
        ) {

            // Remove the top asteroid to compare sizes
            let top = stack.pop();

            /**
             * Case 1:
             * Top asteroid is larger
             *
             * Example:
             * 10 vs -5
             *
             * 10 survives
             * -5 explodes
             */
            if (Math.abs(top) > Math.abs(asteroids[i])) {

                // Put the winner back
                stack.push(top);

                // Current asteroid died
                isAlive = false;
            }

            /**
             * Case 2:
             * Current asteroid is larger
             *
             * Example:
             * 5 vs -10
             *
             * -10 survives
             * 5 explodes
             *
             * Don't push -10 yet.
             * It may collide with earlier asteroids.
             *
             * Example:
             * [3,5,-10]
             *
             * After killing 5,
             * -10 must still fight 3.
             */
            else if (Math.abs(top) < Math.abs(asteroids[i])) {

                // Current asteroid survives.
                // Continue the while loop and check
                // for more collisions.
            }

            /**
             * Case 3:
             * Same size
             *
             * Example:
             * 5 vs -5
             *
             * Both explode
             */
            else {

                // Current asteroid dies
                isAlive = false;

                // Top asteroid already popped,
                // so both are gone.
            }
        }

        /**
         * If current asteroid survived all collisions,
         * add it to the stack.
         */
        if (isAlive) {
            stack.push(asteroids[i]);
        }
    }

    // Remaining asteroids are the answer
    return stack;
};