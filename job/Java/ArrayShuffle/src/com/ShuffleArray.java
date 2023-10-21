package com;
import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        // Creating a copy of the original array to shuffle
        int[] shuffleArray = Arrays.copyOf(originalArray, originalArray.length);
        shuffleArray(shuffleArray);
        // Printing the shuffled array
        System.out.println("Original Array: "+Arrays.toString(originalArray));
        System.out.println("Shuffled Array: "+Arrays.toString(shuffleArray));
    }
    public static void shuffleArray(int[] array) {
        int length = array.length;
        Random random = new Random();
        for (int indexI = length - 1; indexI > 0; indexI--) {
            // Generating a random index between 0 and indexI
            int indexJ = random.nextInt(indexI + 1);
            // Swapping array[indexI] and array[indexJ]
            int temp = array[indexI];
            array[indexI] = array[indexJ];
            array[indexJ] = temp;
        }
    }
}