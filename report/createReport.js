var fs =  require('fs')

const llvmDir = __dirname + "/../../cse231-proj1/"  // sandbox this shizz will u


export default function create_report()
{
	var results = []
	var function_names = []
	// now lets get down to business
	fs.readFile(llvmDir + "outputss/log.txt", "utf8", (err1, data1) => 
	{
		//console.log(data1)
		var lines = data1.split("\n")
		var current_function
		var test_number
		//console.log(lines)
		for(var i = 0; i < lines.length; i++)
		{
			if(lines[i].startsWith("Checking ") )
			{
				current_function = lines[i].substring(9, lines[i].length - 1) 
				results.push({'Name': current_function, 'Offset': 0}) // will contain info about every testcase
			}
			if(lines[i].startsWith("Test Case "))
			{
				test_number = lines[i].slice(-1) 
			}
			if(lines[i] == "Not tested")
			{
				results.find(x => x['Name'] == current_function)[test_number] = 'Not tested'
			}
			if (lines[i] == "Passed")
			{
				results.find(x => x['Name'] == current_function)[test_number] = 'Passed'
			}
			if (lines[i] == "Failed")
			{
				results.find(x => x['Name'] == current_function)[test_number] = 'Failed'
			}
			else if(lines[i].startsWith("Offset: "))
			{
				var offset = lines[i].substring(8)
				results.find(x => x['Name'] == current_function)['Offset'] = offset
			}
		}
		console.log('imma return')
		console.log(results)
		return results
	})
}