import state from './state';
import moves from './moves';
import movePiece from './utils/movePiece'

const cancelBtn = document.querySelector('.cancel');
const moveBtn = document.querySelector('.moved');

function gameLogic (vector, board) {
    
    const space = board[vector.x][vector.y];

    switch(state.currTurn){
        case 'wht':
            cancelBtn.onclick = function () {
                if (!state.currPiece) return;
                movePiece(board, state.previousPos, state.captured)
                state.currPiece = '';
                state.moved = false;
            }
            moveBtn.onclick = function () {
                if (!state.moved) return
                state.currTurn = 'blk'
                state.moved = false;
                state.currPiece = '';
                state.previousPos = '';
            }
            break;
        case 'blk':
            cancelBtn.onclick = function () {
                if(!state.currPiece) return
                movePiece(board, state.previousPos, state.captured)
                state.currPiece = ''
                state.moved = false;
            }
            moveBtn.onclick = function () {
                if (!state.moved) return;
                state.currTurn = 'wht'
                state.moved = false;
                state.currPiece = '';
                state.previousPos = '';
            }
            break;
        default:
            break;
    }
    
}

export default gameLogic;