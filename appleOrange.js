function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const countApples = apples.map((apple) => apple + a).filter((apple) => (apple >= s && apple <= t));
    const countOranges = oranges.map((orange) => orange + b).filter((orange) => (orange >= s && orange <= t));
    console.log(countApples.length);
    console.log(countOranges.length);
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
//1
//2

/* Function Description

Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree. */