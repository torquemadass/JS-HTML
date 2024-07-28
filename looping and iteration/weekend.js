const paragraphs = [
    ['The quick brown fox', 'jumps over the lazy dog'],
    ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit'],
    ['Sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua']
  ];
  
  // Write a nested loop to flatten the paragraphs array into a single array of words and print the total word count.
  let wordCount = 0;
  for (let i = 0; i < paragraphs.length; i++) {
    for (let j = 0; j < paragraphs[i].length; j++) {
        wordCount += paragraphs[i][j].split(' ').length;
        }
    }
    console.log(wordCount);

    // the output is 28, regarding maybe on the expected output is a miscalculation
    
  /* Expected Output:
  Total word count: 22
  */
  
  const salesData = [
    [120.50, 89.70, 45.60],
    [150.00, 130.20, 75.50],
    [200.10, 95.40, 180.60]
  ];
  
  // Write a nested loop to calculate and print the total sales for each day.
  
  /* Expected Output:
  Total sales for day 1: 255.80
  Total sales for day 2: 355.70
  Total sales for day 3: 476.10
  */
  
  const sentences = [
    ['The quick brown fox', 'jumps over the lazy dog'],
    ['The quick brown fox', 'is quick and agile'],
    ['A quick fox is hard to catch', 'but a lazy dog is easy']
  ];
  
  // Write a nested loop to count and print the number of times the word 'quick' appears in the sentences array.
  
  /* Expected Output:
  The word 'quick' appears 4 times.
  */
  
  const socialPosts = [
    ['Loving the new #feature', '#excited for the update'],
    ['Had a great time at the #conference', 'Met some amazing people #networking'],
    ['#Throwback to the best vacation ever', 'Missing the #beach life']
  ];
  
  // Write a nested loop to extract and print all hashtags from the socialPosts array.
  
  /* Expected Output:
  #feature
  #excited
  #conference
  #networking
  #Throwback
  #beach
  */
  
  const fruitGroups = [
    ['apple', 'banana', 'cherry'],
    ['date', 'elderberry', 'fig'],
    ['grape', 'honeydew', 'kiwi']
  ];
  const targetFruits = ['banana', 'fig', 'kiwi', 'mango'];
  
  // Write a nested loop to find and print elements in nestedArray that are not in compareArray.
  
  /* Expected Output:
  apple
  cherry
  date
  elderberry
  grape
  honeydew
  */
  
  const petGroups = [
    ['cat', 'dog', 'bird'],
    ['fish', 'lizard', 'hamster'],
    ['horse', 'turtle', 'rabbit']
  ];
  const targetPets = ['dog', 'fish', 'rabbit', 'snake'];
  
  // Write a nested loop to replace matching elements in nestedArray with 'REPLACED' and print the updated nestedArray.
  
  /* Expected Output:
  [
    ['cat', 'REPLACED', 'bird'],
    ['REPLACED', 'lizard', 'hamster'],
    ['horse', 'turtle', 'REPLACED']
  ]
  */
  
  const fruitBaskets = [
    ['apple', 'banana', 'cherry'],
    ['date', 'elderberry', 'fig'],
    ['grape', 'honeydew', 'kiwi']
  ];
  const exoticFruits = ['apricot', 'blueberry', 'citrus', 'dragonfruit'];
  
  // Write a nested loop to find and print elements in nestedArray that start with the same letter as any element in compareArray.
  
  /* Expected Output:
  apple
  banana
  cherry
  date
  */