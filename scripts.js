const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", () => {
    function getrandnum() {
        return Math.floor(Math.random() * hexArray.length);
    }
    
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        let randomnum = hexArray[getrandnum()];
        hex += randomnum;
    }

    document.body.style.backgroundColor = hex;
    colour.textContent = hex;
})