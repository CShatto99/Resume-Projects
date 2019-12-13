#pragma once
#include <string>
#include <iostream>
#include <map>
#include <vector>
#include "NewLine.h"

using namespace std;

class NewLineMethods {
private:
	int size = 1065;
	array<NewLine, 1065> inputData;
	map<float, NewLine> mappedLines;

public:
	NewLineMethods() {}

	NewLineMethods(array<NewLine, 1065> l) {

		inputData = l;

		for (int i = 0; i < l.size(); i++)
			mappedLines.insert({ l[i].price, l[i] });

	}

	// gets the average yearly price for every year
	void avgYearlyPrice() {

		int currentYear = 1993, yearCounter = 0, daysInYear = 0;
		float averageYear[21], yearlyTotal = 0;

		for (int i = 0; i < inputData.size(); i++) {

			if (currentYear == inputData[i].year) {

				yearlyTotal += inputData[i].price;
				daysInYear++;

			}

			averageYear[yearCounter] = yearlyTotal / daysInYear;

			if (currentYear < inputData[i].year) {

				yearlyTotal = 0;
				daysInYear = 0;
				yearCounter++;
				currentYear++;

			}

		}

		cout << "Average price of gas for each year: \n";
		for (int i = 0; i < yearCounter; i++)
			cout << i + 1993 << " is: " << averageYear[i] << endl;

	}

	// gets the average monthly price of gas for every year
	void avgMonthlyPrice() {

		int currentYear = 1993, currentMonth = 4, yearCounter = 0, daysInMonth = 0;
		float monthlyTotal = 0;
		vector<float> avgMonth;
		
		for (int i = 0; i < inputData.size(); i++) {

			if (currentYear == inputData[i].year) {

				if (currentMonth == inputData[i].month) {

					monthlyTotal += inputData[i].price;
					daysInMonth++;

				}

				else if (currentMonth < inputData[i].month) {

					avgMonth.push_back(monthlyTotal / daysInMonth);
					monthlyTotal = 0;
					daysInMonth = 0;
					currentMonth++;

				}

			}

			else if (currentYear < inputData[i].year) {

				currentYear++;
				yearCounter++;
				currentMonth = 1;

			}

		}

		cout << "The average gas prices for each month in each year is: " << endl;
		for (int i = 0; i < avgMonth.size(); i++)
			cout << avgMonth[i] << endl;

	}

	// gets the highest price of gas for every year
	void highYearlyPrice() {

		int yearCounter = 0, currentYear = 1993;
		float max = 0;
		array<NewLine, 21> highPrices;
		
		cout << "Below are the highest gas prices for each year in MM-DD-YYYY:PRICE format.\n";

		for (int i = 0; i < inputData.size(); i++) {

			if (currentYear == inputData[i].year && inputData[i].price > max)
				max = inputData[i].price;

			highPrices[yearCounter] = mappedLines.find(max)->second;

			if (currentYear < inputData[i].year) {

				yearCounter++;
				max = 0;
				currentYear++;

			}

		}

		array<NewLine, 21>::iterator itr;

		for (itr = highPrices.begin(); itr != highPrices.end(); itr++)
			cout << itr->month << "-" << itr->day << ":" << itr->year << ":" << itr->price << endl;

	}

	// gets the lowest price of gas for every year
	void lowYearlyPrice() {

		int yearCounter = 0, currentYear = 1993;
		float min = 10;
		array<NewLine, 21> lowPrices;
		
		for (int i = 0; i < inputData.size(); i++) {

			if (currentYear == inputData[i].year && inputData[i].price < min)
				min = inputData[i].price;

			lowPrices[yearCounter] = mappedLines.find(min)->second;

			if (currentYear < inputData[i].year) {

				yearCounter++;
				currentYear++;
				min = 10;

			}

		}

		cout << "Below are the lowest gas prices for each year in MM-DD-YYYY:PRICE format.\n";

		array<NewLine, 21>::iterator itr;

		for (itr = lowPrices.begin(); itr != lowPrices.end(); itr++)
			cout << itr->month << "-" << itr->day << ":" << itr->year << ":" << itr->price << endl;

	}

	// writes every price of gas from the input file to an output file in non-decreasing order
	void lowToHigh() {

		ofstream ascendingFile("lowToHigh.txt");

		cout << "The non-decreasing order of gas prices has been written to file lowToHigh.txt" << endl;

		map<float, NewLine>::iterator itr;

		for (itr = mappedLines.begin(); itr != mappedLines.end(); itr++) {

			ascendingFile << itr->second.month << "-" << itr->second.day << "-"
				<< itr->second.year << ":" << itr->first << endl;

		}

		ascendingFile.close();

	}

	// writes every price of gas from the input file to an output file in non-increasing order
	void highToLow() {

		ofstream descendingFile("highToLow.txt");

		cout << "The non-increasing order of gas prices has been written to file highToLow.txt" << endl;

		map<float, NewLine>::reverse_iterator itr;

		for (itr = mappedLines.rbegin(); itr != mappedLines.rend(); itr++) {

			descendingFile << itr->second.month << "-" << itr->second.day << "-"
				<< itr->second.year << ":" << itr->first << endl;

		}

		descendingFile.close();

	}

	~NewLineMethods() {}

};