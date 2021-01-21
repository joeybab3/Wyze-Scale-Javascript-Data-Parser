let selectedFile;
let result;
let username;
let keys;

let heartRate = [];
let bodyComposition = [];
let weight = [];

var bodylabels = [];
var heartlabels = [];

var X = XLSX;
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
	document.getElementById('button').click();
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]


document.getElementById('button').addEventListener("click", () => {
	
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
			let data = event.target.result;
			let workbook = XLSX.read(data,{type:"binary"});
			result = {};
			workbook.SheetNames.forEach(function(sheetName) {
				var roa = X.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
				if(roa.length) result[sheetName] = roa;
			});
			var keys = Object.keys(result);
			username = keys[0];
			parseArray(Array.from(result[username]));
			document.getElementById("username").innerHTML = "Loaded data for " + username;
        }
    }
});

function parseArray(info)
{
	var dataType = 0;
	
	$.each(info, 
		function(key, value)
		{
			if(value[0] != "Body Compostition Data" && value[0] != "Heart Rate" && value[0] != undefined && value[0] != "Number")
			{
				if(dataType == 0)
				{
					bodylabels.push(value[1]);
					bodyComposition.push(value[1]);
					bodyComposition.push(value);
					weight.push(parseFloat(value[2]));
				}
				else
				{
					heartlabels.push(value[1]);
					heartRate.push(parseInt(value[2]));
				}
			}
			else
			{
				if(value[0] == "Body Compostition Data" && value[0] != undefined)
				{
					dataType = 0;
				}
				else if(value[0] == "Heart Rate" && value[0] != undefined)
				{
					dataType = 1;
				}
			}
		}
	);
	
	var bodyctx = document.getElementById('body').getContext('2d');
	var heartctx = document.getElementById('heart').getContext('2d');
	var bodychart = new Chart(bodyctx, {
		type: 'line',
		data: {
			labels: bodylabels,
			datasets: [{
				label: "Weight",
				data: weight,
				backgroundColor: "rgba(150,150,150,0.4)"
			}]
			
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
	var heartchart = new Chart(heartctx, {
		type: 'line',
		data: {
			labels: heartlabels,
			datasets: [{
				label: "Heart Rate",
				data: heartRate,
				backgroundColor: "rgba(150,20,20,0.4)"
			}]
			
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}