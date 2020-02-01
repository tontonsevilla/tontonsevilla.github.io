var githubApi = {
    apiUrl: 'https://api.github.com/users/tontonsevilla',
    getRepos: function() {
        var request = new XMLHttpRequest();
    
        request.open('GET', `${this.apiUrl}/repos`, true);
        request.onload = function() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)
            var repos_list = document.getElementById('repos_list');
        
            if (request.status >= 200 && request.status < 400) {
                data.forEach(repo => {
                    repos_list.innerHTML += `<li class="list-group-item bg-transparent border-0"><a href="${repo.html_url}" target="_blank">${repo.full_name}<a/></li>`;
                });
            } else {
                console.log('error');
            }
        }
    
        request.send();
    },
    
    getUserDetail: function() {
        var request = new XMLHttpRequest();
    
        request.open('GET', `${this.apiUrl}`, true);
        request.onload = function() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)
            var imgAvatar = document.getElementById('profile_avatar');
        
            if (request.status >= 200 && request.status < 400) {
                imgAvatar.src = data.avatar_url;
            } else {
                console.log('error');
            }
        }
    
        request.send();
    }
}

githubApi.getUserDetail();
githubApi.getRepos();