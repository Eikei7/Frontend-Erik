export const fetchData = async () => {
  try {
    console.log('Fetching GitHub repos...');
    
    const response = await fetch('https://api.github.com/users/Eikei7/repos', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    });
    
    console.log('Response status:', response.status);
    
    // Kontrollera rate limiting
    const remaining = response.headers.get('X-RateLimit-Remaining');
    const limit = response.headers.get('X-RateLimit-Limit');
    console.log(`Rate limit: ${remaining}/${limit} requests remaining`);
    
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Please try again later.');
      } else if (response.status === 404) {
        throw new Error('User not found on GitHub.');
      } else {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
    }
    
    const data = await response.json();
    console.log('Fetched repos:', data.length, data);
    
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};