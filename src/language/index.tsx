import language_EN from './en.json'
import language_PL from './pl.json'
import iconPL from '../assets/poland.png';
import iconEN from '../assets/united-kingdom.png';
import { selectedLanguage } from '../reducers/state';
import { useSelector } from 'react-redux';
declare global {
    var language: any;
  }

const Language = () => {
    const actualLanguage = useSelector(selectedLanguage);
    switch (actualLanguage) {
        case "Polski":
            window.language = language_PL;
            break;
        case "English":
            window.language = language_EN;
            break;
        default:
            window.language = language_EN;
            break;
    }
    return window.language;
}
export {Language, iconPL, iconEN };