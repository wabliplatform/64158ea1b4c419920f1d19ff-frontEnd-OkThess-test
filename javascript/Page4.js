let apiMoviesApi = new TempApi.MoviesApi();import TempApi from '../src/index';document.getElementById('io2e').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/home' ;}};window.onload = () => {let moviesId = window.location.pathname.replace('/Page4/','');apiMoviesApi.getmovies( moviesId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { 
      if(response.body.query.movieImg !== undefined){
        if(document.querySelector('[annotationname = movieImg]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = movieImg]').setAttribute('data-image-base64',response.body.query.movieImg.data);
          let fileName = response.body.query.movieImg.name;
          let file = new File([response.body.query.movieImg.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = movieImg]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = movieImg]').src = response.body.query.movieImg.data ;
        }
        document.querySelector('[annotationname = movieImg]').name = response.body.query.movieImg.name ;
      }
       } catch (e) { console.log(e) };}});};