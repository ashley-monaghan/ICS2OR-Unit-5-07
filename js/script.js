// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-5-07/sw.js", {
    scope: "/ICS2OR-Unit-5-07/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const inputedNumber = parseInt(document.getElementById("textbox-a").value)

  counter = 0
  sum = 0

  while (counter <= inputedNumber) {
    sum = sum + counter
    counter++
  }

  document.getElementById("product").innerHTML = "The product is: " + sum
}
