window.addEventListener('hashchange',function(){
    let hash = location.hash.replace('#/','');
    app.visibility=hash;
});