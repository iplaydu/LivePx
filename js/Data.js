/*
* Constructor for ImageSet
*/
Data = function () {
    this.folderName;
    this.fileName = new Array;
}


/**
* transform an array of image path to a data array
*/
function arrayToData(array) {
    var data = new Data;

    var tmp = array[0].split("/");
    data.fileName[0] = tmp[tmp.length - 1];
    
    //Formating the folderName
    tmp.pop();
    tmp = tmp.toString();
    data.folderName = tmp.replace(/\,/g, "/");

    //Formating the fileName
    if (array[array.length] == undefined) {// If the last node is undefined --> patch for orangium
        array.pop();
    }

    for (var i = 1; i < array.length; i++) {
        var tmp = array[i].split("/");
        data.fileName[i] = tmp[tmp.length - 1];
    }
    return data;
}



/**
* transform a string of image path to a data array
* return an array composed of 
*
* foldeName string
* fileName: array of all name
*/
Array.prototype.stringToData = function (string) {
    this.clear();
    var dataArray = string.split("\n");

    for (var i = 0; i < dataArray.length; i++) {
        tmp = dataArray[i].split("|");
        tmp = arrayToData(tmp);
        this.push(tmp);
    }
}

