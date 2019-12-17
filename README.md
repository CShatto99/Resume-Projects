# Resume-Projects
This repository showcases the projects that I have placed on my resume.

# Exploring Data Structures & Algorithms in Java

![HomePage](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/WebsiteHomePage.png)

### Introduction

At the start of summer 2019 I heard about and became interested in topics of data structures & algorithms. I knew this was going to be a class I would end up taking in the future but I wanted to teach myself prior. So I start reading  [Data Structures & Algorithms in Java, Second Edition](http://web.fi.uba.ar/~jvillca/hd/public/books/Data_Structures_and_Algorithms_in_Java_2nd_Edition.pdf) by Robert Lafore. I went through each chapter and solved as many assigned projects as I could. By the end of the summer I had covered 95% of the textbook, so the next step was to create a website showcasing and teaching these projects.

### What I Learned

* Used React functional and class components to structure the user-interface.
* Implemented the front-end and back-end of a contact form/page using the Node.js runtime environment.
* Used HTML5 and CSS3 grids to structure each and style every page on the site from scratch (no Bootstrap).

### Implementing the Contact Page

![ContactPage](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/WebsiteContactPage.png)

The reasons for creating a contact page were quite obvious. I needed a way for other people to: notify me about mistakes that were made in the website and ask questions about the content that was available.

So in order to implement this contact form, a few dependecies were necessary. The dependencies that I used were: [axios](https://www.npmjs.com/package/axios), [body-parser](https://www.npmjs.com/package/body-parser), [concurrently](https://www.npmjs.com/package/concurrently), [express](https://www.npmjs.com/package/express), [nodemailer](https://www.npmjs.com/package/nodemailer) and [nodemon](https://www.npmjs.com/package/nodemon). If you would like to see the implementation is detail, the code to the front-end and back-end files are [here](https://github.com/CShatto99/Resume-Projects/tree/master/READMECodeFiles).

### Designing the CSS Grid Layout

When it came time to decide which method I wanted to use to design the basic layout of each page, I knew that CSS grids was my best option. Although it took me a few attempts to create a reasonable layout, I am now quite satisfied with the result: 

![WebsitePageLayout](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/WebsitePageLayout.png)

The image you see above is a very basic representation of the underlying structure of the home, introduction and contact pages and only part of the project pages.

For all of the project pages, a similar layout was used. The only difference is that the structure of the main content section consists of a nested grid. You can see the example here: 

![WebsiteCodeLayout](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/WebsiteCodeLayout.png)

### Accessing the website

As of right now, the website has not been publicized. I will upload the website as soon as possible but if you have any questions just email me at exploringdatastructures@gmail.com.

If you would like to see the website in its entirety, the domain is [https://ExploringDS&A.com](). If you happen to find mistakes with any of the content, notify me through the contact page.



# Image Classification-Based Platformer

![GameUI](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/GameUI.png)

### Introduction

Around the end of 2018 I made quite a simple platformer game and a year or so later I decided to make the game a bit more interesting by using machine learning image classification to control the character. So to begin this project, I chose the [p5.js](https://p5js.org/) client-side library to design the UI and implement all of the logic for the game. Once this was complete, I utilized a pre-trained image classification model called [Teachable Machine](https://teachablemachine.withgoogle.com/train) to train each control. I then finally used the [ml5.js](https://ml5js.org/) library to implement the trained model.

### What I Learned

* Used OOP to design and implement all objects, the user interface and basic game logic.
* Created a personal image classification model using Teachable Machine.
* Implemented a pre-trained image classification model using the ml5.js machine learning library.

### Creating The Model

Creating the image classification model was quite simple with the help of Teachable Machine. All I was required to do was set up and name classes, take image samples through my webcam and then click the "Train Model" button.

More specifically, I created a class for each control: 
* Move **UP**: fingers interlocked, arms horizontal and positioned in the upper half of the webcam.
* Move **DOWN**: fingers interlocked, arms horizontal and positioned in the lower half of the webcam.
* Move **LEFT**: left hand raised, fingers spread and positioned in the left half of the webcam.
* Move **RIGHT**: right hand raised, clenched fist and positioned in the right half of the webcam.
* **NEUTRAL**: hide hands/arms and position self towards the middle of the webcam.

### How To Play

**IMPORTANT**: for optimal image classification, position yourself in front of a monchromatic background. The controls were trained on a solid white background so replicating these condiditons will result in the most accurate classifications.

If you would like to test the game yourself, you can download or clone the repository [here](https://github.com/CShatto99/Resume-Projects/tree/master/Image_Classifying_Platformer). If you would rather play the version of the game with classic controls (arrow keys), the repository is [here](https://github.com/CShatto99/MyProjects/tree/master/Simple_Platformer).

Once the repository has been downloaded, open up the index.html file with google chrome and the game should automatically execute. You can also edit the game however you like with the IDE of your choice.



# 21 Years of Gas Prices (Incomplete)

### Introduction

For the first programming class that I took, I was assigned this semester project. The professor provided a large file of gas price data from the years 1993-2013. Each line in the file contained the month (MM), day (DD), year (YYYY) and price of gas (#.###) in this order (e.g., 08-23-1999:1.273).

The requirements of the project included manipulating the data in various ways. More specifically, the project required 6 essential member functions: avgYearlyPrice(), avgMonthlyPrice(), highYearlyPrice(), lowYearlyPrice(), highToLow() and lowToHigh(). Below, I will cover each of these functions in order as well as provide some graphs that represent the data.

### What I Learned

* Used the principles of OOP to structure the code.
* Utilized the c++ Standard Template Library to implement the algorithms.
* Manipulated input files and generated output files using the fstream object class.

### Implementing The Member Functions

Each of the sections below will contain similar content. For each section, I will briefly explain the algorithm and provide some graphical representation of the resulting data. The project was created in Visual Studio and the code for the original project is [here](https://github.com/CShatto99/Resume-Projects/tree/master/21YearsOfGasPrices) or you can look at the project with an exhaustive explanation [here](https://github.com/CShatto99/Resume-Projects/tree/master/21YearsOfGasPricesDescriptive). Also, the code for just the member functions below can be found [here](https://github.com/CShatto99/Resume-Projects/blob/master/21YearsOfGasPrices/21YearsOfGasPrices/NewLineMethods.h) or [here](https://github.com/CShatto99/Resume-Projects/blob/master/21YearsOfGasPricesDescriptive/21YearsOfGasPrices/NewLineMethods.h) (exhaustive explanation).

#### Average Yearly Price of Gas

In this member function the goal is to find the average price of gas for each year, store them all in an array and display the result.
Below will be a high-level description of the algorithm.

* Add the price of gas to the yearly sum and keep track of the number of days in the year until the year changes.
* Insert the average gas price to the output array, reset the yearly sum and number of days in the year when the year changes.
* Display the output array when the loop exits.

![AvgYearlyPrice](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/AverageYearlyPriceImage.png)

According to the input data, the average yearly price of gas had consistently risen from 1993 to 2013. The data shows an all-time low average of $1.070 per gallon in 1998 and an all-time high average of $3.686 per gallon in 2012.

#### Average Monthly Price of Gas

In this member function the purpose is to calculate the average price of gas for every month in each year, store all of the averages in a c++ vector and display the results to the terminal.
Below is a high-level description of the algorithm.

* Add the price of gas to the monthly sum and keep track of the number of days in the month until the month changes.
* If the month changes, insert the average into the vector, reset the monthly total, reset the number of days in the month and reset the current month counter accordingly.
* Display the output array using a current month and current year counter when the loop exits.

![AvgMonthlyPrice](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/AverageMonthlyPrice.png)

According to the input data, the average monthly price of gas had a consistent increase from years 1993 to 2008. The average monthly price then significantly lowered at the end of 2008 followed by a consistent rise to 2013. The data shows an all-time low average of $0.959 per gallon in February of 1999 and an all-time high average of $4.125 per gallon in June of 2008.

#### Highest Yearly Price of Gas

This member function will perform one task, it will find the highest price of gas in each year from 1993 to 2013, store all of these values in an array and display them to the terminal.
Below is a high-level description of the algorithm:

* Set the max price equal to the current price if the year has not changed and the current price is greater than the current max.
* Insert the object corresponding the the current price into the array.
* If the year changes, increment the year counter, reset the max price and increment the current year counter.

![HighYearlyPrice](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/HighestYearlyPrice.png)

The results of the highest yearly prices is very similar the the results of the average monthly prices. There is a consistent rise from 1993 to 2008, a significant drop at the end of 2008 and another consistent rise to 2013. The lowest of the highest yearly prices was $1.107 per gallon on May 31, 1993 and the highest of the highest yearly prices was $4.165 per gallon on July 7, 2008.

#### Lowest Yearly Price of Gas

The purpose of this member function is the same as the previous. The lowest prices of gas for each year will be stored in an array and then displayed to the terminal. 
Below is a high-level description of the algorithm.

* Set the min price equal to the current price if the year has not changed and the current price is less than the current min.
* Insert the object corresponding the the current price into the array.
* If the year changes, increment the year counter, reset the min price and increment the current year counter.

![LowYearlyPrice](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/LowestYearlyPrice.png)

The trend of the data show a consistent increase in the lowest yearly prices from 1993 to 2013. The lowest of the lowest yearly prices is $0.949 per gallon on February 22, 1999 and the highest of the lowest yearly prices is $3.377 per gallon on January 14, 2013.

#### High To Low and Low To High

These two member function will perform practically the same task. HighToLow() will sort every datapoint by its price in non-increasing order and lowToHigh() will sort every datapoint by its price in non-decreasing order.

The member functions will simply utilize a map that was initialized and filled with every price from the input file in the constructor. Because inserting these values into the map automatically sorts them, all that is needed is a loop that writes every datapoint to an output file.

The output file for the highToLow() member function can be found [here](https://github.com/CShatto99/Resume-Projects/blob/master/21YearsOfGasPrices/21YearsOfGasPrices/highToLow.txt) and the output file for the lowToHigh() member function can be found [here](https://github.com/CShatto99/Resume-Projects/blob/master/21YearsOfGasPrices/21YearsOfGasPrices/lowToHigh.txt).
