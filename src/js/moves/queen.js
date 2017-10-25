function queenMoves (vector, board) {
    // console.log('queen moves', vector, board);
    
    const piece = board[vector.x][vector.y].children[0];
    const color = piece.id.split('-')[0];
    const enemy = color === 'blk' ? 'wht' : 'blk'
    const moves = [];
    

    function spaceStyle(type, space) {
        if (space.classList.contains(`white-space`)) {
            space.classList.add(`${type}-wht`);
        } else {
            space.classList.add(`${type}-blk`);
        }
    }

    
    //north values
    const n = { ...vector };
    for( ; ; ) {
        n.x++;
        
        if(!board[n.x]) break;
        const space = board[n.x][n.y];
       
        if (space.children[0].id.includes(color))break;
        if (space.children[0].id.includes(enemy)) { 
            spaceStyle('attack', space);
                moves.push({ x: n.x, y: n.y});
            break;
        }
        if(space.children[0].id === 'empty') {
                spaceStyle('moves', space); 
        }
        moves.push({ x: n.x, y: n.y});
    } 
    
    //southwest
    const sw = { ...vector };
    for( ; ; ) {
        sw.x--;
        sw.y--;
        
        if(!board[sw.x]|| !board[sw.x][sw.y]) break;
        
        const space = board[sw.x][sw.y];
            if (space.children[0].id.includes(color))break;
            if (space.children[0].id.includes(enemy)){
                 spaceStyle('attack', space);
                    moves.push({ x: sw.x, y: sw.y});
                break;
            }
            if(space.children[0].id === 'empty') {
                   spaceStyle('moves', space); 
        }
        moves.push({ x: sw.x, y: sw.y});
    } 
    //south
    const s = { ...vector };
    for( ; ; ) {
        s.x--;
        
        if(!board[s.x]) break;
       
        const space = board[s.x][s.y];

        if(space.children[0].id === 'empty') {
                spaceStyle('moves', space); 
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else { 
                spaceStyle('attack', space);
                    moves.push({ x: s.x, y: s.y});
                break;
            }
        }
        moves.push({ x: s.x, y: s.y});
    } 
    
    //southeast
    const se = { ...vector };
    for( ; ; ) {
        se.x--;
        se.y++;
        
        if(!board[se.x]|| !board[se.x][se.y]) break;
       
        const space = board[se.x][se.y];

        if(space.children[0].id === 'empty') {
                spaceStyle('moves', space); 
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else { 
                spaceStyle('attack', space);
                    moves.push({ x: se.x, y: se.y});
                break;
            }
        }
        moves.push({ x: se.x, y: se.y});
    } 
    
    //northeast
    
        const ne = { ...vector };
    for( ; ; ) {
        ne.x++;
        ne.y++;
        if(!board[ne.x]|| !board[ne.x][ne.y]) break;
       
        const space = board[ne.x][ne.y];

        if(space.children[0].id === 'empty') {
                spaceStyle('moves', space); 
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else { 
                spaceStyle('attack', space);
                    moves.push({ x: ne.x, y: ne.y});
                break;
            }
        }
        moves.push({ x: ne.x, y: ne.y});
    } 
        //northwest values
    const nw = {...vector};
    for( ; ; ) {
        nw.x++;
        nw.y--;
        
        if(!board[nw.x]|| !board[nw.x][nw.y]) break;
        
        const space = board[nw.x][nw.y] 

        if(space.children[0].id === 'empty') {
                spaceStyle('moves', space); 
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else { 
                spaceStyle('attack', space);
                    moves.push({ x: nw.x, y: nw.y})
                break;
            }
        }
        moves.push({ x: nw.x, y: nw.y})
    }
        //west values
    const w = {...vector};
    for( ; ; ) {
        w.y--;
        
        if(!board[w.x][w.y]) break;
        
        const space = board[w.x][w.y] 

        if(space.children[0].id === 'empty') {
                spaceStyle('moves', space); 
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else { 
                spaceStyle('attack', space);
                    moves.push({ x: w.x, y: w.y})
                break;
            }
        }
        moves.push({ x: w.x, y: w.y})
    }
        //east values
    const e = {...vector};
    for( ; ; ) {
        e.y++;
        
        if(!board[e.x][e.y]) break;
        
        const space = board[e.x][e.y] 

        if(space.children[0].id === 'empty') {
                spaceStyle('moves', space); 
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else { 
                spaceStyle('attack', space);
                    moves.push({ x: e.x, y: e.y})
                break;
            }
        }
        moves.push({ x: e.x, y: e.y})
    }
    return moves;
}

export default queenMoves;
