let bgContainer = document.getElementById("bgContainer");
let themeUserInput = document.getElementById('themeUserInput');
let theme = "";

function applyTheme(theme) {
    if (theme === "Light") {
        bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
    } else if (theme === "Dark") {
        bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
    } else {
        alert("Enter the valid theme");
    }
}
themeUserInput.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        applyTheme(e.target.value);
    }
})