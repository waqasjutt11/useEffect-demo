async function putData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
        method : "PUT",
        body : JSON.stringify({
        userId: 102,
        firstName: 'Waqas',
        lastName: 'Hussain'

        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }

    })
    const data = await response.json();
    console.log("respone=", data)

}
putData();
