import React from 'react';

// 1. props state
// 2. lifecycle
// 3. this

type BtnProps = {
  clickHandler: () => void
}
type BtnState = {}

class Btn extends React.Component<BtnProps, BtnState> {
  // eslint-disable-next-line
  constructor(props: BtnProps) {
    super(props)
  }

  componentWillUnmount(): void {
    console.log('Btn -> Unmount')
  }

  render(): React.ReactNode {
    return <button onClick={ this.props.clickHandler }>+1</button>
  }
}

type AppProps = {}
type AppState = {
  count: number
}

class App extends React.Component<AppProps, AppState> {
  // eslint-disable-next-line
  constructor(props: AppProps) {
    super(props)
    this.state = {
      count: 0
    }

    // 這一段程式碼，是保證this永遠指向APP，不管是window還是其他物件執行它
    this.countClickHandler = this.countClickHandler.bind(this)
  }
  countClickHandler() {
    console.log('this', this)
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  componentDidMount(): void {
    console.log('Mount');
  }

  componentDidUpdate(): void {
    console.log('Update', this.state);
  }

  render(): React.ReactNode {
    return <>
      <h1>Count: { this.state.count }</h1>
      { this.state.count === 3 ? null : <Btn clickHandler={ this.countClickHandler } /> }
    </>
  }
}

export default App;