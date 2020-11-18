if (process.argv[3]=='*'){
	console.log(+process.argv[2]*process.argv[4]);
} else if (process.argv[3]=='+'){
	console.log(+process.argv[2]+ +process.argv[4]);
}else if (process.argv[3]=='-'){
	console.log(+process.argv[2]- +process.argv[4]);
}else{
	console.log(+process.argv[2]/process.argv[4]);
}