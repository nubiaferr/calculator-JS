//versão 2 com constructor

function Calculadora(){
    //Atributos
    this.display = document.querySelector('.display');


    //Métodos 
    this.inicia = () =>{
        this.capturaCliques();
        this.enter();
        this.backspace();
    }

    this.enter = () => {
        document.addEventListener('keypress', e => {
            if (e.key !== 'Enter') return;
            this.realizaConta();
            });
    }

    this.backspace = () => {
        document.addEventListener('keypress', e => {
            if (e.key !== 'Backspace') return;
            this.del();
            });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e =>{
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del'))this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }
    
    this.addNumDisplay = el => this.display.value += el.innerText;

    this.clear = () => this.display.value = ' ';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () =>{
        
        try{
            let conta = this.display.value;
            conta = eval(conta);

            if (!conta){
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);

        } catch (e) {
            alert('Conta inválida');
            return;
        }
    }

    this.display.focus();
}

const calculadora = new Calculadora();
calculadora.inicia();