function calculateTip() {
    var billAmount = parseFloat(document.getElementById('bill').value);
    var tipRate = parseFloat(document.getElementById('tip').value);

    if (isNaN(billAmount) || isNaN(tipRate)) {
        alert('Please enter valid numbers.');
        return;
    }

    var tipAmount = billAmount * (tipRate / 100);
    var totalAmount = billAmount + tipAmount;

    document.getElementById('results').innerHTML = '<p>Tip Amount: CHF ' + tipAmount.toFixed(2) + '</p><p>Total Amount: CHF ' + totalAmount.toFixed(2) + '</p>';
}
