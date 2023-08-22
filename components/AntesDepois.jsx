import { useState } from 'react';
import styles from '../styles/antesdepois.module.css';
import { FaArrowsAltH } from "react-icons/fa"

export default function AntesDepois({ beforeImage, afterImage }) {
  const [position, setPosition] = useState(50);

  const handleMouseMove = (e) => {
    const { left, right } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const width = right - left;
    const percentage = (x / width) * 100;
    setPosition(percentage);
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <div className={styles.antes_depois}><span>ANTES</span> <span>DEPOIS</span></div>
      <div className={styles.container_a_d}>
        <div className={styles.sliderImage} style={{ backgroundImage: 'url(/antes_depois_a.jpeg)' }}></div>
        <div className={styles.sliderImage}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, backgroundImage: 'url(/antes_depois_b.jpeg)'}}></div>
      </div>
      <input
        type="range"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className={styles.input_mobile}
      />
      <div
        className={styles.sliderLine}
        style={{ left: `${position}%` }}
      ></div>
      <div className={styles.icon_move}
           style={{ left: `${position}%` }}>      
           <FaArrowsAltH />         
      </div>
    </div>
  );
}
