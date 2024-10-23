
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');


let userArray = [];

tabledata(userArray)

// ----------------- form------------*/

function submittoggle(event) {
	event.preventDefault()
	const payload = {
		username: username?.value,
		email: email?.value,
		number: number?.value,
		password: password?.value,
	}
	userArray.push(payload);
	tabledata(userArray)

}

/*----------------------table -----------*/
function tabledata(userInfo) {
	let statement = ""
	userInfo.forEach((item, index) => {
		statement += ` <tr>
                    <td>${index}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>
                    <td>${item.number}</td>
                    <td>${item.password}</td>
                  
                </tr>`
	})
	document.getElementById('demo').innerHTML = statement;
}