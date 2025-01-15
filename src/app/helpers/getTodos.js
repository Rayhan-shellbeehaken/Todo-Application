export default async function getAllTodos() {
    const result = await fetch('http://localhost:3000/api/todos');  // Full URL for client-side
    const data = await result.json();
    console.log("This is it");
    console.log(data);
}