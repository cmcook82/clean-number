#CleanNumber

Takes a number or string, and returns a number from the values within it ready to be used for future calculations.


## Testing

test.html, tests function against the following array:

[423.234, 23, -238.43, "-23,237.94", "something-34really0dd.3443text", "£84pounds.60pence", "200%"]

Returns:

[423.234, 23, -238.43, -23237.94, 340.3443, 84.60, 200]