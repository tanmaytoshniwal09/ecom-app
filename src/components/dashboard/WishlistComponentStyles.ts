import { styled } from '@mui/material/styles';
import { IconButton, Button, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

export const WishlistContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'fit-contnent',
  marginTop:"30px",
  marginBottom:"30px",
  padding:"20px"
});

export const WishlistHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '1170px',
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontWeight: 500,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0 16px',
  },
}));

export const CartContainer  = styled('div')(({ theme }) => ({
  width: '1170px',
  height: 'auto',
  gap: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    padding: '0 16px',
    marginTop: '16px',
    marginBottom: '16px',
    flexwrap: 'wrap',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0 16px',
    marginTop: '16px',
    marginBottom: '16px',
    flexwrap: 'wrap',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexwrap: 'wrap',
    marginTop: '16px',
  },
}));

export const CartItem= styled('div')(({ theme }) => ({
  width: '270px',
  height: 'fit-contnet',
  display: 'flex',
  flexDirection: 'column',
  marginBottom:"20px"
  // [theme.breakpoints.down('sm')]: {
  //   width: '100%',
  // },
}));

export const CartItemInner = styled('div')(({ theme }) => ({
  width: '270px',
  height: '250px',
  borderRadius: '4px',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CartItemRemove = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '270px',
  height: 'fit-content',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
export const CartItemImage = styled('div')({
  width: '190px',
  height: '180px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
});


export const StyledImg = styled('img')({
  width: '158px',
  height: '176px',
  objectFit: 'cover',
  maxHeight: '129px',
  padding: '0px',
  margin: 0,
});

export const CartItemActions = styled('div')(({ theme }) => ({
  width: '270px',
  height: '40px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CartItemDetails = styled('div')({
  width: '100%',
  height: '56px',
  gap: '8px',
  paddingLeft: '4px',
  paddingTop: '8px',
  marginTop: '8px',
});

export const CartItemName = styled('div')({
  width: '100%',
  height: '24px',
  fontFamily: 'Poppins',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left',
});

export const CartItemPrice = styled('div')({
  width: '270px',
  height: '29px',
  color: '#DB4444',
  fontFamily: 'Poppins',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left',
});

export const StyledIconButton = styled(IconButton)({
  color: 'inherit',
});

export const StyledButton = styled(Button)({
  fontFamily: 'Poppins',
  backgroundColor: 'black',
  color: 'white',
  height: '40px',
  borderRadius: '0 0 4px 4px',
  fontSize: '16px',
  fontWeight: '500',
  textTransform: 'none',
  padding: '0px',
});

export const StyledAddShoppingCartIcon = styled(AddShoppingCartIcon)({});

export const StyledDeleteIcon = styled(DeleteIcon)({});

export const StyledTypography = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  fontFamily: 'Poppins',
});
