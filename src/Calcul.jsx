import React from 'react';



class Calcul extends React.Component {

	  onClick(event) {
	    this.props.onClick(event.value);
	  }

	  handleClick(button) {
		this.props.clickHandler(button.name.value);
	}

  render() {

    return (
      <div className="container">
       		<h1>Calculette </h1>

			<form name="calculette">
				
				<input name="result"/>
				<input type="button" name="erase" value="C" onClick={this.onClick.bind(this)}/>
				<br />
				<input type="button" name="num7" value="7" clickHandler={this.handleClick}/>
				<input type="button" name="num8" value="8" onClick={this.onClick.bind(this)}/>
				<input type="button" name="num9" value="9" clickHandler={this.handleClick}/>
				<input type="button" name="div" value="/" onClick={this.onClick.bind(this)}/>
				<br />	
				<input type="button" value="4"  onClick={this.num4.bind(this)}/>
				<input type="button" value="5"  onClick={this.num5.bind(this)}/>
				<input type="button" value="6"  onClick={this.num6.bind(this)}/>
				<input type="button" value="*"  onClick={this.multi.bind(this)}/>
				<br />			
				<input type="button" value="1"  onClick={this.num1.bind(this)}/>
				<input type="button" value="2"  onClick={this.num2.bind(this)}/>
				<input type="button" value="3"  onClick={this.num3.bind(this)}/>
				<input type="button" value="-" 	onClick={this.soustr.bind(this)}/>
				<br />				
				<input type="button" value="."  onClick={this.virg.bind(this)}/>
				<input type="button" value="0"  onClick={this.num0.bind(this)}/>
				<input type="button" value="="  onClick={this.equal.bind(this)}/>
				<input type="button" value="+"  onClick={this.addi.bind(this)}/>	
			</form>
      	</div>
    );
  }
}

export default Calcul;

