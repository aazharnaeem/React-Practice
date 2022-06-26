import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchProduct, removeProduct } from "../redux/action/productAction"


const SingleProduct = () => {
    const { id } = useParams()

    const product = useSelector(state => state.product);
    const dispatch = useDispatch()


    useEffect(() => {
        if (id != "") {
            dispatch(fetchProduct(id))
        }
        return () => {
            dispatch(removeProduct())
        }
    }, [])

    if (!product) return <h3>loading...</h3>

    return (
        <div>
            <h3>{product.title}</h3>
            <img src={product.image} width={'20%'} />
            <br />
            {product.title}
            <br />
            {product.description}
            <br />
            {product.price}
        </div>
    )
}

export default SingleProduct