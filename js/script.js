$(document).ready(function(){

    $('.btn-add').on('click', function(){
        let id = Date.now()

        let inpName = $('.inputName').val()
        let inpSurname = $('.inputSurname').val()
        let inpAge = $('.inputAge').val();
        let inpPhone = $('.inputPhone').val()
        console.log(inpName, inpSurname, inpAge, inpPhone)
        if(inpName !=="" && inpSurname !==""  && inpAge !==""  && inpPhone !=="" ){
            $('tbody').append(`
                <tr class='item-${id}' >
                    <td>${inpName}</td>
                    <td>${inpSurname}</td>
                    <td>${inpAge}</td>
                    <td>${inpPhone}</td>
                    <td><button class="edit">edit</button>
                    <td><button class="delete">delete</button></td>
                    <td><button class="addKpi">add KPI</button></td>
                </tr>
            `)
            $('.inputName').val('')
            $('.inputSurname').val('')
            $('.inputAge').val('')
            $('.inputPhone').val('')
        } else{
            alert('Заполните все поля!')
            return false
        }
        deleteKpi()
        addKpi()
        editKpi()
    })
    function deleteKpi(){
        $('.delete').on('click', function(){
            $(this).parent().parent().remove()
        })
    }
    function addKpi(){
        $('.addKpi').on('click', function(){
        
        })
    }
    function editKpi(){
        $('.edit').on('click', function(){
            let item = $(`.item-${id}`).val()
        })
    }
   
    






})