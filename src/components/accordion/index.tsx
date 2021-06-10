import './index.scss';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    text: {
        display: 'flex',
        flexDirection: 'column'
    }
  }),
);

const AccordionText = (props) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{props.title}</Typography>
          </AccordionSummary>
          <AccordionDetails >
          <Typography>
            {
                Object.keys(props.text).map(function(key, index) {
                    return(
                        <>
                            {
                                props.text[key].link ?
                                    <a key={index} href={props.text[key].link}>{props.text[key].text}</a>
                                :
                                    <span className="acordion-text-block" key={index}>{props.text[key].text} </span>
                            }
                        </>
                    )
                })
            }
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
};
export default AccordionText;