function fep() {
    const age = document.getElementById("age");
    const duration = document.getElementById("duration");
    const mode = document.getElementById("mode");
    const sumAssured = document.getElementById("sumAssured");
    

    if (isNaN(sumAssured.value) || !sumAssured.value){
           
        output.innerHTML='<span class="text-red-600 text-size-sm">Please insert a valid sum assured</span>';
                
        bonus.innerHTML = '';
        
        first.innerHTML = '';

        second.innerHTML= '';

        full.innerHTML= '';

        totalPremium.innerHTML= '';

        totalBonus.innerHTML= '';
        
        end.innerHTML= '';
        
        

     }else {
       
        const data = {
            20: [263.31, 157.23, 116.31, 90.07], 21:[263.58, 157.38, 116.43, 90.96], 22:[264.10, 157.54, 116.55, 91.05], 23:[264.10, 157.70, 116.66, 91.14], 24:[264.37, 157.88, 116.78, 91.23], 25:[264.63, 158.02, 116.90, 91.32], 26:[264.90, 158.17, 117.01, 91.41], 27:[265.16, 158.33, 117.13, 91.51], 28:[265.43, 158.49, 117.25, 91.60], 29:[] 
        }
    
        let rate=data[age.value][duration.value]
        let annualPremium = (sumAssured.value * rate * mode.value/1000) + 1000   

        let durability = ''
        let sumAssuredInt = parseInt(sumAssured.value)
        
        if (duration.value == 0 ) {
            durability = 6;
        }else if(duration.value == 1){
            durability = 9;
        }else if(duration.value == 2){
            durability = 12;
        }else{
            durability = 15;
        }


        
        output.innerHTML='<span class="text-blue-700 text-size-sm mr-4">Annual premium = </span>  ' + Math.round(annualPremium)
        
        bonus.innerHTML = '<span class="text-blue-700 mr-4">Yearly bonus = </span>  ' +  Math.round(sumAssuredInt * 4/100)
        
        first.innerHTML = '<span class="text-blue-700 text-size-sm mr-4">first Partial maturity = </span>  ' + Math.round(sumAssuredInt * 25/100)

        second.innerHTML= '<span class="text-blue-700 mr-4">Second partial maturity = </span>  ' +Math.round(sumAssuredInt * 25/100)

        full.innerHTML= '<span class="text-blue-700 mr-4">full partial maturity = </span>  ' + 
        Math.round(sumAssuredInt)

        totalPremium.innerHTML= '<span class="text-blue-700 mr-4">Total premium in ' + durability + ' years = </span>  ' + Math.round(annualPremium * durability)

        totalBonus.innerHTML= '<span class="text-blue-700 mr-4">Total bonus in ' + durability + ' years = </span>  ' + Math.round(sumAssuredInt * 4/100 * durability)
        
        end.innerHTML= '<span class="text-blue-700 mr-4">For ' + durability + ' years you will get = </span>  ' + ((annualPremium * durability) + (sumAssuredInt * 4/100 * durability)  + (sumAssuredInt * 25/100) + (sumAssuredInt * 25/100) + (sumAssuredInt))
        
      }


    
}


function fepSA() {
    const age = document.getElementById("age");
    const duration = document.getElementById("duration");
    const mode = document.getElementById("mode");
    const annualPremium = document.getElementById("annualPremium");

    
    if (isNaN(annualPremium.value) || !annualPremium.value){
           
        output.innerHTML='<span class="text-red-600 text-size-sm">Please insert a valid sum assured</span>';
                
        bonus.innerHTML = '';
        
        first.innerHTML = '';

        second.innerHTML= '';

        full.innerHTML= '';

        totalPremium.innerHTML= '';

        totalBonus.innerHTML= '';
        
        end.innerHTML= '';
        
        

     }else {
       
        const data = {
            20: [263.31, 157.23, 116.31, 90.07], 21:[263.58, 157.38, 116.43, 90.96]
        }
    
        let rate=data[age.value][duration.value]
        let sumAssured = (annualPremium.value *1000/rate * mode.value) - 1000   

        let durability = ''
        
        if (duration.value == 0 ) {
            durability = 6;
        }else if(duration.value == 1){
            durability = 9;
        }else if(duration.value == 2){
            durability = 12;
        }else{
            durability = 15;
        }


        
        output.innerHTML='<span class="text-blue-700 text-size-sm mr-4">Sum assured = </span>  ' + Math.round(sumAssured)
        
        bonus.innerHTML = '<span class="text-blue-700 mr-4">Yearly bonus = </span>  ' +  Math.round(sumAssured * 4/100)
        
        first.innerHTML = '<span class="text-blue-700 text-size-sm mr-4">first Partial maturity = </span>  ' + Math.round(sumAssured * 25/100)

        second.innerHTML= '<span class="text-blue-700 mr-4">Second partial maturity = </span>  ' + 
        Math.round(sumAssured * 25/100)

        full.innerHTML= '<span class="text-blue-700 mr-4">full partial maturity = </span>  ' + 
        Math.round(sumAssured)

        totalPremium.innerHTML= '<span class="text-blue-700 mr-4">Total premium in ' + durability + ' years = </span>  ' + Math.round(annualPremium.value * durability)

        totalBonus.innerHTML= '<span class="text-blue-700 mr-4">Total bonus in ' + durability + ' years = </span>  ' + Math.round(sumAssured * 4/100 * durability)
        
        end.innerHTML= '<span class="text-blue-700 mr-4">For ' + durability + ' years you will get = </span>  ' + Math.round(((annualPremium.value * durability) + (sumAssured * 4/100 * durability) + (sumAssured * 25/100) + (sumAssured * 25/100) + (sumAssured)))
        
      }

    
    
}