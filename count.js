
var countFunc =function(){



  if (namesGreeted[userName] === undefined) {
    namesGreeted[userName] = 0;
      count += 1;


      //input.innerHTML = userName;

  } else if (namesGreeted[userName] !== undefined) {


      namesGreeted[userName] = userName;

      //input.innerHTML = userName;
  }
return count;
};
