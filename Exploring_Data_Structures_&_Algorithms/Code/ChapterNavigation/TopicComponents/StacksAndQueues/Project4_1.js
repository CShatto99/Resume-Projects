import React from 'react'
import './Project4_1.css'
import project4_1_img from './Chpt_4-Img/Project4_1Img.png'

const Project4_1 = () => {
  return (
    <div className="project-4_1-grid">
      <div className="title-4_1">
        <h2>Project 4.1</h2>
      </div>

      <div className="description-4_1">
        <p>
          In project 4.1 we will be covering methods that are involved in
          displaying the contents of a queue without simply using the
          underlying array. You can
          view the complete project here: <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%204/TestClass4_1.java"
            target="blank"><i>Project 4.1</i>
          </a>.
        </p>
      </div>

      <div className="image-4_1">
        <img style={{width: '400px'}} src={project4_1_img} />
      </div>

      <div className="project-4_1-requirements">
        <p><b>Project requirements</b></p>
        <br/>
        <p>
          Write a method for the Queue class in the queue.java program
          (Listing 4.4) that displays the contents of the queue. Note that this
          does not mean simply displaying the contents of the underlying array.
          You should show the queue contents from the first item inserted to
          the last, without indicating to the viewer whether the sequence is
          broken by wrapping around the end of the array. Be careful that one
          item and no items display properly, no matter where front and rear are.
        </p>
      </div>

      <div className="project-4_1-remove">
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

      <div className="project-4_1-display">
        <pre>
          <code>
{`public void display() {

  for(int i = 0; i < maxSize; i++) {

    long temp = remove();
    System.out.print(temp + " ");

  }

}`}
          </code>
        </pre>
      </div>

      <div className="project-4_1-main">
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

      <div className="project-4_1-remove-exp">
        <p>
          <b>Goal:</b> remove the first element in the queue array and return it.
          <br/>
          <br/>
          <b>Algorithm:</b>
          <br/>
          <ul>
            <li>Save a copy of the first element in the queue array and
                increment the front index by one.</li>
            <li>Decrement the total number of items in the array by one.</li>
            <li>Return the temporary copy of the first element.</li>
          </ul>
        </p>
      </div>

      <div className="project-4_1-display-exp">
        <p>
          For the display method we want to create a For Loop that will
          cover the entire length of the queue. In each iteration of the
          For Loop we want to create a copy of the front value using the
          remove method and finally output that value to the console.
        </p>
      </div>

      <div className="project-4_1-main-exp">
        <p>
          In the test method we want to first intialize a size variable
          and create a Queue object using that size. Next, a For Loop is
          used to completely fill the queue with random integers. Finally,
          the display method is called.
        </p>
      </div>

      <div className="hr-4_1">
        <hr/>
      </div>

    </div>
  )
}

export default Project4_1
