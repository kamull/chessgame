import moves from '../moves';
import playerMoves from './playerMoves';
import state from '../state';
import checkKing from './checkKing';

function movePiece (vector, space, board) {
    const x = vector.x;
    const y = vector.y;
    const px = space.id.split(',')[0];
    const py = space.id.split(',')[1];
    
    const emptySpace = document.createElement('div');
            emptySpace.classList.add('chess-piece');
            emptySpace.setAttribute('id', 'empty');
    
    board[x][y].removeChild(board[x][y].children[0]);
    board[x][y].appendChild(board[px][py].children[0]);
    board[px][py].appendChild(emptySpace);

    
}


function checkMate (board, checkMoves, enemy) {
    let king = null;
    let kingMoves = [];
    let cantMove = true;
    let checkMate = false;
    let player = enemy === 'wht' ? 'blk' : 'wht';
    
    board.forEach((row, x) =>{
        row.forEach ((space, y) =>{
            if (board[x][y].children[0].id.includes(`${enemy}-king`)) {
             king = {x: x, y: y};   
            }
        });
    });
    kingMoves = moves(board[king.x][king.y], board);
    kingMoves.forEach((km) => {
        if (!cantMove) return;
        const found = checkMoves.filter((cm) => {
            return km.x === cm.x && km.y === cm.y;
        
        });
        if (found.length ===0) {
            cantMove = false;
        }
    });
    console.log(cantMove);
    
    if (cantMove) {
        //check to see if player can block checking piece
        const playerSpaces = playerMoves(board, player, 'spacesArray');
        const checkingPieces = [];
        playerSpaces.forEach((space) => {
            const pieceMoves = moves(space, board);
            pieceMoves.forEach((move) => {
                if (move.x === king.x && move.y === king.y ) {
                    checkingPieces.push(space);
                } 
            });
        });
        
        if(checkingPieces.length >= 2) {
            console.log('checkmate!');
            return;
        }    
    
        const checkingPieceArray = moves(checkingPieces[0], board);
        const enemySpaces = playerMoves(board, enemy, 'spacesArray'); 
        enemySpaces.forEach((space) => {
           if(space.children[0].id.includes('king')) return;
           
           const spaceMoves = moves(space, board);
           let isCheck = true;
           const overlapArray = [];
           checkingPieceArray.forEach ((checking) => {
                spaceMoves.forEach ((moves) => {
                    if (!isCheck) return;
        //see if any piece can take checking piece. 
                    if(board[moves.x, moves.y].children[0].id === (checkingPieces[0].children[0].id)) {
                        isCheck = false
                    }
                        
                        

        //see if any piece can block checking piece. 
                    if (checking.x === moves.x && checking.y === moves.y) {
                        overlapArray.push(moves);
                        movePiece({x: moves.x ,y: moves.y}, space, board );
                        const currentPlayerMoves = playerMoves(board, state.currTurn, 'playerArray');
                        isCheck = checkKing(currentPlayerMoves, board, enemy);
                        movePiece({x: space.id.split(',')[0], y: space.id.split(',')[1]}, board[moves.x][moves.y], board);

                    }
                }); 
           });
            if (isCheck) {
                alert ('Game Over')
            }

        });
            
        
    }
    console.log(kingMoves);
}
export default checkMate;