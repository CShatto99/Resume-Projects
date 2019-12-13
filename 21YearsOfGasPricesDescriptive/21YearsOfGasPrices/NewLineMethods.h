#pragma once
#include <string>
#include <iostream>
#include <map>
#include <vector>
#include "NewLine.h"

using namespace std;

class NewLineMethods {
private:
	// declare the size, an array for the input data an a map for the input data
	int size = 1065;
	array<NewLine, 1065> inputData;
	map<float, NewLine> mappedLines;

public:

	// declare the default constructor
	NewLineMethods() {}

	// declare the constructor to initialize data
	NewLineMethods(array<NewLine, 1065> l) {

		// set the inputData array equal to the input array
		inputData = l;

		// fill the map with the data from the input array
		for (int i = 0; i < l.size(); i++) {
			mappedLines.insert({ l[i].price, l[i] });
		}

	}

	// get the average price of gas for every year
	void avgYearlyPrice() {

		// declare the first year, a year counter and the days in the current year
		int currentYear = 1993, yearCounter = 0, daysInYear = 0;
		// declare an array to store the averages and a current yearly total
		float averageYear[21], yearlyTotal = 0;

		// for every line object in the input file
		for (int i = 0; i < inputData.size(); i++) {

			// if the current year is equal to the year of the current line object
			if (currentYear == inputData[i].year) {

				// add the price to the yearly total
				yearlyTotal += inputData[i].price;
				// increment the number of days in the current year
				daysInYear++;

			}

			// set the element of the yearCounter index equal to the average price for the current year
			averageYear[yearCounter] = yearlyTotal / daysInYear;

			// if the current year is less than the year member variable of the current line object
			if (currentYear < inputData[i].year) {

				// reset the yearly total
				yearlyTotal = 0;
				// reset the number of days in the year
				daysInYear = 0;
				// increment the year counter
				yearCounter++;
				// move to the next year
				currentYear++;

			}

		}

		// display the average price of gas for every year
		cout << "Average price of gas for each year: \n";
		for (int i = 0; i < yearCounter; i++) {

			cout << i + 1993 << " is: " << averageYear[i] << endl;

		}

	}

	// gets the average monthly price of gas for every year
	void avgMonthlyPrice() {

		// declare the initial year, a month counter, a year counter and a days in the month counter
		int currentYear = 1993, currentMonth = 4, yearCounter = 0, daysInMonth = 0;
		// declare a monthly total variable
		float monthlyTotal = 0;
		// declare a vector to hold the average price of gas for each month
		vector<float> avgMonth;
		
		// for every line object in the input file
		for (int i = 0; i < inputData.size(); i++) {

			// if the current year is equal to the year of the current line object
			if (currentYear == inputData[i].year) {

				// if the current month is equal to the month of the current line object
				if (currentMonth == inputData[i].month) {

					// add the price of the current line object to the monthly total
					monthlyTotal += inputData[i].price;
					// increment the number of days in the month
					daysInMonth++;

				}

				// otherwise, if the current month is less than the month of the current line object
				else if (currentMonth < inputData[i].month) {

					// add the current monthly average to the avgMonth vector
					avgMonth.push_back(monthlyTotal / daysInMonth);
					// reset the monthly total
					monthlyTotal = 0;
					// reset the number of days in the month
					daysInMonth = 0;
					// move to the next month
					currentMonth++;

				}

			}

			// otherwise, is the current year is less than the year of the current line object
			else if (currentYear < inputData[i].year) {

				// move to the next year
				currentYear++;
				// increment the year counter
				yearCounter++;
				// reset the current monht to 1
				currentMonth = 1;

			}

		}

		// display the monthly averages for every year
		cout << "The average gas prices for each month in each year is: " << endl;
		for (int i = 0; i < avgMonth.size(); i++) {

			cout << avgMonth[i] << endl;

		}

	}

