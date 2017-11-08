import moves from '../moves/';
import state from  '../state';

function playerMoves(board, player, type) {
    
    const spacesArray = [];
    let playerArray = [];
    // console.log('playermoves');
    board.forEach((row, x) => {
        row.forEach((space, y) => {
            if (board[x][y].children[0].id.includes(player)) {
                spacesArray.push(board[x][y]);
                
            }
            
        });
    });
    
    spacesArray.forEach((space) => {
        const movesArray = moves(space, board, 'check');
        playerArray = [...playerArray, ...movesArray];
        
    });
    console.log(spacesArray);
    if (type === 'playerArray') {
        return playerArray;
    }
    if (type === 'spacesArray') {
        return spacesArray;
    }
    
    return playerArray;
}

export default playerMoves;