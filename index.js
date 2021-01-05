const board = document.getElementById('myCanvas'),
        ctx = board.getContext('2d'); 
        
function makeBoard() {
    let sqr = board.width/8,
        row = 0,
        col = 0;

    for(let i = 0; i <= 8; i++) {
        for(let j = 0; j <= 8; j++){
            if((j + i) % 2 == 0) {
                col += sqr
            } else {
                ctx.fillRect(col,row,sqr,sqr);
                col += sqr;
            }
        }
        row += sqr;
        col = 0;
    }
}

// makeBoard();


window.addEventListener('load', function(){
    let svgObject = document.getElementById('pieces').contentDocument;
    let element = svgObject.getElementById('bKing')
});