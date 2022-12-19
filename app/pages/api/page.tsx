async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');

    // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}


export default async function Page(){
    const data = await getData();
    console.log(data);
    return(
        <>
            <h1>blabla</h1>
            <ul>
              {/* {
                data.map((comments)=>{
                  <li key={data.id}></li>
                })
              } */}
            </ul>
        </>
    )
}