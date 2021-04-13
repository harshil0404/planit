function sideeventclick(){
        let checks = document.querySelectorAll('input[name="side"]:checked');
        let sideeve = document.querySelector('#sideevents');
        sideeve.value = checks.length ;
}