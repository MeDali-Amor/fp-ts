const sum_array = (list: number[]):number => {
    if(!list.length) return 0;
    const [head, ...tail] = list;
    return head + sum_array(tail);
}

console.log(sum_array([1,2,3,4,5,6]))
