function check() {
  let num = 476;
  let sum = 0;
  while (num >  0) {
    sum += num % 10;
    num = num / 10;
  }
  if (sum % 2 != 0) 
    console.log("odd sum");
  else 
    console.log("even sum");
}
