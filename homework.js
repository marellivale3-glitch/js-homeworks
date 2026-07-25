// 1
'number' + 3 + 3;
// Step 1: The + operator sees a string, so number 3 is converted to a string.
// Step 2: 'number' + '3' = 'number3'.
// Step 3: 'number3' + '3' = 'number33'.
// Result: "number33" string


// 2
null + 3;
// Step 1: null is converted to 0.
// Step 2: 0 + 3 = 3.
// Result: 3


// 3
5 && "qwerty";
// Step 1: 5 is a truthy value.
// Step 2: && returns the second operand because the first one is truthy.
// Result: "qwerty"


// 4
+'40' + +'2' + "hillel";
// Step 1: Unary + converts '40' to 40.
// Step 2: Unary + converts '2' to 2.
// Step 3: 40 + 2 = 42.
// Step 4: 42 + "hillel" converts 42 to a string.
// Result: "42hillel" string


// 5
'10' - 5 === 6;
// Step 1: The - operator converts '10' to number 10.
// Step 2: 10 - 5 = 5.
// Step 3: 5 === 6 is false.
// Result: false


// 6
true + false;
// Step 1: true is converted to 1.
// Step 2: false is converted to 0.
// Step 3: 1 + 0 = 1.
// Result: 1


// 7
'4px' - 3;
// Step 1: The - operator tries to convert '4px' to a number.
// Step 2: Conversion fails and returns NaN.
// Step 3: NaN - 3 = NaN.
// Result: NaN


// 8
'4' - 3;
// Step 1: The - operator converts '4' to number 4.
// Step 2: 4 - 3 = 1.
// Result: 1


// 9
'6' + 3 ** 0;
// Step 1: 3 ** 0 = 1.
// Step 2: '6' + 1 converts 1 to a string.
// Step 3: '6' + '1' = '61'.
// Result: "61"


// 10
12 / '6';
// Step 1: The / operator converts '6' to number 6.
// Step 2: 12 / 6 = 2.
// Result: 2


// 11
null == '';
// Step 1: null is only loosely equal to undefined.
// Step 2: null is not equal to an empty string.
// Result: false


// 12
3 ** (9 / 3);
// Step 1: Parentheses are evaluated first.
// Step 2: 9 / 3 = 3.
// Step 3: 3 ** 3 = 27.
// Result: 27


// 13
!!'false' == !!'true';
// Step 1: 'false' is a non-empty string, so it is truthy.
// Step 2: !!'false' = true.
// Step 3: 'true' is also a non-empty string, so it is truthy.
// Step 4: !!'true' = true.
// Step 5: true == true.
// Result: true


// 14
0 || '0' && 1;
// Step 1: && has higher priority than ||.
// Step 2: '0' is a truthy string, so '0' && 1 returns 1.
// Step 3: 0 is falsy, so 0 || 1 returns 1.
// Result: 1


// 15
(+null == false) < 1;
// Step 1: +null converts null to 0.
// Step 2: 0 == false is true.
// Step 3: true is converted to 1 during comparison.
// Step 4: 1 < 1 is false.
// Result: false


// 16
false && true || true;
// Step 1: && is evaluated first.
// Step 2: false && true returns false.
// Step 3: false || true returns true.
// Result: true


// 17
false && (false || true);
// Step 1: Evaluate the parentheses first.
// Step 2: false || true returns true.
// Step 3: false && true returns false.
// Result: false


// 18
(+null == false) < 1 ** 5;
// Step 1: +null converts null to 0.
// Step 2: 0 == false is true.
// Step 3: 1 ** 5 = 1.
// Step 4: true is converted to 1 during comparison.
// Step 5: 1 < 1 is false.
// Result: false
