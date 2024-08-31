document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const rates = {
        'USD': {
            'USD': 1,
            'EUR': 0.85,
            'PYG': 7000
        },
        'EUR': {
            'USD': 1.18,
            'EUR': 1,
            'PYG': 8200
        },
        'PYG': {
            'USD': 0.00014,
            'EUR': 0.00012,
            'PYG': 1
        }
    };

    const convertedAmount = amount * rates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
