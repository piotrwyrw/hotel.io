let tab_struc = {
    rows: [
        ["", "Description", "Price", ""],
        ["Tomato Soup", "Made with tomatoes from a nearby farm", price(5), tab_pic("../rsrc/soup.jpg")],
        ["Rice & Chicken", "Specialty of the house", price(15), tab_pic("../rsrc/rice.jpg")],
        ["Fish & Chips", idk(), price(15), tab_pic("../rsrc/fish.jpg")],
        ["Honey Shrimps", idk(), price(20), tab_pic("../rsrc/shrimps.jpg")],
        ["Chocolate Ice Cream", idk(), price(7), tab_pic_a("../rsrc/ice.jpg", "alert('How'd you like some ice cream, Doc?')")],
        ["Hamburger", idk(), price(12), tab_pic("../rsrc/burger.jpeg")]
    ]
};

let border_preset = {
    "border": "1px solid black",
    "border-collapse": "collapse"
};

let default_preset = {
    "display": "flex",
    "justify-content": "center",

    "padding": "10px",
    "font-size": "24px",

    "preset-clazz": border_preset,
    "preset-tr": border_preset,
    "preset-td": border_preset
};

let tab_settings = {
    "preset": default_preset
};

function setting_apply_safe(elmnt, key, val, clazz) {
    if (elmnt == null || key == null || val == null) {
        return;
    }

    if (key == "preset") {
        apply_settings(elmnt, val, clazz);
        return;
    } else if (key == "preset-tr") {
        let trs = document.getElementsByClassName(clazz + "-tr");
        for (let i = 0; i < trs.length; i ++) {
            apply_settings(trs[i], val, clazz);
        }
        return;
    } else if (key == "preset-td") {
        let tds = document.getElementsByClassName(clazz + "-td");
        for (let i = 0; i < tds.length; i ++) {
            apply_settings(tds[i], val, clazz);
        }
        return;
    } else if (key == "preset-clazz") {
        let czs = document.getElementsByClassName(clazz);
        for (let i = 0; i < czs.length; i ++) {
            apply_settings(czs[i], val, clazz);
        }
        return;
    }

    if (elmnt.style != null) {
        elmnt.style.cssText += key + ": " + val + ";";
    }
}


function apply_settings(ct, stngs, clazz) {
    // Check if there are any settings
    if (stngs == null) {
        return;
    }

    // Apply the settings
    let keys = Object.keys(stngs);
    keys.forEach((key) => {
        setting_apply_safe(ct, key, stngs[key], clazz);
    });
}

// Container - Where to create the table (ID!)
// Clazz - CSS Class to assign to the table and its elements
//         Example: Table class: table1  Tr-Class: table1-tr  Td-Class: table1-td
// Struc - JSON Structure that contains the table data
//         {row: ["Str", .., "<a>Hello, World!</a>"], row: ...}
function create_table(ct, clazz, struc, stngs) {
    let c = document.getElementById(ct);

    // Do a lot of error checking because JS
    if (c == null) {
        console.error("No container with the id '" + ct + "' was found.");
        return;
    }
    if (struc == null) {
        console.error("Structure is null.");
        return;
    }
    if (struc.rows == null) {
        console.error("Expected the structure to contain a 'rows' field.");
        return;
    }

    // Actually generate the table
    let tab = document.createElement("table");
    tab.classList.add(clazz);
    let tr = null;
    struc.rows.forEach((row) => {
        tr = document.createElement("tr");
        tr.classList.add(clazz + "-tr");
        row.forEach((col) => {
            if (typeof(col) != "string") {
                return;
            }
            let td = document.createElement("td");
            td.classList.add(clazz + "-td");
            td.innerHTML = col;
            tr.append(td);
        });
        tab.append(tr);
    });
    c.append(tab);

    apply_settings(c, stngs, clazz);
}