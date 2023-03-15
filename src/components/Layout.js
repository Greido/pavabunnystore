

/* Me traigo el header y footer donde voy a poner layout y enrutar desde ahi  */
import Header from './Header'
import Footer from './Footer'



export default function Layout(props) {

    const {children} = props

    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}
