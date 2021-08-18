import './index.scss';
import StackTile from '../../components/stackTile';
import Tia from '../../assets/stack/tia.png'
import Motors from '../../assets/stack/motors.png'
import Plc from '../../assets/stack/plc.webp'
import Hmi from '../../assets/stack/HMI.png'
import Embedded from '../../assets/stack/cpu.webp'
import Scada from '../../assets/stack/scada.png'
import Safety from '../../assets/stack/safety.png'
import Microcontroller from '../../assets/stack/microcontroller.webp'
import { nanoid } from 'nanoid'

import { StackTiaComponent } from './stackTia'
import { StackEmbeddedComponent } from './stackEmbedded'
import { StackHmiComponent } from './stackHmi'
import { StackMicrocontrollersComponent } from './stackMicrocontrollers'
import { StackMotionComponent } from './stackMotion'
import { StackPlcComponent } from './stackPlc'
import { StackSafetyComponent } from './stackSafety'
import { StackScadaComponent } from './stackScada'

const skills = [
  { name: "TIA Portal", icon: Tia, color: "" , component: StackTiaComponent},
  { name: "PLC Siemens", icon: Plc, color: "" , component: StackPlcComponent},
  { name: "HMI", icon: Hmi, color: "" , component: StackHmiComponent},
  { name: "Embedded systems", icon: Embedded, color: "" , component: StackEmbeddedComponent},
  { name: "Motion control", icon: Motors, color: "" , component: StackMotionComponent},
  { name: "Scada", icon: Scada, color: "" , component: StackScadaComponent},
  { name: "Safety systems", icon: Safety, color: "" , component: StackSafetyComponent},
  { name: "Microcontrollers", icon: Microcontroller, color: "" , component: StackMicrocontrollersComponent},
];

const StackAutomation = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '100vw' }}>
      <h2 className="stack-hello">{language.pages.stack.automation_header}</h2>
      <div className="stack-wrapper">
        {skills.map((link) => (
          <StackTile component={link.component} key={nanoid(10)} logo={link.icon} width="150px" height="150px" title={link.name} imgTitle={link.name} color={link.color} />
        ))}
      </div>
    </div>
  )
}

export default StackAutomation;