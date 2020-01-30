// Variables
//// Grams per day
const amount = document.querySelector('#amount');
const timesPerDay = document.querySelector('#times-per-day');
const gramsPerDay = document.querySelector('#grams-per-day');

//// Reduction Calculator
const dailyGrams = document.querySelector('#daily-grams');
const daysToQuit = document.querySelector('#days-to-quit');
const dailyReduction = document.querySelector('#daily-reduction');
const speed = document.querySelector('#speed');
const daysToZero = document.querySelector('#days-to-zero');
const doseList = [];

//// tips
const over24Tip = document.querySelector('#over-24-tip')

daysToZero.value = dailyGrams.value * speed.value;

if(dailyGrams.value > 24) {
  over24Tip.classList.remove('hidden');
} else {
  over24Tip.classList.add('hidden');
}

// Event Listeners
//// Grams per day
amount.addEventListener('change',  () => {
  calculateDaily();
  calculateSpeed();
  if(dailyGrams.value > 24) {
    over24Tip.classList.remove('hidden');
  } else {
    over24Tip.classList.add('hidden');
  }
});
timesPerDay.addEventListener('change', () => {
  calculateDaily();
  calculateSpeed();
  if(dailyGrams.value > 24) {
    over24Tip.classList.remove('hidden');
  } else {
    over24Tip.classList.add('hidden');
  }
});

//// Daily Reduction
dailyGrams.addEventListener('change', calculateSpeed);
speed.addEventListener('change', calculateSpeed);



// Functions
//// Grams per Day
function calculateDaily() {
  gramsPerDay.value = (amount.value * timesPerDay.value);
  dailyGrams.value = (amount.value * timesPerDay.value);
}


function calculateSpeed() {
  daysToZero.value = dailyGrams.value * speed.value;
}











//   console.log(gramsPerDay.value);
//   let grams = gramsPerDay.value;
//   while(grams.value > 0){
//     let i;
//     i ++;
//     if(i%3 == 0){
//       dailyGrams.value -= dailyReduction.value;
//       doseList.push('grams.value');
//     }
//   }
//   console.log(dailyGrams.value);
//   console.log(doseList);
// }





/*
while grams_per_day > 0:
    i += 1
    if i%3 == 0:
        grams_per_day -= reduction_rate
    dose_list.append(grams_per_day)

days_to_quit = len(dose_list)/doses_per_day


John takes 10 grams per day
If he reduces the amount he takes by .5 grams every 3 days,
it will take john 10 / 3 x .5 (6)





*/