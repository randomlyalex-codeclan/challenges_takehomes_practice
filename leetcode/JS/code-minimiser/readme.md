# Minimiser

## Installation

From the root directory, install the npm dependencies:\
  `npm install` 
  
## Tests

In order to run the tests, in the root directory:\
 `npm test`


This problem is a kind of code minimiser/compressor. It takes an input string and replaces
identifiers with shorter ones. You will write a function that takes as input a string containing
the source code and finds and replaces duplicate identifiers and returns the resulting string.
You do not need to handle file input/output. For the purposes of this exercise an identifier is
a string of letters (only). For example, "alice" is a single identifier while "jump4joy" is the
identifier "jump", the non-identifier "4" and a second identifier "joy".
The second and subsequent times each identifier appears it is replaced by a dollar sign and
a number which is the index of the first appearance of that identifier, counting the first
identifier as 0, the next as 1, etc. Anything that is not an identifier is output as is and you do
not need to parse the non-identifier parts. For example:

minimise("you say yes, I say no you say stop and I say go go go")

=>

"you say yes, I $1 no $0 $1 stop and $3 $1 go $12 $12"


As the example illustrates, this doesn't necessarily make things shorter as the single
character identifier "I" in this example is replaced with two characters "$3". And it's not really
a code minimiser either, because the result won't be valid code. As you will see in the larger
example below, the replacements are made even inside comments and strings (which a real
minimiser probably wouldn't do). That's because the code does not look at the non-identifier
characters and doesn't know about quotes and comment markers. Whitespace is preserved
because it treats space characters like any other non-identifier character: they're left
unchanged.