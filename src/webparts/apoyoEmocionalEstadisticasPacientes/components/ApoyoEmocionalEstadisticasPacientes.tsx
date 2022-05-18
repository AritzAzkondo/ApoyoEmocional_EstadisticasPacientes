import * as React from 'react';
import styles from './ApoyoEmocionalEstadisticasPacientes.module.scss';
import { IApoyoEmocionalEstadisticasPacientesProps } from './IApoyoEmocionalEstadisticasPacientesProps';
import { useTable } from "react-table";
import { AE_Services } from '../services/AE_Services';
import { AE_EstadisticasComunesEntity } from '../entities/AE_EstadisticasComunesEntity';
import { useEffect, useState } from 'react';
import Styles from '../common/estilos';

import * as columns from '../common/columns';
// import { DayOfWeek, IDatePickerStyles, PrimaryButton } from 'office-ui-fabric-react';
import { Calendar, Callout, DatePicker, DayOfWeek, DefaultButton, DirectionalHint, FocusTrapZone, IDatePickerStyles, PrimaryButton } from 'office-ui-fabric-react';
import { DayPickerStrings } from '../utils/dayPickerStrings';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { contentStyles } from '../common/styles';

interface IData {
  dato: string;
  pers1: number;
  inter1: number;
  pers2: number;
  inter2: number;
  pers3: number;
  inter3: number;
  pers4: number;
  inter4: number;
  pers5: number;
  inter5: number;
  pers6: number;
  inter6: number;
  pers7: number;
  inter7: number;
}

