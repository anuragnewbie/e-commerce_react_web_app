import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Paper } from '@mui/material';
import { removeFromCart } from '../../store/productSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();

    const Listdata = useSelector((state) => {   
        return state.productSlice;
    });

    const handleRemoveFromCart = (item, ind) => {
        dispatch(removeFromCart(ind));
    }

    const addTotalPriceOfProductsInCart = () => {
        const initialValue = 0;
        const totalPrice = Listdata.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue);
        return totalPrice;
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box sx={{ flexGrow: 1 }} style={{ padding: '10px 38px' }}>
                <div>
                    <span style={{ float: 'right' }}> { `Cart total: ${ addTotalPriceOfProductsInCart() }$` }</span>
                </div>
                
                <Grid container spacing={2}>
                    {
                        Listdata.length > 0 ? Listdata.map((product, index) => {
                            return (
                                <Grid key={product.id} item xs={6} md={4} lg={3}>
                                    <Item>
                                        <img src={product.image} alt='' width="80px" height="120px" />
                                        <br />
                                        <span style={{ color: '#000' }}>{`Price - ${product.price}$`}</span>
                                        <br />
                                        <Button 
                                            variant="outlined" 
                                            color='success' 
                                            style={{ marginTop: '4px' }}
                                            onClick={ () => { handleRemoveFromCart(product, index) } }
                                        >Remove</Button>
                                    </Item>
                                </Grid>
                            )
                        }) : null
                    }
                    
                </Grid>
            </Box>
        </>
    )
}

export default Cart;
