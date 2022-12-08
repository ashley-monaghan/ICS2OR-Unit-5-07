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
 * This function does multiplication.
 */
function myButtonClicked() {
  var numA = parseFloat(document.getElementById("firstInputedNumber").value)
  var product = 0
  var counter = 0

  while (counter <= numA) {
    product = product + counter
    counter++
  }

  document.getElementById("product").innerHTML = "The product is: " + product
}
