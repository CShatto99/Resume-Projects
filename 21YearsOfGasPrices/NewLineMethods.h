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
	map<double, NewLine> mappedLines;

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
		double yearlyTotal = 0;
		array<double, 21> avgYear;

		for (int i = 0; i < inputData.size(); i++) {

			if (inputData[i].year == currentYear) {

				yearlyTotal += inputData[i].price;
				daysInYear++;

			}

			if (inputData[i].year != currentYear || i == inputData.size() - 1) {

				avgYear[yearCounter] = yearlyTotal / daysInYear;

				yearlyTotal = 0;
				daysInYear = 0;
				yearCounter++;
				currentYear++;

			}

		}

		cout << "Average price of gas for each year: \n";

		for (int i = 0; i < avgYear.size(); i++)
			cout << i + 1993 << " is: " << avgYear[i] << endl;

	}

	// gets the average monthly price of gas for every year
	void avgMonthlyPrice() {

		int currentYear = 1993, currentMonth = 4, daysInMonth = 0;
		double monthlyTotal = 0;
		vector<double> avgMonth;

		for (int i = 0; i < inputData.size(); i++) {

			if (currentMonth == inputData[i].month) {

				monthlyTotal += inputData[i].price;
				daysInMonth++;

			}

			if (currentMonth != inputData[i].month || i == inputData.size() - 1) {

				avgMonth.push_back(monthlyTotal / daysInMonth);

				monthlyTotal = 0;
				daysInMonth = 0;
				currentMonth++;

				if (currentMonth == 13)
					currentMonth = 1;

			}

		}

		currentMonth = 4;
		currentYear = 1993;

		cout << "The average gas prices for each month in each year is: " << endl;

		for (int i = 0; i < avgMonth.size(); i++) {

			cout << currentMonth << "/" << currentYear << ":" << avgMonth[i] << endl;
			currentMonth++;

			if (currentMonth == 13) {
				currentMonth = 1;
				currentYear++;
			}

		}

	}

	// gets the highest price of gas for every year
	void highYearlyPrice() {

		int yearCounter = 0, currentYear = 1993;
		double max = 0;
		array<NewLine, 21> highPrices;

		for (int i = 0; i < inputData.size(); i++) {

			if (inputData[i].price > max&& inputData[i].year == currentYear) {

				max = inputData[i].price;
				highPrices[yearCounter] = inputData[i];

			}

			if (inputData[i].year != currentYear) {

				max = 0;
				currentYear++;
				yearCounter++;

			}

		}

		cout << "Below are the highest gas prices for each year in MM-DD-YYYY:PRICE format.\n";

		for (int i = 0; i < highPrices.size(); i++)
			cout << highPrices[i].month << "-" << highPrices[i].day << "-" << highPrices[i].year << ":" << highPrices[i].price << endl;

	}

	// gets the lowest price of gas for every year
	void lowYearlyPrice() {

		int yearCounter = 0, currentYear = 1993;
		double min = 10;
		array<NewLine, 21> lowPrices;

		for (int i = 0; i < inputData.size(); i++) {

			if (inputData[i].price < min && inputData[i].year == currentYear) {

				min = inputData[i].price;
				lowPrices[yearCounter] = inputData[i];

			}

			if (currentYear != inputData[i].year) {

				min = 10;
				currentYear++;
				yearCounter++;

			}

		}

		cout << "Below are the lowest gas prices for each year in MM-DD-YYYY:PRICE format.\n";

		for (int i = 0; i < lowPrices.size(); i++)
			cout << lowPrices[i].month << "-" << lowPrices[i].day << "-" << lowPrices[i].year << ":" << lowPrices[i].price << endl;

	}

	// writes every price of gas from the input file to an output file in non-increasing order
	void highToLow() {

		ofstream descendingFile("highToLow.txt");

		cout << "The non-increasing order of gas prices has been written to file highToLow.txt" << endl;

		map<double, NewLine>::reverse_iterator itr;

		for (itr = mappedLines.rbegin(); itr != mappedLines.rend(); itr++) {

			descendingFile << itr->second.month << "-" << itr->second.day << "-"
				<< itr->second.year << ":" << itr->first << endl;

		}

		descendingFile.close();

	}

	// writes every price of gas from the input file to an output file in non-decreasing order
	void lowToHigh() {

		ofstream ascendingFile("lowToHigh.txt");

		cout << "The non-decreasing order of gas prices has been written to file lowToHigh.txt" << endl;

		map<double, NewLine>::iterator itr;

		for (itr = mappedLines.begin(); itr != mappedLines.end(); itr++) {

			ascendingFile << itr->second.month << "-" << itr->second.day << "-"
				<< itr->second.year << ":" << itr->first << endl;

		}

		ascendingFile.close();

	}

	

	~NewLineMethods() {};
};