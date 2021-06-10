function anagrama(str1,str2){
    let aux = true
    for(let i = 0; i < str1.length;i++){
        let str1chars = str1.charAt(i).toLowerCase()
        for(let j = 0; j < str2.length;j++){
            let str2chars = str2.charAt(j).toLowerCase()
            if(str1chars == str2chars){
                aux = true
                break
            } else{
                aux = false
            }
        }
        if(!aux){
            return aux
        }
    }
    return aux
}

console.log(anagrama('Deitos','Sotied'))
console.log(anagrama('Deitos','Sotid'))