const ApoyoEmocionalEstadisticasPacientes: React.FunctionComponent<IApoyoEmocionalEstadisticasPacientesProps> = () => {
  const service = new AE_Services();
  const [dataIntervenciones, setDataIntervenciones] = useState<Array<IData>>(
    [{
      dato: 'Intervenciones', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataSesiones, setDataSesiones] = useState<Array<IData>>(
    [{
      dato: 'Sesiones', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataSexo, setDataSexo] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataEdad, setDataEdad] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataOsi, setDataOsi] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataDemanda, setDataDemanda] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataTipoIntervencion, setDataTipoIntervencion] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataIntervencion, setDataIntervencion] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataProfesion, setDataProfesion] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataHospitalizacion, setDataHospitalizacion] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataRelacionCOVID, setDataRelacionCOVID] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );
  const [dataAtendidoEn, setDataAtendidoEn] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0
    }]
  );

  const [columnIntervenciones, setcolumnIntervenciones] = useState([])
  const [columnSesiones, setcolumnSesiones] = useState([])
  const [columnHospitalizacion, setcolumnHospitalizacion] = useState([])
  const [columnRelacionCOVID, setcolumnRelacionCOVID] = useState([])
  const [columnSexo, setcolumnSexo] = useState([])
  const [columnEdad, setcolumnEdad] = useState([])
  const [columnOSi, setcolumnOSi] = useState([])
  const [columnDemanda, setcolumnDemanda] = useState([])
  const [columnTipoIntervencion, setcolumnTipoIntervencion] = useState([])
  const [columnIntervencion, setcolumnIntervencion] = useState([])
  const [columnAtendidoEn, setcolumnAtendidoEn] = useState([])
  const [columnProfesion, setcolumnProfesion] = useState([])




  useEffect(() => {
    setcolumnIntervenciones(columns.columnIntervenciones);
    setcolumnSesiones(columns.columnSesiones);
    setcolumnHospitalizacion(columns.columnHospitalizacion);
    setcolumnRelacionCOVID(columns.columnrelacionCOVID);
    setcolumnSexo(columns.columnSexo);
    setcolumnEdad(columns.columnEdad);
    setcolumnOSi(columns.columnOsi);
    setcolumnDemanda(columns.columnDemanda);
    setcolumnTipoIntervencion(columns.columnTipoIntervencion);
    setcolumnIntervencion(columns.columnIntervencion);
    setcolumnAtendidoEn(columns.columnAtendidoEn);
    setcolumnProfesion(columns.columnProfesion);

    getItervencionesData();
    getSesionesData();
    getSexoData();
    getEdadData();
    getOsiData();
    getDemandaData();
    getTipoIntervencionData();
    getIntervencionData();
    getProfesionData();
    getHospitalizacionData();
    getrelacionCOVIDData();
    getAtendidoEnData();
  }, [])


  const getItervencionesData = async () => {
    await service.getIntervenciones('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow = [{ dato: 'Intervenciones', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0 }];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      for (let i = 0; i < elements.length; i++) {
        dataShow[0].dato = 'Intervenciones';
        if (elements[i].osi == 13) {
          dataShow[0].pers1 = elements[i].totalPersona || 0;
          dataShow[0].inter1 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 14) {
          dataShow[0].pers2 = elements[i].totalPersona || 0;
          dataShow[0].inter2 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 8) {
          dataShow[0].pers3 = elements[i].totalPersona || 0;
          dataShow[0].inter3 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 5) {
          dataShow[0].pers4 = elements[i].totalPersona || 0;
          dataShow[0].inter4 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 7) {
          dataShow[0].pers5 = elements[i].totalPersona || 0;
          dataShow[0].inter5 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 3) {
          dataShow[0].pers6 = elements[i].totalPersona || 0;
          dataShow[0].inter6 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }

      }
      dataShow[0].pers7 = totalPersonas;
      dataShow[0].inter7 = totalIntervenciones;
      setDataIntervenciones(dataShow);
    })
  }

  const getSesionesData = async () => {
    await service.getSesiones('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow = [{ dato: 'Sesiones', pers1: 0, inter1: 0, pers2: 0, inter2: 0, pers3: 0, inter3: 0, pers4: 0, inter4: 0, pers5: 0, inter5: 0, pers6: 0, inter6: 0, pers7: 0, inter7: 0 }];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      for (let i = 0; i < elements.length; i++) {
        dataShow[0].dato = 'Sesiones';
        if (elements[i].osi == 13) {
          dataShow[0].pers1 = elements[i].totalPersona || 0;
          dataShow[0].inter1 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 14) {
          dataShow[0].pers2 = elements[i].totalPersona || 0;
          dataShow[0].inter2 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 8) {
          dataShow[0].pers3 = elements[i].totalPersona || 0;
          dataShow[0].inter3 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 5) {
          dataShow[0].pers4 = elements[i].totalPersona || 0;
          dataShow[0].inter4 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 7) {
          dataShow[0].pers5 = elements[i].totalPersona || 0;
          dataShow[0].inter5 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 3) {
          dataShow[0].pers6 = elements[i].totalPersona || 0;
          dataShow[0].inter6 = elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }

      }
      dataShow[0].pers7 = totalPersonas;
      dataShow[0].inter7 = totalIntervenciones;
      setDataSesiones(dataShow);
    })
  }

  const getSexoData = async () => {
    await service.getSexo('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataSexo(dataShow);
    })
  }

  const getEdadData = async () => {
    await service.getEdad('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataEdad(dataShow);
    })
  }

  const getOsiData = async () => {
    await service.getOsi('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataOsi(dataShow);
    })
  }

  const getDemandaData = async () => {
    await service.getDemanda('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataDemanda(dataShow);
    })
  }

  const getTipoIntervencionData = async () => {
    await service.getTipoIntervencion('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataTipoIntervencion(dataShow);
    })
  }

  const getIntervencionData = async () => {
    await service.getClaseIntervencion('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataIntervencion(dataShow);
    })
  }

  const getProfesionData = async () => {
    await service.getProfesion('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataProfesion(dataShow);
    })
  }

  const getHospitalizacionData = async () => {
    await service.getAtendidoEn('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: 'No ingresado',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion
      let totalPersonasHosp = 0;
      let totalIntervencionesHosp = 0;
      let dataObjHosp: IData = {
        dato: 'Ingresado',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1Hosp = 0;
      let totalInterOsi1Hosp = 0;
      let totalPersOsi2Hosp = 0;
      let totalInterOsi2Hosp = 0;
      let totalPersOsi3Hosp = 0;
      let totalInterOsi3Hosp = 0;
      let totalPersOsi4Hosp = 0;
      let totalInterOsi4Hosp = 0;
      let totalPersOsi5Hosp = 0;
      let totalInterOsi5Hosp = 0;
      let totalPersOsi6Hosp = 0;
      let totalInterOsi6Hosp = 0;
      let totalPersTotalesHosp = 0;
      let totalInterTotalesHosp = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }

        if (dato == 'HOSPITALIZACIÓN' || dato == 'HOSPITALIZACION') {
          if (elements[i].osi == 13) {
            dataObjHosp.pers1 = dataObjHosp.pers1 += elements[i].totalPersona || 0;
            dataObjHosp.inter1 = dataObjHosp.inter1 += elements[i].totalIntervenciones || 0;
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi1Hosp += elements[i].totalPersona; totalInterOsi1Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 14) {
            dataObjHosp.pers2 = dataObjHosp.pers2 += elements[i].totalPersona || 0;
            dataObjHosp.inter2 = dataObjHosp.inter2 += elements[i].totalIntervenciones || 0;
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi2Hosp += elements[i].totalPersona; totalInterOsi2Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 8) {
            dataObjHosp.pers3 = dataObjHosp.pers3 += elements[i].totalPersona || 0;
            dataObjHosp.inter3 = dataObjHosp.inter3 += elements[i].totalIntervenciones || 0;
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi3Hosp += elements[i].totalPersona; totalInterOsi3Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 5) {
            dataObjHosp.pers4 = dataObjHosp.pers4 += elements[i].totalPersona || 0;
            dataObjHosp.inter4 = dataObjHosp.inter4 += elements[i].totalIntervenciones || 0;
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi4Hosp += elements[i].totalPersona; totalInterOsi4Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 7) {
            dataObjHosp.pers5 = dataObjHosp.pers5 += elements[i].totalPersona || 0;
            dataObjHosp.inter5 = dataObjHosp.inter5 += elements[i].totalIntervenciones || 0;
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi5Hosp += elements[i].totalPersona; totalInterOsi5Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 3) {
            dataObjHosp.pers6 = dataObjHosp.pers6 += elements[i].totalPersona || 0;
            dataObjHosp.inter6 = dataObjHosp.inter6 += elements[i].totalIntervenciones || 0;
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi6Hosp += elements[i].totalPersona; totalInterOsi6Hosp += elements[i].totalIntervenciones;
          }

          dataObjHosp.pers7 = dataObjHosp.pers7 += totalPersonasHosp;
          dataObjHosp.inter7 = dataObjHosp.inter7 += totalIntervencionesHosp;
          totalPersTotalesHosp += dataObjHosp.pers7; totalInterTotalesHosp += dataObjHosp.inter7;
        } else {
          if (elements[i].osi == 13) {
            dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
            dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 14) {
            dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
            dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 8) {
            dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
            dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 5) {
            dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
            dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 7) {
            dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
            dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 3) {
            dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
            dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
          }

          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
        }



      }
      dataShow.push(dataObj);
      dataShow.push(dataObjHosp);

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 + totalPersOsi1Hosp || 0,
        inter1: totalInterOsi1 + totalInterOsi1Hosp || 0,
        pers2: totalPersOsi2 + totalPersOsi2Hosp || 0,
        inter2: totalInterOsi2 + totalInterOsi2Hosp || 0,
        pers3: totalPersOsi3 + totalPersOsi3Hosp || 0,
        inter3: totalInterOsi3 + totalInterOsi3Hosp || 0,
        pers4: totalPersOsi4 + totalPersOsi4Hosp || 0,
        inter4: totalInterOsi4 + totalInterOsi4Hosp || 0,
        pers5: totalPersOsi5 + totalPersOsi5Hosp || 0,
        inter5: totalInterOsi5 + totalInterOsi5Hosp || 0,
        pers6: totalPersOsi6 + totalPersOsi6Hosp || 0,
        inter6: totalInterOsi6 + totalInterOsi6Hosp || 0,
        pers7: totalPersTotales + totalPersTotalesHosp || 0,
        inter7: totalInterTotales + totalInterTotalesHosp || 0
      };
      dataShow.push(dataCalc);

      setDataHospitalizacion(dataShow);
    })
  }

  const getrelacionCOVIDData = async () => {
    await service.getRelacionCOVID('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataRelacionCOVID(dataShow);
    })
  }

  const getAtendidoEnData = async () => {
    await service.getAtendidoEn('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ',
        pers1: 0,
        inter1: 0,
        pers2: 0,
        inter2: 0,
        pers3: 0,
        inter3: 0,
        pers4: 0,
        inter4: 0,
        pers5: 0,
        inter5: 0,
        pers6: 0,
        inter6: 0,
        pers7: 0,
        inter7: 0
      };

      //#region Calculos totales
      let totalPersOsi1 = 0;
      let totalInterOsi1 = 0;
      let totalPersOsi2 = 0;
      let totalInterOsi2 = 0;
      let totalPersOsi3 = 0;
      let totalInterOsi3 = 0;
      let totalPersOsi4 = 0;
      let totalInterOsi4 = 0;
      let totalPersOsi5 = 0;
      let totalInterOsi5 = 0;
      let totalPersOsi6 = 0;
      let totalInterOsi6 = 0;
      let totalPersTotales = 0;
      let totalInterTotales = 0;
      //#endregion

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].dato != dato) {
          dato = elements[i].dato;
        }
        dataObj.dato = dato;
        if (elements[i].osi == 13) {
          dataObj.pers1 = dataObj.pers1 += elements[i].totalPersona || 0;
          dataObj.inter1 = dataObj.inter1 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = dataObj.pers2 += elements[i].totalPersona || 0;
          dataObj.inter2 = dataObj.inter2 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = dataObj.pers3 += elements[i].totalPersona || 0;
          dataObj.inter3 = dataObj.inter3 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = dataObj.pers4 += elements[i].totalPersona || 0;
          dataObj.inter4 = dataObj.inter4 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = dataObj.pers5 += elements[i].totalPersona || 0;
          dataObj.inter5 = dataObj.inter5 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = dataObj.pers6 += elements[i].totalPersona || 0;
          dataObj.inter6 = dataObj.inter6 += elements[i].totalIntervenciones || 0;
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = dataObj.pers7 += totalPersonas;
            dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
            totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: 0,
              inter1: 0,
              pers2: 0,
              inter2: 0,
              pers3: 0,
              inter3: 0,
              pers4: 0,
              inter4: 0,
              pers5: 0,
              inter5: 0,
              pers6: 0,
              inter6: 0,
              pers7: 0,
              inter7: 0
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = dataObj.pers7 += totalPersonas;
          dataObj.inter7 = dataObj.inter7 += totalIntervenciones;
          totalPersTotales += dataObj.pers7; totalInterTotales += dataObj.inter7;
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1 || 0,
        inter1: totalInterOsi1 || 0,
        pers2: totalPersOsi2 || 0,
        inter2: totalInterOsi2 || 0,
        pers3: totalPersOsi3 || 0,
        inter3: totalInterOsi3 || 0,
        pers4: totalPersOsi4 || 0,
        inter4: totalInterOsi4 || 0,
        pers5: totalPersOsi5 || 0,
        inter5: totalInterOsi5 || 0,
        pers6: totalPersOsi6 || 0,
        inter6: totalInterOsi6 || 0,
        pers7: totalPersTotales || 0,
        inter7: totalInterTotales || 0
      };
      dataShow.push(dataCalc);

      setDataAtendidoEn(dataShow);
    })
  }

  const [fechaFin, setFechaFin] = useState<Date>(new Date());
  const [fechaInicio, setFechaInicio] = useState<Date>(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));

  const searchByDate = () => {
    getItervencionesData();
    getSesionesData();
    getSexoData();
    getEdadData();
    getOsiData();
    getDemandaData();
    getTipoIntervencionData();
    getIntervencionData();
    getProfesionData();
    getHospitalizacionData();
    getrelacionCOVIDData();
    getAtendidoEnData();
  }

  const [value, onChange] = useState<Date[]>([fechaInicio, fechaFin]);

  useEffect(() => {
    console.log(value)
  }, [value])


  return (
    <div>
      <h1>Estadisticas</h1>
      <div className={contentStyles.container}>
        <DateRangePicker onChange={onChange} value={value} format={"yyyy-MM-dd"} />
        <PrimaryButton text="Buscar" onClick={searchByDate} />
      </div>

      <Styles>
        <Table columns={columnIntervenciones} data={dataIntervenciones} />
      </Styles>
      <Styles>
        <Table columns={columnSesiones} data={dataSesiones} />
      </Styles>
      <Styles>
        <Table columns={columnHospitalizacion} data={dataHospitalizacion} />
      </Styles>
      <Styles>
        <Table columns={columnRelacionCOVID} data={dataRelacionCOVID} />
      </Styles>
      <Styles>
        <Table columns={columnSexo} data={dataSexo} />
      </Styles>
      <Styles>
        <Table columns={columnEdad} data={dataEdad} />
      </Styles>
      {/* <Styles>
        <Table columns={columnOSi} data={dataCategoriaProf} />
      </Styles> */}
      <Styles>
        <Table columns={columnOSi} data={dataOsi} />
      </Styles>
      <Styles>
        <Table columns={columnDemanda} data={dataDemanda} />
      </Styles>
      <Styles>
        <Table columns={columnTipoIntervencion} data={dataTipoIntervencion} />
      </Styles>
      <Styles>
        <Table columns={columnIntervencion} data={dataIntervencion} />
      </Styles>
      <Styles>
        <Table columns={columnAtendidoEn} data={dataAtendidoEn} />
      </Styles>
      <Styles>
        <Table columns={columnProfesion} data={dataProfesion} />
      </Styles>

    </div>
  )


  function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })

    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }


  return (
    <div>
      <h1>Estadisticas</h1>

    </div>
  )
}

export default ApoyoEmocionalEstadisticasPacientes;
