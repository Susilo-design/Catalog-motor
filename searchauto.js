<<<<<<< HEAD
let availableKeywords = [
    'Ducati Panigale V4S',
    'Kawasaki H2'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result)

    if(!result.length) {
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list) => {
        return `<li class="data-list" data-name="p-1" onclick=selectorInput(this)>` + list + `</li>`;
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
=======
// let availableKeywords = [
//     'Ducati Panigale V4S',
//     'Kawasaki H2'
// ];

// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function() {
//     let result = [];
//     let input = inputBox.value;
//     if (input.length) {
//         result = availableKeywords.filter((keyword) => {
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(result)
//     }
//     display(result)

//     if(!result.length) {
//         resultsBox.innerHTML = '';
//     }
// }

// function display(result){
//     const content = result.map((list) => {
//         return `<li class="data-list" data-name="p-1" onclick=selectorInput(this)>` + list + `</li>`;
//     });

//     resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
// }

// function selectInput(list){
//     inputBox.value = list.innerHTML;
//     resultsBox.innerHTML = '';
// }

>>>>>>> d90964d3f0d4db343a662a11d6bfad133f016b72
