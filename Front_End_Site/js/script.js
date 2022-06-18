let news=[]
window.onload=async()=>{
    const response = await fetch(
        'https://apiinteractionbackend.aman007shrestha.repl.co/api/blogs',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        }
      );
}