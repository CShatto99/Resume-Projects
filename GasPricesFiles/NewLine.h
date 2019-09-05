#pragma once
#include "stdafx.h"
using namespace std;
class NewLine {
public:
	int index = 0, month, day, year, size = 1065;
	float price;
public:
	NewLine() {}

	void setValues(int month_, int day_, int year_, float price_) {
		month = month_, day = day_, year = year_, price = price_;
	}

	~NewLine() {}
};