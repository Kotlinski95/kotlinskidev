import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '../button';
import CustomImage from '../customImage';
import ShopifyIntroPhoto from '../../assets/stack/details/shopify.webp';
import ShopifyPhoto from '../../assets/stack/details/shopify2.webp';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#1a4137',
            color: '#e1f7f1',
            border: '2px solid #000',
            borderRadius: '15px',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

export const StackShopifyComponent = (props) => {
  const classes = useStyles();
  return (
    <div className="transition-popup__wrapper" style={{outline: 0}}>
    <div className={classes.paper}>
        <CloseIcon className="modal-close" onClick={props.handleClosePopup}/>
        <h2 id="transition-modal-title">{language.pages.stack.shopify.title}</h2>
        <div className="transition-popup__content">
          <CustomImage src={ShopifyIntroPhoto} alt='Shopify' title='Shopify' width='90%' height='auto' />
          <p id="transition-modal-description">{language.pages.stack.shopify.intro}</p>
          <CustomImage src={ShopifyPhoto} alt='Shopify theme layout' title='Shopify theme layout' width='90%' height='auto' />
          <p id="transition-modal-description">{language.pages.stack.shopify.text}</p>
        </div>
        <Button onClick={props.handleClose} link={props.link} text={language.pages.stack.shopify.close} />
    </div>
    </div>
  )
}