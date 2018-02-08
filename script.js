//function to see if a word exists in any row of a two dim array
function exists(arr, word){
    return arr.some(row => row.includes(word));

}


//function to convert the target string into a two dim array with word count
function toTwoDimArray(text){
    let textArray = text.split(" "); // convert target string into a single dim array
    console.log(textArray.length); 
    var twoDimArray = []; //declare a two dim array
    for(i = 0; i < textArray.length; i++){
        if(!exists(twoDimArray, textArray[i])){
            twoDimArray[i] = [textArray[i]]
            twoDimArray[i][1] = 1;
        }
        else{
            for(x = 0; x < twoDimArray.length; x++){
                if(twoDimArray[x][0] == textArray[i])
                {
                    twoDimArray[x][1]++;
                }
            }
        }  
    
    }
    return twoDimArray;
}

export {twoDimArray};