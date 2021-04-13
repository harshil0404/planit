function venueprice(fix, hourlyrate, ele){ 
        let allmsg = document.querySelectorAll('.price');
        allmsg.forEach(e => {
            e.innerText = '' ;
        });
        if(!fix){
            document.querySelector('#evevenue').value = "" ;
            document.querySelector('#totalprice').value = 0 ;
            return ;
        }
        let hours = parseInt(document.querySelector('#event-budget').parentElement.getAttribute('data-duration'));
        let price = fix + hours*hourlyrate ; 
        let msg = "This Venue will cost you $ "+price;
        ele.parentElement.children[2].innerText = msg;
        document.querySelector('#evevenue').value = ele.parentElement.children[1].innerText ;
        document.querySelector('#totalprice').value = price ;
    }