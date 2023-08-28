window.onload = () => {
            
            const serviceData = JSON.parse(sessionStorage.getItem('serviceData'));
            const service = serviceData ? serviceData['https://www.boredapi.com/api/activity'] : null;
                
                
                
        
            fetch(`https://www.boredapi.com/api/activity?`,{
                method: "GET", 

                headers: {}

                
            })
            .then(response => 
                response.json().then(data => {
                    
            try{
                document.getElementById('ix6fod').textContent = data.activity;
            }
            catch(e){
                console.log(e);
            }

                })
            )
        };