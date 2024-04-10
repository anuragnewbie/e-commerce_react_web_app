import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import { addToCart } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import { priceLowToHighSort, priceHighToLowSort } from "./helpers/listSortHelper";

const Electronics = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = React.useState([]);
    const [selectedDropdownMenu, setSelectedDropdownMenu] = React.useState('');
    const dropdownMenuItemList = [
        { value: 10, label: "Price: Low to High" },
        { value: 20, label: "Price: High to Low"}
    ];

    const getAllJewelleries = () => {
        axios
            .get("https://fakestoreapi.com/products/category/jewelery")
            .then(data => {
                const result = data.data;

                if(result.length > 0) {
                    setProducts(result.map((product) => {
                        return {
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.image
                        }
                    }));
                }
            })
            .catch(error => console.log(error));
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    const handleDropdownChange = (...args) => {
        setSelectedDropdownMenu(args[0]);
        
        if(args[0].label === "Price: Low to High") {
            priceLowToHighSort(products);
        } else if(args[0].label === "Price: High to Low") {
            priceHighToLowSort(products);
        }
    }

    React.useEffect(() => {
        getAllJewelleries();
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ minWidth: 280, float: "right", padding: '0px 38px' }}>
                    <Autocomplete
                        disablePortal
                        size="small"
                        id="controllable-states-demo"
                        value={selectedDropdownMenu}
                        options={dropdownMenuItemList}
                        renderInput={(params) => <TextField {...params} label='Sort By' />}
                        freeSolo
                        onChange={(event, newValue) => {
                            if(newValue !== null) {
                                handleDropdownChange(newValue);
                            } else {
                                getAllJewelleries();
                            }
                        }}
                    />
                </Box>

                <Grid container spacing={2} style={{ padding: '10px 38px' }}>
                    {
                        products.length > 0 ? products.map((product) => {
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
                                            onClick={ () => { handleAddToCart(product) } }
                                        >Add to cart</Button>
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

export default Electronics;
