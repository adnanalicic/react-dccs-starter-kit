/**
 Copyright (c) 2020 DCCS Tuzla. All rights reserved.
 Implemented 2020 by DCCS Tuzla.

 @author: Adnan Alicic
 */

import { RouteComponentProps } from 'react-router';
import equipmentService from '../../common/service/EquipmentService';
import EquipmentType from '../../common/types/EquipmentType';
import EquipmentFormComponent from './EquipmentFormComponent';
import './EquipmentFormComponent.css';

interface UrlParamsType {
  id: string
}

/**
 * Manage equipment item page.
 */
export default class ManageEquipmentComponent extends EquipmentFormComponent<UrlParamsType> {
  constructor(props: RouteComponentProps<UrlParamsType>) {
    super(props);
    const {id} = props.match.params;
    equipmentService.fetchEquipmentById(id).then((data: EquipmentType) => {
      this.setState({equipment: data});
    });
  }
}
