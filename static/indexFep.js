function fep() {
    const age = document.getElementById("age");
    const duration = document.getElementById("duration");
    const mode = document.getElementById("mode");
    const sumAssured = document.getElementById("sumAssured");
    const output = document.getElementById("output")
    const bonus = document.getElementById("bonus")
    const first = document.getElementById("first")
    const second = document.getElementById("second")
    const full = document.getElementById("full")
    const totalPremium = document.getElementById("totalPremium")
    const end = document.getElementById("end")
    

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
            20: [263.31, 157.23, 116.31, 90.07], 21:[263.58, 157.38, 116.43, 90.96], 22:[264.10, 157.54, 116.55, 91.05], 23:[264.10, 157.70, 116.66, 91.14], 24:[264.37, 157.88, 116.78, 91.23], 25:[264.63, 158.02, 116.90, 91.32], 26:[264.90, 158.17, 117.01, 91.41], 27:[265.16, 158.33, 117.13, 91.51], 28:[265.43, 158.49, 117.25, 91.60], 29:[265.69, 158.65, 117.37, 91.60], 30:[265.96, 158.81, 117.48, 91.78], 31:[265.22, 158.97, 117.60, 91.87], 32:[266.49, 158.12, 117.72, 91.96], 33:[266.76, 159.28, 117.84, 92.06], 34:[267.02, 159.44, 117.95, 92.16], 35:[267.02, 159.80, 118.07, 92.24], 36:[267.56, 159.76, 118.19, 92.33], 37:[267.83, 159.92, 118.31, 92.43], 38:[268.09, 160.08, 118.43, 92.52], 39:[268.36, 160.24, 118.54, 92.51], 40:[268.63, 160.40, 118.66, 92.76], 41:[268.90, 160.58, 118.78, 93.09], 42:[269.17, 160.72, 118.90, 93.46], 43:[269.44, 160.88, 119.02, 93.88], 44:[269.71, 161.04, 119.20, 94.35], 45:[269.98, 161.21, 119.66, 94.87], 46:[270.25, 161.37, 120.37, 95.45], 47:[270.52, 161.53, 120.72, 96.10], 48:[270.79, 161.69, 121.35, 96.81], 49:[271.06, 162.10, 122.04, 97.60], 50:[271.33, 162.87, 122.80, 98.47], 51:[271.60, 163.64, 123.65, 99.44], 52:[271.67, 164.48, 124.59, 100.50], 53:[272.14, 165.42, 125.63, 101.68], 54:[272.42, 166.46, 125.77, 102.97], 55:[272.69, 167.60, 128.04, 104.40], 56:[273.24, 168.66, 129.43, 105.96], 57:[274.46, 170.26, 130.97, 107.68], 58:[275.80, 171.80, 132.66, 109.58], 59:[277.29, 173.49, 134.52, 111.65], 60:[278.92, 175.36, 136.56, 113.93] 
        }

        let policyFee ='';
        let frequency = '';
        let word = '';

        if (mode.value == 1 ) {
            policyFee =600;
            frequency = 1;
            word = "Annual"
        }else if(mode.value == 0.52){
            policyFee = 335;
            frequency = 2;
            word = "Semi Annual"
        }else if(mode.value == 0.27){
            policyFee = 210;
            frequency = 4;
            word = "Quarterly"
        }else{
            policyFee = 100;
            frequency = 12;
            word = "Monthly"
        }
    
        let rate=data[age.value][duration.value]
        let annualPremium = (sumAssured.value * rate * mode.value/1000) + policyFee   

        let durability = '';
        
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


        
        output.innerHTML='<span class="text-blue-700 text-size-sm mr-4">'+ word + ' premium = </span>  ' + Math.round(annualPremium)
        
        bonus.innerHTML = '<span class="text-blue-700 mr-4">' + word + ' bonus = </span>  ' +  Math.round(sumAssuredInt * 4/100)
        
        first.innerHTML = '<span class="text-blue-700 text-size-sm mr-4">first Partial maturity = </span>  ' + Math.round(sumAssuredInt * 25/100)

        second.innerHTML= '<span class="text-blue-700 mr-4">Second partial maturity = </span>  ' +Math.round(sumAssuredInt * 25/100)

        full.innerHTML= '<span class="text-blue-700 mr-4">full partial maturity = </span>  ' + 
        Math.round(sumAssuredInt)

        totalPremium.innerHTML= '<span class="text-blue-700 mr-4">Total premium in ' + durability + ' years = </span>  ' + Math.round(annualPremium * durability * frequency)

        totalBonus.innerHTML= '<span class="text-blue-700 mr-4">Total bonus in ' + durability + ' years = </span>  ' + Math.round(sumAssuredInt * 4/100 * durability * frequency)
        
        end.innerHTML= '<span class="text-blue-700 mr-4">For ' + durability + ' years you will get = </span>  ' + ((sumAssuredInt * 4/100 * durability * frequency)  + (sumAssuredInt * 25/100) + (sumAssuredInt * 25/100) + (sumAssuredInt))
        
      }


    
}


