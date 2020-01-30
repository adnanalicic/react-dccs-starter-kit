import * as firebase from 'firebase/app';
import 'firebase/database';

class EquipmentService {

  fetchEquipmentById(id) {
    return firebase
        .database()
        .ref('equipment/')
        .once('value')
        .then((snap) => {
          return snap.val().find((el) => el.id === id);
        });
  }

  fetchEquipment() {
    return firebase
        .database()
        .ref('/')
        .once('value')
        .then((snap) => {
          let equipment = snap.val().equipment;
          let manufactors = new Map(snap.val().manufactor.map(i => [i.id.toString(), i.value]));
          let employees = new Map(snap.val().employee.map(i => [i.id.toString(), i.value]));
          let equipmentType = new Map(snap.val().equipmentType.map(i => [i.id.toString(), i.value]));

          equipment.map(el => {
            el.employee = employees.get(el["employee"]);
            el.manufactor = manufactors.get(el["manufactor"]);
            el.equipmentType = equipmentType.get(el["equipmentType"]);
            return el;
          });
          return equipment;
        });
  }

  saveEquipmentItem(equipment) {
    return firebase
        .database()
        .ref('equipment/')
        .once('value')
        .then((snap) => {
          let dbEquipment = snap.val();
          if (equipment.id) {  // Update existing
            dbEquipment = snap.val().map(eq => {
              return eq.id === equipment.id ? equipment : eq;
            })
          }
          else { // Add new
            equipment.id = this.generateId();
            dbEquipment.push(equipment);
          }
          firebase.database().ref('equipment/').set(dbEquipment).catch(err => err);
        });
  }

  deleteEquipmentItem(equipment) {
    return firebase
        .database()
        .ref('equipment/')
        .once('value')
        .then((snap) => {
          const dbEquipment = snap.val();
          dbEquipment.forEach((eq, i) => {
            if (eq.id === equipment.id) {
              dbEquipment.splice(i, 1);
            }
          });
          firebase.database().ref('equipment/').set(dbEquipment).catch(err => err);
        });
  }

  generateId() {
    return Math.random().toString(36).substring(2, 9);
  }
}

export default new EquipmentService();
