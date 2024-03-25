function scuberGreetingForFeet(FEET){
  // Write your code here!
  if(FEET<=400){
    return "This one is on me!";
  } else if(FEET<=2000){
    return "That will be twenty bucks.";
  } else if(FEET<=2500){
    return "I will gladly take your thirty bucks.";
  } else {
    return"No can do.";
  }
}
console.log(scuberGreetingForFeet(200));
console.log(scuberGreetingForFeet(800));
console.log(scuberGreetingForFeet(2600));

function ternaryCheckCity(City){
  // Write your code here!
  return (City === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  switch(Tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}