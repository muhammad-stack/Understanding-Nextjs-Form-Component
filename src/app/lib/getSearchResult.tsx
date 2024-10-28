export default async function getSearchResults(id : string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    
    console.log(response);
    return response.json();
  }
  