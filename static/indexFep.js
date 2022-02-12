function fep() {
    const age = document.getElementById("age");
    const duration = document.getElementById("duration");
    const mode = document.getElementById("mode");
    const sumAssured = document.getElementById("sumAssured");

    const data = {
        20: [263.31, 157.23, 116.31, 90.07], 21:[263.58, 157.38, 116.43, 90.96]
    }

    let rate=data[age.value][duration.value]
    let annualPremium = (sumAssured.value * rate * mode.value/1000) + 1000
    alert(annualPremium)
}


function fepSA() {
    const age = document.getElementById("age");
    const duration = document.getElementById("duration");
    const mode = document.getElementById("mode");
    const annualPremium = document.getElementById("annualPremium");
    
    const data = {
        20: [263.31, 157.23, 116.31, 90.07], 21:[263.58, 157.38, 116.43, 90.96]
    }

    let rate=data[age.value][duration.value]
    
    let sumAssured = (annualPremium.value *1000/rate * mode.value) - 1000
    alert(sumAssured)
    
}