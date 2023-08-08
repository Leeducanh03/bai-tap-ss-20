document.addEventListener('DOMContentLoaded', function () {
    var ahihi = document.getElementById("ahihi");
    var boxs = document.querySelectorAll(".box");

    boxs.forEach(function (box) {
        box.addEventListener("click", function () {
            var boxValue = this.textContent;
            if (boxValue === "Delete") {
                ahihi.value = ahihi.value.slice(0, -1);
            } else {
                ahihi.value += boxValue;
            }
        });
    });
}); 