function fepSA() {
    const age = document.getElementById("age");
    const duration = document.getElementById("duration");
    const mode = document.getElementById("mode");
    const annualPremium = document.getElementById("annualPremium");
    const output = document.getElementById("output")
    const bonus = document.getElementById("bonus")
    const first = document.getElementById("first")
    const second = document.getElementById("second")
    const full = document.getElementById("full")
    const totalPremium = document.getElementById("totalPremium")
    const end = document.getElementById("end")

    
    if (isNaN(annualPremium.value) || !annualPremium.value){
           
        output.innerHTML='<span class="text-red-600 text-size-sm">Please insert a valid Annual premium</span>';
                
        bonus.innerHTML = '';
        
        first.innerHTML = '';

        second.innerHTML= '';

        full.innerHTML= '';

        totalPremium.innerHTML= '';

        totalBonus.innerHTML= '';
        
        end.innerHTML= '';
        
        

     }else {
       
        const data = {
            20: [263.31, 157.23, 116.31, 90.07], 21:[263.58, 157.38, 116.43, 90.96], 22:[264.10, 157.54, 116.55, 91.05], 23:[264.10, 157.70, 116.66, 91.14], 24:[264.37, 157.88, 116.78, 91.23], 25:[264.63, 158.02, 116.90, 91.32], 26:[264.90, 158.17, 117.01, 91.41], 27:[265.16, 158.33, 117.13, 91.51], 28:[265.43, 158.49, 117.25, 91.60], 29:[265.69, 158.65, 117.37, 91.60], 30:[265.96, 158.81, 117.48, 91.78], 31:[265.22, 158.97, 117.60, 91.87], 32:[266.49, 158.12, 117.72, 91.96], 33:[266.76, 159.28, 117.84, 92.06], 34:[267.02, 159.44, 117.95, 92.16], 35:[267.02, 159.80, 118.07, 92.24], 36:[267.56, 159.76, 118.19, 92.33], 37:[267.83, 159.92, 118.31, 92.43], 38:[268.09, 160.08, 118.43, 92.52], 39:[268.36, 160.24, 118.54, 92.51], 40:[268.63, 160.40, 118.66, 92.76], 41:[268.90, 160.58, 118.78, 93.09], 42:[269.17, 160.72, 118.90, 93.46], 43:[269.44, 160.88, 119.02, 93.88], 44:[269.71, 161.04, 119.20, 94.35], 45:[269.98, 161.21, 119.66, 94.87], 46:[270.25, 161.37, 120.37, 95.45], 47:[270.52, 161.53, 120.72, 96.10], 48:[270.79, 161.69, 121.35, 96.81], 49:[271.06, 162.10, 122.04, 97.60], 50:[271.33, 162.87, 122.80, 98.47], 51:[271.60, 163.64, 123.65, 99.44], 52:[271.67, 164.48, 124.59, 100.50], 53:[272.14, 165.42, 125.63, 101.68], 54:[272.42, 166.46, 125.77, 102.97], 55:[272.69, 167.60, 128.04, 104.40], 56:[273.24, 168.66, 129.43, 105.96], 57:[274.46, 170.26, 130.97, 107.68], 58:[275.80, 171.80, 132.66, 109.58], 59:[277.29, 173.49, 134.52, 111.65], 60:[278.92, 175.36, 136.56, 113.93] 
        }
    
        let policyFee ='';
        let frequency = '';
        let word = '';

        if (mode.value == 1 ) {
            policyFee =600;
            frequency = 1;
            word = "Annual"
        }else if(mode.value == 0.52){
            policyFee = 335;
            frequency = 2;
            word = "Semi Annual"
        }else if(mode.value == 0.27){
            policyFee = 210;
            frequency = 4;
            word = "Quarterly"
        }else{
            policyFee = 100;
            frequency = 12;
            word = "Monthly"
        }

        let rate=data[age.value][duration.value]
        let sumAssured = (annualPremium.value *1000/rate * mode.value) - policyFee   

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
        
        bonus.innerHTML = '<span class="text-blue-700 mr-4">' + word + ' bonus = </span>  ' +  Math.round(sumAssured * 4/100)
        
        first.innerHTML = '<span class="text-blue-700 text-size-sm mr-4">first Partial maturity = </span>  ' + Math.round(sumAssured * 25/100)

        second.innerHTML= '<span class="text-blue-700 mr-4">Second partial maturity = </span>  ' + 
        Math.round(sumAssured * 25/100)

        full.innerHTML= '<span class="text-blue-700 mr-4">full partial maturity = </span>  ' + 
        Math.round(sumAssured)

        totalPremium.innerHTML= '<span class="text-blue-700 mr-4">Total premium in ' + durability + ' years = </span>  ' + Math.round(annualPremium.value * durability * frequency)

        totalBonus.innerHTML= '<span class="text-blue-700 mr-4">Total bonus in ' + durability + ' years = </span>  ' + Math.round(sumAssured * 4/100 * durability * frequency)
        
        end.innerHTML= '<span class="text-blue-700 mr-4">For ' + durability + ' years you will get = </span>  ' + Math.round(((sumAssured * 4/100 * durability * frequency) + (sumAssured * 25/100) + (sumAssured * 25/100) + (sumAssured)))
        
      }

    
    
}