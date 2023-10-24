export class Log {
    static success(msg: string) {
        console.log(`%c ${msg}`, 'color: green');
    }

    static danger(msg: string){
        console.log(`%c ${msg}`, 'color: red');
    }

    static info(msg :string){
        console.log(`%c ${msg}`, 'color: black; background: yellow');
    }

    static warning(msg: string){
        console.log(`%c ${msg}`, 'color: #856404; background-color: #fff3cd; border-color: #ffeeba;')
    }

    static primary(msg: string){
        console.log(`%c ${msg}`, 'color: #004085; background-color: #cce5ff; border-color: #b8daff;')
    }

    static dark(msg: string){
        console.log(`%c ${msg}`, 'color: #1b1e21; background-color: #d6d8d9; border-color: #c6c8ca;')
    }

    static light(msg: string){
        console.log(`%c ${msg}`, 'color: #818182; background-color: #fefefe; border-color: #fdfdfe;')
    }

}