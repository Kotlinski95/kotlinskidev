import './index.scss';
import StackTile from '../../components/stackTile';
import Tia from '../../assets/stack/tia.svg'
import Motors from '../../assets/stack/motors.svg'
import Plc from '../../assets/stack/plc.svg'
import Hmi from '../../assets/stack/HMI.svg'
import Embedded from '../../assets/stack/cpu.svg'
import Scada from '../../assets/stack/scada.svg'
import Safety from '../../assets/stack/safety.svg'
import Microcontroller from '../../assets/stack/microcontroller.svg'


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
          <StackTile logo={link.icon} width="150px" heigh="150px" title={link.name} imgTitle="HTML 5" color={link.color} />
        ))}
      </div>
    </div>
  )
}

export default StackAutomation;