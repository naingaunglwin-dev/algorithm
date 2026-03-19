<?php

/**
 * Bubble Sort
 * 
 * Best Case: O(N)
 * Average Case: O(N^2)
 * Worst Case: O(N^2)
 */
function bubbleSort(array $arr): array {
    $n = count($arr);
    $swapped = false;

    for ($i = 0; $i < $n - 1; $i++) {
        $swapped = false;
        for ($j = 0; $j < $n - $i - 1; $j++) {
            if ($arr[$j] > $arr[$j + 1]) {
                $tmp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $tmp;

                $swapped = true;
            }
        }

        if (!$swapped) {
            break;
        }
    }

    return $arr;
}
