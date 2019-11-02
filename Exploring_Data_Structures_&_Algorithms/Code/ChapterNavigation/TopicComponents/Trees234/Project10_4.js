import React from 'react'
import './Project10_4.css'
import project10_1_img from './Chpt_10-Img/Project4_1Img.png'

const Project10_4 = () => {
  return (
    <div className="project-10_4-grid">
      <div className="title-10_4">
        <h2>Project 10.4</h2>
      </div>

      <div className="description-10_4">
        <p>
          In project 10.4 we will be covering the implementation
          of a method that will display all of the contents of a queue
          without simply using an underlying array. The material that
          is covered on this page is not the complete project. You can
          view the complete project here: <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2010/TestClass10_4.java"
            target="blank"><i>Project 10.4</i>
          </a>.
        </p>
      </div>

      <div className="image-10_4">
        <img style={{width: '400px'}} src={project10_1_img} />
      </div>

      <div className="project-10_4-remove">

        <pre>
          <code>
{`public long remove() {

  long temp = queArray[front++];
  nItems--;

  return temp;

}`}
          </code>
        </pre>
      </div>

      <div className="project-10_4-display">
        <pre>
          <code>
{`// SOLUTION METHOD
public void display() {

  for(int i = 0; i < maxSize; i++) {

    long temp = remove();
    System.out.print(temp + " ");

  }

}`}
          </code>
        </pre>
      </div>

      <div className="project-10_4-main">
        <pre>
          <code>
{`public static void main(String[] args) {

  int size = 10;
  Queue q = new Queue(size);

  for(int i = 0; i < size; i++) {

    long num = (long)(Math.random()*99);
    q.insert(num);

  }

  q.display();

}`}
          </code>
        </pre>
      </div>

      <div className="project-10_4-remove-exp">
        <p>In order to implement the project solution, a helper method
           named 'remove' will be used. This method will create a copy
           of the current front value in the queue and increment the front
           pointer to the next index. Lastly, the total elements will
           be decremented by one and the temporary value will be returned. </p>
      </div>

      <div className="project-10_4-display-exp">
        <p>For the display method we want to create a For Loop that will
           cover the entire length of the queue. In each iteration of the
           For Loop we want to create a copy of the front value using the
           remove method and finally output that value to the console.</p>
      </div>

      <div className="project-10_4-main-exp">
        <p>In the test method we want to first intialize a size variable
           and create a Queue object using that size. Next, a For Loop is
           used to completely fill the queue with random integers. Finally,
           the display method is called.</p>
      </div>

      <div className="hr-10_4">
        <hr/>
      </div>

    </div>
  )
}

export default Project10_4
