 function setfoodprice(food,price,ele,company){
        let allmsg = document.querySelectorAll('.pricemsg');
        allmsg.forEach(e => {
            e.innerText = '' ;
        });
        if(!parseInt(ele.value)){
            document.querySelector('#companyname').value = '' ;
            document.querySelector('#cuisinename').value = '' ;
            document.querySelector('#catering_cost').value = 0 ;
            return ;
        }
        let checkbox = document.querySelector('#no_catering');
        if(checkbox.classList.contains('true')){
            checkbox.classList.remove('true');
            checkbox.classList.add('false');
            checkbox.innerHTML = '<i class="far fa-square fa-lg"></i>';
        }
        let ind = parseInt(ele.value) - 1 ;
        let guests = parseInt(document.querySelector('#event-guests').innerText);
        let cost = guests*price[ind] ;
        let msg = 'This '+food[ind].capitalize()+' cuisine will cost $'+cost+' for '+guests+' guests.';
        ele.parentElement.parentElement.parentElement.parentElement.children[0].children[1].innerText = msg;
        document.querySelector('#companyname').value = company ;
        document.querySelector('#cuisinename').value = food[ind].capitalize() ;
        document.querySelector('#catering_cost').value = cost ;

    }
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    function noCatering(ele){
        console.log(ele);
        if(ele.classList.contains('false')){
            ele.classList.remove('false');
            ele.classList.add('true');
            document.querySelector('#companyname').value = '' ;
            document.querySelector('#cuisinename').value = '' ;
            document.querySelector('#catering_cost').value = 0 ;
            ele.innerHTML = '<i class="far fa-check-square fa-lg"></i>';
        }
        else{
            ele.classList.remove('true');
            ele.classList.add('false');
            ele.innerHTML = '<i class="far fa-square fa-lg"></i>';
        }
    }