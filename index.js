document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if(!username || !password){
        showError('All Fields are required')
    }
    handleLogin(username, password)

})

function handleLogin(username, password){
 if (username === 'test' && password == '123'){
    showSuccess('Login Successful!')
    setTimeout(() => {
        
    }, window.location.href = './hello.html',1500);
 }else{
    showError('Invalid Credentials')
 }
}

function showError(message){
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert error';
    errorDiv.textContent = message;
    document.querySelector('.container').prepend(errorDiv);
}

function showSuccess(message){
    const successDiv = document.createElement('div');
    successDiv.className = 'alert success';
    successDiv.textContent = message;
    document.querySelector('.container').prepend(successDiv);
}
