let shipping = '{{order.shipping}}'
let total = '{{order.get_cart_total}}'
if (shipping == 'False'){
    document.getElementById('shipping-info').innerHTML = ''
}
if (user != 'AnonymousUser'){
    document.getElementById('user-info').innerHTML = ''
}
if (shipping == 'False' && user != 'AnonymousUser'){
    document.getElementById('form-wrapper').classList.add('hidden')
    document.getElementById('payment-info').classList.remove('hidden')
}
let form = document.getElementById('form')
csrftoken = document.getElementsByTagName('input')[0].value
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('Form Submitted..')
    document.getElementById('form-button').classList.add('hidden')
    document.getElementById('payment-info').classList.remove('hidden')
})
document.getElementById('make-payment').addEventListener('click', function(e){
    submitFormData()
})

function submitFormData(){
    console.log('Payment button clicked..')
    let userFormData = {
        'name': null,
        'email': null,
        'total': total,
    }
    let shippingInfo = {
        'address': null,
        'city': null,
        'state': null,
        'zipcode': null,
    }
    if (shipping != 'False'){
            shippingInfo.address = form.address.value
            shippingInfo.city = form.city.value
            shippingInfo.state = form.state.value
            shippingInfo.zipcode = form.zipcode.value
    }
    if (user == 'AnonymousUser'){
        userFormData.name = form.name.value
        userFormData.email = form.email.value	
    }
    let url = '/process_order/'
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'form':userFormData, 'shipping':shippingInfo}),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        alert('Transaction completed');
        cart = {}
        document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";
        window.location.href = "{% url 'store' %}"
    })


}