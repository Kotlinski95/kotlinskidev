import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '../button';

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

export const StackStyledComponentsComponent = (props) => {
  const classes = useStyles();
  return (
    <div className="transition-popup__wrapper" style={{outline: 0}}>
    <div className={classes.paper}>
        <CloseIcon className="modal-close" onClick={props.handleClosePopup}/>
        <h2 id="transition-modal-title">{language.pages.stack.styledComponents.title}</h2>
        <p id="transition-modal-description">{language.pages.stack.styledComponents.text}</p>
        <Button onClick={props.handleClose} link={props.link} text={language.pages.stack.styledComponents.close} />
    </div>
    </div>
  )
}