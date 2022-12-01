const fs = require("fs");

const fsConfig = {encoding:"utf8",flag:"r"};

console.log("Bloop.");

function GetMaxCalories(inputStr)
{
    let calorieTotals = [];
    let elfInventories = inputStr.split("\r\n\r\n");
    let maxCalories = 0;
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
        if (total > maxCalories)
        {
            maxCalories = total;
        }
    }
    return maxCalories;
}

function main()
{
    const testPath = "./testinput.txt";
    const realPath = "./puzzleinput.txt";

    const inputStr = fs.readFileSync(realPath, fsConfig);
    let maxCalories = GetMaxCalories(inputStr);
    console.log(`Elf with most calories has ${maxCalories}.`);
}

main();