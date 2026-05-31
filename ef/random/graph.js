let chartTextColour = "#fff";
function SetGlobalChartsProperties ()
{
    window.Apex = 
    {
        chart:
        {
            foreColor: chartTextColour,
            toolbar:
            {
                tools:
                {
                    download: false,
                }
            },
        },
    }
}

function DrawPieChart (dataLabel,dataValue,graphName,_colors)
{
    // Clear previous chart
    $("#" + graphName + "-graph")[0].innerHTML = ""; 

    const options =
    {
        chart:
        {   
            type: "pie",
            width: "100%",
            height: "100%",
        },
        legend:
        {
            position: "bottom",
        },
        colors: _colors,
        series: dataValue,
        labels: dataLabel,
    }
    const chart = new ApexCharts(document.querySelector("#" + graphName + "-graph"), options);
    chart.render();
}

let graphHeight = "99%";
function DrawLineGraph (dataLabel,dataValue,graphName,isCompact,showDataLabels,_colors)
{
console.log(graphName);
console.log($("#graphName"));

    graphHeight = "99%";
    // Clear previous chart
    $("#" + graphName)[0].innerHTML = ""; 
    if (_colors == undefined)
    {   _colors = ["#ff0000", "#00ff00"]  }
    
    if (showDataLabels == undefined)
    {   showDataLabels = false;   }

    if (isCompact == undefined)
    {   isCompact = false;   }

    if (isCompact == true)
    {   graphHeight = "64px";  }

    let options =
    {
        chart: 
        {
            type: 'area',
            height: graphHeight,
            width: "100%",
            sparkline: 
            {
                enabled: isCompact,
            }
        },
        colors: _colors,
        series: 
        [{
            name: '',
            data: dataValue,
        }],
        title: 
        {
            text: graphTitle,
            align: "center",
        },
        yaxis:
        {
            min: 0,
        },
        xaxis: 
        {
            categories: dataLabel,
            labels:
            {
                show: true,
                rotate: 0,
                style:
                {
                    // fontSize: "0.75rem"
                }
            }
        },
        stroke:
        {
            curve: "straight",
        },
        grid: 
        {
            show: true,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            xaxis: 
            {
                lines: 
                {
                    show: false,
                },
            },   
            yaxis: 
            {
                lines: 
                {
                    show: !isCompact,
                }
            },  
            row: 
            {
                colors: undefined,
                opacity: 0.5
            },  
            column: 
            {
                colors: undefined,
                opacity: 0.25,
            },  
            padding: 
            {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
        dataLabels:
        {
            // Always hidden because it ,ake the graph a lot clenrer
            enabled: showDataLabels,
        },
    }
    const chart = new ApexCharts(document.querySelector("#" + graphName), options);
    chart.render();
}

function DrawBarGraph (dataLabel,dataValue,graphName,drawHorizontally,maxHeight)
{
    graphHeight = "99%";
    // Clear previous chart
    $("#" + graphName + "-graph")[0].innerHTML = ""; 
    if (drawHorizontally == undefined)
    {  drawHorizontally = false  }

    if (maxHeight == undefined)
    {
        maxHeight = undefined;
    }
    scaleMax = maxHeight

    let options =
    {
        chart:
        {
            type: "bar",
            width: "100%",
            height: graphHeight,
        },
        colors: ["#ffa700"],
        plotOptions: 
        {
            bar: 
            {
                borderRadius: 5,
                borderRadiusApplication: 'end',
                horizontal: drawHorizontally,
            }
        },
        series:
        [
            {
                data: dataValue,
                name: "",
            }
        ],
        xaxis:
        {
            categories: dataLabel,
        },
        yaxis:
        {
            min: 0,
            max: scaleMax,
        },
        grid: 
        {
            borderColor: '#aec0c2',
        },
    }
    const chart = new ApexCharts(document.querySelector("#" + graphName + "-graph"), options);
    chart.render();
}

function DrawLineChart2 (dataLabel,dataValue,graphName,isCompact,showDataLabels,_colors)
{
    graphHeight = "99%";

    var options = {
        chart: {
          height: graphHeight,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#FF1654", "#247BA0"],
        series: [
          {
            name: "Series A",
            data: dataValue
          }
        ],
        stroke: {
          width: [4, 4]
        },
        plotOptions: {
          bar: {
            columnWidth: "20%"
          }
        },
        xaxis: {
          categories: dataLabel
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#FF1654"
            },
            labels: {
              style: {
                colors: "#FF1654"
              }
            },
            title: {
              text: "Series A",
              style: {
                color: "#FF1654"
              }
            }
          },
        ],
        tooltip: {
          shared: false,
          intersect: true,
          x: {
            show: false
          }
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40
        }
      };
      
      var chart = new ApexCharts(document.querySelector("#test-graph"), options);
      
      chart.render();
}