const fs = require("fs");

const fsConfig = {encoding:"utf8",flag:"r"};

console.log("Bloop.");

function GetTopThreeMaxCalories(inputStr)
{
    let calorieTotals = [];
    let elfInventories = inputStr.split("\r\n\r\n");
    let topThree = [0,0,0];
    for (let i in elfInventories)
    {
        let inventory = elfInventories[i];
        let supplies = inventory.split("\r\n");
        let total = 0;
        for (let s in supplies)
        {
            let calorieCount = supplies[s];
            total += parseInt(calorieCount);
        }
        calorieTotals.push(total);
        updateTopThree(topThree, total);
    }
    return topThree;
}

function updateTopThree(topThree, newValue)
{
    let currentIndex = 3;
    for (let i = 2; i > -1; i--)
    {
        if (newValue > topThree[i])
        {
            let temp = topThree[i];
            topThree[i] = newValue;
            if (currentIndex < 3)
            {
                topThree[currentIndex] = temp;
            }
            currentIndex = i;
        }
    }
    return topThree;
}

function main()
{
    const testPath = "./testinput.txt";
    const realPath = "./puzzleinput.txt";

    const inputStr = fs.readFileSync(realPath, fsConfig);
    let topThree = GetTopThreeMaxCalories(inputStr);
    console.log(`Elf with most calories has ${topThree[0]}.`);
    console.log(`The top three calorie totals are ${topThree[0]}, ${topThree[1]}, and ${topThree[2]}.`);
    console.log(`The total of the top three is: ${topThree[0] + topThree[1] + topThree[2]}.`);
}

main();