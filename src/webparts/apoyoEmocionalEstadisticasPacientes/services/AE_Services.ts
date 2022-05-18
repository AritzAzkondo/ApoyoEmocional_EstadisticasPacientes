import { DEV_URL, LOCAL, PRE_URL } from "../common/consts";
import { AE_EstadisticasComunesEntity } from "../entities/AE_EstadisticasComunesEntity";

export class AE_Services {
  urlPeticion =  "";

    constructor() {
        const dominio = document.domain.toLocaleLowerCase();
        if (dominio === 'lksscoop.sharepoint.com') {
            this.urlPeticion = DEV_URL;
        } else if(dominio === 'pre2osakidetza.sharepoint.com') {
            this.urlPeticion = PRE_URL;
        } 
        // else {
        //     this.urlPeticion = LOCAL;
        // }
    }

    getSesiones(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasSesionessProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getIntervenciones(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasIntervencionesProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getSexo(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasSexosProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getEdad(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasEdadProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getCategoriaProfesional(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasCategoriaProfesionalProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getOsi(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasOsiProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getDemanda(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasDemandaProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getTipoIntervencion(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasTipoIntervencionProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getClaseIntervencion(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasClaseIntervencionProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getProfesion(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasProfesionProfesionales/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    //Especificas
    getHospitalizaciones(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetHospitalizacionPacientes/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getRelacionCOVID(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetRelacionCOVIDPacientes/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    getAtendidoEn(tipoPersona: string, fechaInicio: string, fechaFin: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetAtendidoEnPacientes/${tipoPersona}/${fechaInicio}/${fechaFin}`)
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              return result;
          },
          (error) => {
              console.log(error);
          }
      );
    }

    
}