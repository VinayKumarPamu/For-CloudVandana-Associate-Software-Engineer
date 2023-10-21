package com;

import java.util.Scanner;

public class RomanToInteger {
	public static void main(String[] args) {
		Scanner scanner = new java.util.Scanner(System.in);
		boolean check = false;
		System.out.println("Enter a Roman Number");
		int result = 0;
		while (!check) {
			try {
				String romanNumeral = scanner.next();
				result = romanToInt(romanNumeral);
				check = true;
			} catch (IllegalArgumentException e) {
				System.out.println("Please enter valid uppercase Roman numerals.");
			}
		}
		System.out.println("Integer value: " + result);
	}

	public static int romanToInt(String s) {
		int result = 0;
		int prevValue = 0;

		for (int index = s.length() - 1; index >= 0; index--) {
			int currentValue = getRomanValue(s.charAt(index));

			if (currentValue < prevValue) {
				result -= currentValue;
			} else {
				result += currentValue;
			}
			prevValue = currentValue;
		}
		return result;
	}

	public static int getRomanValue(char romanChar) {
		switch (romanChar) {
		case 'I':
			return 1;
		case 'V':
			return 5;
		case 'X':
			return 10;
		case 'L':
			return 50;
		case 'C':
			return 100;
		case 'D':
			return 500;
		case 'M':
			return 1000;
		default:
			throw new IllegalArgumentException("Invalid Roman numeral: " + romanChar);
		}
	}
}
