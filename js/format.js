// Just as a placeholder (obviously)
function idk() {
    return "I don't know what to type here.";
}

function tab_pic(url) {
    return "<img src='" + url + "' class='pic-small pic-tab'>";
}

function tab_pic_a(url) {
    return "<img class='pic-small pic-tab' src='" + url + "' onclick=ref()>";
}

function ref() {
    alert("How'd you like some ice cream, Doc?");
}

function price(n) {
    return "$" + n + ",-";
}

function price_dec(n) {
    return "$" + n;
}

const day_arr = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

function day_str() {
    return day_arr[new Date().getDay()];
}

// Direction array
const dir_arr = [
    "North", "East", "South", "West"
];

function rand_dir() {
    return dir_arr[Math.floor(Math.random() * 4)];
}

function inject_any(id, regex, what) {
    let el = document.getElementById(id);
    el.innerHTML = el.innerHTML.replaceAll(regex, what);
}

function inject_rand_dir(where) {
    inject_any(where, '${RAND_DIR_HERE}', rand_dir());
}

function inject_day_str(where) {
    inject_any(where, '${DAY_NAME_HERE}', day_str());
}