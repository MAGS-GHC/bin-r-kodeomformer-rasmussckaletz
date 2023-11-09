const binaryNumbers = [128, 64, 32, 16, 8, 4, 2, 1];

function bintoip() {
    let binaryToIP = 0;
    let binaryToIPArray = [];
    let binaryToIPValue = document.getElementById("binarytoip").value; // giver variablen det input der blev skrevet
    let validBinary = /^[01.]+$/.test(binaryToIPValue); // tjekker om input er valid (om den KUN indeholder 0, 1 og ".")
    const binaryToIPValueSplit = binaryToIPValue.split("."); // splitter input efter "." til array - resultat eksempel: [11000000, 10000111, 00000000, 00000001]
    if (validBinary) { // tjekker om inputtet er valid
        for (part in binaryToIPValueSplit) { // tjekker en "del" af gangen i den splittede array
            let binaryArrayPart = binaryToIPValueSplit[part]; // tildeler første part tallet til en variabel. resultat: 11000000
            for (index in binaryArrayPart) { // looper første part - et tal af gangen
                if (Number(binaryArrayPart[index]) === 1) { // tjekker om tallet den er i gang med er lig med 1
                    binaryToIP += binaryNumbers[index]; // finder den tilsvarende index værdi i øverste array og tildeler den til vores binaryToIP variabel
                }
            }
            binaryToIPArray.push(binaryToIP); // efter alle tal er loopet i gennem for første part, så "pusher" vi tallet til arrayen binaryToIPArray
            binaryToIP = 0; // resetter variablen tilbage til start, så den er klar til den næste part, som vil være: 10000111
        }
        alert(`IP: ${binaryToIPArray[0]}.${binaryToIPArray[1]}.${binaryToIPArray[2]}.${binaryToIPArray[3]}`); // sender alert med hvert index i vores binaryToIPArray og viser IP
    } else {
        alert("Error. Acceptable input: 1, 0 and '.'"); // fejl beskeden, som kommer, hvis inputtet ikke er valid
    }
}

function iptobin() {
    let ipToBinary = "";
    let ipToBinaryArray = [];
    let ipToBinaryValue = document.getElementById("iptobinary").value; // giver variablen det input der blev skrevet
    let validIP = /^[0123456789.]+$/.test(ipToBinaryValue); // tjekker om input er valid (om den KUN indeholder 0-9 og ".")
    const ipToBinaryValueSplit = ipToBinaryValue.split("."); // splitter input efter "." til array - resultat eksempel: [192, 135, 0, 1]
    if (validIP) { // tjekker om inputtet er valid
        for (index in ipToBinaryValueSplit) { // tjekker en "del" af gangen i den splittede array
            let currentNumber = Number(ipToBinaryValueSplit[index]); // tildeler første part-tallet til en variabel. resultat: 192
            for (i in binaryNumbers) { // looper gennem array øverst for binary numre
                if (currentNumber >= binaryNumbers[i]) { // tjekker om vores første part-tal er større eller lig med det tal, den tjekker, i binary numre arrayen
                    currentNumber -= binaryNumbers[i]; // hvis ja, så tjekker den det binære tal fra første part-tallet
                    ipToBinary += "1"; // tilføjer "1" til ipToBinary variabel, da første part-tallet er større eller lig med det tal den tjekker i binary arrayen
                } else {
                    ipToBinary += "0"; // tilføjer 0, hvis det ikke er større eller lig med
                }
            }
            ipToBinaryArray.push(ipToBinary); // pusher nuværende værdi af ipToBinary til vores ipToBinaryArray ligesom tidligere
            ipToBinary = ""; // resetter, så den er klar til næste brug
        }
        alert(`Binary: ${ipToBinaryArray[0]}.${ipToBinaryArray[1]}.${ipToBinaryArray[2]}.${ipToBinaryArray[3]}`); 
        // sender alert med hvert index i vores ipToBinaryArray og viser binary versionen
    } else {
        alert("Error. Acceptable input: Numbers (0-9) and '.'"); // fejl besked, som kommer, hvis inputtet ikke er valid
    }
}