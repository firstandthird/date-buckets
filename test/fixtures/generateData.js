var startDay = process.argv[2] || 1;

var output = {};

for(var i = 0, counter = startDay; i < 61; i ++) {
  if(counter > 366) {
    counter = counter - 366;
  }

  output[counter] = counter;

  counter++;
}

console.log(JSON.stringify(output));
