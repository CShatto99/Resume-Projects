#include "stdafx.h"
#include <iostream>
#include <stdio.h>
#include <iomanip>
#include <fstream>
#include <array>
#include "NewLine.h"
#include "NewLineMethods.h"
#pragma warning(disable:4996)
using namespace std;

int main() {
	fstream inFile;
	array<NewLine, 1065> lineInfo;
	NewLineMethods execute;
	string line, strYear, strPrice, strDay, strMonth;
	int month, day, year, size = 0;
	float price, total = 0;
	
	inFile.open("GasPrices.txt", ios::in | ios::out);
	if (inFile.fail()) {
		cout << "Error opening file.\n";
	}

	if (inFile.is_open()) {
		while (inFile.good()) {
			getline(inFile, strMonth, '-');
			getline(inFile, strDay, '-');
			getline(inFile, strYear, ':');
			getline(inFile, strPrice);
			month = stof(strMonth);
			day = stof(strDay);
			year = stof(strYear);
			price = stof(strPrice);
			lineInfo[size].setValues(month, day, year, price);
			size++;
		}
	}

	execute.avgYearlyPrice(lineInfo);
	execute.avgMonthlyPrice(lineInfo);
	cout << "Gas prices sorted highest to lowest.\n";
	execute.highToLow(lineInfo);
	cout << "Gas prices sorted lowest to highest.\n";
	execute.lowToHigh(lineInfo);
	execute.highYearlyPrice(lineInfo);
	execute.lowYearlyPrice(lineInfo);

	inFile.close();
	system("PAUSE");
    return 0;
}