#pragma once

using namespace std;

class NewLine {
public:

	// declare the NewLine member variables
	int index = 0, month = 0, day = 0, year = 0, size = 1065;
	double price = 0;

	// declare the default constructor
	NewLine() {}

	// set the member variables to the input values
	void setValues(int month_, int day_, int year_, double price_) {
		month = month_, day = day_, year = year_, price = price_;
	}

	// call the destructor
	~NewLine() {}

};