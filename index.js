// code your solution here

// to generate fun activities fir saturday //
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, let's ${activity}!`;
  }
  
  // to generate monday work //
  function mondayWork(task = 'go to the office') {
    return `This Monday, I need to ${task}.`;
  }
  
  //  to wrap an adjectiv with a visual flair //
  function wrapAdjective(visualFlair = '*') {
    return function(adjective = 'special') {
      return `You are ${visualFlair}${adjective}${visualFlair}`;
    };
  }
  
  // Example usage of wrapAdjective //
  const encouragingPromptFunction = wrapAdjective('!!!');
  
  