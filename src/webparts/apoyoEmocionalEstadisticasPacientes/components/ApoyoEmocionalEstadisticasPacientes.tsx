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
  pers1: string;
  inter1: string;
  pers2: string;
  inter2: string;
  pers3: string;
  inter3: string;
  pers4: string;
  inter4: string;
  pers5: string;
  inter5: string;
  pers6: string;
  inter6: string;
  pers7: string;
  inter7: string;
}

const ApoyoEmocionalEstadisticasPacientes: React.FunctionComponent<IApoyoEmocionalEstadisticasPacientesProps> = () => {
  const service = new AE_Services();
  const [dataIntervenciones, setDataIntervenciones] = useState<Array<IData>>(
    [{
      dato: 'Intervenciones', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataSesiones, setDataSesiones] = useState<Array<IData>>(
    [{
      dato: 'Sesiones', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataSexo, setDataSexo] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataEdad, setDataEdad] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataOsi, setDataOsi] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataDemanda, setDataDemanda] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataTipoIntervencion, setDataTipoIntervencion] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataIntervencion, setDataIntervencion] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataProfesion, setDataProfesion] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataHospitalizacion, setDataHospitalizacion] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataRelacionCOVID, setDataRelacionCOVID] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
    }]
  );
  const [dataAtendidoEn, setDataAtendidoEn] = useState<Array<IData>>(
    [{
      dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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

  const [fechaFin, setFechaFin] = useState<Date>(new Date());
  const [fechaInicio, setFechaInicio] = useState<Date>(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
  const [fechaDefecto, setfechaDefecto] = useState<Date>(new Date(2000, 1, 1, 0, 0, 0));

  const [value, onChange] = useState<Date[]>([fechaInicio, fechaFin]);

  const [historicoIntervenciones, sethistoricoIntervenciones] = useState<Array<IData>>();
  const [historicoSesiones, sethistoricoSesiones] = useState<Array<IData>>();
  const [historicoSexo, sethistoricoSexo] = useState<Array<IData>>();
  const [historicoEdad, sethistoricoEdad] = useState<Array<IData>>();
  const [historicoOsi, sethistoricoOsi] = useState<Array<IData>>();
  const [historicoDemanda, sethistoricoDemanda] = useState<Array<IData>>();
  const [historicoTipoIntervencion, sethistoricoTipoIntervencion] = useState<Array<IData>>();
  const [historicoIntervencion, sethistoricoIntervencion] = useState<Array<IData>>();
  const [historicoProfesion, sethistoricoProfesion] = useState<Array<IData>>();
  const [historicoHospitalizacion, sethistoricoHospitalizacion] = useState<Array<IData>>();
  const [historicoRelacionCOVID, sethistoricoRelacionCOVID] = useState<Array<IData>>();
  const [historicoAtendidoEn, sethistoricoAtendidoEn] = useState<Array<IData>>();

  const [load1, setload1] = useState<boolean>(false);
  const [load2, setload2] = useState<boolean>(false);
  const [load3, setload3] = useState<boolean>(false);
  const [load4, setload4] = useState<boolean>(false);
  const [load5, setload5] = useState<boolean>(false);
  const [load6, setload6] = useState<boolean>(false);
  const [load7, setload7] = useState<boolean>(false);
  const [load8, setload8] = useState<boolean>(false);
  const [load9, setload9] = useState<boolean>(false);
  const [load10, setload10] = useState<boolean>(false);
  const [load11, setload11] = useState<boolean>(false);
  const [load12, setload12] = useState<boolean>(false);

  useEffect(() => {
    if (load1) {
      getItervencionesData();
    }
  }, [load1])

  useEffect(() => {
    if (load2) {
      getSesionesData();
    }
  }, [load2])

  useEffect(() => {
    if (load3) {
      getSexoData();
    }
  }, [load3])

  useEffect(() => {
    if (load4) {
      getEdadData();
    }
  }, [load4])

  useEffect(() => {
    if (load5) {
      getOsiData();
    }
  }, [load5])

  useEffect(() => {
    if (load6) {
      getDemandaData();
    }
  }, [load6])

  useEffect(() => {
    if (load7) {
      getTipoIntervencionData();
    }
  }, [load7])

  useEffect(() => {
    if (load8) {
      getIntervencionData();
    }
  }, [load8])

  useEffect(() => {
    if (load9) {
      getProfesionData();
    }
  }, [load9])

  useEffect(() => {
    if (load10) {
      getHospitalizacionData();
    }
  }, [load10])

  useEffect(() => {
    if (load11) {
      getrelacionCOVIDData();
    }
  }, [load11])

  useEffect(() => {
    if (load12) {
      getAtendidoEnData();
    }
  }, [load12])

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

    getItervencionesHistorico();
    getSesionesHistorico();
    getSexoHistorico();
    getEdadHistorico();
    getOsiHistorico();
    getDemandaHistorico();
    getTipoIntervencionHistorico();
    getIntervencionHistorico();
    getProfesionHistorico();
    getHospitalizacionHistorico();
    getrelacionCOVIDHistorico();
    getAtendidoEnHistorico();
  }, [])

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

  const getItervencionesData = async () => {
    await service.getIntervenciones('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow = [{ dato: 'Intervenciones', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0' }];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      for (let i = 0; i < elements.length; i++) {
        dataShow[0].dato = 'Intervenciones';
        if (elements[i].osi == 13) {
          dataShow[0].pers1 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter1 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 14) {
          dataShow[0].pers2 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter2 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 8) {
          dataShow[0].pers3 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter3 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 5) {
          dataShow[0].pers4 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter4 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 7) {
          dataShow[0].pers5 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter5 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 3) {
          dataShow[0].pers6 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter6 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }

      }
      dataShow[0].pers1 = dataShow[0].pers1 + ' (' + historicoIntervenciones[0].pers1 + ')'
      dataShow[0].inter1 = dataShow[0].inter1 + ' (' + historicoIntervenciones[0].inter1 + ')'
      dataShow[0].pers2 = dataShow[0].pers2 + ' (' + historicoIntervenciones[0].pers2 + ')'
      dataShow[0].inter2 = dataShow[0].inter2 + ' (' + historicoIntervenciones[0].inter2 + ')'
      dataShow[0].pers3 = dataShow[0].pers3 + ' (' + historicoIntervenciones[0].pers3 + ')'
      dataShow[0].inter3 = dataShow[0].inter3 + ' (' + historicoIntervenciones[0].inter3 + ')'
      dataShow[0].pers4 = dataShow[0].pers4 + ' (' + historicoIntervenciones[0].pers4 + ')'
      dataShow[0].inter4 = dataShow[0].inter4 + ' (' + historicoIntervenciones[0].inter4 + ')'
      dataShow[0].pers5 = dataShow[0].pers5 + ' (' + historicoIntervenciones[0].pers5 + ')'
      dataShow[0].inter5 = dataShow[0].inter5 + ' (' + historicoIntervenciones[0].inter5 + ')'
      dataShow[0].pers6 = dataShow[0].pers6 + ' (' + historicoIntervenciones[0].pers6 + ')'
      dataShow[0].inter6 = dataShow[0].inter6 + ' (' + historicoIntervenciones[0].inter6 + ')'
      dataShow[0].pers7 = totalPersonas.toString() + ' (' + historicoIntervenciones[0].pers7 + ')'
      dataShow[0].inter7 = totalIntervenciones.toString() + ' (' + historicoIntervenciones[0].inter7 + ')'
      setDataIntervenciones(dataShow);
    })
  }

  const getItervencionesHistorico = async () => {
    await service.getIntervenciones('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow = [{ dato: 'Intervenciones', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0' }];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      for (let i = 0; i < elements.length; i++) {
        dataShow[0].dato = 'Intervenciones';
        if (elements[i].osi == 13) {
          dataShow[0].pers1 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter1 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 14) {
          dataShow[0].pers2 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter2 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 8) {
          dataShow[0].pers3 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter3 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 5) {
          dataShow[0].pers4 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter4 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 7) {
          dataShow[0].pers5 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter5 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 3) {
          dataShow[0].pers6 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter6 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }

      }
      dataShow[0].pers7 = totalPersonas.toString();
      dataShow[0].inter7 = totalIntervenciones.toString();
      sethistoricoIntervenciones(dataShow);
      setload1(true);
    })
  }

  const getSesionesData = async () => {
    await service.getSesiones('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow = [{ dato: 'Sesiones', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0' }];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      for (let i = 0; i < elements.length; i++) {
        dataShow[0].dato = 'Sesiones';
        if (elements[i].osi == 13) {
          dataShow[0].pers1 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter1 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 14) {
          dataShow[0].pers2 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter2 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 8) {
          dataShow[0].pers3 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter3 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 5) {
          dataShow[0].pers4 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter4 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 7) {
          dataShow[0].pers5 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter5 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 3) {
          dataShow[0].pers6 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter6 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }

      }
      dataShow[0].pers1 = dataShow[0].pers1 + ' (' + historicoSesiones[0].pers1 + ')'
      dataShow[0].inter1 = dataShow[0].inter1 + ' (' + historicoSesiones[0].inter1 + ')'
      dataShow[0].pers2 = dataShow[0].pers2 + ' (' + historicoSesiones[0].pers2 + ')'
      dataShow[0].inter2 = dataShow[0].inter2 + ' (' + historicoSesiones[0].inter2 + ')'
      dataShow[0].pers3 = dataShow[0].pers3 + ' (' + historicoSesiones[0].pers3 + ')'
      dataShow[0].inter3 = dataShow[0].inter3 + ' (' + historicoSesiones[0].inter3 + ')'
      dataShow[0].pers4 = dataShow[0].pers4 + ' (' + historicoSesiones[0].pers4 + ')'
      dataShow[0].inter4 = dataShow[0].inter4 + ' (' + historicoSesiones[0].inter4 + ')'
      dataShow[0].pers5 = dataShow[0].pers5 + ' (' + historicoSesiones[0].pers5 + ')'
      dataShow[0].inter5 = dataShow[0].inter5 + ' (' + historicoSesiones[0].inter5 + ')'
      dataShow[0].pers6 = dataShow[0].pers6 + ' (' + historicoSesiones[0].pers6 + ')'
      dataShow[0].inter6 = dataShow[0].inter6 + ' (' + historicoSesiones[0].inter6 + ')'
      dataShow[0].pers7 = totalPersonas.toString() + ' (' + historicoSesiones[0].pers7 + ')'
      dataShow[0].inter7 = totalIntervenciones.toString() + ' (' + historicoSesiones
      [0].inter7 + ')'
      setDataSesiones(dataShow);
    })
  }

  const getSesionesHistorico = async () => {
    await service.getSesiones('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow = [{ dato: 'Sesiones', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0' }];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      for (let i = 0; i < elements.length; i++) {
        dataShow[0].dato = 'Sesiones';
        if (elements[i].osi == 13) {
          dataShow[0].pers1 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter1 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 14) {
          dataShow[0].pers2 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter2 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 8) {
          dataShow[0].pers3 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter3 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 5) {
          dataShow[0].pers4 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter4 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 7) {
          dataShow[0].pers5 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter5 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }
        if (elements[i].osi == 3) {
          dataShow[0].pers6 = elements[i].totalPersona.toString() || '0';
          dataShow[0].inter6 = elements[i].totalIntervenciones.toString() || '0';
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
        }

      }
      dataShow[0].pers7 = totalPersonas.toString();
      dataShow[0].inter7 = totalIntervenciones.toString();
      sethistoricoSesiones(dataShow);
      setload2(true);
    })
  }

  const getSexoData = async () => {
    await service.getSexo('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoSexo.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoSexo[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoSexo[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoSexo[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoSexo[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoSexo[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoSexo[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoSexo[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoSexo[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoSexo[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoSexo[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoSexo[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoSexo[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoSexo[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoSexo
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoSexo[historicoSexo.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoSexo[historicoSexo.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoSexo[historicoSexo.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoSexo[historicoSexo.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoSexo[historicoSexo.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoSexo[historicoSexo.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoSexo[historicoSexo.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoSexo[historicoSexo.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoSexo[historicoSexo.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoSexo[historicoSexo.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoSexo[historicoSexo.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoSexo[historicoSexo.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoSexo[historicoSexo.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoSexo
          [historicoSexo.length - 1].inter7 + ')'
        }
      }

      setDataSexo(dataShow);
    })
  }

  const getSexoHistorico = async () => {
    await service.getSexo('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoSexo(dataShow);
      setload3(true);
    })
  }

  const getEdadData = async () => {
    await service.getEdad('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoEdad.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoEdad[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoEdad[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoEdad[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoEdad[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoEdad[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoEdad[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoEdad[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoEdad[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoEdad[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoEdad[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoEdad[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoEdad[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoEdad[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoEdad
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoEdad[historicoEdad.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoEdad[historicoEdad.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoEdad[historicoEdad.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoEdad[historicoEdad.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoEdad[historicoEdad.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoEdad[historicoEdad.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoEdad[historicoEdad.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoEdad[historicoEdad.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoEdad[historicoEdad.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoEdad[historicoEdad.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoEdad[historicoEdad.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoEdad[historicoEdad.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoEdad[historicoEdad.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoEdad
          [historicoEdad.length - 1].inter7 + ')'
        }
      }


      setDataEdad(dataShow);
    })
  }

  const getEdadHistorico = async () => {
    await service.getEdad('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoEdad(dataShow);
      setload4(true);
    })
  }

  const getOsiData = async () => {
    await service.getOsi('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoOsi.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoOsi[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoOsi[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoOsi[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoOsi[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoOsi[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoOsi[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoOsi[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoOsi[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoOsi[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoOsi[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoOsi[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoOsi[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoOsi[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoOsi
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoOsi[historicoOsi.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoOsi[historicoOsi.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoOsi[historicoOsi.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoOsi[historicoOsi.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoOsi[historicoOsi.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoOsi[historicoOsi.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoOsi[historicoOsi.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoOsi[historicoOsi.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoOsi[historicoOsi.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoOsi[historicoOsi.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoOsi[historicoOsi.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoOsi[historicoOsi.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoOsi[historicoOsi.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoOsi
          [historicoOsi.length - 1].inter7 + ')'
        }
      }


      setDataOsi(dataShow);
    })
  }

  const getOsiHistorico = async () => {
    await service.getOsi('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoOsi(dataShow);
      setload5(true);
    })
  }

  const getDemandaData = async () => {
    await service.getDemanda('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoDemanda.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoDemanda[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoDemanda[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoDemanda[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoDemanda[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoDemanda[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoDemanda[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoDemanda[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoDemanda[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoDemanda[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoDemanda[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoDemanda[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoDemanda[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoDemanda[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoDemanda
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoDemanda[historicoDemanda.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoDemanda[historicoDemanda.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoDemanda[historicoDemanda.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoDemanda[historicoDemanda.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoDemanda[historicoDemanda.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoDemanda[historicoDemanda.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoDemanda[historicoDemanda.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoDemanda[historicoDemanda.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoDemanda[historicoDemanda.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoDemanda[historicoDemanda.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoDemanda[historicoDemanda.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoDemanda[historicoDemanda.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoDemanda[historicoDemanda.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoDemanda
          [historicoDemanda.length - 1].inter7 + ')'
        }
      }


      setDataDemanda(dataShow);
    })
  }

  const getDemandaHistorico = async () => {
    await service.getDemanda('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoDemanda(dataShow);
      setload6(true);
    })
  }

  const getTipoIntervencionData = async () => {
    await service.getTipoIntervencion('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoTipoIntervencion.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoTipoIntervencion[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoTipoIntervencion[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoTipoIntervencion[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoTipoIntervencion[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoTipoIntervencion[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoTipoIntervencion[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoTipoIntervencion[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoTipoIntervencion[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoTipoIntervencion[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoTipoIntervencion[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoTipoIntervencion[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoTipoIntervencion[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoTipoIntervencion[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoTipoIntervencion
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoTipoIntervencion[historicoTipoIntervencion.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoTipoIntervencion
          [historicoTipoIntervencion.length - 1].inter7 + ')'
        }
      }


      setDataTipoIntervencion(dataShow);
    })
  }

  const getTipoIntervencionHistorico = async () => {
    await service.getTipoIntervencion('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoTipoIntervencion(dataShow);
      setload7(true);
    })
  }

  const getIntervencionData = async () => {
    await service.getClaseIntervencion('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoIntervencion.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoIntervencion[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoIntervencion[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoIntervencion[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoIntervencion[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoIntervencion[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoIntervencion[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoIntervencion[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoIntervencion[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoIntervencion[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoIntervencion[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoIntervencion[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoIntervencion[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoIntervencion[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoIntervencion
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoIntervencion[historicoIntervencion.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoIntervencion[historicoIntervencion.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoIntervencion
          [historicoIntervencion.length - 1].inter7 + ')'
        }
      }


      setDataIntervencion(dataShow);
    })
  }

  const getIntervencionHistorico = async () => {
    await service.getClaseIntervencion('true', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoIntervencion(dataShow);
      setload8(true);
    })
  }

  const getProfesionData = async () => {
    await service.getProfesion('false', value[0].toISOString().slice(0, 19).replace('T', ' '), value[1].toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoProfesion.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoProfesion[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoProfesion[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoProfesion[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoProfesion[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoProfesion[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoProfesion[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoProfesion[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoProfesion[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoProfesion[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoProfesion[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoProfesion[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoProfesion[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoProfesion[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoProfesion
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoProfesion[historicoProfesion.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoProfesion[historicoProfesion.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoProfesion[historicoProfesion.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoProfesion[historicoProfesion.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoProfesion[historicoProfesion.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoProfesion[historicoProfesion.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoProfesion[historicoProfesion.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoProfesion[historicoProfesion.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoProfesion[historicoProfesion.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoProfesion[historicoProfesion.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoProfesion[historicoProfesion.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoProfesion[historicoProfesion.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoProfesion[historicoProfesion.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoProfesion
          [historicoProfesion.length - 1].inter7 + ')'
        }
      }


      setDataProfesion(dataShow);
    })
  }

  const getProfesionHistorico = async () => {
    await service.getProfesion('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      // console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoProfesion(dataShow);
      setload9(true);
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
        dato: 'No ingresado', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
        dato: 'Ingresado', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
            dataObjHosp.pers1 = (parseInt(dataObjHosp.pers1) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter1 = (parseInt(dataObjHosp.inter1) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi1Hosp += elements[i].totalPersona; totalInterOsi1Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 14) {
            dataObjHosp.pers2 = (parseInt(dataObjHosp.pers2) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter2 = (parseInt(dataObjHosp.inter2) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi2Hosp += elements[i].totalPersona; totalInterOsi2Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 8) {
            dataObjHosp.pers3 = (parseInt(dataObjHosp.pers3) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter3 = (parseInt(dataObjHosp.inter3) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi3Hosp += elements[i].totalPersona; totalInterOsi3Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 5) {
            dataObjHosp.pers4 = (parseInt(dataObjHosp.pers4) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter4 = (parseInt(dataObjHosp.inter4) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi4Hosp += elements[i].totalPersona; totalInterOsi4Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 7) {
            dataObjHosp.pers5 = (parseInt(dataObjHosp.pers5) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter5 = (parseInt(dataObjHosp.inter5) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi5Hosp += elements[i].totalPersona; totalInterOsi5Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 3) {
            dataObjHosp.pers6 = (parseInt(dataObjHosp.pers6) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter6 = (parseInt(dataObjHosp.inter6) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi6Hosp += elements[i].totalPersona; totalInterOsi6Hosp += elements[i].totalIntervenciones;
          }

          dataObjHosp.pers7 = (parseInt(dataObjHosp.pers7) + totalPersonasHosp).toString();
          dataObjHosp.inter7 = (parseInt(dataObjHosp.inter7) + totalIntervencionesHosp).toString();
          totalPersTotalesHosp += parseInt(dataObjHosp.pers7); totalInterTotalesHosp += parseInt(dataObjHosp.inter7);
          totalPersonasHosp = 0; totalIntervencionesHosp = 0;
        } else {
          if (elements[i].osi == 13) {
            dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
            dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 14) {
            dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
            dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 8) {
            dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
            dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 5) {
            dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
            dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 7) {
            dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
            dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 3) {
            dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
            dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
          }

          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7); parseInt(dataObj.inter7);
          totalPersonas = 0; totalIntervenciones = 0;
        }


      }
      dataShow.push(dataObj);
      dataShow.push(dataObjHosp);

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: (totalPersOsi1 + totalPersOsi1Hosp).toString() || '0',
        inter1: (totalInterOsi1 + totalInterOsi1Hosp).toString() || '0',
        pers2: (totalPersOsi2 + totalPersOsi2Hosp).toString() || '0',
        inter2: (totalInterOsi2 + totalInterOsi2Hosp).toString() || '0',
        pers3: (totalPersOsi3 + totalPersOsi3Hosp).toString() || '0',
        inter3: (totalInterOsi3 + totalInterOsi3Hosp).toString() || '0',
        pers4: (totalPersOsi4 + totalPersOsi4Hosp).toString() || '0',
        inter4: (totalInterOsi4 + totalInterOsi4Hosp).toString() || '0',
        pers5: (totalPersOsi5 + totalPersOsi5Hosp).toString() || '0',
        inter5: (totalInterOsi5 + totalInterOsi5Hosp).toString() || '0',
        pers6: (totalPersOsi6 + totalPersOsi6Hosp).toString() || '0',
        inter6: (totalInterOsi6 + totalInterOsi6Hosp).toString() || '0',
        pers7: (totalPersOsi1 + totalPersOsi1Hosp + totalPersOsi2 + totalPersOsi2Hosp + totalPersOsi3 + totalPersOsi3Hosp + totalPersOsi4 + totalPersOsi4Hosp + totalPersOsi5 + totalPersOsi5Hosp + totalPersOsi6 + totalPersOsi6Hosp).toString() || '0',
        inter7: (totalInterOsi1 + totalInterOsi1Hosp + totalInterOsi2 + totalInterOsi2Hosp + totalInterOsi3 + totalInterOsi3Hosp + totalInterOsi4 + totalInterOsi4Hosp + totalInterOsi5 + totalInterOsi5Hosp + totalInterOsi6 + totalInterOsi6Hosp).toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoHospitalizacion.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoHospitalizacion[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoHospitalizacion[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoHospitalizacion[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoHospitalizacion[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoHospitalizacion[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoHospitalizacion[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoHospitalizacion[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoHospitalizacion[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoHospitalizacion[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoHospitalizacion[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoHospitalizacion[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoHospitalizacion[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoHospitalizacion[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoHospitalizacion
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoHospitalizacion[historicoHospitalizacion.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoHospitalizacion
          [historicoHospitalizacion.length - 1].inter7 + ')'
        }
      }

      setDataHospitalizacion(dataShow);
    })
  }

  const getHospitalizacionHistorico = async () => {
    await service.getAtendidoEn('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: 'No ingresado', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
        dato: 'Ingresado', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
            dataObjHosp.pers1 = (parseInt(dataObjHosp.pers1) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter1 = (parseInt(dataObjHosp.inter1) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi1Hosp += elements[i].totalPersona; totalInterOsi1Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 14) {
            dataObjHosp.pers2 = (parseInt(dataObjHosp.pers2) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter2 = (parseInt(dataObjHosp.inter2) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi2Hosp += elements[i].totalPersona; totalInterOsi2Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 8) {
            dataObjHosp.pers3 = (parseInt(dataObjHosp.pers3) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter3 = (parseInt(dataObjHosp.inter3) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi3Hosp += elements[i].totalPersona; totalInterOsi3Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 5) {
            dataObjHosp.pers4 = (parseInt(dataObjHosp.pers4) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter4 = (parseInt(dataObjHosp.inter4) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi4Hosp += elements[i].totalPersona; totalInterOsi4Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 7) {
            dataObjHosp.pers5 = (parseInt(dataObjHosp.pers5) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter5 = (parseInt(dataObjHosp.inter5) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi5Hosp += elements[i].totalPersona; totalInterOsi5Hosp += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 3) {
            dataObjHosp.pers6 = (parseInt(dataObjHosp.pers6) + elements[i].totalPersona || 0).toString();
            dataObjHosp.inter6 = (parseInt(dataObjHosp.inter6) + elements[i].totalIntervenciones || 0).toString();
            totalPersonasHosp += elements[i].totalPersona || 0;
            totalIntervencionesHosp += elements[i].totalIntervenciones || 0;
            totalPersOsi6Hosp += elements[i].totalPersona; totalInterOsi6Hosp += elements[i].totalIntervenciones;
          }

          dataObjHosp.pers7 = (parseInt(dataObjHosp.pers7) + totalPersonasHosp).toString();
          dataObjHosp.inter7 = (parseInt(dataObjHosp.inter7) + totalIntervencionesHosp).toString();
          totalPersTotalesHosp += parseInt(dataObjHosp.pers7); totalInterTotalesHosp += parseInt(dataObjHosp.inter7);
          totalPersonasHosp = 0; totalIntervencionesHosp = 0;
        } else {
          if (elements[i].osi == 13) {
            dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
            dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 14) {
            dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
            dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 8) {
            dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
            dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 5) {
            dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
            dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 7) {
            dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
            dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
          }
          if (elements[i].osi == 3) {
            dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
            dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
            totalPersonas += elements[i].totalPersona || 0;
            totalIntervenciones += elements[i].totalIntervenciones || 0;
            totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
          }

          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7); parseInt(dataObj.inter7);
          totalPersonas = 0; totalIntervenciones = 0;
        }


      }
      dataShow.push(dataObj);
      dataShow.push(dataObjHosp);

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: (totalPersOsi1 + totalPersOsi1Hosp).toString() || '0',
        inter1: (totalInterOsi1 + totalInterOsi1Hosp).toString() || '0',
        pers2: (totalPersOsi2 + totalPersOsi2Hosp).toString() || '0',
        inter2: (totalInterOsi2 + totalInterOsi2Hosp).toString() || '0',
        pers3: (totalPersOsi3 + totalPersOsi3Hosp).toString() || '0',
        inter3: (totalInterOsi3 + totalInterOsi3Hosp).toString() || '0',
        pers4: (totalPersOsi4 + totalPersOsi4Hosp).toString() || '0',
        inter4: (totalInterOsi4 + totalInterOsi4Hosp).toString() || '0',
        pers5: (totalPersOsi5 + totalPersOsi5Hosp).toString() || '0',
        inter5: (totalInterOsi5 + totalInterOsi5Hosp).toString() || '0',
        pers6: (totalPersOsi6 + totalPersOsi6Hosp).toString() || '0',
        inter6: (totalInterOsi6 + totalInterOsi6Hosp).toString() || '0',
        pers7: (totalPersOsi1 + totalPersOsi1Hosp + totalPersOsi2 + totalPersOsi2Hosp + totalPersOsi3 + totalPersOsi3Hosp + totalPersOsi4 + totalPersOsi4Hosp + totalPersOsi5 + totalPersOsi5Hosp + totalPersOsi6 + totalPersOsi6Hosp).toString() || '0',
        inter7: (totalInterOsi1 + totalInterOsi1Hosp + totalInterOsi2 + totalInterOsi2Hosp + totalInterOsi3 + totalInterOsi3Hosp + totalInterOsi4 + totalInterOsi4Hosp + totalInterOsi5 + totalInterOsi5Hosp + totalInterOsi6 + totalInterOsi6Hosp).toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoHospitalizacion(dataShow);
      setload10(true);
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
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoRelacionCOVID.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoRelacionCOVID[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoRelacionCOVID[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoRelacionCOVID[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoRelacionCOVID[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoRelacionCOVID[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoRelacionCOVID[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoRelacionCOVID[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoRelacionCOVID[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoRelacionCOVID[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoRelacionCOVID[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoRelacionCOVID[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoRelacionCOVID[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoRelacionCOVID[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoRelacionCOVID
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoRelacionCOVID[historicoRelacionCOVID.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoRelacionCOVID
          [historicoRelacionCOVID.length - 1].inter7 + ')'
        }
      }

      setDataRelacionCOVID(dataShow);
    })
  }

  const getrelacionCOVIDHistorico = async () => {
    await service.getRelacionCOVID('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ',
              pers1: '0',
              inter1: '0',
              pers2: '0',
              inter2: '0',
              pers3: '0',
              inter3: '0',
              pers4: '0',
              inter4: '0',
              pers5: '0',
              inter5: '0',
              pers6: '0',
              inter6: '0',
              pers7: '0',
              inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoRelacionCOVID(dataShow);
      setload11(true);
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
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      for (let i = 0; i < dataShow.length; i++) {
        if (dataShow.length > 1) {
          if (i + 1 <= dataShow.length) {

            const index = historicoAtendidoEn.findIndex(arr => {
              return arr.dato === dataShow[i].dato;
            });
            if (index != -1) {
              dataShow[i].pers1 = dataShow[i].pers1 + ' (' + historicoAtendidoEn[index].pers1 + ')'
              dataShow[i].inter1 = dataShow[i].inter1 + ' (' + historicoAtendidoEn[index].inter1 + ')'
              dataShow[i].pers2 = dataShow[i].pers2 + ' (' + historicoAtendidoEn[index].pers2 + ')'
              dataShow[i].inter2 = dataShow[i].inter2 + ' (' + historicoAtendidoEn[index].inter2 + ')'
              dataShow[i].pers3 = dataShow[i].pers3 + ' (' + historicoAtendidoEn[index].pers3 + ')'
              dataShow[i].inter3 = dataShow[i].inter3 + ' (' + historicoAtendidoEn[index].inter3 + ')'
              dataShow[i].pers4 = dataShow[i].pers4 + ' (' + historicoAtendidoEn[index].pers4 + ')'
              dataShow[i].inter4 = dataShow[i].inter4 + ' (' + historicoAtendidoEn[index].inter4 + ')'
              dataShow[i].pers5 = dataShow[i].pers5 + ' (' + historicoAtendidoEn[index].pers5 + ')'
              dataShow[i].inter5 = dataShow[i].inter5 + ' (' + historicoAtendidoEn[index].inter5 + ')'
              dataShow[i].pers6 = dataShow[i].pers6 + ' (' + historicoAtendidoEn[index].pers6 + ')'
              dataShow[i].inter6 = dataShow[i].inter6 + ' (' + historicoAtendidoEn[index].inter6 + ')'
              dataShow[i].pers7 = dataShow[i].pers7 + ' (' + historicoAtendidoEn[index].pers7 + ')'
              dataShow[i].inter7 = dataShow[i].inter7 + ' (' + historicoAtendidoEn
              [index].inter7 + ')'
            }
          }
        } else {
          dataShow[dataShow.length - 1].pers1 = dataShow[dataShow.length - 1].pers1 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].pers1 + ')'
          dataShow[dataShow.length - 1].inter1 = dataShow[dataShow.length - 1].inter1 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].inter1 + ')'
          dataShow[dataShow.length - 1].pers2 = dataShow[dataShow.length - 1].pers2 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].pers2 + ')'
          dataShow[dataShow.length - 1].inter2 = dataShow[dataShow.length - 1].inter2 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].inter2 + ')'
          dataShow[dataShow.length - 1].pers3 = dataShow[dataShow.length - 1].pers3 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].pers3 + ')'
          dataShow[dataShow.length - 1].inter3 = dataShow[dataShow.length - 1].inter3 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].inter3 + ')'
          dataShow[dataShow.length - 1].pers4 = dataShow[dataShow.length - 1].pers4 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].pers4 + ')'
          dataShow[dataShow.length - 1].inter4 = dataShow[dataShow.length - 1].inter4 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].inter4 + ')'
          dataShow[dataShow.length - 1].pers5 = dataShow[dataShow.length - 1].pers5 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].pers5 + ')'
          dataShow[dataShow.length - 1].inter5 = dataShow[dataShow.length - 1].inter5 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].inter5 + ')'
          dataShow[dataShow.length - 1].pers6 = dataShow[dataShow.length - 1].pers6 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].pers6 + ')'
          dataShow[dataShow.length - 1].inter6 = dataShow[dataShow.length - 1].inter6 + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].inter6 + ')'
          dataShow[dataShow.length - 1].pers7 = totalPersonas.toString() + ' (' + historicoAtendidoEn[historicoAtendidoEn.length - 1].pers7 + ')'
          dataShow[dataShow.length - 1].inter7 = totalIntervenciones.toString() + ' (' + historicoAtendidoEn
          [historicoAtendidoEn.length - 1].inter7 + ')'
        }
      }

      setDataAtendidoEn(dataShow);
    })
  }

  const getAtendidoEnHistorico = async () => {
    await service.getAtendidoEn('false', fechaDefecto.toISOString().slice(0, 19).replace('T', ' '), fechaFin.toISOString().slice(0, 19).replace('T', ' ')).then((elements: AE_EstadisticasComunesEntity[]) => {
      console.log(elements);
      let dataShow: IData[] = [];
      let totalPersonas = 0;
      let totalIntervenciones = 0;
      let dato = ' ';
      let dataObj: IData = {
        dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
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
          dataObj.pers1 = (parseInt(dataObj.pers1) + elements[i].totalPersona || 0).toString();
          dataObj.inter1 = (parseInt(dataObj.inter1) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi1 += elements[i].totalPersona; totalInterOsi1 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 14) {
          dataObj.pers2 = (parseInt(dataObj.pers2) + elements[i].totalPersona || 0).toString();
          dataObj.inter2 = (parseInt(dataObj.inter2) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi2 += elements[i].totalPersona; totalInterOsi2 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 8) {
          dataObj.pers3 = (parseInt(dataObj.pers3) + elements[i].totalPersona || 0).toString();
          dataObj.inter3 = (parseInt(dataObj.inter3) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi3 += elements[i].totalPersona; totalInterOsi3 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 5) {
          dataObj.pers4 = (parseInt(dataObj.pers4) + elements[i].totalPersona || 0).toString();
          dataObj.inter4 = (parseInt(dataObj.inter4) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi4 += elements[i].totalPersona; totalInterOsi4 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 7) {
          dataObj.pers5 = (parseInt(dataObj.pers5) + elements[i].totalPersona || 0).toString();
          dataObj.inter5 = (parseInt(dataObj.inter5) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi5 += elements[i].totalPersona; totalInterOsi5 += elements[i].totalIntervenciones;
        }
        if (elements[i].osi == 3) {
          dataObj.pers6 = (parseInt(dataObj.pers6) + elements[i].totalPersona || 0).toString();
          dataObj.inter6 = (parseInt(dataObj.inter6) + elements[i].totalIntervenciones || 0).toString();
          totalPersonas += elements[i].totalPersona || 0;
          totalIntervenciones += elements[i].totalIntervenciones || 0;
          totalPersOsi6 += elements[i].totalPersona; totalInterOsi6 += elements[i].totalIntervenciones;
        }

        if (i + 1 < elements.length) {
          if (elements[i + 1].dato != dataObj.dato) {
            dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
            dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
            totalPersTotales += parseInt(dataObj.pers7);
            totalInterTotales += parseInt(dataObj.inter7);
            dataShow.push(dataObj);

            dataObj = {
              dato: ' ', pers1: '0', inter1: '0', pers2: '0', inter2: '0', pers3: '0', inter3: '0', pers4: '0', inter4: '0', pers5: '0', inter5: '0', pers6: '0', inter6: '0', pers7: '0', inter7: '0'
            };
            totalPersonas = 0; totalIntervenciones = 0;
          }
        } else {
          dataObj.pers7 = (parseInt(dataObj.pers7) + totalPersonas).toString();
          dataObj.inter7 = (parseInt(dataObj.inter7) + totalIntervenciones).toString();
          totalPersTotales += parseInt(dataObj.pers7);
          totalInterTotales += parseInt(dataObj.inter7);
          dataShow.push(dataObj);
          totalPersonas = 0; totalIntervenciones = 0;
        }
      }

      let dataCalc: IData = {
        dato: 'Totales',
        pers1: totalPersOsi1.toString() || '0',
        inter1: totalInterOsi1.toString() || '0',
        pers2: totalPersOsi2.toString() || '0',
        inter2: totalInterOsi2.toString() || '0',
        pers3: totalPersOsi3.toString() || '0',
        inter3: totalInterOsi3.toString() || '0',
        pers4: totalPersOsi4.toString() || '0',
        inter4: totalInterOsi4.toString() || '0',
        pers5: totalPersOsi5.toString() || '0',
        inter5: totalInterOsi5.toString() || '0',
        pers6: totalPersOsi6.toString() || '0',
        inter6: totalInterOsi6.toString() || '0',
        pers7: totalPersTotales.toString() || '0',
        inter7: totalInterTotales.toString() || '0'
      };
      dataShow.push(dataCalc);

      sethistoricoAtendidoEn(dataShow);
      setload12(true);
    })
  }


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
}

export default ApoyoEmocionalEstadisticasPacientes;
