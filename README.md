# responsive-graph-labels
A small library originally made for chartist.js which takes uniform length graph labels and returns an optimal, evenly distributed set for the available width. Always returns the first and last value.

## Installation

`npm install --save responsive-graph-labels`

## Usage

Since the tests are written in ES6 they need to be webpacked so the `build` and `test` commands do the same thing.

- To build the files and run tests you can use `npm test` in the cli

- To build the project run `npm run build`

- Run the tests only by running `jasmine` in your cli

- Webpack similarly is triggered by running `webpack` in your cli

- eslint is automatically executed with webpack care of 
[eslint-loader](https://github.com/MoOx/eslint-loader) and [airbnb eslint config](https://github.com/airbnb/javascript)

- The module is written in vanilla ES6 and transpiled into ES5 by babel.


## How it works

The calculation requires 5 arguments:

| argument  | description  |
|---|---|
|  labels | an array containing the labels to be resized  |
|  labelWidth | the pixel width of rendered labels  |
| labelPadding  |  the pixel width of padding on the labels |
| emptyLabelValue | the value to place in slots which are removed |
| labelContainerWidth | the containers width in pixels |

For example:

      const result = responsiveLabels.scale({
          labels: ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','jan'],
          labelWidth 10,
          labelPadding 5,
          emptyLabelValue: '',
          labelContainerWidth 100,
      });
      
The above example would give the resulting array:

      [ 'jan', '', '', 'apr', '', '', 'jul', '', '', 'oct', '', '', 'jan' ]
     
## How it works

There are two scenarios we have to handle. the majority case is an odd number of labels(n) 
or an even number of labels(n) where `(n - 1)` is not a prime number. The second
case is that where `(n - 1)` is a prime number.

### Approach 1:

The basis of the primary calculation is: `x = ((n-1) / m) + 1`
- `x` = the number of evenly divided spaces
- `n` = the number of points on the axis
- `m` = a factor of `(n-1)`

*note that we need to add one to the total in order to prevent a fencepost error*

The above formula is used when `n` is either an odd number or is an even number that does
not satisfy: `(n-1) = P`

- where `P` is a prime number

### Approach 2:

Where we have a prime number, it is not divisible and so we fall back to an estimation
this technique calculates a step which is used to pick items from the labels array 
it does this using the following calculation:

`i * ((n - 1) / (w / l + p)) = x`

- `x` = the index within the original array from which to take the next label
- `i` = the index within the looping construct `(0...((w / l + p)-1))`
- `n` = number of points on the axis
- `w` = the width of the graph space
- `l` = the width of the label
- `p` = the padding between labels
