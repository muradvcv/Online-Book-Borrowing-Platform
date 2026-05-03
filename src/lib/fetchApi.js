export const getData=async()=>{
  const res = await fetch('https://online-book-borrowing-platform-one.vercel.app/data.json');
  const data=await res.json();
  return data;
 
}
console.log(getData());