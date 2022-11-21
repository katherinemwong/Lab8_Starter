# Lab 8 - Starter
Katherine Wong
Bennett Zhang

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
- Within a Github action that runs whenever code is pushed. Since the website deploys on its own through github pages, we can automatically test this through github actions and the tests pass before so we can prevent buggy code from entering the existing codebase.s

2) Would you use an end to end test to check if a function is returning the correct output? 
- No, end to end testing is used for UI testing and testing user actions/flow.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- No, end to end testing would be more appropriate for this because sending a message is a user action.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- Yes, we can test the output and limits of a function through unit testing since this is not a user action but tests the output and capabilities of a function. 

