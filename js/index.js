let list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
let list2 = [ false, false, false ]


function countSheeps(list) {

    let sheepCount=0;

    for (var i = 0; i< list.length; i++) {
        if (list[i])
        {
            sheepCount += 1;
        }
        if (list[i] != true && list[i] != false)
        {
            return "Enter only true or false"
        }
    }

    if (sheepCount > 0)
    {
        return sheepCount;
    }

    if (sheepCount == 0)
    {
        return "UPS!!! Wolfs eaten Sheeps"
    }

 }


 console.log(countSheeps(list1));