import { IColumn } from "office-ui-fabric-react"
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: '16px',
  },
  fileIconCell: {
    textAlign: 'center',
    selectors: {
      '&:before': {
        content: '.',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0px',
        visibility: 'hidden',
      },
    },
  },
  fileIconImg: {
    verticalAlign: 'middle',
    maxHeight: '16px',
    maxWidth: '16px',
  },
  fileImg: {
    verticalAlign: 'middle',
    maxHeight: '32px',
    maxWidth: '32px',
  },
  controlWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  exampleToggle: {
    display: 'inline-block',
    marginBottom: '10px',
    marginRight: '30px',
  },
  selectionDetails: {
    marginBottom: '20px',
  },
});

// COLUMNAS
const intervencion: IColumn = {
  key: 'intervencion',
  name: 'Intervencion',
  fieldName: 'intervencion',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}

const tipoIntevencion: IColumn = {
  key: 'tipoIntervencion',
  name: 'Tipo Intervencion',
  fieldName: 'tipoIntervencion',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}

const motivo: IColumn = {
  key: 'motivo',
  name: 'Motivo',
  fieldName: 'motivo',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}

const profesionAutor: IColumn = {
  key: 'profesionAutor',
  name: 'Profesion Autor',
  fieldName: 'profesionAutor',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}

const fecha: IColumn = {
  key: 'fecha',
  name: 'Fecha',
  fieldName: 'fecha',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}

const observaciones: IColumn = {
  key: 'observaciones',
  name: 'Observaciones',
  fieldName: 'observaciones',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}

const osis: IColumn = {
  key: 'osi',
  name: 'Osi',
  fieldName: 'osi',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}

const titulo: IColumn = {
  key: 'nombre',
  name: 'Nombre',
  fieldName: 'nombre',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}

const tipoSesion: IColumn = {
  key: 'tipoSesion',
  name: 'Tipo Sesion',
  fieldName: 'tipoSesion',
  minWidth: 60,
  maxWidth: 120,
  isRowHeader: true,
  isResizable: true,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
}




export const listadoIntervencionesColumns: IColumn[] = [intervencion, tipoIntevencion, motivo, profesionAutor, fecha, observaciones, osis]

export const listadoSesionesColumns: IColumn[] = [titulo, tipoSesion, fecha, osis]
