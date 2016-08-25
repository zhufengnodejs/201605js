var Family = React.createClass({
    render(){
        //this.props.children 指的是使用此组件的时候传入的子元素
        return (
            <ul>

                {
                    this.props.children.map(function(item,index){
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
});
ReactDOM.render(
  <Family>
      <span>大狗</span>
      <span>二狗</span>
      <span>三狗</span>
  </Family>,
    document.querySelector('#app')
);




