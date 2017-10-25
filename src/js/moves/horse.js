function horseMoves(vector, board) {

    const piece = board[vector.x][vector.y].children[0];
    const color = piece.id.split('-')[0];
    const enemy = color === 'blk' ? 'wht' : 'blk';


    const moves = [];

    
    function spaceStyle(space, type) {
        if (space.classList.contains(`${type}-space`)) {
            space.classList.add(`${type}-wht`);
        
        } else {
            space.classList.add(`${type}-blk`);
        }
        
    }

    //north
    const n = { ...vector };
    (function() {
        n.x += 2;
        if (!board[n.x]) return;

        if (board[n.x][n.y - 1]) {
            if (board[n.x][n.y - 1].children[0].id.includes(enemy)) {

                spaceStyle(board[n.x][n.y - 1], 'attack');
                moves.push({ x: n.x, y: n.y - 1 });
            }
            if (board[n.x][n.y - 1].children[0].id === 'empty'){
                spaceStyle(board[n.x][n.y - 1], 'moves');
                moves.push({ x: n.x, y: n.y - 1 });
            }
        }
        if (board[n.x][n.y + 1]) {
            if (board[n.x][n.y + 1].children[0].id.includes(enemy)) {

                spaceStyle(board[n.x][n.y + 1], 'attack');
                moves.push({ x: n.x, y: n.y + 1 });
            }
            if (board[n.x][n.y + 1].children[0].id === 'empty'){
                spaceStyle(board[n.x][n.y + 1], 'moves');
                moves.push({ x: n.x, y: n.y + 1 });
         }
        }
    })();
    //east
    const e = { ...vector };
    (function() {
        e.y += 2;
        if (!board[e.x - 1] || !board[e.x + 1]) return;

        if (board[e.x - 1][e.y] && !board[e.x - 1][e.y].children[0].id.includes(color)) {
            if (board[e.x - 1][e.y].children[0].id.includes(enemy)) {

                spaceStyle(board[e.x - 1][e.y], 'attack');

            }
            spaceStyle(board[e.x - 1][e.y], 'moves');
            moves.push({ x: e.x - 1, y: e.y });
        }
        if (board[e.x + 1][e.y] && !board[e.x + 1][e.y].children[0].id.includes(color)) {
            if (board[e.x + 1][e.y].children[0].id.includes(enemy)) {

                spaceStyle(board[e.x + 1][e.y], 'attack');

            }
            spaceStyle(board[e.x + 1][e.y], 'moves');
            moves.push({ x: e.x + 1, y: e.y });
        }
    })();
    
    const s = { ...vector };
    (function() {
        s.x -= 2;
        if (!board[s.x]) return;

        if (board[s.x][s.y - 1] && !board[s.x][s.y - 1].children[0].id.includes(color)) {
            if (board[s.x][s.y - 1].children[0].id.includes(enemy)) {

                spaceStyle(board[s.x][s.y - 1], 'attack');

            }
            spaceStyle(board[s.x][s.y - 1], 'moves');
            moves.push({ x: s.x, y: s.y - 1});
        }
        if (board[s.x][s.y + 1] && !board[s.x][s.y + 1].children[0].id.includes(color)) {
            if (board[s.x][s.y + 1].children[0].id.includes(enemy)) {

                spaceStyle(board[s.x][s.y + 1], 'attak');
            }
            spaceStyle(board[s.x][s.y + 1], 'moves');
            moves.push({ x: s.x, y: s.y + 1 });
        }
    })();
    //west
    const w = { ...vector };
    (function() {
        w.y -= 2;
        if (!board[w.x - 1] || !board[w.x + 1]) return;

        if (board[w.x - 1][w.y] && !board[w.x - 1][w.y].children[0].id.includes(color)) {
            if (board[w.x - 1][w.y].children[0].id.includes(enemy)) {

                spaceStyle(board[w.x - 1][w.y], 'attack');

            }
            spaceStyle(board[w.x - 1][w.y], 'moves');
            moves.push({ x: w.x - 1, y: w.y});
        }
        if (board[w.x + 1][w.y] && !board[w.x + 1][w.y].children[0].id.includes(color)) {
            if (board[w.x + 1][w.y].children[0].id.includes(enemy)) {

                spaceStyle(board[w.x + 1][w.y], 'attack');

            }
            spaceStyle(board[w.x + 1][w.y], 'moves');
            moves.push({ x: w.x + 1, y: w.y });
        }
    })();
    return moves
}



export default horseMoves;