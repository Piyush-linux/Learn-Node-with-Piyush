# Database

- Data Modeeling
	- tools : tldr.draw
	- Schema : Modals with Mongoose (Schema)
	- study API of: api.github.username, FakeJSON, JsonStore

> ==| Know exactly what data to be stored |==
- usefull for Dashboard, Register/Login, DB Schema Creation
- Connect backend - mongoose - mongoDB
- Data Modelling : Paper+Pen / tldraw, okso.app, eraser, excalidraw, canva.co
	- Please dont get Lost in tooling
	- Try Different Modals : users, todos,
		- User: 
			- Lv1 : username, email, password all string
			- Lv2 : username(string, uniq, lowercase, required)
	- Default Modals : createdAt, UpdatedAt

- modals , Controller
+ 

## data Modelling
- Nameing Convention CamelCase : User, Todo, SubTodo

### Todos
+ User Schema
```yml
username:
	- tyep: String
	- required: true
	- unique: true
email:

password
	- min: 5
	- max: 15
---
timestamps: true # createdAt & updatedAT field are appended
```

+ Todo

```sh
content: String
complete: Boolean.default(false)
createdBy:
	- type: mongoose.Schema.Types.ObjectId,
	- ref: "User"
# Array of sub-todos
subTodos: [{
		type: mongoose.Schema.Types.ObjectId,
		ref:"SubTodo"
	}]

```

### E-Commerce

+ User 
```sh
username:
	- type: String
	- unique: true
	- lowercase: true
	- required: true
email:
	- tye: String
	- unique: true
	- lowercase: true
	- required: true
password
	- min: 5
	- max: 15
	- required: true
```

+ Catgory
```sh
name: String
```

+ Product
```sh
name: String.isRequired()
description: String.isRequired().max(100.char)
productImage: String.isRequired()
price: Number.Required(true).default(0)
category: ref("Category")
owner: ref("User")
---
timestamps: true
```

+ Order
```sh
# 2. orderItemSchema
productId: ref("Product")
quantity: Number

# 1. Order
orderPrice: Number.Required(true)
customer: ref("User")
orderItems: [orderItemSchema]
address: String
status: String.enum["PENNDING","CANCELED","DELIVERED"]
```

### Hospital Management
- Doctor, Patient, Hospital, MedicalRecord

+ Patient
```sh
name: String.required(true)
diagnoseWith: String.required(true)
age:
address
bloodGroup: String,enum[""].required(true)
gender: String.enum["M","F","O"].required(true)
admittedIn: ref("Hospital")
```

+ Doctor
```sh
# 2. qultification_item
title: String.required(true)
desc: String.min(30.char).required(true)
org: String.min(30.char).required(true)
Fyear: Date.required(true)
Lyear: Date.required(true)

# 1. Docktor
name: String.required(true)
salary: Number.required(true)
qualification: [qultification_item]
workInHospitals: [ref("Hospital")]
```


+ Hospital
```sh
name:
address:
pincode: 
docktors: [ref("Doctor")]
patients: [ref("Patient")]
```

+ MedicalRecord
```sh
```
