//////////////////////////////////////////////////////////////////////////
// Simple script to add a npm folder so we don't have to do it manually
// Date: 2/15/2015
// Author: Kyle McDonald
/////////////////////////////////////////////////////////////////////////

var program = require('commander');
var fs = require('fs');

program 
	.command('fixNpm')
	.action(function () {
		//add the folder if necessary
		//check to see if file or directory exists
		console.log('Checking if the folder exists');
		fs.exists('C://Users/Kyle/Desktop/testfolder', function (result) {		
			if (result) {
				console.log('Folder already exists');	
			} else {
				console.log('Adding the folder');
				//add the folder
				fs.mkdir('C://Users/Kyle/Desktop/testfolder', function (err) {
					console.error(err);
				});
			}
		});
	});
	
	//initiate the tool
program.parse(process.argv);