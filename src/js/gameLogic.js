import state from './state';
import moves from './moves';
import movePiece from './utils/movePiece'

const cancelBtn = document.querySelector('.cancel');
const moveBtn = document.querySelector('.moved');
const turn = document.querySelector('.turn');


function gameLogic (vector, board) {
    
    const space = board[vector.x][vector.y];
    
    switch(state.currTurn){
        case 'wht':
            cancelBtn.onclick = function () {
                if (!state.currPiece) return;
                movePiece(board, state.previousPos, state.captured);
                state.currPiece = '';
                state.captured = '';
                state.moved = false;
            };
            moveBtn.onclick = function () {
                if (!state.moved) return;
                state.currTurn = 'blk';
                state.moved = false;
                state.currPiece = '';
                state.previousPos = '';
                state.captured = '';
                turn.innerHTML = 'Turn: Black';

            };
            break;
        case 'blk':
            cancelBtn.onclick = function () {
                if(!state.currPiece) return;
                movePiece(board, state.previousPos, state.captured);
                state.currPiece = '';
                state.moved = false;
                state.captured = '';
            };
            moveBtn.onclick = function () {
                if (!state.moved) return;
                state.currTurn = 'wht';
                state.moved = false;
                state.currPiece = '';
                state.previousPos = '';
                state.captured = '';
                turn.innerHTML = 'Turn: White';
            };
            break;
        default:
            break;
    }
    
}

export default gameLogic;