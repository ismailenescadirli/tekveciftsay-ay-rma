let sayilar=[];

for (let i = 0; i< 10 ; i++) {
    let sayi=Number(prompt("Sayı Giriniz"));
    sayilar[i]=sayi    
}

let ciftSayilar=[];
let tekSayilar=[];

for (let i = 0; i < sayilar.length; i++){
   if (sayilar[i]%2===0) {
    ciftSayilar[ciftSayilar.length] = sayilar[i]; 
   } 
 else {
    tekSayilar[tekSayilar.length] = sayilar[i]; 
    }
}
console.log("Çift Sayılar:",ciftSayilar);
console.log("Tek Sayılar:",tekSayilar);
