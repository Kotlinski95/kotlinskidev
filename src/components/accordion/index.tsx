import './index.scss';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import Theme from '../../settings'

const useStyles = makeStyles(() =>
  createStyles({
    heading: {
      fontSize: Theme.typography.primaryFontSize,
      fontWeight: Theme.typography.fontWeightBold,
    },
    subHeading: {
      fontSize: Theme.typography.primaryFontSize,
      fontWeight: Theme.typography.fontWeightRegular,
    },
    text: {
      fontSize: Theme.typography.secondaryFontSize,
      fontWeight: Theme.typography.fontWeightRegular,
    },
    complex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }),
);

const AccordionText = (props) => {
  const classes = useStyles();
  return (
    <div className="accordion-wrapper">
      {
        props.inner ?
          <Accordion>
            <AccordionSummary
              expandIcon={<><AddCircleOutlineRoundedIcon/> <RemoveCircleOutlineRoundedIcon/></>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="cursor_hover"
            >
              <Typography className={classes.heading}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.complex}>
              {
                Object.keys(props.text).map(function (key, index) {
                  const content = props.text[key].content;
                  return (
                    <Accordion data-scroll>
                      <AccordionSummary
                        expandIcon={<><AddCircleOutlineRoundedIcon /> <RemoveCircleOutlineRoundedIcon /></>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.subHeading}>{props.text[key].header}</Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                        <Typography className={classes.text} data-scroll>
                          {
                            Object.keys(content).map(function (key, index) {
                              return (
                                <>
                                  {
                                    content[key].link ?
                                      <a key={index} target={content[key].target} href={content[key].link}>{content[key].text}</a>
                                      :
                                      key.search("header") > 0 ?
                                      <h3 data-scroll className="acordion-text-header" key={index}><br /><br />{content[key].text} </h3>
                                      :
                                      <span data-scroll className="acordion-text-block" key={index}><br /><br />{content[key].text} </span>
                                  }
                                </>
                              )
                            })
                          }
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  )
                })
              }
            </AccordionDetails>
          </Accordion>
          :
          <Accordion>
            <AccordionSummary
              expandIcon={<><AddCircleOutlineRoundedIcon /> <RemoveCircleOutlineRoundedIcon /></>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="cursor_hover"
            >
              <Typography className={classes.heading}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography className={classes.text}>
                {
                  Object.keys(props.text).map(function (key, index) {
                    return (
                      <>
                        {
                          props.text[key].link ?
                            <a key={index} target={props.text[key].target} href={props.text[key].link}>{props.text[key].text}</a>
                            :
                            key.search("header") > 0 ?
                            <h2 className="acordion-text-header" key={index}><br /><br />{props.text[key].text} </h2>
                            :
                            <span className="acordion-text-block" key={index}><br /><br />{props.text[key].text} </span>
                        }
                      </>
                    )
                  })
                }
              </Typography>
            </AccordionDetails>
          </Accordion>
      }


    </div>
  );
};
export default AccordionText;