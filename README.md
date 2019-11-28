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



