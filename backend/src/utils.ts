export function random(len:number){
    const options = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const length = options.length;
    let randString = ""
    for(let i=0;i<len;i++){
        randString+=options[Math.floor(Math.random()*length)]
    }
    return randString
}