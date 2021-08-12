import './index.scss';
import StackTile from '../../components/stackTile';
import { nanoid } from 'nanoid'

import { StackHtmlComponent } from './stackHtml'
import { StackCssComponent } from './stackCss'
import { StackJsComponent } from './stackJavaScript'
import { StackSassComponent } from './stackSass'
import { StackBootstrapComponent } from './stackBootstrap'
import { StackRwdComponent } from './stackRwd'
import { StackReactComponent } from './stackReact'
import { StackStyledComponentsComponent } from './stackStyledComponents'
import { StackShopifyComponent } from './stackShopify'
import { StackGitComponent } from './stackGit'
import { StackNodeComponent } from './stackNodeJs'
import {StackTypeScriptComponent} from './stackTypeScript'

import {
  Css3,
  Javascript,
  Styledcomponents,
  Sass,
  Html5,
  Shopify,
  Github,
  Typescript
} from '@styled-icons/simple-icons';

import {
  ReactLogo,
  Bootstrap,
  Nodejs
} from '@styled-icons/boxicons-logos';

import { PhoneDesktop } from '@styled-icons/fluentui-system-regular/PhoneDesktop';




const StackFrontEnd = () => {
  const skills = [
    { name: "Html 5", icon: <Html5 />, color: "#e34c26" , component: StackHtmlComponent},
    { name: "Css 3", icon: <Css3 />, color: "#2965f1" , component: StackCssComponent},
    { name: "Javascript", icon: <Javascript />, color: "#f0db4f" , component: StackJsComponent},
    { name: "Sass", icon: <Sass />, color: "#c69" , component: StackSassComponent},
    { name: "Bootstrap", icon: <Bootstrap />, color: "#563d7c" , component: StackBootstrapComponent},
    { name: "Rwd", icon: <PhoneDesktop />, color: "#e75a7c" , component: StackRwdComponent},
    { name: "React", icon: <ReactLogo />, color: "#61dbfb" , component: StackReactComponent},
    { name: "Styled components", icon: <Styledcomponents />, color: "#fff" , component: StackStyledComponentsComponent},
    { name: "Shopify", icon: <Shopify />, color: "#764abc" , component: StackShopifyComponent},
    { name: "Git", icon: <Github />, color: "#fff" , component: StackGitComponent},
    { name: "NodeJS", icon: <Nodejs />, color: "#0d8618" , component: StackNodeComponent},
    { name: "TypeScript", icon: <Typescript />, color: "#5473c7" , component: StackTypeScriptComponent},

  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '100vw' }}>
      <h2 className="stack-hello">{language.pages.stack.front_header}</h2>
      <div className="stack-wrapper">
        {skills.map((link, index) => (
          <>
            <StackTile component={link.component} key={nanoid(10)} url='/stack/front-end-developer' svg={link.icon} width="150px" heigh="150px" title={link.name} imgTitle={link.name} color={link.color} />
          </>
        ))}
      </div>
    </div>
  )
}

export default StackFrontEnd;