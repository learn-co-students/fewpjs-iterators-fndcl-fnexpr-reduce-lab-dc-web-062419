const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteries(){
  let totalBatteries = batteryBatches.reduce(function(total, element)
    {return element + total}, 0
  );
  return totalBatteries;
}

let totalBatteries = batteries()
