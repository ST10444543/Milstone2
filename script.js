function calculateTotal() {
    let checkboxes = document.querySelectorAll('input[name="courses"]:checked');
    let total = 0;
    checkboxes.forEach((checkbox) => {
        total += parseFloat(checkbox.value);
    });

    // Apply discount based on the number of courses selected
    let discount = 0;
    if (checkboxes.length === 2) {
        discount = 0.05;
    } else if (checkboxes.length === 3) {
        discount = 0.1;
    } else if (checkboxes.length > 3) {
        discount = 0.15;
    }

    total = total - total * discount;

    // Add VAT (15%)
    let vat = total * 0.15;
    total += vat;

    document.getElementById("totalFee").innerText = "Total Fee (including VAT): R" + total.toFixed(2);
}
