# Bitso-QA-Challenge-Cypress

This project is a challenge from Bitso for QA Engineer

Pre-conditions (You need to do this manually as a precondition)
1. Navigate to https://devmalta.bitso.com/register
2. Provide an email ( a valid email address )
3. Provide password
4. Accept the terms and conditions
5. Click on Start
An email is being sent with a code. Copy and paste that code into the modal
Result:
You’ll get redirected to /r/welcome , close the modal and you’ll get redirected to
/wallet with your new account created.
Finally: Click on BTC, Click on Deposit and accept the terms.

**Scenario 1**

1. Navigate to https://devmalta.bitso.com/login
2. Provide email address (The one you created in the precondition steps)
3. Provide password
4. Click on Login
5. Click on BTC
6. Click on Deposit
7. Verify the error message displayed
Repeat this with ETH, BCH, DAI, XRP and MANA

Post-Condition
![image](https://user-images.githubusercontent.com/47786738/134214216-53e09705-e23b-427e-8a44-93ae8048c753.png)





**Scenario 2**

1. Navigate to https://devmalta.bitso.com/login
2. Provide email address (The one you created in the precondition steps)
3. Provide password
4. Click on Login
5. Navigate to https://devmalta.bitso.com/r/user/beneficiaries/add
6. Click on Add
7. Provide random data on Name, Last name, Second last name, birthday,
kinship, benefit percentage
8. Benefit percentage
9. Click on Add
10.Enter an invalid PIN
11.Verify Incorrect PIN error

Post-Condition
![image](https://user-images.githubusercontent.com/47786738/134214563-c215d020-7040-4f3e-9d3c-21212b90eb08.png)


**Notes**

For this exercise I used VSCode as IDE, Cypress as Test Runner and Javascript as Language

If you don't have VSCode please download [here](https://code.visualstudio.com/download)

If you don't have NodeJS please download [here](https://nodejs.org/en/download/)


After install the above requeriments, open your VSCode and clone this repository


Run it

Enjoy it!




