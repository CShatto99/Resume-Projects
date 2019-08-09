#pragma once
#include "stdafx.h"
#include <string>
#include <iostream>
#include <map>
#include <vector>
#include "NewLine.h"
using namespace std;
class NewLineMethods {
private:
	int size = 1065;
	
public:
	void avgYearlyPrice(array<NewLine, 1065> line) {
		int current = 1993, yearCounter = 0, daysInYear = 0;
		float averageYear[21], yearlyTotal = 0;
		for (int i = 0; i < line.size(); i++) {
			if (current == line[i].year) {
				yearlyTotal += line[i].price;
				daysInYear++;
			}
			averageYear[yearCounter] = yearlyTotal / daysInYear;
			if (current < line[i].year) {
				yearlyTotal = 0;
				daysInYear = 0;
				yearCounter++;
				current++;
			}
		}
		cout << "Average price of gas for each year: \n";
		for (int i = 0; i < yearCounter; i++) {
			cout << i + 1993 << " is: " << averageYear[i] << endl;
		}
	}

	void avgMonthlyPrice(array<NewLine, 1065> line) {
		int tempYear = 1993, tempMonth = 4, yearCounter = 0, daysInMonth = 0;
		vector<float> avgMonth;
		float monthlyTotal = 0;
		for (int i = 0; i < line.size(); i++) {
			if (tempYear == line[i].year) {
				if (tempMonth == line[i].month) {
					monthlyTotal += line[i].price;
					daysInMonth++;
				}
				else if (tempMonth < line[i].month) {
					avgMonth.push_back(monthlyTotal / daysInMonth);
					monthlyTotal = 0;
					daysInMonth = 0;
					tempMonth++;
				}
			}
			else if (tempYear < line[i].year) {
				tempYear++;
				yearCounter++;
				tempMonth = 1;
			}
		}
		cout << "The average gas prices for each month in each year is: " << endl;
		for (int i = 0; i < avgMonth.size(); i++) {
			cout << avgMonth[i] << endl;
		}
	}

	void highYearlyPrice(array<NewLine, 1065> line) {
		map<float, NewLine> allLines;
		int yearCounter = 0, tempYear = 1993;
		array<NewLine, 21> highPrices;
		float max = 0;
		
		cout << "Below are the highest gas prices for each year in MM-DD-YYYY:PRICE format.\n";
		for (int i = 0; i < size; i++) {
			allLines.insert({ line[i].price, line[i] });
			if (tempYear == line[i].year && line[i].price > max) {
				max = line[i].price;
			}

			highPrices[yearCounter] = allLines.find(max)->second;
			if (tempYear < line[i].year) {
				yearCounter++;
				max = 0;
				tempYear++;
			}
		}
		array<NewLine, 21>::iterator itr;
		for (itr = highPrices.begin(); itr != highPrices.end(); itr++) {
			cout << itr->month << "-" << itr->day << ":" << itr->year << ":" << itr->price << endl;
		}
	}

	void lowYearlyPrice(array<NewLine, 1065> line) {
		int yearCounter = 0, tempYear = 1993;
		array<NewLine, 21> priceDates;
		float min = 10;
		map<float, NewLine> allLines;
		float lowPrices[21];
		for (int i = 0; i < line.size(); i++) {
			allLines.insert({ line[i].price, line[i] });
			if (tempYear == line[i].year && line[i].price < min) {
				min = line[i].price;	
			}

			priceDates[yearCounter] = allLines.find(min)->second;
			if (tempYear < line[i].year) {	
				yearCounter++;
				tempYear++;
				min = 10;
			}
		}

		cout << "Below are the lowest gas prices for each year in MM-DD-YYYY:PRICE format.\n";
		array<NewLine, 21>::iterator itr;
		for (itr = priceDates.begin(); itr != priceDates.end(); itr++) {
			cout << itr->month << "-" << itr->day << ":" << itr->year << ":" << itr->price << endl;
		}
	}

	void lowToHigh(array<NewLine, 1065> line) {
		ofstream ascendingFile("lowToHigh.txt");
		map<float, NewLine> allLines;
		for (int i = 0; i < size; i++) {
			allLines.insert({ line[i].price, line[i] });
		}
		map<float, NewLine>::iterator itr;
		for (itr = allLines.begin(); itr != allLines.end(); itr++) {
			ascendingFile << itr->second.month << "-" << itr->second.day << "-"
				<< itr->second.year << ":" << itr->first << endl;
		}
		ascendingFile.close();
	}

	void highToLow(array<NewLine, 1065> line) {
		ofstream descendingFile("highToLow.txt");
		map<float, NewLine> allLines;
		for (int i = 0; i < size; i++) {
			allLines.insert({ line[i].price, line[i] });
		}
		map<float, NewLine>::reverse_iterator itr;
		for (itr = allLines.rbegin(); itr != allLines.rend(); itr++) {
			descendingFile << itr->second.month << "-" << itr->second.day << "-" 
						   << itr->second.year << ":" << itr->first << endl;
		}
		descendingFile.close();
	}
};