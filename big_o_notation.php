<?php

/**
 \----------------------------------------------------------
 \ Big O Time Complexity
 \----------------------------------------------------------
 \
 \ O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N)
 \
 */

// O(1)
// Constant Time
function getFirstArrValue(array $arr) {
    return $arr[0];
}

// O(N)
// Linear Time
function printNumbers(array $arr) {
    $N = count($arr);
    for ($i = 0; $i < $N; $i++) {
        printf("%s", $arr[$i]);
    }
}

// O(2^N)
// Exponential Time
function fibonacci(int $N) {
    if ($N <= 1) return $N;

    return fibonacci($N - 1) + fibonacci($N - 2);
}

// O(N^2)
// Quadratic Time
function findPairs(array $arr) {
    $N = count($arr);

    for ($i = 0; $i < $N; $i++) { // N
        printf("Outer N:%s\n", $arr[$i]);
        for ($j = 0; $j < $N; $j++) { // N
            printf("Inner N:%s\n", $arr[$j]);
        }
        printf("\n");
    }
}

// O(log N)
// Logarithmic Time (only work on sorted array)
function findNumber(array $arr, int $target) {
    $N = count($arr);
    $left = 0;
    $right = $N - 1;

    while ($left <= $right) {
        $mid = $left + intdiv($right - $left, 2);

        if ($arr[$mid] === $target) {
            return $arr[$mid];
        }

        if ($arr[$mid] < $target) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }

    return -1;
}

// O(N log N)
// Linearithmic Time
// slower than O(N), faster than O(N^2)
function printSteps(int $N) {

    $step = 0;

    for ($i = 0; $i < $N; $i++) { // N
        for ($j = $N; $j > 1; $j = intdiv($j, 2)) { // log N
            $step++;
        }
    }

    echo $step;
}
