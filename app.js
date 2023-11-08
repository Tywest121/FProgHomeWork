const tea4TeamFCC = getTea(40);

const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);

const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

return fixedValue + 1;

// Only change code below this line
function incrementer(value) {
    return value + 1;
  
    // Only change code above this line
  }

  // Add your code below this line
function add(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    newArr.push(bookName); // Add bookName parameter to the end of the new array.
    return newArr; // Return the new array.
  }
  
  /* This function should remove a book from the list and return the list */
  // New parameters should come before the bookName one
  
  // Add your code below this line
  function remove(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) {
      // Check whether the bookName parameter is in new array.
      newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
      return newArr; // Return the new array.
    }
  }
  
  var newBookList = add(bookList, 'A Brief History of Time');
  var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
  var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
  
  console.log(bookList);


  const ratings = [];
  for (let i = 0; i < watchList.length; i++) {
    ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
  }


  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }


  const filteredList = watchList
  .filter(({ imdbRating }) => imdbRating >= 8.0)
  .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));


  for (const [index, elem] of this.entries()) {
    if (callback(elem, index, this)) newArray.push(elem);
  }

  return anim.slice(beginSlice, endSlice);

  return cities.slice(0, 3);



