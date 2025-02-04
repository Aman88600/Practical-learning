let chartData = [];
// Function to generate random integers
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let bar_number = 100;
let max_number = 100;


for (let i = 0; i < bar_number; i++) {
    chartData.push(getRandomInt(1, max_number));
}

let predefinedBackgroundColors = [];
let predefinedBorderColors = [];

// Function to set border colors based on the indices x and y
function BorderColors(x, y) {
    predefinedBorderColors = [];  // Reset the array
    for (let i = 0; i < 100; i++) {
        if (i === x || i === y) {
            predefinedBorderColors.push('rgba(255, 99, 132, 1)'); // Highlighted color (red)
        } else {
            predefinedBorderColors.push('rgba(54, 11002, 235, 1)'); // Default color (blue)
        }
    }
    return predefinedBorderColors;
}

// Function to set background colors based on the indices x and y
function BackgroundColors(x, y) {
    predefinedBackgroundColors = [];  // Reset the array
    for (let i = 0; i < 100; i++) {
        if (i === x || i === y) {
            predefinedBackgroundColors.push('rgba(255, 99, 132, 0.2)'); // Highlighted color (light red)
        } else {
            predefinedBackgroundColors.push('rgba(54, 11002, 235, 0.1)'); // Default color (light blue)
        }
    }
    return predefinedBackgroundColors;
}

let generated_labels = []
function generateLabels(number)
{
    for(let i = 0; i < number; i++)
    {
        let element = '' + i;
        generated_labels.push(element);
    }
    return generated_labels;
}
let generated_lebels_1 = generateLabels(bar_number);

// Function to create the chart with the current data
function createChart(data, x, y) {
    const ctx = document.getElementById('myChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: generated_lebels_1,
            datasets: [{
                label: 'Array Numbers',
                data: data, // Passing dynamic data here
                borderColor: BorderColors(x, y), // Get border colors dynamically
                backgroundColor: BackgroundColors(x, y), // Get background colors dynamically
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation:{
                duration:0
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Create initial chart
let myChart = createChart(chartData, -1, -1); // No bars highlighted initially

// Button to sort data
const sort_button = document.getElementById("sort_button");
const generate_button = document.getElementById("generate_button");
sort_button.addEventListener("click", function () {
    let step = 0;
    // generate_button.disabled = true;
    function sortStep() {
        if (step < bar_number + 1) {
            // Find the smallest number and its index
            let smallest_number = chartData[step];
            let smallest_number_index = step;
            for (let j = step + 1; j < bar_number; j++) {
                if (chartData[j] < smallest_number) {
                    smallest_number = chartData[j];
                    smallest_number_index = j;
                }
            }

            // Swap the numbers
            let current_number = chartData[step];
            chartData[step] = smallest_number;
            chartData[smallest_number_index] = current_number;

            // Highlight the sorted and smallest element
            myChart.destroy();  // Destroy the previous chart
            myChart = createChart(chartData, step, smallest_number_index);  // Redraw the chart with the highlighted bars
            // Move to the next step
            step++;
            setTimeout(sortStep, 1);  // Delay between each step
        }
    }

    sortStep(); // Start the sorting process
});

// Button to generate new data

generate_button.addEventListener("click", function () {
    chartData = [];
    for (let i = 0; i < bar_number; i++) {
        chartData.push(getRandomInt(1, max_number));
    }
    myChart.destroy();
    myChart = createChart(chartData, -1, -1); // No bars highlighted initially
});
