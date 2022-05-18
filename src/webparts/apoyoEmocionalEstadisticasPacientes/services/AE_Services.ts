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
        else {
            this.urlPeticion = LOCAL;
        }
    }

    getSesiones(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasSesionessProfesionales/${tipoPersona}`)
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

    getIntervenciones(tipoPersona: string, fechaInicio: Date, fechaFin: Date): Promise<AE_EstadisticasComunesEntity[]>{
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

    getSexo(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasSexosProfesionales/${tipoPersona}`)
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

    getEdad(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasEdadProfesionales/${tipoPersona}`)
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

    getCategoriaProfesional(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasCategoriaProfesionalProfesionales/${tipoPersona}`)
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

    getOsi(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasOsiProfesionales/${tipoPersona}`)
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

    getDemanda(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasDemandaProfesionales/${tipoPersona}`)
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

    getTipoIntervencion(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasTipoIntervencionProfesionales/${tipoPersona}`)
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

    getClaseIntervencion(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasClaseIntervencionProfesionales/${tipoPersona}`)
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

    getProfesion(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetEstadisticasProfesionProfesionales/${tipoPersona}`)
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
    getHospitalizaciones(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetHospitalizacionPacientes/${tipoPersona}`)
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

    getRelacionCOVID(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetRelacionCOVIDPacientes/${tipoPersona}`)
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

    getAtendidoEn(tipoPersona: string): Promise<AE_EstadisticasComunesEntity[]>{
      return fetch(`${this.urlPeticion}ApoyoEmocional/GetAtendidoEnPacientes/${tipoPersona}`)
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