var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.   Parsons Problem, Mathematical Proof  even numbers   Create a proof of the theorem: If is an even number, then .  [Ed. If you examine the source, you will also notice the <exercise> lacks a language attribute. It is relying on the docinfo\/parsons\/@language value that is in bookinfo.xml. If present, that attribute will be used for any Parsons that lack a language .]     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .     Dorothy will not be much help with this proof.    "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "sec-section-name.html#number-theory-proof",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": " Parsons Problem, Mathematical Proof  even numbers   Create a proof of the theorem: If is an even number, then .  [Ed. If you examine the source, you will also notice the <exercise> lacks a language attribute. It is relying on the docinfo\/parsons\/@language value that is in bookinfo.xml. If present, that attribute will be used for any Parsons that lack a language .]     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .     Dorothy will not be much help with this proof.   "
},
{
  "id": "proteus-1-1",
  "level": "1",
  "url": "proteus-1-1.html",
  "type": "Exercises",
  "number": "1.2",
  "title": "PROTEUS exercises",
  "body": " PROTEUS exercises  In part ewtrstryd you explored the velocity of a ball at various times. Answer the following questions to explore other rates of change.   For each of the following scenarios, specify the independent\/input and dependent\/output variables, along with possible units for both. Then give units for the rate of change.    The population of a city changes over time.   Independent:     Dependent:     Rate of change:        As a weather balloon rises, the temperature of the air inside (and outside) the balloon decreases.   Independent:     Dependent:     Rate of change:        For a given trip (i.e. a set distance) as the speed of the car increases, the travel time decreases.   Independent:     Dependent:     Rate of change:        As the population of a city decreases, the tax revenue of the city also decreases.   Independent:     Dependent:     Rate of change:          Give your own example of a quantity that changes over time, the units of the independent and dependent variables, and the rate of change.    "
},
{
  "id": "proteus-rates-o-change",
  "level": "2",
  "url": "proteus-1-1.html#proteus-rates-o-change",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": " For each of the following scenarios, specify the independent\/input and dependent\/output variables, along with possible units for both. Then give units for the rate of change.    The population of a city changes over time.   Independent:     Dependent:     Rate of change:        As a weather balloon rises, the temperature of the air inside (and outside) the balloon decreases.   Independent:     Dependent:     Rate of change:        For a given trip (i.e. a set distance) as the speed of the car increases, the travel time decreases.   Independent:     Dependent:     Rate of change:        As the population of a city decreases, the tax revenue of the city also decreases.   Independent:     Dependent:     Rate of change:        "
},
{
  "id": "proteus-example-roc",
  "level": "2",
  "url": "proteus-1-1.html#proteus-example-roc",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": " Give your own example of a quantity that changes over time, the units of the independent and dependent variables, and the rate of change.   "
},
{
  "id": "proteus-1-2",
  "level": "1",
  "url": "proteus-1-2.html",
  "type": "Exercises",
  "number": "1.3",
  "title": "PROTEUS exercises",
  "body": " PROTEUS exercises  As noted in , we are interested in studying the behavior of the output of a function as the input value gets closer and closer to a specified chosen number. One way to visualize this process is to think about a tiny bug walking along the graph of a function, as pictured here:   Piecewise graph with point. .     g(x) = 3-(x+2)^2  h(x) = x+1  k(x) = 5-x  a = 0.6       f(x) = chi_oc(-5,-1,x)*g(x) + chi_co(-1,5,x)*h(x)  BUG             Focusing on the bug, the -value that the bug is directly above is the corresponding input value to the function, and the -value at the bug's height (directly across from the bug) is the corresponding output value of the function. In the figure here, the bug's position corresponds approximately to the point     If the bug walks along the curve in such a way that it gets closer and closer to the location where , what happens to the corresponding function value that corresponds to the bug's height? Does it matter if they approach the location where from either the left side or the right side of ? Discuss what you see in the picture.    Finally, what happens if the bug walks in such a way that the corresponding -value gets closer and closer to ? What do you notice about the corresponding output values in this case?     "
},
{
  "id": "Fig-PA-1-2-und-limits",
  "level": "2",
  "url": "proteus-1-2.html#Fig-PA-1-2-und-limits",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Piecewise graph with point. .     g(x) = 3-(x+2)^2  h(x) = x+1  k(x) = 5-x  a = 0.6       f(x) = chi_oc(-5,-1,x)*g(x) + chi_co(-1,5,x)*h(x)  BUG         "
},
{
  "id": "proteus-und-limits",
  "level": "2",
  "url": "proteus-1-2.html#proteus-und-limits",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "   Focusing on the bug, the -value that the bug is directly above is the corresponding input value to the function, and the -value at the bug's height (directly across from the bug) is the corresponding output value of the function. In the figure here, the bug's position corresponds approximately to the point     If the bug walks along the curve in such a way that it gets closer and closer to the location where , what happens to the corresponding function value that corresponds to the bug's height? Does it matter if they approach the location where from either the left side or the right side of ? Discuss what you see in the picture.    Finally, what happens if the bug walks in such a way that the corresponding -value gets closer and closer to ? What do you notice about the corresponding output values in this case?    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
