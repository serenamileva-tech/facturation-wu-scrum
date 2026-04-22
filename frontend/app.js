function generateInvoice() {
    let sender = document.getElementById("sender").value;
    let receiver = document.getElementById("receiver").value;
    let amount = parseFloat(document.getElementById("amount").value);

    let fee = amount * 0.05;
    let total = amount + fee;

    document.getElementById("result").innerHTML = `
        <h3>Facture</h3>
        <p>Expéditeur : ${sender}</p>
        <p>Destinataire : ${receiver}</p>
        <p>Montant : ${amount}</p>
        <p>Frais (5%) : ${fee}</p>
        <p>Total : ${total}</p>
    `;
}
