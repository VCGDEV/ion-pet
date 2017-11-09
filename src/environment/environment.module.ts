
import {NgModule} from "@angular/core";
import {PROD} from "./prod";
import {DEV} from "./dev";
import {EnvironmentVariables} from "./environment.token";

declare const process:any;

/**
 * Dependiendo de la compilacion usaremos PROD o DEV,
 * este factory es el que hace la magia para nosotros
 * */
export function environmentFactory() {
  console.debug(JSON.stringify(process.env));
  return process.env.IONIC_ENV === 'prod' ? PROD : DEV;
}

@NgModule({
  providers: [
    {
      provide: EnvironmentVariables,//token para la inyeccion de nuestras variables
      useFactory: environmentFactory
    }
  ]
})
export class EnviromentVariablesModule{}
