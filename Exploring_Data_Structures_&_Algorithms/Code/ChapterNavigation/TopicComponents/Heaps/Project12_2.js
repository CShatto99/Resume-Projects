import React from 'react'
import './Project12_2.css'
import project12_1_img from './Chpt_12-Img/Project12_2Img.png'

const Project12_2 = () => {
  return (
    <div className="project-12_2-grid">
      <div className="title-12_2">
        <h2>Project 12.2</h2>
      </div>

      <div className="description-12_2">
        <p>
          Project 12.2 is going to be covering two methods that are not
          traditional to a heap. The first method, <b>toss</b>, will insert a
          new item into the heap without maintaining the heap organization.
          The <b>restoreHeap</b> method will then restore each item that was
          tossed to its correct position in the heap. You can
          view the complete project here: <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2012/TestClass12_2.java"
            target="blank"><i>Project 12.2</i>
          </a>.
        </p>
      </div>

      <div className="image-12_2">
        <img style={{width: '400px'}} src={project12_1_img} alt="Visual representation of a heap that restores any number of integers consecutively."/>
      </div>

      <div className="project-12_2-requirements">
        <h4>Project requirements</h4>
        <br/>
        <p>
           In the heap.java program the insert() method inserts a new node in
           the heap and ensures the heap condition is preserved. Write a toss()
           method that places a new node in the heap array without attempting to
           maintain the heap condition. (Perhaps each new item can simply be
           placed at the end of the array.) Then write a restoreHeap() method
           that restores the heap condition throughout the entire heap. Using
           toss() repeatedly followed by a single restoreHeap() is more
           efficient than using insert() repeatedly when a large amount of
           data must be inserted at one time. See the description of heapsort
           for clues. To test your program, insert a few items, toss in some
           more, and then restore the heap.
        </p>
      </div>

      <div className="project-12_2-toss">
        <pre>
          <code>
{`public boolean toss(int key) {

  numTosses++;

  if(currentSize == maxSize)
    return false;

  Node newNode = new Node(key);
  heapArray[currentSize++] = newNode;

  return true;

}`}
          </code>
        </pre>
      </div>

      <div className="project-12_2-restore">
        <pre>
          <code>
{`public void restoreHeap() {

  for(int i = currentSize - 1; i >= numTosses; i--)
    trickleUp(i);

}`}
          </code>
        </pre>
      </div>

      <div className="project-12_2-toss-exp">
        <p>
          <b>Function:</b> inserts a new node at the end of the heap array.
          <br/>
          <b>Algorithm</b>
          <br/>
          <ul>
            <li>Increment the number of tosses.</li>
            <li>If the current size if equal to the max size, the array is full,
            so return false.</li>
            <li>Create the new node with the given key.</li>
            <li>Place the new node into the last position of the array (currentSize)
            and increment the current size.</li>
            <li>The node was successfully inserted, so return true.</li>
          </ul>
        </p>
      </div>

      <div className="project-12_2-restore-exp">
        <p>
          <b>Function:</b> restores all of the tossed nodes to their correct
          positions in the heap.
          <br/>
          <b>Algorithm</b>
          <br/>
          <ul>
            <li>For every node that was tossed starting from the last to the first:
             call the trickleUp method using the tossed node's index.</li>

          </ul>
        </p>
      </div>

      <div className="hr-12_2">
        <hr/>
      </div>

    </div>
  )
}

export default Project12_2
