import Header from './Header'

const layoutStyle = {
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <div class="container">
      {props.children}
    </div>
  </div>
)

export default Layout