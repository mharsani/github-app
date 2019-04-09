const responseRepos = r => {
    let response = {
        data: r.data.map(
            ({
              full_name,
              name,
              html_url,
              description,
              stargazers_count,
              watchers_count,
              language
            }) => ({
                full_name,
                name,
                html_url,
                description,
                stargazers_count,
                watchers_count,
                language
              })
          )
        
    };
  
    return response;
  };

  export default responseRepos;