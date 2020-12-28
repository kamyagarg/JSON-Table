

function tableFromJson() {
    

    var myBooks = [
        {'Book ID': '1', 'Book Name': 'Challenging Times',
            'Category': 'Business', 'Price': '125.60'
        },
        {'Book ID': '2', 'Book Name': 'Learning JavaScript',
            'Category': 'Programming', 'Price': '56.00'
        },
        {'Book ID': '3', 'Book Name': 'Popular Science',
            'Category': 'Science', 'Price': '210.40'
        },
        {'Book ID': '4', 'Book Name': 'Popular Science222',
            'Category': 'Science', 'Price': '216.40','Category1': 'Science'
        }
    ]

    // let myBooks=[
    //     {
    //         color: "red",
    //         value: "#f00"
    //     },
    //     {
    //         color: "green",
    //         value: "#0f0"
    //     },
    //     {
    //         color: "blue",
    //         value: "#00f"
    //     },
    //     {
    //         color: "cyan",
    //         value: "#0ff"
    //     },
    //     {
    //         color: "magenta",
    //         value: "#f0f"
    //     },
    //     {
    //         color: "yellow",
    //         value: "#ff0"
    //     },
    //     {
    //         color: "black",
    //         value: "#000"
    //     }
    // ]

    // Row - Header. 
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Create a table.
    var table = document.createElement("table");

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add json data to the table as rows.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementsByClassName('jsontable')[0];
    divShowData.innerHTML = "";
    divShowData.appendChild(table);

}





// let json = '{ "name":"John", "age":30, "city":"New York"}';
// let obj = JSON.parse(json);
// console.log("object",obj);
// console.log("object length",obj.length);
// console.log("object",obj.name);


// let cars = '[ "Ford", "BMW", "Audi", "Fiat" ]';
// let js_array = JSON.parse(cars);
// console.log("array:",js_array.length);
// console.log("array:",js_array[0]);


// let myBooks = [ 
//     {'Book ID': '1', 'Book Name': 'Challenging Times',
//     'Category': 'Business', 'Price': '125.60'
//     },
//     {'Book ID': '2', 'Book Name': 'Learning JavaScript',
//     'Category': 'Programming', 'Price': '56.00'
//     },
//     {'Book ID': '3', 'Book Name': 'Popular Science',
//     'Category': 'Science', 'Price': '210.40'
//     },
//     {'Book ID': '4', 'Book Name': 'Popular Science222',
//     'Category': 'Science', 'Price': '216.40'
//     }];
// console.log("length of mybooks",myBooks.length);
// console.log(myBooks);
// console.log(typeof(myBooks));
// let col =[];
// for(let i=0; i<myBooks.length;i++){
//     for(let key in myBooks[i]){
//         console.log("key:",key);
//         console.log("index of key:",col.indexOf(key));  
//         if(col.indexOf(key)===-1){         
//             col.push(key);
//         }
//     }
//     console.log("next")
// }

// console.log("col:",col);

