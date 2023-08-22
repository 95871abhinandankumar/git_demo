function computeLength<T>(arr: T[]){
    console.log('here is the logic written');
    console.log(arr);
}

computeLength<number>([1, 2, 3]);
computeLength<string>(['abc', 'def']);