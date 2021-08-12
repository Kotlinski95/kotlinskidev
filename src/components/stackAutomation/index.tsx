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


const skills = [
  { name: "TIA Portal", icon: Tia, color: "" },
  { name: "PLC Siemens", icon: Plc, color: "" },
  { name: "HMI", icon: Hmi, color: "" },
  { name: "Embedded systems", icon: Embedded, color: "" },
  { name: "Motion control", icon: Motors, color: "" },
  { name: "Scada", icon: Scada, color: "" },
  { name: "Safety systems", icon: Safety, color: "" },
  { name: "Microcontrollers", icon: Microcontroller, color: "" },
];

const StackAutomation = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '100vw' }}>
      <h2 className="stack-hello">{language.pages.stack.automation_header}</h2>
      <div className="stack-wrapper">
        {skills.map((link) => (
          <StackTile key={nanoid(10)} logo={link.icon} width="150px" height="150px" title={link.name} imgTitle={link.name} color={link.color} />
        ))}
      </div>
    </div>
  )
}

export default StackAutomation;