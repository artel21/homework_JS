//#TYj7ncx
//
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині




for (let i = 0; i < 10; i++) {
    //document.write('<div> Hello My Old Friends ' + i + '</div>');
    /* ! з конкатинацією індекса*/

    document.write(`<div> Hello My Old Friends ${i}</div>`);
    /* ! стрінгові косі лапки + інтерполяція*/
}

//=====================================================================
// ! (при виборі document.write - налаштування html)