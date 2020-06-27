async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
    const data = await response.json();
    console.log("Data=", data);
}
getData();
async function postData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method : "POST",
        body : JSON.stringify({
                userId : 7,
                title : 'my first api call',
                body : 'welcome'

        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    console.log(response);
    const data = await response.json();
    console.log("data=", data);
}
postData();