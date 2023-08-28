window.onload = () => {
            
            const serviceData = JSON.parse(sessionStorage.getItem('serviceData'));
            const service = serviceData ? serviceData['https://api.themoviedb.org/3/trending/movie/day'] : null;
                
                const queryPar0 = (service && service.queryParams && service.queryParams['api_key'] !== undefined) ? service.queryParams['api_key'].replaceAll(',','%2C') : '53a291cf74b766fc57b1a99d428dce1d';
                
        
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${queryPar0}`,{
                method: "GET", 

                headers: {}

                
            })
            .then(response => 
                response.json().then(data => {
                    
            try{
                document.getElementById('inrcbb').textContent = data.results[0].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('i8atoz').textContent = data.results[1].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('ir368w').textContent = data.results[2].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('iwads').textContent = data.results[1].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('iemc1s').textContent = data.results[1].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('iam1w4').textContent = data.results[1].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('iz3u0f').textContent = data.results[1].title;
            }
            catch(e){
                console.log(e);
            }

                })
            )
        };