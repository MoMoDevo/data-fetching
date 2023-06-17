import Link from "next/link"

export const fetchData=async()=>{
 
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
       
  return res.json()
    
        
   
}

const User = async() => {
    const allusers=await fetchData()
  return (
    <div className="w-1/2 bg-red-100 m-auto">
        {allusers.map((user)=>(
            <div className="flex h-100 " key={user.id}>
             <Link href={`/users/${user.id}`}>  <p> {user.name} </p>  </Link>  
                <p> {user.email} </p>
                <hr />


            </div>



        ))}





    </div>
  )
}


export default User