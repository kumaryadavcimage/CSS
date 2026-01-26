function createCouter(){
    let count = 0;
    return {
        // returning an object
        increment: function(){count+1},
        decrement: function(){count-1},
        getCount: function(){return count}
    }
}

let c = createCouter()