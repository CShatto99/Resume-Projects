// This project will accept a file of gas price data for the years 1993-2014 and manipulate it

#include <iostream>
#include <iomanip>
#include <fstream>
#include <array>
#include "NewLine.h"
#include "NewLineMethods.h"

using namespace std;

int main() {

	// declare a fstream object and an array for every line in the input file
	fstream inFile;
	array<NewLine, 1065> lineInfo;
	
	// declare string variables to store each datapoint from the input file
	string strYear, strPrice, strDay, strMonth;
	// declare a size variable
	int size = 0;

	// open the GasPrices.txt file
	inFile.open("GasPrices.txt", ios::in | ios::out);

	// if the file failed to open
	if (inFile.fail()) {

		// display an error message
		cout << "Error opening file.\n";

	}

	// if the input file is not closed
	if (inFile.is_open()) {

		// while none of the stream's error state flags have been set
		while (inFile.good()) {

			// get each datapoint and store them in their respective variables
			getline(inFile, strMonth, '-');
			getline(inFile, strDay, '-');
			getline(inFile, strYear, ':');
			getline(inFile, strPrice);

			// set the values of the current lineInfo object using the integer conversions of the previous strings and increment the size
			lineInfo[size++].setValues(stof(strMonth), stof(strDay), stof(strYear), stof(strPrice));

		}

	}

	// close the input file
	inFile.close();

	// pass the array containing the input data to the NewLineMethods constructor
	NewLineMethods execute(lineInfo);

	// call each member function in the NewLineMethods class 
	execute.avgYearlyPrice();
	execute.avgMonthlyPrice();
	execute.highYearlyPrice();
	execute.lowYearlyPrice();
	execute.lowToHigh();
	execute.highToLow();

	system("PAUSE");
	return 0;
}