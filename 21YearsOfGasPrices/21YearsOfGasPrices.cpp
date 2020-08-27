// This project will accept a file of gas price data for the years 1993-2014 and manipulate it

#include <iostream>
#include <iomanip>
#include <fstream>
#include <array>
#include "NewLine.h"
#include "NewLineMethods.h"

using namespace std;

int main() {

	fstream inFile;
	array<NewLine, 1065> lineInfo;
	
	string strYear, strPrice, strDay, strMonth;
	int size = 0;

	inFile.open("GasPrices.txt", ios::in | ios::out);

	if (inFile.fail())
		cout << "Error opening file.\n";

	if (inFile.is_open()) {

		while (inFile.good()) {

			getline(inFile, strMonth, '-');
			getline(inFile, strDay, '-');
			getline(inFile, strYear, ':');
			getline(inFile, strPrice);

			lineInfo[size++].setValues(stof(strMonth), stof(strDay), stof(strYear), stod(strPrice));

		}

	}

	inFile.close();

	NewLineMethods execute(lineInfo);

	execute.avgYearlyPrice();
	execute.avgMonthlyPrice();
	execute.highYearlyPrice();
	execute.lowYearlyPrice();
	execute.lowToHigh();
	execute.highToLow();

	system("PAUSE");
	return 0;

}