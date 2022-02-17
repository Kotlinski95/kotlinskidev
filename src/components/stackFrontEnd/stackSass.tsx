import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '../button';
import CustomImage from '../customImage'
import CustomLink from '../customLink'
import SassPhoto from '../../assets/stack/details/sass_image.webp'
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

export const StackSassComponent = (props) => {
  const classes = useStyles();
  return (
    <div className="transition-popup__wrapper" style={{outline: 0}}>
    <div className={classes.paper}>
        <CloseIcon className="modal-close" onClick={props.handleClosePopup}/>
        <h2 id="transition-modal-title">{language.pages.stack.sass.title}</h2>
        <div className="transition-popup__content">
          <p id="transition-modal-description">{language.pages.stack.sass.intro}</p>
          <CustomImage src={SassPhoto} alt='Sass' title='Sass' width='90%' height='auto' modal='true'/>
          <p id="transition-modal-description">{language.pages.stack.sass.text}</p>
          <CustomLink href={language.pages.stack.sass.source} target="_blank">{language.pages.stack.sass.source} </CustomLink>
        </div>
        <Button onClick={props.handleClose} link={props.link} text={language.pages.stack.sass.close} />
    </div>
    </div>
  )
}