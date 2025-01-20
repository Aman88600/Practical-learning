 // Initial data array (can be controlled)
 let chartData = [12, 19, 13, 14, 12, 16];

 // Function to create the chart with the current data
 function createChart(data) {
   const ctx = document.getElementById('myChart').getContext('2d');
   return new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['1', '2', '3', '4', '5', '6'],
       datasets: [{
         label: 'Array Numbers',
         data: data, // Passing dynamic data here
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
 }



 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

 // Create initial chart
 let myChart = createChart(chartData);

 // Button to update the data
 const updateBtn = document.getElementById("updateBtn");
 updateBtn.addEventListener("click", function() {
   // Modify the data array (this can be dynamic as per your need)
   chartData = [];
   for(let i = 0; i < 6; i++)
   {
        let newNumber = getRandomInt(5,20);
        chartData.push(newNumber);
   }

   // Destroy the old chart and create a new one with updated data
   myChart.destroy();
   myChart = createChart(chartData);
   console.log("Chart data updated:", chartData);
 });