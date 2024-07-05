const customers = JSON.parse(localStorage.getItem('customers')) || [];

document.getElementById('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (name && email && phone && address) {
        const customer = { name, email, phone, address };
        customers.push(customer);
        localStorage.setItem('customers', JSON.stringify(customers));
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('address').value = '';
        alert('Pelanggan berhasil ditambahkan!');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');
    if (list) {
        const storedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
        storedCustomers.forEach((customer, index) => addCustomerToList(customer, index));
    }
});

function addCustomerToList(customer, index) {
    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `${customer.name} (${customer.email}) - ${customer.phone} - ${customer.address} <button class="delete" onclick="deleteCustomer(${index})">Hapus</button>`;
    list.appendChild(listItem);
}

function deleteCustomer(index) {
    customers.splice(index, 1);
    localStorage.setItem('customers', JSON.stringify(customers));
    location.reload(); // Reload the page to update the customer list
}
