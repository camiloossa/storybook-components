import './MyLabel.css';
import { AllCaps } from '../stories/MyLabel.stories';

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * All caps - Todas las letras mayusculas
   */
  allCaps?: boolean;

  /**
   * Colores del fondo
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Color del texto del span
   */
  fontColor?: string;
}

export const MyLabel = ({ label, fontColor, allCaps = false, color='text-primary', size = 'normal' }: Props) => {
  return (
    <span className={`${ size } ${ color }`} style={{ color: fontColor }}>{ (allCaps) ? label.toUpperCase() : label }</span>
  )
}