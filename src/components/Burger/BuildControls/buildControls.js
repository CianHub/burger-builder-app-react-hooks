import React from 'react';
import styles from './buildControls.module.css';
import { BuildControl } from './BuildControl/buildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' }
];

export const BuildControls = props => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.added(control.type)}
        removed={() => props.removed(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button className={styles.OrderButton} disabled={!props.purchaseable}>
      ORDER NOW
    </button>
  </div>
);
