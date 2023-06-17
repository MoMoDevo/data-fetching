 

async function ProductPage({ params: { id } }) {
   
  
 
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const product= await res.json();
  
      return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
        
  
          <div className="divide-y">
            <div className="space-y-2 pb-8">
              <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
              <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
                ${product.email}
              </h2>
            </div>
  
            <div className="pt-8">
              <p className="text-xs md:text-sm">{product.description}</p>
            </div>
          </div>
        </div>
      );
  
  }
  
  export default ProductPage;