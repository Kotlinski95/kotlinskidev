import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Breadcrumbs = () => {
    const location: string = `home${window.location.pathname}`;
    const locations: string[] = location.split("/");
    for (const el in locations){
        if (locations[el].length === 0){
            locations.splice(parseInt(el,10), 1);
        }
    }
  return (
    <div>
        <p className="breadcrumbs cursor_hover" >
            {
                locations.map((value, index) => {
                    if (index > 0 && locations.length > 1){
                        let to = `/${locations.slice(1, index + 1).join('/')}`;
                        return(
                            <>
                            <NavigateNextIcon /><Link to={to} title={`Link to ${to}`} aria-label={`Link to ${to}`} referrer-policy = 'no-referrer' rel='noopener'><span className="line-item cursor_hover"> {value}</span></Link>
                            </>
                        )
                    }
                    else{
                        return(
                            <Link to="/" title={`Link to homepage`} aria-label={`Link to homepage`} referrer-policy = 'no-referrer' rel='noopener'><span className="line-item cursor_hover">{value}</span></Link>
                        )
                    }
                })
            }
        </p>
    </div>
  );
};
export default Breadcrumbs;