import React from 'react';
import login from './views/login.js';
import {renderDOM, renderView} from './views/render.js';
import './style.css';
//import {loadStdlib} from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
class App extends React.Component{
    render(){
        return renderView(this, login);
    }

    constructor(props){
        super(props);
        this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({acc, bal});
        if (await reach.canFundFromFaucet()) {
          this.setState({view: 'FundAccount'});
        } else {
          return false;
        }
      }

      async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
      }

}

renderDOM(<App />);