const randomTargets = () => {
  const availableTargets = [
    {
      name: "Avatar",
      startX: 1950,
      endX: 2054,
      startY: 1473,
      endY: 1607,
    },
    {
      name: "Raiden",
      startX: 356,
      endX: 451,
      startY: 3497,
      endY: 3752,
    },
    {
      name: "Little Nightmare",
      startX: 999,
      endX: 1064,
      startY: 4129,
      endY: 4210,
    },
    {
      name: "Fry",
      startX: 113,
      endX: 170,
      startY: 500,
      endY: 667,
    },
    {
      name: "Scream",
      startX: 2264,
      endX: 2360,
      startY: 2596,
      endY: 2904,
    },
    {
      name: "Gollum",
      startX: 868,
      endX: 993,
      startY: 3495,
      endY: 3625,
    },
    {
      name: "CJ",
      startX: 661,
      endX: 748,
      startY: 491,
      endY: 689,
    },
    {
      name: "Trevor",
      startX: 1233,
      endX: 1325,
      startY: 612,
      endY: 789,
    },
    {
      name: "Bang (Silver Fang)",
      startX: 430,
      endX: 558,
      startY: 4222,
      endY: 4463,
    },
    {
      name: "Phoenix Wright",
      startX: 1168,
      endX: 1257,
      startY: 1157,
      endY: 1453,
    },
    {
      name: "Beavis",
      startX: 1431,
      endX: 1534,
      startY: 1816,
      endY: 1958,
    },
    {
      name: "Harrier Du Bois",
      startX: 491,
      endX: 582,
      startY: 2109,
      endY: 2383,
    },
    {
      name: "Jaskier (Dandellion)",
      startX: 1822,
      endX: 2066,
      startY: 1842,
      endY: 2003,
    },
    {
      name: "Jake",
      startX: 1803,
      endX: 1875,
      startY: 2515,
      endY: 2589,
    },
    {
      name: "Bill Cipher",
      startX: 233,
      endX: 363,
      startY: 351,
      endY: 439,
    },
    {
      name: "Helga",
      startX: 1190,
      endX: 1245,
      startY: 3242,
      endY: 3332,
    },
  ];
  let targetList: {
    name: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  }[] = [];
  let randomNumberList: Array<number> = [];
  let i = 0;
  while (i < 3) {
    let randomInt = Math.floor(Math.random() * availableTargets.length);
    if (!randomNumberList.includes(randomInt)) {
      randomNumberList.push(randomInt);
      i += 1;
    }
  }
  console.log(randomNumberList);
  randomNumberList.forEach((number) => {
    targetList.push(availableTargets[number]);
  });
  return targetList;
};

export default randomTargets;