	// gets the highest price of gas for every year
	void highYearlyPrice() {

		// declare a year counter and a current year
		int yearCounter = 0, currentYear = 1993;
		// declare a max value variable
		float max = 0;
		// create an array to store the highest price for each year
		array<NewLine, 21> highPrices;
		
		// display the data description
		cout << "Below are the highest gas prices for each year in MM-DD-YYYY:PRICE format.\n";

		// for every line object in the input file
		for (int i = 0; i < inputData.size(); i++) {

			// if the current year is equal to the year of the line object and the price of the current line is greater than the max price
			if (currentYear == inputData[i].year && inputData[i].price > max) {

				// set the max equal to the price of the current line object
				max = inputData[i].price;

			}

			// set the element of the yearCounter index equal to the value of the corresponding "max" key
			highPrices[yearCounter] = mappedLines.find(max)->second;

			// if the current year is less than the year of the current line object
			if (currentYear < inputData[i].year) {

				// increment the year counter
				yearCounter++;
				// reset the max to 0
				max = 0;
				// move to the next year
				currentYear++;

			}

		}

		// declare an iterator to iterate over the highPrices array
		array<NewLine, 21>::iterator itr;

		// display every object that contains the highest price of gas for each year
		for (itr = highPrices.begin(); itr != highPrices.end(); itr++) {

			cout << itr->month << "-" << itr->day << ":" << itr->year << ":" << itr->price << endl;

		}

	}

	// gets the lowest price of gas for every year
	void lowYearlyPrice() {

		// declare a year counter and the current year
		int yearCounter = 0, currentYear = 1993;
		// declare a min value variable
		float min = 10;
		// create an aray to store the lowest price for each year
		array<NewLine, 21> lowPrices;
		
		// for every line object in the input file
		for (int i = 0; i < inputData.size(); i++) {

			// if the current year is equal to the year of the line object and the price of the current line is less than the min price
			if (currentYear == inputData[i].year && inputData[i].price < min) {

				// set the min equal to the price of the current line object
				min = inputData[i].price;

			}

			// set the element of the yearCounter index equal to the value of the corresponding "max" key
			lowPrices[yearCounter] = mappedLines.find(min)->second;

			// if the current year is less than the year of the current line object
			if (currentYear < inputData[i].year) {

				// increment the year counter
				yearCounter++;
				// move to the next year
				currentYear++;
				// reset the min to 10
				min = 10;

			}

		}

		// display the data description
		cout << "Below are the lowest gas prices for each year in MM-DD-YYYY:PRICE format.\n";

		// declare an iterator to iterate over the lowPrices array
		array<NewLine, 21>::iterator itr;

		// display every object that contains the lowest price of gas for each year
		for (itr = lowPrices.begin(); itr != lowPrices.end(); itr++) {

			cout << itr->month << "-" << itr->day << ":" << itr->year << ":" << itr->price << endl;

		}

	}

	// writes every price of gas from the input file to an output file in non-decreasing order
	void lowToHigh() {

		// declare an ofstream object to create the output file
		ofstream ascendingFile("lowToHigh.txt");

		// display a descriptive message
		cout << "The non-decreasing order of gas prices has been written to file lowToHigh.txt" << endl;

		// create an iterator to iterate over every pair in the map
		map<float, NewLine>::iterator itr;

		// for every pair in the map
		for (itr = mappedLines.begin(); itr != mappedLines.end(); itr++) {

			// write the line object to the output file
			ascendingFile << itr->second.month << "-" << itr->second.day << "-"
				<< itr->second.year << ":" << itr->first << endl;

		}

		// close the file
		ascendingFile.close();

	}

	// writes every price of gas from the input file to an output file in non-increasing order
	void highToLow() {

		// declare an ofstream object to create the output file
		ofstream descendingFile("highToLow.txt");

		// display a descriptive message
		cout << "The non-increasing order of gas prices has been written to file highToLow.txt" << endl;

		// create an itertor to iterate over every pair in the map
		map<float, NewLine>::reverse_iterator itr;

		// for every pair in the map
		for (itr = mappedLines.rbegin(); itr != mappedLines.rend(); itr++) {

			// write the line object to the output file
			descendingFile << itr->second.month << "-" << itr->second.day << "-"
				<< itr->second.year << ":" << itr->first << endl;

		}

		// close the file
		descendingFile.close();

	}

	// call the destructor
	~NewLineMethods() {}

};