

// I encountered an issue when I didn't attach a .catch() method to handle errors in a Promise. This led to silent failures which were hard to debug. An example of the mistake looked like this:当我没有附加 .catch() 一个方法来处理 Promise 中的错误时，我遇到了一个问题。这导致了难以调试的静默故障。错误的示例如下所示：
fetch('https://api.example.com/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
  // Missing .catch() to catch any errors

  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
  // Missing .catch() here to handle errors


//   To avoid such pitfalls in the future, I'll make sure to include a .catch() method for error handling, like so:为了避免将来出现此类陷阱，我将确保包含一个 .catch() 错误处理方法，如下所示：

fetch('https://api.example.com/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.error('Failed to fetch data:', error);
  });

  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Failed to fetch data:', error));


  // A great use case for Promises is when making API requests. You initiate the request, and using .then(), you process the response only after it's received, allowing the rest of your code to run uninterrupted in the meantime:Promise 的一个很好的用例是发出 API 请求时。启动请求，并使用 .then() ，仅在收到响应后才处理响应，从而允许其余代码在此期间不间断地运行：
  fetch('https://api.example.com/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Process the data
    console.log(data);
  })
  .catch(function(error) {
    // Handle any errors
    console.error('Error fetching data:', error);
  });


  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data:', error);
  });
//////////////////////////

// throw
  fetch('https://api.example.com/users') // 1. Initiates a network request to get user data
  .then(function(response) { // 2. The first .then() handles the response
    if (!response.ok) { // Checks if the response status indicates an error
      throw new Error('Network response was not ok. Status: ' + response.status); // Throws an error to be caught by .catch()
    }
    return response.json(); // If response is ok, converts it to JSON
  })
  .then(function(data) { // 3. The second .then() handles the converted JSON data
    if (!data || data.length === 0) { // Validates the data
      throw new Error('Data is empty or undefined.'); // Throws an error if data is invalid
    }
    console.log('Fetched data:', data); // Logs valid data
  })
  .catch(function(error) { // 4. .catch() handles any errors from the fetch or processing
    console.error('There was a problem with your fetch operation:', error.message); // Logs the error message
  })
  .finally(function() { // 5. .finally() executes after the promise is either fulfilled or rejected
    console.log('Fetch operation completed.'); // Indicates the completion of the operation
  });

// async/await and try
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/users'); // Initiates a network request to get user data
    if (!response.ok) { // Checks if the response status indicates an error
      throw new Error('Network response was not ok. Status: ' + response.status);
    }
    const data = await response.json(); // Parses the response body to JSON
    if (!data || data.length === 0) { // Validates the data
      throw new Error('Data is empty or undefined.');
    }
    console.log('Fetched data:', data); // Logs valid data
  } catch (error) { // Catches any errors from the fetch operation or during processing
    console.error('There was a problem with your fetch operation:', error.message);
  } finally {
    console.log('Fetch operation completed.'); // Indicates the completion of the operation, runs after try/catch
  }
}

fetchData();
  