package DSA.Stack;

import java.util.*;

public class __3StackUsingQueue {

    Queue<Integer> mainQ;
    Queue<Integer> helperQ;

    public __3StackUsingQueue() {
        mainQ = new ArrayDeque<>();
        helperQ = new ArrayDeque<>();
    }

    public void push(int x) {
        mainQ.add(x);
    }

    public int pop() {
        while (mainQ.size() > 1) {
            helperQ.add(mainQ.remove());
        }
        int popVal = mainQ.remove();
        while (!helperQ.isEmpty()) {
            mainQ.add(helperQ.remove());
        }
        return popVal;

    }

    public int top() {
        while (mainQ.size() > 1) {
            helperQ.add(mainQ.remove());
        }
        int popVal = mainQ.remove();
        helperQ.add(popVal);
        while (!helperQ.isEmpty()) {
            mainQ.add(helperQ.remove());
        }
        return popVal;
    }

    public void printStack() {
        System.out.println(mainQ);
    }

    public static void main(String[] args) {
        __3StackUsingQueue suq = new __3StackUsingQueue();
        suq.push(1);
        suq.push(2);
        suq.push(3);
        System.out.println(suq.top());
        System.out.println(suq.pop());
        suq.printStack();
        System.out.println(suq.top());
        suq.printStack();

    }
}
