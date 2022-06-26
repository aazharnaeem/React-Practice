import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/action/productAction'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    // console.log(product)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if(!products)return<h1>loading...</h1>

    return (
        <div className="App" >
            <h1>Redux Thunk</h1>
            
            {/* <div style={{ display: 'grid' }}> */}
            {
                products.map((val, index) => {
                    return (
                        <div key={index} style={{ border: 'solid' }}>
                            <Link to={`/product/${val.id}`} style={{ color: 'black', textDecoration: 'none' }} >
                                <img src={val.image} width={'10%'} />
                                <br />
                                {val.title}
                                <br />
                                {val.description}
                                <br />
                                {val.price}
                            </Link>
                        </div>
                    )

                })
            }
        </div>
        // </div>
    );
}

export default Products;
