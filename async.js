function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('resolver')
        }, 2000)
    })
}

async function asyncCall() {
    console.log('Calling');
    var result = await resolveAfter2Seconds()
    console.log(result);
}

asyncCall()