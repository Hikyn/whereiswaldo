const randomTargets = () => {
    const availableTargets=[{
        name: 'Avatar',
        startX: 1950,
        endX: 2054,
        startY: 1473,
        endY: 1607
       }, {
        name: 'Raiden',
        startX: 356,
        endX: 451,
        startY: 3497,
        endY: 3752
       }, {
        name: 'Little Nightmare',
        startX: 999,
        endX: 1064,
        startY: 4129,
        endY: 4210
       }, {
        name: 'Fry',
        startX: 113,
        endX: 170,
        startY: 500,
        endY: 667
       }, {
        name: 'Scream',
        startX: 2264,
        endX: 2360,
        startY: 2596,
        endY: 2904
       }, {
        name: 'Gollum',
        startX: 868,
        endX: 993,
        startY: 3495,
        endY: 3625
       }]
    let targetList: {
        name: string,
        startX: number,
        startY: number,
        endX: number,
        endY: number
    }[] = [];
    let randomNumberList: Array<number> = [];
    let i = 0;
    while (i < 3) {
        let randomInt = Math.floor(Math.random() * availableTargets.length);
        if (!randomNumberList.includes(randomInt)) {
            randomNumberList.push(randomInt)
            i += 1;
        }
    }
    console.log(randomNumberList)
    randomNumberList.forEach((number) => {
        targetList.push(availableTargets[number]);
    })
    return targetList;
}



export default randomTargets;