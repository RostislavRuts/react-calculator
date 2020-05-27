import React, { Component } from 'react';
import './calc.css';

class Calc extends Component {
    /* Конструктор нужен, если вам нужно что-то сделать 
        один раз при первом вызове компонента. 
        в документации написано что конструктор это то место 
        где нужно делать инициализацию состояния (this.state) */
    constructor() {
        /* super() - нужен для вызова родительского класса на данном экземпляре, 
        для того чтобы сработало наследование. */
        super();

        /*  state — это объект который отброжает текущее состояние компонента
        */
        this.state = {
            result: 0,
            number1: '',
            number2: '',
            operation: '+',
        };


    }
    /* это методы нашего объекта Calc */
    showResult() {
        /* Метод setState() следит за изменением состояния (state) компонента.
        state — это объект. Когда состояние меняется, 
        компонент рендерится повторно.*/
        let result = 0;
        switch (this.state.operation) {
            case '+':
                result = this.state.number1 + this.state.number2;
                break;
            case '-':
                result = this.state.number1 - this.state.number2;
                break;
            default: break;
        }
        this.setState({ result: result });
        //this.state.result = this.state.number1 + this.state.number2;
        this.setState({ number1: '', number2: '' })
    }
    /* Эти методы следят за нашими инпутами котроые вызываются при согбытии onChange */
    handleNumber1Change(e) {
        this.setState({ number1: Number(e.currentTarget.value) });
    }

    handleNumber2Change(e) {
        this.setState({ number2: Number(e.currentTarget.value) });
    }

    handleOperationChange(e) {
        this.setState({ operation: e.currentTarget.value });
    }
    /* в render пишем все что будем выводить на экран */
    render() {
        return (
            <div className="calculator">
                <div><input value={this.state.number1} onChange={this.handleNumber1Change.bind(this)} /></div>
                <div>
                    <select name="" id="" onChange={this.handleOperationChange.bind(this)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                </div>
                <div><input value={this.state.number2} onChange={this.handleNumber2Change.bind(this)} /></div>
                <div>
                    <button onClick={this.showResult.bind(this)}>Get result</button>
                </div>
                <div>
                    Result: <span>{this.state.result}</span>
                </div>

            </div>
        )
    }

}

export default Calc;