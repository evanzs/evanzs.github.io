
function splitTextContent(textContent) {
    
     const text = textContent.split('/');    
    return text;
}


function parseTextToArray(obj) {    
    return obj.map(line => {
        const [ID, NOME, NOTA_OBJ] = line.split(',');
        const TOTAL = parseFloat(NOTA_OBJ);
        return { ID, NOME, NOTA_OBJ, TOTAL };
    });
}

function parseTextToArrayTypeThree(obj) {    
    return obj.map(line => {
        const [ID, NOME, NOTA_OBJ,NOTA_DISC] = line.split(',');
        const TOTAL = parseFloat(NOTA_OBJ) + parseFloat(NOTA_DISC);
        return { ID, NOME, NOTA_OBJ,NOTA_DISC, TOTAL };
    });
}

function sortArrayByProperty(array, column) {    
        return array.sort((a, b) => b[column] - a[column]);
}


