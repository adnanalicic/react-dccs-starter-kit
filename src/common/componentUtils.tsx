/**
 * Copyright (c) 2020 DCCS Tuzla. All rights reserved.
 * Implemented 2020 by DCCS Tuzla.
 */

import React, { PropsWithChildren } from 'react';
import DynamicSelectComponent from '../views/common/select/DynamicSelectComponent';

/**
 * Renders input component configured according to the provided input properties.
 * @param label which will be displayed above input field
 * @param model from which value will be read and displayed
 * @param name of the field in the model
 * @param onChange event that is going to be invoked when users enters something in the input field
 */
export function renderInput<T, U extends keyof T & string>(
  label: string,
  model: T,
  name: U,
  onChange: (name: U, value: string) => void
) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    onChange(name, event.target.value);
  }

  return (
    <div className="formRow">
      <span>{label}</span>
      <input type="text" name={name} value={String(model[name] || '')} onChange={handleChange} className="textfield" />
    </div>
  );
}

/**
 * Renders select component configured according to the provided input properties.
 * @param label which will be displayed above input field
 * @param model from which value will be read and displayed
 * @param name of the field in the model
 * @param serviceName the name of service which will trigger request to get data
 * @param onChange event that is going to be invoked when users enters something in the input field
 */
export function renderSelect<T, U extends keyof T & string>(
  label: string,
  model: T,
  name: U,
  serviceName: string,
  onChange: (name: U, value: string) => void
) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    onChange(name, event.target.value);
  }

  return (
    <div>
      <span>{label}</span>
      <DynamicSelectComponent
        name={name}
        serviceName={serviceName}
        value={String(model[name] || '')}
        onChange={handleChange}
      />
    </div>
  );
}

/**
 * Renders button component.
 * @param label which will be displayed above on the button
 * @param onClick event that is going to be invoked when users clicks on the button itself
 */
export function renderButton(label: string, onClick: () => void) {
  return <input type="button" value={label} onClick={onClick} className="button" />;
}

/**
 * Represents an form row.
 * @param props of the component
 * @constructor
 */
export function Row<P>(props: PropsWithChildren<{ className?: string }>) {
  return <div className={props.className}>{props.children}</div>;
}
