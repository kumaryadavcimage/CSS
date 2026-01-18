function downloader(url, cb){
    // write a dummy impl using setTimeout to show a delay
    console.log("Starting download from ",url);
    setTimeout(() => {
        console.log("Download completed from ",url);

        const data = `data from ${url}`;
        cb(data);
    },4000)
}

function writeFile(data,cb) {
    // write a dummy impl using setTimeout to show a delay
    console.log("starting to write file");
    setTimeout(() => {
        console.log("file write completed");
        const fileName = `file_${data}.txt`;
        cb(fileName);
    },2000)
}

function uploadFile(fileName, newUrl, cb){
    // write a dummy impl using setTimeout to show a delay
    console.log("starting to upload ",fileName , "to ",newUrl);
    setTimeout(() => {
        console.log("file upload completed to ",newUrl);
        const response = `file uploaded to ${newUrl}`;
        cb(response);

    },3000)
}

// downloder("www.google.com", function(data) {
//     writeFile(data, " myDb", function(fileName) {
//         uploadFile(fileName, "www.drive.com", function(response) {
//             console.log(response);

//         })
//     })
// })

downloader("www.google.com", function(data) {
    console.log("Data is",data)
    writeFile(data, function(fileName) {
        console.log("File name is ",fileName);
        uploadFile(fileName, "www.drive.com", function(response) {
            console.log(response);
        }) 
    })
})