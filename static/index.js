//BENEFIT CALCULATION
function benefithandler() {
    const premium = document.querySelector('#premium');
    const age = document.querySelector('#age');
    const gender = document.querySelector('#gender');
    const guarantyPeriod = document.querySelector('#guaranty-period');
    const earningAge = document.querySelector('#earning-age');
    const premiumFrequency = document.querySelector('#premium-frequency');
    const output = document.querySelector('#output');
    const semiAnnual = document.querySelector('#semi-annual');
    const monthly = document.querySelector('#monthly');
    const quarterly= document.querySelector('#quarterly');
    let benefit;
    let rateData;
    let rate;
   
    if (gender.value ==="male" && premiumFrequency.value === "annual" ) {
          
       if (guarantyPeriod.value==="5") {

        
            rateData={
                21 : [113.6, 72.95, 47.20, 30.95, 21.23], 22: [122.82, 78.58, 50.56, 32.86, 22.22], 23: [ 133.12, 84.85, 54.31, 34.98 , 23.32], 24:[ 144.59, 91.83, 58.47, 37.34, 24.55], 25:[ 157.41, 99.60, 63.11, 39.96, 25.91],26: [ 171.75, 108.28, 68.27, 42.90, 27.43], 27:[ 187.83, 117.98, 74.05, 46.19, 29.11 ], 28:[ 205.90, 128.85, 80.51, 49.86, 31.04], 29:[ 226.24, 141.04, 87.76, 53.98, 33.18 ], 30:[249.21, 154.72, 95.89, 58.60, 35.59], 31:[ 275.18, 170.11, 105.04, 63.79, 38.30], 32:[275.18, 170.11, 105.04, 63.79, 38.30], 33:[ 338.15, 206.95, 126.91, 76.22, 44.89], 34:[376.43, 228.96, 139.97, 83.64, 48.83], 35:[ 420.34, 253.82, 154.71, 92.02, 53.28], 36:[471.53, 281.92, 171.35, 101.48, 58.31], 37:[ 530.60, 313.73, 190.15, 112.18, 64.00],38:[599.99, 349.79, 211.41, 124.28, 70.44], 39:[ 682.52, 391.13, 235.46, 137.97, 77.74], 40:[782.28, 437.86, 262.94, 153.48, 86.00], 41:[905.36, 491.28, 293.84, 171.06, 95.38], 42:[905.36, 491.28, 293.84, 171.06, 95.38], 43:[1265.29, 623.67, 368.62, 213.82, 118.08], 44:[1546.06, 706.73, 413.77, 239.53, 131.92], 45:[1951.13, 805.29, 465.10, 268.74, 147.52], 46:[2585.15, 924.73, 523.54, 301.96, 165.27], 47:[3706.28, 1073.65, 590.21, 339.76, 185.47], 48:[5942.23, 1266.49, 666.50,382.82, 208.48], 49:[null,1530.32, 754.24, 431.89, 234.71], 50:[null, 1912.35, 856.02,487.89, 264.63], 51:[null, 2515.22, 975.88, 551.85, 298.82], 52:[null, 3591.30, 1120.58, 625.00, 337.91], 53:[null, 5759.03, 1302.37, 708.77, 382.66], 54:[null, null, 1544.43, 804.86, 433.96], 55:[null, null, 1895.68, 915.39, 492.85], 56:[null, null, 2454.48, 1043.17, 560.55], 57:[null, null, 3471.10, 1192.49, 638.52], 58:[null, null, 5564.39, 1371.30, 728.45], 59:[null, null, null, 1596.66, 832.39], 60:[null, null, null, 1907.92, 952.77], 61:[null, null, null, 2404.49, 1092.53], 62:[null, null, null,  3328.28, 1255.31], 63:[null, null, null, 5322.00, 1446.09], 64:[null, null, null, null, 1673.93], 65:[null, null, null, null, 1962.60], 66:[null, null, null, null, 2388.81], 67:[null, null, null, null, 2388.81], 68:[null, null, null, null, 5031.37]
            }
            rate=rateData[age.value][earningAge.value]
            
            
        }else if(guarantyPeriod.value === "10"){
            rateData={
                21:[114.79, 74.25, 48.37, 31.93, 22.09], 22:[124.12, 80.07, 51.83, 33.93, 23.16], 23:[134.53, 86.48, 55.70, 36.15, 24.37], 24:[146.14, 93.61, 59.99, 38.61, 25.71], 25:[159.10, 101.55, 64.76, 41.37, 27.18], 26:[173.60, 110.41, 70.09, 44.45, 28.82], 27:[189.86, 120.32, 76.04, 47.89, 30.68], 28:[208.14, 131.42, 82.71, 51.74, 32.76], 29:[228.72, 143.88, 90.18, 56.04, 35.08], 30:[251.95, 157.86, 98.56, 60.88, 37.68], 31:[278.22, 173.58,  107.99, 66.31, 40.65], 32:[308.01, 191.27, 118.59, 72.43, 44.00], 33:[341.91, 211.21, 130.54, 79.32, 47.78], 34:[380.62, 233.70, 144.00, 87.09, 52.04], 35:[425.04, 259.09, 159.19, 95.85, 56.85], 36:[476.81, 287.80, 176.34, 105.76, 62.29], 37:[536.56, 320.29, 195.72, 116.95, 68.44], 38:[606.74, 357.13, 217.64, 129.61, 75.40], 39:[690.21, 399.37, 242.43, 143.94, 83.28], 40:[791.10, 447.10, 270.76, 160.16, 92.22], 41:[915.59, 501.67, 302.61, 178.55, 102.35], 42:[1073.25, 564.36, 338.72, 199.59, 113.84], 43:[1279.62, 636.92, 379.69, 223.28, 126.88], 44:[1563.59, 721.76, 426.23, 250.18, 141.83], 45:[1973.27, 822.45, 479.14, 280.74, 158.69], 46:[2614.52, 944.45, 539.38, 315.49, 177.86], 47:[3748.43, 1096.58, 608.09, 355.03, 199.68], 48:[6009.86, 1293.57, 686.73, 400.07, 224.53], 49:[null, 1563.06, 777.16, 451.41, 252.86], 50:[null, 1953.30, 882.08, 509.98, 285.19], 51:[null, 2569.14, 1005.62, 576.89, 322.12],52:[null, 3668.35, 1154.76, 653.41, 364.34], 53:[null, 5882.69, 1342.13, 741.04, 412.69], 54:[null, null, 1591.62, 841.56, 468.10], 55:[null, null, 1953.66, 957.18, 531.71], 56:[null, null, 2529.62, 1090.84, 604.85], 57:[null, null, 3577.44, 1247.05, 689.06], 58:[null, null, 5735.01, 1434.09, 786.21], 59:[null, null, null, 1669.83, 898.49], 60:[null, null, null, 1995.42, 1028.54], 61:[null, null, null, 2514.85, 1179.51], 62:[null, null, null, 3481.16, 1355.35], 63:[null, null, null, 5566.67, 1561.45], 64:[null, null, null, null, 1807.58], 65:[null, null, null, null, 2119.43], 66:[null, null, null, null, 2579.83], 67:[null, null, null, null, 3440.26], 68:[null, null, null, null, 5434.35]
            }
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }
        
        
    }else if(gender.value ==="male" && premiumFrequency.value === "single"){
        if (guarantyPeriod.value==="5") {
            rateData={
                21 : [1036.37, 665.81, 430.71, 281.61, 189.43], 22:[1122.54, 718.62, 462.40, 299.86, 199.41], 23:[1216.79, 776.27, 496.86, 319.61, 210.07], 24:[1319.47, 838.97, 534.23, 340.92, 221.45], 25:[1431.40, 907.21, 574.82, 363.96, 233.65], 26:[1553.48, 981.56, 618.94, 388.92, 246.77], 27:[1686.73, 1062.60, 666.97, 416.00, 260.91], 28:[1832.25, 1151.03, 719.31, 445.46, 276.22], 29:[1991.25, 1247.57, 776.40, 477.53, 292.84], 30:[2165.09, 1353.05, 838.75, 512.53, 310.93], 31:[2355.22, 1468.36, 906.89, 550.76, 330.68], 32:[2563.26, 1594.46, 981.40, 592.57, 352.29], 33:[2791.00, 1732.43, 1062.94, 638.35, 375.96], 34:[3040.39, 1883.45, 1152.21, 688.49, 401.93], 35:[3313.61, 2048.79, 1249.98, 743.46, 430.45], 36:[3613.05, 2229.87, 1357.09, 803.74, 461.79], 37:[3941.39, 2428.24, 1474.48, 869.87, 496.24], 38:[4301.56, 2645.64, 1603.14, 942.43, 534.14], 39:[4696.87, 2883.97, 1744.22,	 1022.07, 575.82], 40:[5130.94, 3,45.36, 1898.93, 1109.50, 621.67], 41:[5607.75, 3432.20, 2068.65, 1205.50, 672.12], 42:[6131.59, 3747.17, 2254.90, 1310.93, 727.63], 43:[6706.91, 4093.31, 2459.36, 1426.77, 788.71], 44:[7338.06, 4474.10, 2683.91, 1554.07, 855.95], 45:[8028.78, 4893.48, 2930.65, 1694.04, 929.97], 46:[8781.36, 5355.97, 3201.96, 1848.00, 1011.50], 47:[9595.24, 5866.64, 3500.52, 2017.45, 1101.33], 48:[10467.73, 6430.94, 3829.36, 2204.08, 1200.36], 49:[null, 7054.20, 4192.03, 2409.77, 1309.59], 50:[null, 7740.51, 4592.66, 2636.68, 1430.19], 51:[null, 8490.67, 5036.18, 2887.23, 1563.44], 52:[null, 9299.19, 5528.60, 3164.19, 1710.81], 53:[null, 10155.28, 6077.16, 3470.72, 1873.99], 54:[null, null, 6690.16, 3810.47, 2054.92], 55:[null, null,7375.42, 4187.65, 2255.79], 56:[null, null, 8135.94, 4607.27, 2479.17], 57:[null, null, 8961.40, 5075.44, 2728.01], 58:[null, null, 9823.80, 5600.06, 3005.75], 59:[null, null, null, 6191.86, 3316.39], 60:[null, null, null, 6865.04, 3664.64], 61:[null, null, null, 7633.82, 4056.04], 62:[null, null, null,  8495.65, 4497.17], 63:[null, null, null, 9402.28, 4996.09], 64:[null, null, null, null, 5563.31], 65:[null, null, null, null, 6214.56], 66:[null, null, null, null, 6974.56], 67:[null, null, null, null, 7882.73], 68:[null, null, null, null, 8882.44]
            }
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData={
                21:[1047.27, 678.33, 440.94, 290.78, 197.92], 22:[1134.39, 732.28, 474.02, 309.80, 208.66], 23:[1229.71, 791.16, 509.54, 330.45, 220.15], 24:[1333.56, 855.22, 548.06, 352.74, 232.45], 25:[1446.77, 924.93, 589.90, 376.86, 245.65], 26:[1570.25, 1000.89, 635.40, 402.99, 259.86], 27:[1705.03, 1083.69, 684.92, 431.35, 275.19], 28:[1852.22, 1174.04, 738.90, 462.20, 291.80], 29:[2013.06, 1272.69, 797.78, 495.81, 309.84], 30:[2188.89, 1380.47, 862.09, 532.48, 329.50], 31:[2381.21, 1498.29, 932.36, 572.54, 350.95], 32:[2591.64,1627.14, 1009.22, 616.35, 374.41], 33:[2822.00, 1768.12, 1093.31, 664.31, 400.12], 34:[3074.26, 1922.42, 1185.38, 716.85, 428.31], 35:[3350.62, 2091.36, 1286.21, 774.43, 459.27], 36:[3653.51, 2276.38, 1396.68, 837.58, 493.27], 37:[3985.61, 2479.07, 1517.72, 906.84, 530.65], 38:[4349.92, 2701.19, 1650.41, 982.83, 571.73], 39:[4749.77, 2944.69, 1795.87, 1066.23, 616.91], 40:[5188.82, 3211.75, 1955.40, 1157.77, 666.59], 41:[5671.11, 3504.80, 2130.40, 1258.28, 721.23], 42:[6200.95, 3826.60, 2322.42, 1368.66, 781.34], 43:[6782.87, 4180.23, 2533.22, 1489.91, 847.46], 44:[7421.26, 4569.25, 2764.73, 1,623.16, 920.23], 45:[8119.91, 4997.70, 3019.11, 1769.65, 1000.33], 46:[8881.13, 5470.19, 3298.81, 1930.78, 1088.52], 47:[9704.35, 5991.90, 3606.58, 2108.11, 1185.68], 48:[10586.87, 6568.39, 3945.59, 2303.41, 1292.78], 49:[null, 7205.13, 4319.45, 2518.64, 1410.90], 50:[null, 7906.29, 4732.43, 2756.07, 1541.28], 51:[null, 8672.68, 5189.63, 3018.23, 1685.33], 52:[null, 9498.70, 5697.24, 3308.02, 1844.63], 53:[null, 10373.35, 6262.71, 3628.74, 2021.02], 54:[null, null, 6894.60, 3984.20, 2216.56], 55:[null, null, 7601.00, 4378.82, 2433.65], 56:[null, null, 8384.98, 4817.83, 2675.05], 57:[null, null, 9235.93, 5307.63, 2943.96], 58:[null, null, 10125.02, 5856.48, 3244.08], 59:[null, null, null, 6475.61, 3579.75], 60:[null, null, null, 7179.89, 3956.04], 61:[null, null, null, 7984.19, 4378.94], 62:[null, null, null, 8885.89, 4855.58], 63:[null, null, null, 9834.54, 5394.64], 64:[null, null, null, null, 6007.49], 65:[null, null, null, null, 6711.13], 66:[null, null, null, null, 7532.23], 67:[null, null, null, null, 8513.55], 68:[null, null, null, null, 9593.87]
              }
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "annual"){
        if (guarantyPeriod.value==="5") {
            rateData={
                21 : [117.51, 76.64, 50.41, 33.66, 23.28], 22:[126.67, 82.33, 53.92, 35.73, 24.46], 23:[136.89, 88.64, 57.79, 38.02, 25.75], 24:[148.21, 95.61, 62.06, 40.55, 27.16], 25:[160.81, 103.32, 66.77, 43.35, 28.70], 26:[174.86, 111.88, 72.00, 46.45, 30.41], 27:[190.57, 121.39, 77.80, 49.88, 32.32], 28:[208.21, 131.99, 84.25, 53.70, 34.45], 29:[228.06, 143.82, 91.43, 57.94, 36.80], 30:[250.48, 157.05, 99.46, 62.68, 39.42], 31:[275.87, 171.87, 108.43, 67.98, 42.36], 32:[304.74, 188.50, 118.47, 73.90, 45.67], 33:[337.70, 207.19, 129.73, 80.54, 49.39], 34:[375.52, 228.23, 142.37, 87.99, 53.56], 35:[419.17, 251.96, 156.56, 96.36, 58.25], 36:[470.39, 278.78, 172.52, 105.77, 63.52], 37:[529.96, 309.16,  190.48, 116.36, 69.45], 38:[600.52, 343.68, 210.72, 128.29, 76.14], 39:[685.15, 383.04, 233.53, 141.74, 83.69], 40:[788.27, 428.54, 259.29, 156.92, 92.20], 41:[916.40, 480.55, 288.38, 174.04, 101.82], 42:[1079.52, 540.90, 321.29, 193.39, 112.69], 43:[1293.64, 611.63, 358.92, 215.26, 124.98], 44:[1588.57, 695.54, 401.28, 239.99, 138.89], 45:[2012.92, 796.73, 449.46, 268.25, 154.63], 46:[2674.70, 921.33, 504.45, 300.00, 172.63], 47:[3840.77, 1078.88, 567.49, 335.99, 192.88], 48:[6156.88, 1284.93, 640.28, 376.81, 215.84], 49:[null, 1568.37, 725.15, 423.15, 241.91], 50:[null, 1977.49, 825.55, 475.81, 271.52], 51:[null, 2618.41, 946.83, 535.72, 305.18], 52:[null, 3752.71, 1097.60, 604.02, 343.48], 53:[null, 6016.91, 1292.42, 682.09, 387.08], 54:[null, null, 1558.65, 771.73, 436.78], 55:[null, null, 1944.40, 875.47, 493.49], 56:[null, null, 2554.05, 997.24, 558.25], 57:[null, null, 3644.11, 1143.65, 632.32], 58:[null, null, 5843.82, 1326.78, 717.12], 59:[null, null, null, 1569.80, 814.40], 60:[null, null, null, 1921.87, 926.25], 61:[null, null, null, 2482.81, 1055.45], 62:[null, null, null, 3502.30, 1206.13], 63:[null, null, null, 5619.89, 1385.88], 64:[null, null, null, null, 1611.17], 65:[null, null, null, null, 1920.68], 66:[null, null, null, null, 2413.31], 67:[null, null, null, null, 3332.48], 68:[null, null, null, null, 5325.79]
                }

            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData={
                21:[118.09, 77.24, 50.92, 34.11, 23.81], 22:[127.34, 82.96, 54.47, 36.22, 25.04], 23:[137.62, 89.32, 58.38, 38.55, 26.38], 24:[149.01, 96.35, 62.70, 41.13, 27.84], 25:[161.68, 104.13, 67.47, 43.98, 29.45], 26:[175.81, 112.76, 72.76, 47.14, 31.24], 27:[191.62, 122.35, 78.63, 50.64, 33.24], 28:[209.35, 133.04, 85.16, 54.53, 35.45], 29:[229.32, 144.98, 92.44, 58.85, 37.90], 30:[251.86, 158.32, 100.56, 63.68, 40.63], 31:[277.40, 173.27, 109.64, 69.08, 43.70], 32:[306.44, 190.04, 119.81, 75.11, 47.15], 33:[339.59, 208.89, 131.20, 81.88, 51.02], 34:[377.63, 230.11, 143.99, 89.47, 55.36], 35:[421.52, 254.04, 158.36, 98.00, 60.24], 36:[473.04, 281.09, 174.52, 107.58, 65.73], 37:[532.96, 311.73, 192.70, 118.38, 71.91], 38:[603.92, 346.55, 213.18, 130.53, 78.87], 39:[689.03, 386.25, 236.28, 144.23, 86.73], 40:[792.75, 432.14, 262.35, 159.69, 95.59], 41:[921.61, 484.59, 291.80, 177.14, 105.60], 42:[1085.67, 545.47, 325.12, 196.85, 116.92], 43:[1301.02, 616.80, 363.20, 219.13, 129.71], 44:[1597.64, 701.43, 406.08, 244.33, 144.18], 45:[2024.44, 803.49, 454.85, 273.12, 160.57], 46:[2690.01, 929.15, 510.51, 305.47, 179.30], 47:[3862.78, 1088.06, 574.33, 342.13, 200.37], 48:[6192.18, 1295.87, 648.00, 383.71, 224.27], 49:[null, 1581.73, 733.91, 430.92, 251.40], 50:[null, 1994.36, 835.54, 484.57, 282.21], 51:[null, 2640.77, 958.30, 545.61, 317.24], 52:[null, 3784.79, 1110.91, 615.19, 357.09], 53:[null, 6068.38, 1308.11, 694.72, 402.47], 54:[null, null, 1577.59, 786.04, 454.19], 55:[null, null, 1968.05, 891.73, 513.20], 56:[null, null, 2585.14, 1015.77, 580.60], 57:[null, null, 3688.51, 1164.93, 657.67], 58:[null, null, 5915.09, 1351.49, 745.92], 59:[null, null, null, 1599.05, 847.15], 60:[null, null, null, 1957.72, 963.55], 61:[null, null, null, 2529.16, 1097.99], 62:[null, null, null, 3567.74, 1254.79], 63:[null, null, null, 5724.98, 1441.85], 64:[null, null, null, null, 1676.30], 65:[null, null, null, null, 1998.37], 66:[null, null, null, null,  2511.00], 67:[null, null, null, null, 3467.49], 68:[null, null, null, null, 5541.74]
            }
            rate=rateData[age.value][earningAge.value]

        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "single"){
        if (guarantyPeriod==="5") {
            rateData={
                41:[5847.19, 3650.35, 2253.04, 1361.04, 796.22], 42:[6386.99, 3982.61, 2453.89, 1479.02, 861.80], 43:[6978.48, 4347.17, 2674.03, 1608.39, 933.80], 44:[7626.06, 4747.39, 2915.41, 1750.26, 1012.87], 45:[8334.00,	5187.01, 3180.19, 1,905.90, 1099.70], 46:[9105.87, 5670.12, 3470.79, 2076.69, 1195.08], 47:[]
            }
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="male" && premiumFrequency.value === "annual5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="male" && premiumFrequency.value === "single5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "annual5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "single5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }


    if (isNaN(premium.value) || !premium.value || !rate){

        if (!rate) {
            output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid age </span>';
        semiAnnual.innerHTML = '';
        quarterly.innerHTML = '';
        monthly.innerHTML= '';
        } else {
            output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid premium</span>';
        semiAnnual.innerHTML = '';
        quarterly.innerHTML = '';
        monthly.innerHTML= '';
        }
        

    }else{

        benefit =(premium.value -1000)*1000/rate;

        let halfYear = benefit/2
        let oneMonth = benefit/12
        let quater = benefit/3


        
        output.innerHTML='<span class="text-blue-800 text-size-sm mr-4">Annual benefit:</span>  ' + benefit.toFixed(2)
        semiAnnual.innerHTML = '<span class="text-blue-800 text-size-sm mr-4">Semi-annual benefit:</span>  ' + halfYear.toFixed(2)
        quarterly.innerHTML = '<span class="text-blue-800 text-size-sm mr-4">Quarterly benefit:</span>  ' + quater.toFixed(2)

        monthly.innerHTML= '<span class="text-blue-800 text-size-sm mr-4">Monthly benefit:</span>  ' + oneMonth.toFixed(2)
     }
    
    
  }




  //PREMIUM CALCULATION
  function premiumhandler() {
    
    const benefit = document.querySelector('#benefit');
    const age = document.querySelector('#age');
    const gender = document.querySelector('#gender');
    const guarantyPeriod = document.querySelector('#guaranty-period');
    const earningAge = document.querySelector('#earning-age');
    const premiumFrequency = document.querySelector('#premium-frequency');
    const output = document.querySelector('#output');
    const semiAnnual = document.querySelector('#semi-annual');
    const monthly = document.querySelector('#monthly');
    const quarterly= document.querySelector('#quarterly');
    let premium;
    let rateData;
    let rate;
    
    if (gender.value ==="male" && premiumFrequency.value === "annual" ) {
        
       if (guarantyPeriod.value==="5") {
        
        
        rateData={
            21 : [113.6, 72.95, 47.20, 30.95, 21.23], 22: [122.82, 78.58, 50.56, 32.86, 22.22], 23: [ 133.12, 84.85, 54.31, 34.98 , 23.32], 24:[ 144.59, 91.83, 58.47, 37.34, 24.55], 25:[ 157.41, 99.60, 63.11, 39.96, 25.91],26: [ 171.75, 108.28, 68.27, 42.90, 27.43], 27:[ 187.83, 117.98, 74.05, 46.19, 29.11 ], 28:[ 205.90, 128.85, 80.51, 49.86, 31.04], 29:[ 226.24, 141.04, 87.76, 53.98, 33.18 ], 30:[249.21, 154.72, 95.89, 58.60, 35.59], 31:[ 275.18, 170.11, 105.04, 63.79, 38.30], 32:[275.18, 170.11, 105.04, 63.79, 38.30], 33:[ 338.15, 206.95, 126.91, 76.22, 44.89], 34:[376.43, 228.96, 139.97, 83.64, 48.83], 35:[ 420.34, 253.82, 154.71, 92.02, 53.28], 36:[471.53, 281.92, 171.35, 101.48, 58.31], 37:[ 530.60, 313.73, 190.15, 112.18, 64.00],38:[599.99, 349.79, 211.41, 124.28, 70.44], 39:[ 682.52, 391.13, 235.46, 137.97, 77.74], 40:[782.28, 437.86, 262.94, 153.48, 86.00], 41:[905.36, 491.28, 293.84, 171.06, 95.38], 42:[905.36, 491.28, 293.84, 171.06, 95.38], 43:[1265.29, 623.67, 368.62, 213.82, 118.08], 44:[1546.06, 706.73, 413.77, 239.53, 131.92], 45:[1951.13, 805.29, 465.10, 268.74, 147.52], 46:[2585.15, 924.73, 523.54, 301.96, 165.27], 47:[3706.28, 1073.65, 590.21, 339.76, 185.47], 48:[5942.23, 1266.49, 666.50,382.82, 208.48], 49:[null,1530.32, 754.24, 431.89, 234.71], 50:[null, 1912.35, 856.02,487.89, 264.63], 51:[null, 2515.22, 975.88, 551.85, 298.82], 52:[null, 3591.30, 1120.58, 625.00, 337.91], 53:[null, 5759.03, 1302.37, 708.77, 382.66], 54:[null, null, 1544.43, 804.86, 433.96], 55:[null, null, 1895.68, 915.39, 492.85], 56:[null, null, 2454.48, 1043.17, 560.55], 57:[null, null, 3471.10, 1192.49, 638.52], 58:[null, null, 5564.39, 1371.30, 728.45], 59:[null, null, null, 1596.66, 832.39], 60:[null, null, null, 1907.92, 952.77], 61:[null, null, null, 2404.49, 1092.53], 62:[null, null, null,  3328.28, 1255.31], 63:[null, null, null, 5322.00, 1446.09], 64:[null, null, null, null, 1673.93], 65:[null, null, null, null, 1962.60], 66:[null, null, null, null, 2388.81], 67:[null, null, null, null, 2388.81], 68:[null, null, null, null, 5031.37]
        }
        rate=rateData[age.value][earningAge.value]
            
            
        }else if(guarantyPeriod.value ==="10"){
            rateData={
                21:[114.79, 74.25, 48.37, 31.93, 22.09], 22:[124.12, 80.07, 51.83, 33.93, 23.16], 23:[134.53, 86.48, 55.70, 36.15, 24.37], 24:[146.14, 93.61, 59.99, 38.61, 25.71], 25:[159.10, 101.55, 64.76, 41.37, 27.18], 26:[173.60, 110.41, 70.09, 44.45, 28.82], 27:[189.86, 120.32, 76.04, 47.89, 30.68], 28:[208.14, 131.42, 82.71, 51.74, 32.76], 29:[228.72, 143.88, 90.18, 56.04, 35.08], 30:[251.95, 157.86, 98.56, 60.88, 37.68], 31:[278.22, 173.58,  107.99, 66.31, 40.65], 32:[308.01, 191.27, 118.59, 72.43, 44.00], 33:[341.91, 211.21, 130.54, 79.32, 47.78], 34:[380.62, 233.70, 144.00, 87.09, 52.04], 35:[425.04, 259.09, 159.19, 95.85, 56.85], 36:[476.81, 287.80, 176.34, 105.76, 62.29], 37:[536.56, 320.29, 195.72, 116.95, 68.44], 38:[606.74, 357.13, 217.64, 129.61, 75.40], 39:[690.21, 399.37, 242.43, 143.94, 83.28], 40:[791.10, 447.10, 270.76, 160.16, 92.22], 41:[915.59, 501.67, 302.61, 178.55, 102.35], 42:[1073.25, 564.36, 338.72, 199.59, 113.84], 43:[1279.62, 636.92, 379.69, 223.28, 126.88], 44:[1563.59, 721.76, 426.23, 250.18, 141.83], 45:[1973.27, 822.45, 479.14, 280.74, 158.69], 46:[2614.52, 944.45, 539.38, 315.49, 177.86], 47:[3748.43, 1096.58, 608.09, 355.03, 199.68], 48:[6009.86, 1293.57, 686.73, 400.07, 224.53], 49:[null, 1563.06, 777.16, 451.41, 252.86], 50:[null, 1953.30, 882.08, 509.98, 285.19], 51:[null, 2569.14, 1005.62, 576.89, 322.12],52:[null, 3668.35, 1154.76, 653.41, 364.34], 53:[null, 5882.69, 1342.13, 741.04, 412.69], 54:[null, null, 1591.62, 841.56, 468.10], 55:[null, null, 1953.66, 957.18, 531.71], 56:[null, null, 2529.62, 1090.84, 604.85], 57:[null, null, 3577.44, 1247.05, 689.06], 58:[null, null, 5735.01, 1434.09, 786.21], 59:[null, null, null, 1669.83, 898.49], 60:[null, null, null, 1995.42, 1028.54], 61:[null, null, null, 2514.85, 1179.51], 62:[null, null, null, 3481.16, 1355.35], 63:[null, null, null, 5566.67, 1561.45], 64:[null, null, null, null, 1807.58], 65:[null, null, null, null, 2119.43], 66:[null, null, null, null, 2579.83], 67:[null, null, null, null, 3440.26], 68:[null, null, null, null, 5434.35]
            }
            rate=rateData[age.value][earningAge.value]

        }else{
            alert("An error just occurred")
        }
        
        
    }else if(gender.value ==="male" && premiumFrequency.value === "single"){
        if (guarantyPeriod.value==="5") {
            rateData={
                21 : [1036.37, 665.81, 430.71, 281.61, 189.43], 22:[1122.54, 718.62, 462.40, 299.86, 199.41], 23:[1216.79, 776.27, 496.86, 319.61, 210.07], 24:[1319.47, 838.97, 534.23, 340.92, 221.45], 25:[1431.40, 907.21, 574.82, 363.96, 233.65], 26:[1553.48, 981.56, 618.94, 388.92, 246.77], 27:[1686.73, 1062.60, 666.97, 416.00, 260.91], 28:[1832.25, 1151.03, 719.31, 445.46, 276.22], 29:[1991.25, 1247.57, 776.40, 477.53, 292.84], 30:[2165.09, 1353.05, 838.75, 512.53, 310.93], 31:[2355.22, 1468.36, 906.89, 550.76, 330.68], 32:[2563.26, 1594.46, 981.40, 592.57, 352.29], 33:[2791.00, 1732.43, 1062.94, 638.35, 375.96], 34:[3040.39, 1883.45, 1152.21, 688.49, 401.93], 35:[3313.61, 2048.79, 1249.98, 743.46, 430.45], 36:[3613.05, 2229.87, 1357.09, 803.74, 461.79], 37:[3941.39, 2428.24, 1474.48, 869.87, 496.24], 38:[4301.56, 2645.64, 1603.14, 942.43, 534.14], 39:[4696.87, 2883.97, 1744.22,	 1022.07, 575.82], 40:[5130.94, 3,45.36, 1898.93, 1109.50, 621.67], 41:[5607.75, 3432.20, 2068.65, 1205.50, 672.12], 42:[6131.59, 3747.17, 2254.90, 1310.93, 727.63], 43:[6706.91, 4093.31, 2459.36, 1426.77, 788.71], 44:[7338.06, 4474.10, 2683.91, 1554.07, 855.95], 45:[8028.78, 4893.48, 2930.65, 1694.04, 929.97], 46:[8781.36, 5355.97, 3201.96, 1848.00, 1011.50], 47:[9595.24, 5866.64, 3500.52, 2017.45, 1101.33], 48:[10467.73, 6430.94, 3829.36, 2204.08, 1200.36], 49:[null, 7054.20, 4192.03, 2409.77, 1309.59], 50:[null, 7740.51, 4592.66, 2636.68, 1430.19], 51:[null, 8490.67, 5036.18, 2887.23, 1563.44], 52:[null, 9299.19, 5528.60, 3164.19, 1710.81], 53:[null, 10155.28, 6077.16, 3470.72, 1873.99], 54:[null, null, 6690.16, 3810.47, 2054.92], 55:[null, null,7375.42, 4187.65, 2255.79], 56:[null, null, 8135.94, 4607.27, 2479.17], 57:[null, null, 8961.40, 5075.44, 2728.01], 58:[null, null, 9823.80, 5600.06, 3005.75], 59:[null, null, null, 6191.86, 3316.39], 60:[null, null, null, 6865.04, 3664.64], 61:[null, null, null, 7633.82, 4056.04], 62:[null, null, null,  8495.65, 4497.17], 63:[null, null, null, 9402.28, 4996.09], 64:[null, null, null, null, 5563.31], 65:[null, null, null, null, 6214.56], 66:[null, null, null, null, 6974.56], 67:[null, null, null, null, 7882.73], 68:[null, null, null, null, 8882.44]
            }
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData={
                21:[1047.27, 678.33, 440.94, 290.78, 197.92], 22:[1134.39, 732.28, 474.02, 309.80, 208.66], 23:[1229.71, 791.16, 509.54, 330.45, 220.15], 24:[1333.56, 855.22, 548.06, 352.74, 232.45], 25:[1446.77, 924.93, 589.90, 376.86, 245.65], 26:[1570.25, 1000.89, 635.40, 402.99, 259.86], 27:[1705.03, 1083.69, 684.92, 431.35, 275.19], 28:[1852.22, 1174.04, 738.90, 462.20, 291.80], 29:[2013.06, 1272.69, 797.78, 495.81, 309.84], 30:[2188.89, 1380.47, 862.09, 532.48, 329.50], 31:[2381.21, 1498.29, 932.36, 572.54, 350.95], 32:[2591.64,1627.14, 1009.22, 616.35, 374.41], 33:[2822.00, 1768.12, 1093.31, 664.31, 400.12], 34:[3074.26, 1922.42, 1185.38, 716.85, 428.31], 35:[3350.62, 2091.36, 1286.21, 774.43, 459.27], 36:[3653.51, 2276.38, 1396.68, 837.58, 493.27], 37:[3985.61, 2479.07, 1517.72, 906.84, 530.65], 38:[4349.92, 2701.19, 1650.41, 982.83, 571.73], 39:[4749.77, 2944.69, 1795.87, 1066.23, 616.91], 40:[5188.82, 3211.75, 1955.40, 1157.77, 666.59], 41:[5671.11, 3504.80, 2130.40, 1258.28, 721.23], 42:[6200.95, 3826.60, 2322.42, 1368.66, 781.34], 43:[6782.87, 4180.23, 2533.22, 1489.91, 847.46], 44:[7421.26, 4569.25, 2764.73, 1,623.16, 920.23], 45:[8119.91, 4997.70, 3019.11, 1769.65, 1000.33], 46:[8881.13, 5470.19, 3298.81, 1930.78, 1088.52], 47:[9704.35, 5991.90, 3606.58, 2108.11, 1185.68], 48:[10586.87, 6568.39, 3945.59, 2303.41, 1292.78], 49:[null, 7205.13, 4319.45, 2518.64, 1410.90], 50:[null, 7906.29, 4732.43, 2756.07, 1541.28], 51:[null, 8672.68, 5189.63, 3018.23, 1685.33], 52:[null, 9498.70, 5697.24, 3308.02, 1844.63], 53:[null, 10373.35, 6262.71, 3628.74, 2021.02], 54:[null, null, 6894.60, 3984.20, 2216.56], 55:[null, null, 7601.00, 4378.82, 2433.65], 56:[null, null, 8384.98, 4817.83, 2675.05], 57:[null, null, 9235.93, 5307.63, 2943.96], 58:[null, null, 10125.02, 5856.48, 3244.08], 59:[null, null, null, 6475.61, 3579.75], 60:[null, null, null, 7179.89, 3956.04], 61:[null, null, null, 7984.19, 4378.94], 62:[null, null, null, 8885.89, 4855.58], 63:[null, null, null, 9834.54, 5394.64], 64:[null, null, null, null, 6007.49], 65:[null, null, null, null, 6711.13], 66:[null, null, null, null, 7532.23], 67:[null, null, null, null, 8513.55], 68:[null, null, null, null, 9593.87]
              }
              rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "annual"){
        if (guarantyPeriod.value==="5") {
            rateData={
                21 : [117.51, 76.64, 50.41, 33.66, 23.28], 22:[126.67, 82.33, 53.92, 35.73, 24.46], 23:[136.89, 88.64, 57.79, 38.02, 25.75], 24:[148.21, 95.61, 62.06, 40.55, 27.16], 25:[160.81, 103.32, 66.77, 43.35, 28.70], 26:[174.86, 111.88, 72.00, 46.45, 30.41], 27:[190.57, 121.39, 77.80, 49.88, 32.32], 28:[208.21, 131.99, 84.25, 53.70, 34.45], 29:[228.06, 143.82, 91.43, 57.94, 36.80], 30:[250.48, 157.05, 99.46, 62.68, 39.42], 31:[275.87, 171.87, 108.43, 67.98, 42.36], 32:[304.74, 188.50, 118.47, 73.90, 45.67], 33:[337.70, 207.19, 129.73, 80.54, 49.39], 34:[375.52, 228.23, 142.37, 87.99, 53.56], 35:[419.17, 251.96, 156.56, 96.36, 58.25], 36:[470.39, 278.78, 172.52, 105.77, 63.52], 37:[529.96, 309.16,  190.48, 116.36, 69.45], 38:[600.52, 343.68, 210.72, 128.29, 76.14], 39:[685.15, 383.04, 233.53, 141.74, 83.69], 40:[788.27, 428.54, 259.29, 156.92, 92.20], 41:[916.40, 480.55, 288.38, 174.04, 101.82], 42:[1079.52, 540.90, 321.29, 193.39, 112.69], 43:[1293.64, 611.63, 358.92, 215.26, 124.98], 44:[1588.57, 695.54, 401.28, 239.99, 138.89], 45:[2012.92, 796.73, 449.46, 268.25, 154.63], 46:[2674.70, 921.33, 504.45, 300.00, 172.63], 47:[3840.77, 1078.88, 567.49, 335.99, 192.88], 48:[6156.88, 1284.93, 640.28, 376.81, 215.84], 49:[null, 1568.37, 725.15, 423.15, 241.91], 50:[null, 1977.49, 825.55, 475.81, 271.52], 51:[null, 2618.41, 946.83, 535.72, 305.18], 52:[null, 3752.71, 1097.60, 604.02, 343.48], 53:[null, 6016.91, 1292.42, 682.09, 387.08], 54:[null, null, 1558.65, 771.73, 436.78], 55:[null, null, 1944.40, 875.47, 493.49], 56:[null, null, 2554.05, 997.24, 558.25], 57:[null, null, 3644.11, 1143.65, 632.32], 58:[null, null, 5843.82, 1326.78, 717.12], 59:[null, null, null, 1569.80, 814.40], 60:[null, null, null, 1921.87, 926.25], 61:[null, null, null, 2482.81, 1055.45], 62:[null, null, null, 3502.30, 1206.13], 63:[null, null, null, 5619.89, 1385.88], 64:[null, null, null, null, 1611.17], 65:[null, null, null, null, 1920.68], 66:[null, null, null, null, 2413.31], 67:[null, null, null, null, 3332.48], 68:[null, null, null, null, 5325.79]
                }

            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData={
                21:[118.09, 77.24, 50.92, 34.11, 23.81], 22:[127.34, 82.96, 54.47, 36.22, 25.04], 23:[137.62, 89.32, 58.38, 38.55, 26.38], 24:[149.01, 96.35, 62.70, 41.13, 27.84], 25:[161.68, 104.13, 67.47, 43.98, 29.45], 26:[175.81, 112.76, 72.76, 47.14, 31.24], 27:[191.62, 122.35, 78.63, 50.64, 33.24], 28:[209.35, 133.04, 85.16, 54.53, 35.45], 29:[229.32, 144.98, 92.44, 58.85, 37.90], 30:[251.86, 158.32, 100.56, 63.68, 40.63], 31:[277.40, 173.27, 109.64, 69.08, 43.70], 32:[306.44, 190.04, 119.81, 75.11, 47.15], 33:[339.59, 208.89, 131.20, 81.88, 51.02], 34:[377.63, 230.11, 143.99, 89.47, 55.36], 35:[421.52, 254.04, 158.36, 98.00, 60.24], 36:[473.04, 281.09, 174.52, 107.58, 65.73], 37:[532.96, 311.73, 192.70, 118.38, 71.91], 38:[603.92, 346.55, 213.18, 130.53, 78.87], 39:[689.03, 386.25, 236.28, 144.23, 86.73], 40:[792.75, 432.14, 262.35, 159.69, 95.59], 41:[921.61, 484.59, 291.80, 177.14, 105.60], 42:[1085.67, 545.47, 325.12, 196.85, 116.92], 43:[1301.02, 616.80, 363.20, 219.13, 129.71], 44:[1597.64, 701.43, 406.08, 244.33, 144.18], 45:[2024.44, 803.49, 454.85, 273.12, 160.57], 46:[2690.01, 929.15, 510.51, 305.47, 179.30], 47:[3862.78, 1088.06, 574.33, 342.13, 200.37], 48:[6192.18, 1295.87, 648.00, 383.71, 224.27], 49:[null, 1581.73, 733.91, 430.92, 251.40], 50:[null, 1994.36, 835.54, 484.57, 282.21], 51:[null, 2640.77, 958.30, 545.61, 317.24], 52:[null, 3784.79, 1110.91, 615.19, 357.09], 53:[null, 6068.38, 1308.11, 694.72, 402.47], 54:[null, null, 1577.59, 786.04, 454.19], 55:[null, null, 1968.05, 891.73, 513.20], 56:[null, null, 2585.14, 1015.77, 580.60], 57:[null, null, 3688.51, 1164.93, 657.67], 58:[null, null, 5915.09, 1351.49, 745.92], 59:[null, null, null, 1599.05, 847.15], 60:[null, null, null, 1957.72, 963.55], 61:[null, null, null, 2529.16, 1097.99], 62:[null, null, null, 3567.74, 1254.79], 63:[null, null, null, 5724.98, 1441.85], 64:[null, null, null, null, 1676.30], 65:[null, null, null, null, 1998.37], 66:[null, null, null, null,  2511.00], 67:[null, null, null, null, 3467.49], 68:[null, null, null, null, 5541.74]
            }
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "single"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="male" && premiumFrequency.value === "annual5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="male" && premiumFrequency.value === "single5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "annual5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }else if(gender.value ==="female" && premiumFrequency.value === "single5"){
        if (guarantyPeriod==="5") {
            rateData=""
            rate=rateData[age.value][earningAge.value]
            
        }else if(guarantyPeriod.value ==="10"){
            rateData=""
            rate=rateData[age.value][earningAge.value]
        }else{
            alert("An error just occurred")
        }

    }

    if (isNaN(benefit.value)|| !benefit.value || !rate){
        if (!rate) {
            output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid age </span>';
        semiAnnual.innerHTML = '';
        quarterly.innerHTML = '';
        monthly.innerHTML= '';
        } else {
            output.innerHTML='<span class="text-blue-800 text-size-sm">Please insert a valid benefit</span>';
        semiAnnual.innerHTML = '';
        quarterly.innerHTML = '';
        monthly.innerHTML= '';
        }
        

     }else {
       
        premium = benefit.value * rate/1000 + 1000;

        let halfYear = premium/2
        let toFixedhalfyear = halfYear.toFixed(2)

        let oneMonth = premium/12
        let toFixedOneMonth = oneMonth.toFixed(2)


        let quarter = premium/3
        let toFixedQuarterly = quarter.toFixed(2)

        
        output.innerHTML='<span class="text-blue-800 text-size-sm mr-4">Annual premium:</span>  ' + premium.toFixed(2)
        
        semiAnnual.innerHTML = '<span class="text-blue-800 mr-4">Semi-annual premium:</span>  ' +  toFixedhalfyear
        
        quarterly.innerHTML = '<span class="text-blue-800 text-size-sm mr-4">Quarterly benefit:</span>  ' + toFixedQuarterly

        monthly.innerHTML= '<span class="text-blue-800 mr-4">Monthly premium:</span>  ' + 
        toFixedOneMonth

        
      }

    
  }

  

