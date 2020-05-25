class Bottles {
    constructor(){
        this.start = 99;
        this.end = 0;
    }

    verse(start){
        return this.checkVerse(start);
    }

    verses(start, end){
        let response = '';
        for(let i = start; i >= end; i--){
            response += this.checkVerse(i);
            response = this.addVerseNewline(i, end, response);
        }
        return response;
    }

    song(){
        let response = '<<-SONG\n';
        for(let i = this.start; i > -1; i--){
            response += this.checkVerse(i);
            response = this.addVerseNewline(i, this.end, response);
        }
        response += 'SONG'
        console.log(`this is the song: ${response}`);
        return response;
    }    
    checkVerse(start){
        if(start === 0){
            return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
        }
        else if(start ===1){
            return `${start} bottle of beer on the wall, ${start} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.\n`;
        }
        else if(start === 2){
            return `${start} bottles of beer on the wall, ${start} bottles of beer.
Take one down and pass it around, ${start-1} bottle of beer on the wall.\n`;
        } else {
            return `${start} bottles of beer on the wall, ${start} bottles of beer.
Take one down and pass it around, ${start-1} bottles of beer on the wall.\n`;
        }
    }

    addVerseNewline(i, end, response){
        if(i === end){
            return response;
        } else {
            response += "\n";
        }
        return response;
    }

}
module.exports = Bottles;