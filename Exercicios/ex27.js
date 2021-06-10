function MostrarCrescimento(altura1,taxa1,altura2,taxa2){
    contAnos = 0
    if(altura1 == altura2){
        if(taxa1 > taxa2){
            return 'A criança 1 vai passar em altura 1 ano'
        }else if(taxa2 > taxa1){
            return 'A criança 2 vai passar em altura 1 ano'
        } else{
            return 'Elas sempre terão a mesma altura'
        }
    } else if(altura1 > altura2){
        if(taxa1 > taxa2){
            return 'A criança 1 sempre vai ser maior'
        }else if(taxa1 < taxa2){
            while(altura1 > altura2){
                altura2 += taxa2
                altura1 += taxa1
                contAnos += 1
            }
            return `A criança 2 vai passar a criança 1 em ${contAnos} anos`
        }
    } else if(altura2 > altura1){
        if(taxa2 > taxa1){
            return 'A criança 2 sempre vai ser maior'
        }else if(taxa2 < taxa1){
            while(altura2 > altura1){
                altura2 += taxa2
                altura1 += taxa1
                contAnos += 1
            }
            return `A criança 1 vai passar a criança 1 em ${contAnos} anos`
        }
    }
}

console.log(MostrarCrescimento(150,2,130,4))

