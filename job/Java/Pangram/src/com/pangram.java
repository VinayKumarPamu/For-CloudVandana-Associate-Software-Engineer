package com;

import java.util.Scanner;

public class pangram {
	public static void main(String[] args) {
		Scanner scanner=new Scanner(System.in);
		System.out.println("Enter sentence to check:");
		String input = scanner.nextLine();
		boolean isPangram = isPangram(input);
		if (isPangram) {
			System.out.println("The input is a pangram.");
		} else {
			System.out.println("The input is not a pangram.");
		}
	}

	public static boolean isPangram(String input) {
		// Creating an array to track the presence of each letter (a-z)
		boolean[] letterPresent = new boolean[26];

		// Converting the input to lowercase to handle case-insensitivity
		input = input.toLowerCase();

		for (int i = 0; i < input.length(); i++) {
			char ch = input.charAt(i);
			if (Character.isLetter(ch)) {
				int index = ch - 'a';
				letterPresent[index] = true;
			}
		}
		// Checking if all letters (a-z) are present
		for (boolean present : letterPresent) {
			if (!present) {
				return false; // If any letter is not present, it's not a pangram
			}
		}
		return true; // All letters are present, it's a pangram
	}
}
