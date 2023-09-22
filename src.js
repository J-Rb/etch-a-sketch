const body = document.querySelector("body");
const container = document.querySelector(".grid-container");

function setGrid() {
    const userDefinedSize = document.getElementById("size").value
    const size = userDefinedSize || 50;
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row")
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "cell");
            newDiv.addEventListener("mouseover", function () {
                const newPerChannel = getComputedStyle(newDiv)["background-color"].split(",")[0].slice(4) - 25;
                newDiv.style["background-color"] = `rgb(${newPerChannel}, ${newPerChannel}, ${newPerChannel})`;
                // const randColor = Math.floor(Math.random() * 16581375);
                // newDiv.style["background-color"] = `#${randColor.toString(16)}`;
            })
            row.append(newDiv);
        }
        container.append(row);
    }
}

function resetColors() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style["background-color"] = "white");
}
setGrid();

document.getElementById("form").onsubmit = function (event) {
    event.preventDefault();
    setGrid();
}