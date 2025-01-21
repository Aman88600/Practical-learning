let chartData = [];
// Function to generate random integers
function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for(let i = 0; i < 6; i++)
{
    chartData.push(getRandomInt(1,20))
}


// Function to create the chart with the current data
function createChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['0','1', '2', '3', '4', '5'],
            datasets: [{
                label: 'Array Numbers',
                data: data, // Passing dynamic data here
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Create initial chart
let myChart = createChart(chartData);

// Button to sort data
const updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", function() {
    for(let i = 0; i < 6; i++) 
        {
        // finding the smallest number
        let smallest_number = chartData[i];
        let smallest_number_index = i;
        for(let j = i; j < 6; j++)
        {
            if (chartData[j] < smallest_number)
            {
            smallest_number = chartData[j];
            smallest_number_index = j;
            }
        }
        let current_number = chartData[i];
        chartData[i] = smallest_number;
        chartData[smallest_number_index] = current_number; 
        myChart.destroy();
        myChart = createChart(chartData);
    }
});