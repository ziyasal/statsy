# statsy
calculates the  median and average using count sort 
[![Build Status](https://travis-ci.org/ziyasal/statsy.svg?branch=master)](https://travis-ci.org/ziyasal/statsy)  [![Coverage Status](https://coveralls.io/repos/github/ziyasal/statsy/badge.svg?branch=master)](https://coveralls.io/github/ziyasal/statsy?branch=master)

 ###Install Dependencies
 
 **On Windows**
 ```sh
 npm install
 ```
 
 **On Linux**
 ```sh
 sudo npm install
 ```

 ### Commands
 
 **Start App**
 ```js
//Start Workers up to size that determined in config file (for example:3)
node main.js --role='WORKER'
node main.js --role='WORKER'
node main.js --role='WORKER'

//Start Master
node main.js --role='MASTER'
 ```
 
 **Test**
 ```sh
 npm test
 ```
 
 **Coverage**
 ```sh
 npm run test-cov
 ```
 
 **ESLint**
 ```sh
 npm run lint
 ```
