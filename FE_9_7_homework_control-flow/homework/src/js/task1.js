let loginCheck = prompt('Your login');

if ( !loginCheck || loginCheck.length === 0){
    alert('Canceled');
} else if (loginCheck.length < 4){
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (loginCheck ==='User'){
    let passwordCheck = prompt('Your password');
    if (!passwordCheck || passwordCheck.length === 0){
        alert('Canceled');
    } else if (passwordCheck ==='SuperUser'){
        let time = new Date();
        let hours = time.getHours();
        if (hours < 20){
            alert('Good day!');
        } else {
            alert('Good evening!');
        }
    } else {
        alert('Wrong password');
    }

} else{
    alert('I don’t know you');
}
