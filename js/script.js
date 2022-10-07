let generateButton = document.getElementById('calc');
let resetButton = document.getElementById('reset');

generateButton.addEventListener('click', function () {
    let FullName = document.getElementById('user_name').value;
    let Km = parseInt(document.getElementById('travel_distance').value);
    let Category = document.getElementById('discount_type').value;

    document.getElementById('ticket_stamp').classList.add('active');

    let FinalPrice = Km * 0.21;

    if (Category === 'under') {
        FinalPrice *= 0.8;
    }
    else if (Category === 'over') {
        FinalPrice *= 0.6;
    }
    console.log(`Il prezzo del biglietto è ${FinalPrice.toFixed(2)} \u20AC`);

    let TicketType = 'Biglietto Standard';
    if (Category === 'under') {
        TicketType = 'Biglietto Under';
    }
    else if (Category === 'over') {
        TicketType = 'Biglietto Over';
    }

    let CarriageNumber = Math.floor(Math.random() * 10) + 1;

    let CpNumber = Math.floor(Math.random() * 1000) + 1;

    document.getElementById('UserName').innerHTML = FullName;
    document.getElementById('ticket_type').innerHTML = TicketType;
    document.getElementById('carriage_number').innerHTML = CarriageNumber;
    document.getElementById('cp_code').innerHTML = CpNumber;
    document.getElementById('ticket_price').innerHTML = `${FinalPrice.toFixed(2)} \u20AC`;
});

resetButton.addEventListener('click', function () {
    document.getElementById('user_name').value = '';
    document.getElementById('travel_distance').value = '';
    document.getElementById('discount_type').value = 'mid';
    document.getElementById('ticket_stamp').classList.remove('active');
});