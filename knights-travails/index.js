export default function knightMoves(start, end) {
  const [gx, gy] = end;

  const q = [[start[0], start[1], [start]]];
  const visited = [];

  const traverse = () => {
    let [cx, cy, p] = q.shift();
    if (cx === gx && cy === gy) {
      return p;
    }

    if (!visited.includes(`${cx}${cy}`)) {
      visited.push(`${cx}${cy}`);
      const nb = neighbors(cx, cy);
      if (cx === 2 && cy === 1) console.log(nb);
      nb.forEach((n) => {
        q.push([n[0], n[1], [...p, [n[0], n[1]]]]);
      });
    }
    return traverse();
  };

  const pathResult = traverse();
  console.log(
    `=> You made it in ${pathResult.length - 1} moves! Here is your path`,
  );
  pathResult.forEach((p) => console.log(p));
}

function neighbors(x, y) {
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1],
  ];
  const n = [];
  for (let i = 0; i < moves.length; i++) {
    const nx = moves[i][0];
    const ny = moves[i][1];
    if (x + nx < 8 && x + nx >= 0 && y + ny < 8 && y + ny >= 0) {
      n.push([x + nx, y + ny]);
    }
  }

  return n;
}
