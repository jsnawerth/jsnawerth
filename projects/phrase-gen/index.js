const quotes = [
    `"When you have a dream, you've got to grab it and never let go."`,
    `"Nothing is impossible. The word itself says 'I'm possible!'"`,
    '"There is nothing impossible to they who will try."',
    `"The bad news is time flies. The good news is you're the pilot."`,
    `"Life has got all those twists and turns. You've got to hold on tight and off you go.`,
    '"Keep your face always toward the sunshine, and shadows will fall behind you."',
    '"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."',
    '"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box."',
    '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    `"You define your own life. Don't let other people write your script."`,
    '"You are never too old to set another goal or to dream a new dream."',
    '"Spread love everywhere you go."',
    '"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on."',
    `"You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."`,
    '"You can be everything. You can be the infinite amount of things that people are."',
    '"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."',
    '"Belief creates the actual fact."',
    '"No matter what people tell you, words and ideas can change the world."',
    `"I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that."`,
    '"It is during our darkest moments that we must focus to see the light."',
    '"Not having the best situation, but seeing the best in your situation is the key to happiness."',
    `"Believe you can and you're halfway there."`,
    '"Weaknesses are just strengths in the wrong environment."',
    `"Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong."`,
    '"Silence is the last thing the world will ever hear from me."',
    '"In a gentle way, you can shake the world."',
    '"Learning how to be still, to really be still and let life happen—that stillness becomes a radiance."',
    '"All you need is the plan, the road map, and the courage to press on to your destination."',
    '"I care about decency and humanity and kindness. Kindness today is an act of rebellion."',
    '"If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely."',
    `"Try to be a rainbow in someone's cloud."`,
    '"We must let go of the life we have planned, so as to accept the one that is waiting for us."',
    '"Real change, enduring change, happens one step at a time."',
    '"Wake up determined, go to bed satisfied."',
    '"Nobody built like you, you design yourself."',
    '"Live your beliefs and you can turn the world around."',
    '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
    `"Don't try to lessen yourself for the world; let the world catch up to you."`,
    `"There's nothing more powerful than not giving a f—k."`,
    '"Faith is love taking the form of aspiration."',
    ' "When it comes to luck, you make your own."'
  ]
const food = [
    'One Ice Cream',
    'Popcorn',
    'Cottage Cheese and Cantaloupe',
    'Three Crackers With Cheese',
    'A Handful of Almonds',
    'Six Whole-Grain Pretzel Sticks',
    'Baked Apple',
    'Cheese-Stuffed Pita Pocket',
    'Blueberry Smoothie',
    'Frozen Mango Cubes',
    'Baby Carrots with Hummus',
    'Apple Slices With Peanut Butter',
    'Yogurt With Sunflower Seeds',
    'Nonfat Greek Yogurt with Honey',
    'Half a Baked Potato with Salsa',
    'Frozen Yogurt Sandwich',
    'Twenty Pistachios',
    'Frozen Banana Pop',
    'Tomato Soup',
    'One Cup Dry Oat Squares Cereal',
    '1 Cup Grapes',
    'Smoked Salmon Pinwheel',
    'Grapefruit',
    'Watermelon',
    'Berries',
    'Sweet Potatoes',
    'Oatmeal with Milk and Banana',
    'Crispbreads',
    'Cup of Strawberries',
    'Cup of Cheerios',
    '2 Cups of Fresh Melon',
    'Small Latte With Skim Milk'
  ]




const generateAll = ()=>{
        
  let number = Math.ceil(Math.random()*500);
  let quote = quotes[Math.floor(Math.random()*quotes.length)]; //choose one quote randomly from the array.
  let snack = food[Math.floor(Math.random()*food.length)];//choose one snack randomly from the array.
    
  document.getElementById("number").innerHTML = number
  document.getElementById("quote").innerHTML = quote
  document.getElementById("snack").innerHTML = snack
}


const btn = document.getElementById("btn");
btn.addEventListener('click', generateAll);
/*
//To try on the console
let number = Math.ceil(Math.random()*500);
let quote = quotes[Math.floor(Math.random()*quotes.length)]; //choose one quote randomly from the array.
let snack = food[Math.floor(Math.random()*food.length)];//choose one snack randomly from the array.

console.log("Your lucky number!");
console.log(number);
console.log("Your snack for today!" );
console.log(snack);
console.log("Your personal inspirational quote!");
console.log(quote);
*/