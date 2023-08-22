function kangaroo(x1, v1, x2, v2) {
if (x1 > x2 && v1 > v2) return "NO"
if (x1 < x2 && v1 < v2) return "NO"
if (v1 === v2) return "NO"
return ((x2 - x1) % (v1 - v2) == 0) ? "YES" : "NO";
}
//not my solution

console.log(kangaroo(2, 1, 1, 2)); //"YES"
/* Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

int x1, int v1: starting position and jump distance for kangaroo 1
int x2, int v2: starting position and jump distance for kangaroo 2 */