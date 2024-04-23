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
   * Colores del texto
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Color del texto del span
   */
  fontColor?: string;
  /**
   * Color de fondo
   */
  backgroundColor?: string,
}

export const MyLabel = ({ label, fontColor, allCaps = false, color='text-primary', size = 'normal', backgroundColor = 'transparent' }: Props) => {
  return (
    <span className={`${ size } ${ color }`} style={{ color: fontColor, backgroundColor }}>{ (allCaps) ? label.toUpperCase() : label }</span>
  )
}