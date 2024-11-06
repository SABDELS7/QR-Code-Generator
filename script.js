
const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    margin: 10,
    dotsOptions: {
        color: "#000000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#ffffff"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});

function generateQRCode() {
    const input = document.getElementById("text-input").value;
    if (input) {
        qrCode.update({
            data: input
        });
        qrCode.append(document.getElementById("qrcode"));
    } else {
        alert("Please enter some text or URL!");
    }
}

function downloadQRCode() {
    qrCode.download({ name: "qrcode", extension: "png" });
}
