const responseUsers = r => {
    let response = {
        login: r.data.login,
        id: r.data.id,
        node_id: r.data.node,
        avatar_url: r.data.avatar_url,
        url: r.data.url,
        html_url: r.data.html,
        followers_url: r.data.followers_url,
        following_url: r.data.following_url,
        gists_url: r.data.gists_url,
        starred_url: r.data.starred_url,
        subscriptions_url: r.data.subscriptions_url,
        organizations_url: r.data.organizations_url,
        repos_url:r.data.repos_url,
        events_url: r.data.events_url,
        received_events_url: r.data.received_events_url,
        type: r.data.type,
        site_admin: r.data.site_admin,
        name: r.data.name,
        company: r.data.company,
        blog: r.data.blog,
        location: r.data.location,
        email: r.data.email,
        hireable: r.data.hireable,
        bio: r.data.bio,
        public_repos: r.data.public_repos,
        public_gists: r.data.public_gists,
        followers: r.data.followers,
        following: r.data.following,
        created_at: r.data.created_at,
        updated_at: r.data.updated_at
    };
  
    return response;
  };

  export default responseUsers;