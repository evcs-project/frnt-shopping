class Book{
 constructor(key){
   this.key = key;
   this.getRequestOption = {
    method: 'GET',
    redirect: 'follow'
   }
 } 

 async search(query){
   const response = await fetch(
     `http://52.79.149.9:8080/v2/api-docs/api/book/search?bookNm=${query}`, 
      this.getRequestOption
   );
   const result_1 = await response.json();
    console.log(result_1)
    
  //  return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
 }
}