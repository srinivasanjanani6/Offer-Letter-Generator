function downloadImage() {
    html2canvas(document.getElementById("offerLetter")).then(canvas => {
        const link = document.createElement("a");
        link.download = "offer-letter.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;

    html2canvas(document.getElementById("offerLetter")).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save("offer-letter.pdf");
    });
}
