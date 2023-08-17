const socket = io ()
const chatBox= document.getElementById ('chatBox')

const chat = async (chatBox) =>{
    const swal= await Swal.fire ({
        title: 'Identifícate',
        input: 'text',
        text: 'Ingresa tu usuario',
        inputValidator: value =>{
            return !value && 'Necesitas ingresar tu usuario'
    
        },
        allowOutSideClick:false,
    })

const user= swal.value
socket.emit ('auth', user)


chatBox.addEventListener ('keyup', evt =>{
    if (evt.key ==='Enter'){
        if (chatBox.value.trim().length >0){
            socket.emit ('message', {user, message: chatBox.value})
            chatBox.value = ''
        }
    }
})

socket.on ('messageLogs', data =>{
    const log =document.getElementById ('messagelogs')
    let messages =''
    data.forEach (
        message=> (messages+=`${message.user} dice: ${message.message}</br>`)
    )
    log.innerHTML=messages 
})
socket.on ('newUser', data => {
    Swal.fire({
        text: `${data} se acaba de conectar`,
        toast: true,
        position:'top-right',
    })
})
}

chat (chatBox)