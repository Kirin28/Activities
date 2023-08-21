function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //resultApples = 0;
    //resultOranges = 0;
    const countApples = apples.map((apple) => apple + a).filter((apple) => (apple >= s && apple <= t));
    const countOranges = oranges.map((orange) => orange + b).filter((orange) => (orange >= s && orange <= t))
    console.log(countApples.length);
    console.log(countOranges.length);
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));

//filter((apple) => (s > apple < t));