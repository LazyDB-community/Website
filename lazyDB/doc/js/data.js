let data = [
	new sectionTitle("Getting Started"),
	new docSection("welcome", [
			new docObject(["Welcome on BookStorageDB Documentation.", new Warn("LazyDB isn't released yet, you can <a target=\"_blank\" href=\"https://discord.gg/ruzmwh9\">join us on discord</a> to get noticed when it comes out!")])
		]),
		new docSection("how it works",[
			new docObject([	"LazyDB is a realtime Database, that means that you can get updates everytime a value is updated ( map, array, number, string , whatever).",el('br'),
							el('br'),
							"LazyDB works with paths, exactly likes the file manager of your OS. Wich means that every value, as a unique path, that is used as an id as well.",el('br'),
							el('br')])
		]),
	new docSection("get started",[
			new docObject(["To load the client you will need the LazyDB Connector. You can download it on our download page for your selected language.", el('br'),],{
				web : "\
<head>\n\
	<script src=\"http://lazydb.com/lib/js/db.js\"></script>\n\
</head>\n\
<body>\n\
<script>\n\
	const addr = '127.0.0.1';\n\
	const port = 42600;// The default port\n\
	let db = new Database(addr,port, async () => {\n\
		console.log(`Connected to ${addr}:${port}`);\n\
	}\n\
</script>\n\
</body>"})
		]),
	new sectionTitle('Authentification'),
	new docSection("connect",[
			new docObject("If you want an user to use the database, you need to log him.",{
				js : "\
db.connect(email, password).then(() => {\n\
	console.log(\"connected as ${email}\");\n\
}).catch(error => {\n\
	console.log(error);\n\
});"
			})
		]),
	new docSection("register",[
		new docObject("Once the user is registered a confirmation email will be sent. All the passwords are automatically encrypted before they are stored.",{
			js : "\
db.register(email, full_name, password).then(() => {\n\
	// You can use full_name as a username too or leave it blank \n\
	console.log(\"Account successfully created!\");\n\
}).catch(error => {\n\
	console.log(error);\n\
});"
		})
	]),
	new sectionTitle('Write Data'),
	new docSection("set data",[
			new docObject("Write data is really simple in LazyDB.",{
				js : "\
const path = 'towns/bordeaux';\n\
const data = {\n\
				desc: 'Amazing city'\n\
			 };\n\
			 \n\
db.set(path, data).then( function() {\n\
	console.log('Data updated');\n\
}).catch(error => {\n\
	console.log(error);\n\
});"
			})
		]),
	new docSection("create data",[
		new docObject("Create will fail if the path exist.",{
			js : "\
const path = 'towns/bordeaux';\n\
const data = {\n\
				desc: 'Amazing city'\n\
			 };\n\
			 \n\
db.create(path, data).then( function() {\n\
	//data is optional, if you do not specify it, it will create an empty object		\n\
	console.log('Data updated');\n\
}).catch(error => {\n\
	console.log(error);\n\
});"
		})
	]),
	new docSection("update data",[
		new docObject("Update will fail if the path does not exist.",{
			js : "\
const path = 'towns/bordeaux';\n\
const data = {\n\
				desc: 'Amazing city'\n\
			 };\n\
			 \n\
db.set(path, data).then( function() {\n\
	console.log('Data updated');\n\
}).catch(error => {\n\
	console.log(error);\n\
});"
		})
	]),

	new sectionTitle('Read Data'),
	new docSection("read data once",[
		new docObject(["To read data once you simply need to run the get command.",el('br')],{
			js : "\
const path = 'towns/bordeaux';\n\
db.get(path).then(value => {\n\
	console.log('get value: ' + value);\n\
}).catch(error => {\n\
	console.log(error);\n\
});\
"
		})

	]),
	new sectionTitle('Events'),
	new docSection("on",[
		new docObject(["This event is executed each time the data of the specified path changes.",el('br')],{
			js : "\
const path = 'towns/bordeaux';\n\
db.sync(path).then(value => {\n\
	console.log('realtime updated value: ' + value);\n\
}).catch(error => {\n\
	console.log(error);\n\
});\
"
		})
	]),
	new sectionTitle('Securing data'),
	new docSection("Coming soon",[
		new docObject("Doc for this section need to be write.")
	]),
	new sectionTitle('Cloud functions'),
	new docSection("Coming soon",[
		new docObject("Doc for this section need to be write.")
	]),
	new sectionTitle('emails'),
	new docSection("Coming soon",[
		new docObject("Doc for this section need to be write.")
	]),
	new sectionTitle('payements'),
	new docSection("Coming soon",[
		new docObject("Doc for this section need to be write.")
	]),
]

